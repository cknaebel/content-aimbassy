interface DiagonalDividerProps {
  direction?: 'left' | 'right';
  className?: string;
}

export function DiagonalDivider({ direction = 'left', className = '' }: DiagonalDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === 'left' ? (
          <path
            d="M0,0 L1200,100 L1200,0 Z"
            fill="currentColor"
          />
        ) : (
          <path
            d="M0,100 L1200,0 L0,0 Z"
            fill="currentColor"
          />
        )}
      </svg>
    </div>
  );
}
