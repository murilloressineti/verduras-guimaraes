import React from "react";

import Text from "./Text";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function NavLink({
  href,
  children,
  className,
  ...props
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={`
        relative inline-flex h-12 items-center
        transition-colors duration-150 ease-out
        hover:text-brand-main

        after:absolute
        after:bottom-0
        after:left-0
        after:h-px
        after:w-full
        after:bg-brand-main
        after:opacity-0
        after:transition-opacity
        after:duration-150
        after:ease-out

        hover:after:opacity-100

        ${className ?? ""}
      `}
      {...props}
    >
      <Text as="span" className="text-inherit">
        {children}
      </Text>
    </a>
  );
}
