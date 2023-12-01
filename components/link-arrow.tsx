export const LinkArrow = ({
  className,
  shadowColor,
}: {
  className?: string;
  shadowColor?: string;
}) => {
  return (
    <svg
      width="47"
      height="42"
      viewBox="0 0 47 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="21" cy="21" r="21" fill={shadowColor ?? "#FFCC33"} />
      <circle cx="26" cy="21" r="21" fill="black" />
      <rect
        x="21.8621"
        y="6"
        width="19.994"
        height="8.29021"
        transform="rotate(45 21.8621 6)"
        fill="white"
      />
      <rect
        x="36"
        y="20.138"
        width="19.994"
        height="8.29021"
        transform="rotate(135 36 20.138)"
        fill="white"
      />
    </svg>
  );
};
