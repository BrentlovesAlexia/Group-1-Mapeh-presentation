interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick: (i: number) => void;
}

export default function ProgressDots({ total, current, onDotClick }: ProgressDotsProps) {
  return (
    <>
      <div className="ss-dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`ss-dot ${i === current ? 'ss-dot-active' : ''}`}
            onClick={() => onDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="ss-progress">
        <div
          className="ss-progress-fill"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </>
  );
}
