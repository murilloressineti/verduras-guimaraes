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
        after:w-0
        after:bg-brand-main
        after:transition-all
        after:duration-150
        after:ease-out

        hover:after:w-full

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
