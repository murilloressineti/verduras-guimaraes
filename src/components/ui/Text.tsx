import React from "react";

import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    textColor: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      inverted: "text-text-inverted",
    },
    weight: {
      regular: "font-normal",
      semiBold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    textColor: "primary",
    weight: "regular",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

export default function Text({
  as: Component = "p",
  size,
  textColor,
  weight,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={textVariants({ size, textColor, weight, className })}
      {...props}
    >
      {children}
    </Component>
  );
}
