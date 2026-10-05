import React from "react";

import { tv, type VariantProps } from "tailwind-variants";

export const iconVariants = tv({
  base: "shrink-0 transition-all duration-300 ease-in-out",
  variants: {
    animate: {
      none: "",
      spin: "animate-spin",
      pulse: "animate-pulse",
      bounce: "animate-bounce",
      "arrow-up-right": "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
    },
    size: {
      sm: "size-5",
      md: "size-6",
      lg: "size-8",
    },
    fillColor: {
      "brand-light": "fill-brand-light",
      "brand-dark": "fill-brand-dark",
      black: "fill-black",
      white: "fill-white",
    },
  },
  defaultVariants: {
    animate: "none",
    size: "md",
    fillColor: "brand-light",
  },
});

interface IconProps
  extends React.SVGProps<SVGElement>, VariantProps<typeof iconVariants> {
  svg: React.ElementType;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  size,
  fillColor,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({ animate, size, fillColor, className })}
      {...props}
    />
  );
}
