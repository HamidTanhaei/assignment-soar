interface IconArrowRightProps {
  width?: number;
  height?: number;
  className?: string;
}

export const IconArrowRight = ({
  width = 9,
  height = 15,
  className,
}: IconArrowRightProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 9 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M1 1L7.5 7.5L1 14' stroke='currentColor' strokeWidth='2' />
    </svg>
  );
};
