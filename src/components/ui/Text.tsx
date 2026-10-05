import React from "react";

import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans",
  variants: {
    variant: {
      text: "font-sans",
      heading: "font-heading",
      label: "font-sans",
      tagline: "font-sans uppercase",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "heading-xs": "text-2xl",
      "heading-sm": "text-3xl",
      "heading-md": "text-4xl",
      "heading-lg": "text-5xl",
      "heading-xl": "text-[56px]",
      "heading-xxl": "text-6xl",
    },
    textColor: {
      primary: "text-text-primary",
      secondary: "text-text-primary/80",
      tertiary: "text-text-primary/60",
      inverted: "text-text-inverted",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "text",
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
  variant,
  size,
  textColor,
  weight,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={textVariants({
        size,
        variant,
        textColor,
        weight,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
