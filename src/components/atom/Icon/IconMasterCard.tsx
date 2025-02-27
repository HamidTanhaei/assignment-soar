interface IconMasterCardProps {
  size?: number;
  className?: string;
}

export function IconMasterCard({ size = 44, className }: IconMasterCardProps) {
  const height = (size / 44) * 30; // maintain aspect ratio

  return (
    <svg
      width={size}
      height={height}
      viewBox='0 0 44 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='15' cy='15' r='15' fill='currentColor' fillOpacity='0.5' />
      <circle cx='29' cy='15' r='15' fill='currentColor' fillOpacity='0.5' />
    </svg>
  );
}
