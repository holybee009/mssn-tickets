import React from "react";

const sizes = {
  "5xl": "text-[35px] font-normal md:text-[33px] sm:text-[31px]",
  xs: "text-base font-normal",
  lg: "text-[23px] font-normal md:text-[21px]",
  "6xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  "7xl": "text-[51px] font-normal md:text-[43px] sm:text-[37px]",
  "8xl": "text-[75px] font-normal md:text-5xl",
  s: "text-lg font-normal",
  "2xl": "text-[29px] font-normal md:text-[27px] sm:text-[25px]",
  "3xl": "text-[31px] font-normal md:text-[29px] sm:text-[27px]",
  "4xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xl: "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  md: "text-xl font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
