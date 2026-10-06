import React from "react";

import { tv, type VariantProps } from "tailwind-variants";

import Text from "./Text";

export const buttonVariants = tv({
  base: `
    group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg
    transition-all duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2
    disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50
    `,
  variants: {
    variant: {
      primary: "bg-brand-main hover:bg-brand-dark",
      secondary: "bg-brand-light hover:bg-brand-light/80 text-brand-dark",
    },
    size: {
      sm: "p-2",
      md: "px-4 py-4.5",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  as: ButtonComponent = "button",
  type = "button",
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonComponent
      {...(ButtonComponent === "button" && { type })}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return (
            <Text textColor={variant === "secondary" ? "primary" : "inverted"}>
              {child}
            </Text>
          );
        }

        return child;
      })}
    </ButtonComponent>
  );
}
