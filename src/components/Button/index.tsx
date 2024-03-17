import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[15px]",
} as const;
const variants = {
  gradient: {
    cyan_500_green_700: "bg-gradient shadow-xs text-white-A700",
    green_300_green_800: "bg-gradient1 text-white-A700",
  },
  fill: {
    green_300: "bg-green-300 text-black-900",
    green_800: "bg-green-800 shadow-md",
    green_A100: "bg-green-A100 text-green-800",
  },
} as const;
const sizes = {
  md: "h-[70px] px-[35px] text-[35px]",
  xs: "h-[54px] px-[33px] text-[22px]",
  xl: "h-[86px] px-[35px] text-5xl",
  lg: "h-[72px] px-[17px]",
  sm: "h-[63px] px-[35px] text-[32px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "green_A100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
