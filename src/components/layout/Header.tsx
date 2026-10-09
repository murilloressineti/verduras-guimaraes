import { motion, useReducedMotion } from "motion/react";

import { headerEntrance } from "../../lib/motion";

import { useState } from "react";

import { WHATSAPP_URL } from "../../constants/links";

import { Button, Icon, NavLink } from "../ui";

import { ArrowUpRight, List, X } from "../../assets/icons";
import { Logo } from "../../assets/images";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      variants={shouldReduceMotion ? undefined : headerEntrance}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="
        sticky top-0
        bg-bg-default px-4 py-4

        md:fixed md:top-4 md:left-10 md:right-10 md:z-50
        md:rounded-xl md:px-5
      "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" aria-label="Verduras Guimarães - Início">
          <img src={Logo} alt="Verduras Guimarães" className="w-36" />
        </a>

        {/* Desktop */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegação principal"
        >
          {navigationLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}

          <Button
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contato
            <Icon
              svg={ArrowUpRight}
              fillColor="white"
              size="sm"
              animate="arrow-up-right"
            />
          </Button>
        </nav>

        {/* Mobile */}
        <button
          type="button"
          className="relative flex size-11 cursor-pointer items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`
              absolute transition-all duration-300 ease-out
              ${
                isMenuOpen
                  ? "rotate-90 scale-50 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }
            `}
          >
            <Icon svg={List} fillColor="black" />
          </span>

          <span
            className={`
              absolute transition-all duration-300 ease-out
              ${
                isMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-50 opacity-0"
              }
            `}
          >
            <Icon svg={X} fillColor="black" />
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        id="mobile-menu"
        aria-label="Navegação mobile"
        className={`
          overflow-hidden transition-all duration-250 ease-out md:hidden
          ${isMenuOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="justify-center"
            >
              {link.label}
            </NavLink>
          ))}

          <Button
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mb-4"
          >
            Entrar em contato
            <Icon
              svg={ArrowUpRight}
              fillColor="white"
              size="sm"
              animate="arrow-up-right"
            />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
