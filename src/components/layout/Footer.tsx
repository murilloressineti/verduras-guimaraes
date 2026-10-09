import { WHATSAPP_URL, INSTAGRAM_URL } from "../../constants/links";

import { Icon, Text } from "../ui";

import {
  ArrowUpRight,
  InstagramLogo,
  MapPin,
  WhatsAppLogo,
} from "../../assets/icons";
import { Logo } from "../../assets/images";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Quem somos", href: "#quem-somos" },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Gast%C3%A3o+Vidigal%2C+1946%2C+S%C3%A3o+Paulo";

export default function Footer() {
  return (
    <footer className="bg-bg-default px-2 pt-10 md:px-5 relative z-10 md:z-auto">
      <div
        className="
          rounded-t-2xl bg-brand-dark
          px-6 pt-12 pb-8
          md:px-15 md:pt-15 md:pb-10
        "
      >
        {/* Main Content */}
        <div
          className="
            flex flex-col gap-8
            md:flex-row md:justify-between md:gap-0
          "
        >
          {/* Logo */}
          <div>
            <a href="#inicio" aria-label="Voltar ao início">
              <img
                src={Logo}
                alt="Verduras Guimarães"
                className="w-52 md:w-58"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegação do rodapé">
            <Text
              as="h2"
              size="sm"
              textColor="brand-light"
              className="mb-5 uppercase"
            >
              Navegação
            </Text>

            <ul className="flex flex-col gap-4 md:gap-5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <Text
                      as="span"
                      textColor="inverted"
                      className="hover:text-brand-light transition-colors duration-200"
                    >
                      {link.label}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <div className="flex flex-col gap-10 md:gap-14">
            {/* WhatsApp */}
            <div>
              <Text
                as="h2"
                size="sm"
                textColor="brand-light"
                className="mb-5 uppercase"
              >
                Contato
              </Text>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                "
              >
                <Icon svg={WhatsAppLogo} size="sm" fillColor="brand-light" />

                <Text
                  as="span"
                  textColor="inverted"
                  className="transition-colors duration-200 group-hover:text-brand-light"
                >
                  Chamar no WhatsApp
                </Text>

                <Icon
                  svg={ArrowUpRight}
                  aria-hidden="true"
                  size="sm"
                  className="-translate-x-2 opacity-0 ease-out group-hover:translate-x-0
                    group-hover:opacity-100"
                />
              </a>
            </div>

            {/* Address */}
            <div>
              <Text
                as="h2"
                size="sm"
                textColor="brand-light"
                className="mb-5 uppercase"
              >
                Endereço
              </Text>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-start gap-2
                "
              >
                <Icon svg={MapPin} size="sm" fillColor="brand-light" />

                <Text
                  as="span"
                  textColor="inverted"
                  className="transition-colors duration-200 group-hover:text-brand-light"
                >
                  Av. Dr. Gastão Vidigal, 1946
                  <br />
                  Pavilhão MLP — Pedra 90
                </Text>

                <Icon
                  svg={ArrowUpRight}
                  aria-hidden="true"
                  size="sm"
                  className="-translate-x-2 opacity-0 ease-out group-hover:translate-x-0
                    group-hover:opacity-100"
                />
              </a>
            </div>

            {/* Instagram */}
            <div>
              <Text
                as="h2"
                size="sm"
                textColor="brand-light"
                className="mb-5 uppercase"
              >
                Redes sociais
              </Text>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2

                "
              >
                <Icon svg={InstagramLogo} size="sm" fillColor="brand-light" />

                <Text
                  as="span"
                  textColor="inverted"
                  className="transition-colors duration-200 group-hover:text-brand-light"
                >
                  Instagram
                </Text>

                <Icon
                  svg={ArrowUpRight}
                  aria-hidden="true"
                  size="sm"
                  className="-translate-x-2 opacity-0 ease-out group-hover:translate-x-0
                    group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
            mt-8 border-t border-border-dark
            pt-8 text-center
            md:mt-12 md:pt-12
          "
        >
          <Text size="sm" textColor="inverted-secondary">
            © {new Date().getFullYear()} Verduras Guimarães. Todos os direitos
            reservados.
          </Text>
        </div>
      </div>
    </footer>
  );
}
