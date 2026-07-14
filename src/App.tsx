import { useEffect, useRef } from 'react';
import { slides } from '@/slideLoader';
import { useLocation } from 'wouter';
import SlideShow from '@/components/SlideShow';

// Clean path helper that handles both local development and GitHub Pages perfectly
const getAssetPath = (filename: string) => {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/' || base === './') {
    return filename; // Local relative path
  }
  const cleanBase = base.replace(/\/+$/, '');
  return `${cleanBase}/${filename}`;
};

// Global Audio instance. Reusing a single player is the #1 way to prevent browsers from blocking the sound.
let fartAudio: HTMLAudioElement | null = null;

const playFart = () => {
  try {
    if (!fartAudio) {
      fartAudio = new Audio(getAssetPath('fart.mp3'));
    }
    fartAudio.currentTime = 0; // Rewind to start so it plays instantly on rapid clicks
    fartAudio.volume = 0.7;
    fartAudio.play().catch((err) => {
      console.warn("Fart playback failed. Ensure 'fart.mp3' is in your public/ folder!", err);
    });
  } catch (e) {
    console.warn("Could not initialize audio object:", e);
  }
};

function getSlideIndex(pathname: string): number {
  const match = pathname.match(/^\/slide(\d+)$/);
  if (!match) return -1;
  const position = parseInt(match[1], 10);
  return slides.findIndex((s) => s.position === position);
}

function SlideEditor() {
  const [location, navigate] = useLocation();
  const currentIndex = getSlideIndex(location);

  const navigationDisabledRef = useRef(window.parent !== window.parent.parent);
  const touchHandledRefStable = useRef(false);

  useEffect(() => {
    if (currentIndex === -1) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (navigationDisabledRef.current) return;
      if (event.key === ' ') event.preventDefault();
      if (
        (event.key === 'ArrowLeft' || event.key === 'ArrowUp') &&
        currentIndex > 0
      ) {
        playFart(); // 💨 Play instantly
        navigate(`/slide${slides[currentIndex - 1].position}`);
      }
      if (
        (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') &&
        currentIndex < slides.length - 1
      ) {
        playFart(); // 💨 Play instantly
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    const INTERACTIVE =
      'a,button,video,audio,input,select,textarea,details,summary,iframe,svg,canvas,' +
      '[role="button"],[contenteditable="true"]';
    const isInteractive = (target: EventTarget | null) =>
      (target as HTMLElement | null)?.closest?.(INTERACTIVE);
    const touchHandledRef = touchHandledRefStable;

    const onClick = (event: MouseEvent) => {
      if (touchHandledRef.current) { touchHandledRef.current = false; return; }
      if (event.button !== 0 || event.metaKey || event.ctrlKey) return;
      if (isInteractive(event.target)) return;
      if (navigationDisabledRef.current) {
        window.parent.postMessage({ type: 'advanceSlide' }, '*');
        return;
      }
      if (currentIndex < slides.length - 1) {
        playFart(); // 💨 Play instantly
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    let touchStartX = 0, touchStartY = 0, touchTarget: EventTarget | null = null;
    const onTouchStart = (e: TouchEvent) => {
      touchHandledRef.current = false;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchTarget = e.target;
    };
    
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      // If they dragged their finger (swiped), completely ignore it
      if (Math.abs(dx) >= 10 || Math.abs(dy) >= 10) return;
      if (isInteractive(touchTarget)) return;
      touchHandledRef.current = true;
      if (navigationDisabledRef.current) {
        window.parent.postMessage({ type: 'advanceSlide' }, '*');
        return;
      }
      
      // Simple tap coordinates (Left 40% goes back, Right 60% goes next)
      const fraction = touchStartX / window.innerWidth;
      if (fraction < 0.4 && currentIndex > 0) {
        playFart(); // 💨 Play instantly on tap left
        navigate(`/slide${slides[currentIndex - 1].position}`);
      } else if (fraction >= 0.4 && currentIndex < slides.length - 1) {
        playFart(); // 💨 Play instantly on tap right
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('click', onClick);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentIndex, navigate]);

  if (currentIndex === -1) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Slide Not Found</h2>
        <p className="text-zinc-400 mb-4">Current location: "{location}"</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition"
        >
          Go back to Home Slide
        </button>
      </div>
    );
  }

  return (
    <div className="select-none">
      {slides.map((slide, index) => (
        <div key={slide.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <slide.Component />
        </div>
      ))}
    </div>
  );
}

function AllSlides() {
  return (
    <div className="bg-black">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="slide relative aspect-video overflow-hidden"
          style={{ width: '1920px', height: '1080px' }}
        >
          <div className="h-full w-full [&_.h-screen]:!h-full [&_.w-screen]:!w-full">
            <slide.Component />
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideViewer() {
  return <SlideShow />;
}

export default function App() {
  const [location, navigate] = useLocation();

  useEffect(() => {
    console.log("App Location Checked:", location);
    console.log("Total Loaded Slides:", slides.length);

    if (
      location !== '/' &&
      location !== '/allslides' &&
      getSlideIndex(location) === -1
    ) {
      if (slides.length > 0) {
        navigate(`/slide${slides[0].position}`, { replace: true });
      }
    }
  }, [location, navigate]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.data?.type === 'navigateToSlide' &&
        typeof event.data.position === 'number' &&
        slides.some((s) => s.position === event.data.position)
      ) {
        playFart(); // 💨 Play sound when receiving iframe control messages!
        navigate(`/slide${event.data.position}`);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [navigate]);

  if (slides.length === 0) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center">
        <h2 className="text-xl font-semibold mb-2 text-amber-500 animate-pulse">Loading Slides...</h2>
        <p className="text-zinc-500 text-sm">Please wait while the presentation boots up.</p>
      </div>
    );
  }

  if (location === '/') return <SlideViewer />;
  if (location === '/allslides') return <AllSlides />;
  return <SlideEditor />;
      }
         
