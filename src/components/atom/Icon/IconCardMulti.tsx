interface CardIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function IconCardMulti({
  width = 22,
  height = 18,
  className,
}: CardIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M15.6452 17.6094H2.67984C1.9859 17.6087 1.32059 17.3327 0.829902 16.842C0.339211 16.3513 0.0632238 15.686 0.0625 14.992V7.25431C0.0632238 6.56037 0.339211 5.89506 0.829902 5.40437C1.32059 4.91367 1.9859 4.63769 2.67984 4.63696H15.6452C16.3391 4.63769 17.0044 4.91367 17.4951 5.40437C17.9858 5.89506 18.2618 6.56037 18.2625 7.25431V14.992C18.2618 15.686 17.9858 16.3513 17.4951 16.842C17.0044 17.3327 16.3391 17.6087 15.6452 17.6094ZM2.67984 6.27759C2.42089 6.27788 2.17263 6.38087 1.98952 6.56398C1.80641 6.74709 1.70341 6.99535 1.70312 7.25431V14.992C1.70341 15.251 1.80641 15.4993 1.98952 15.6824C2.17263 15.8655 2.42089 15.9685 2.67984 15.9688H15.6452C15.9041 15.9685 16.1524 15.8655 16.3355 15.6824C16.5186 15.4993 16.6216 15.251 16.6219 14.992V7.25431C16.6216 6.99535 16.5186 6.74709 16.3355 6.56398C16.1524 6.38087 15.9041 6.27788 15.6452 6.27759H2.67984Z'
        fill='currentColor'
      />
      <path
        d='M19.3212 13.1917H17.4422C17.2246 13.1917 17.016 13.1053 16.8621 12.9515C16.7083 12.7976 16.6219 12.589 16.6219 12.3714C16.6219 12.1538 16.7083 11.9452 16.8621 11.7914C17.016 11.6375 17.2246 11.5511 17.4422 11.5511H19.3212C19.58 11.5505 19.828 11.4474 20.0109 11.2643C20.1937 11.0812 20.2966 10.8331 20.2969 10.5744V2.83664C20.2967 2.57778 20.1939 2.32954 20.0111 2.14635C19.8282 1.96315 19.5801 1.85995 19.3212 1.85938H6.35593C6.09698 1.85966 5.84871 1.96266 5.66561 2.14577C5.4825 2.32888 5.3795 2.57714 5.37921 2.83609V5.45672C5.37921 5.67428 5.29279 5.88293 5.13895 6.03677C4.98511 6.19061 4.77646 6.27703 4.5589 6.27703C4.34134 6.27703 4.13269 6.19061 3.97885 6.03677C3.82501 5.88293 3.73859 5.67428 3.73859 5.45672V2.83664C3.73917 2.1426 4.01509 1.47715 4.5058 0.986345C4.9965 0.495537 5.6619 0.219474 6.35593 0.21875H19.3212C20.0151 0.219764 20.6802 0.495954 21.1707 0.986732C21.6611 1.47751 21.9369 2.14279 21.9375 2.83664V10.5744C21.9368 11.2681 21.6609 11.9333 21.1705 12.4239C20.68 12.9146 20.015 13.1907 19.3212 13.1917Z'
        fill='currentColor'
      />
      <path
        d='M17.4422 11.7463H0.882812C0.665252 11.7463 0.456602 11.6599 0.302764 11.506C0.148926 11.3522 0.0625 11.1436 0.0625 10.926V8.17084C0.0625 7.95328 0.148926 7.74463 0.302764 7.59079C0.456602 7.43695 0.665252 7.35052 0.882812 7.35052H17.4422C17.6597 7.35052 17.8684 7.43695 18.0222 7.59079C18.1761 7.74463 18.2625 7.95328 18.2625 8.17084V10.926C18.2625 11.1436 18.1761 11.3522 18.0222 11.506C17.8684 11.6599 17.6597 11.7463 17.4422 11.7463ZM1.70312 10.1057H16.6219V8.99115H1.70312V10.1057Z'
        fill='currentColor'
      />
    </svg>
  );
}
