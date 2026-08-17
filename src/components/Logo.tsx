type Props = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 36, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <rect x="0" y="0" width="48" height="48" rx="16" fill="#ecfeff" />
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#0d9488" />
      <g transform="rotate(45 24 24)">
        <rect x="6" y="13" width="36" height="6" rx="3" fill="#181d27" />
        <rect x="6" y="21" width="36" height="6" rx="3" fill="#181d27" />
        <rect x="6" y="29" width="36" height="6" rx="3" fill="#181d27" />
      </g>
    </svg>
  );
}

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-bold tracking-tight text-ink-900 dark:text-white">
          QuickFlow™
        </span>
        <span className="text-[9px] font-semibold tracking-[0.14em] text-ink-500 dark:text-ink-400 uppercase mt-0.5">
          Consulting Operations OS
        </span>
      </div>
    </div>
  );
}
