import { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from '@/slideLoader';
import NavZone from './NavZone';
import FullscreenBtn from './FullscreenBtn';
import ProgressDots from './ProgressDots';

type AnimClass =
  | 'ss-active'
  | 'ss-enter-next'
  | 'ss-enter-prev'
  | 'ss-exit-next'
  | 'ss-exit-prev'
  | 'ss-gone';

const ANIM_DURATION = 700; // ms — must exceed longest CSS animation

export default function SlideShow() {
  const n = slides.length;
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [classes, setClasses] = useState<AnimClass[]>(
    slides.map((_, i) => (i === 0 ? 'ss-active' : 'ss-gone')),
  );
  const busy = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (next: number, dir: 'next' | 'prev') => {
      if (busy.current || next < 0 || next >= n || next === current) return;
      busy.current = true;

      const prev = current;
      setCurrent(next);
      setExiting(prev);

      setClasses((c) => {
        const s = [...c];
        s[prev] = dir === 'next' ? 'ss-exit-next' : 'ss-exit-prev';
        s[next] = dir === 'next' ? 'ss-enter-next' : 'ss-enter-prev';
        return s;
      });

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setClasses((c) => {
          const s = [...c];
          if (s[prev] === 'ss-exit-next' || s[prev] === 'ss-exit-prev') {
            s[prev] = 'ss-gone';
          }
          if (s[next] === 'ss-enter-next' || s[next] === 'ss-enter-prev') {
            s[next] = 'ss-active';
          }
          return s;
        });
        setExiting(null);
        busy.current = false;
      }, ANIM_DURATION);
    },
    [current, n],
  );

  const goNext = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  /* Keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  /* Touch / swipe */
  const touchX = useRef<number | null>(null);
  useEffect(() => {
    const onStart = (e: TouchEvent) => { touchX.current = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 48) dx < 0 ? goNext() : goPrev();
      touchX.current = null;
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [goNext, goPrev]);

  return (
    <div className="ss-stage">
      {/* SVG sketch filter — shared across all slides */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <filter id="sk" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03 0.035"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Slide stack */}
      {slides.map((slide, i) => {
        const cls = classes[i];
        if (cls === 'ss-gone' && i !== exiting) return null;
        return (
          <div key={slide.id} className={`ss-slide ${cls}`}>
            <slide.Component />
          </div>
        );
      })}

      {/* Navigation zones */}
      <NavZone dir="prev" onClick={goPrev} disabled={current === 0} />
      <NavZone dir="next" onClick={goNext} disabled={current === n - 1} />

      {/* Top-right UI */}
      <div className="ss-ui">
        <span className="ss-counter">{current + 1} / {n}</span>
        <FullscreenBtn />
      </div>

      {/* Dots + progress bar */}
      <ProgressDots
        total={n}
        current={current}
        onDotClick={(i) => goTo(i, i > current ? 'next' : 'prev')}
      />
    </div>
  );
                          }
