import { YEARS_IN_BUSINESS } from "../../constants/company";
import { WHATSAPP_URL } from "../../constants/links";

import { Button, Icon, Text } from "../ui";

import { ArrowUpRight } from "../../assets/icons";
import { ContactImage } from "../../assets/images";

const highlights = [
  "Entrega diária",
  "Produção própria",
  `${YEARS_IN_BUSINESS} anos de mercado`,
];

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="
        relative z-10
        px-3 py-15
        md:px-20 md:pb-20
      "
    >
      {/* Card */}
      <div
        className="
          grid grid-cols-1
          overflow-hidden rounded-2xl bg-white
          md:grid-cols-[55%_45%]
        "
      >
        {/* Content */}
        <div
          className="
            flex flex-col justify-center
            px-5 pt-10 pb-6
            md:items-start md:px-20 md:py-28
          "
        >
          <Text
            as="span"
            variant="tagline"
            size="sm"
            textColor="brand-medium"
            weight="medium"
            className="md:text-base mb-4 md:mb-10"
          >
            Contato
          </Text>

          <Text
            as="h2"
            variant="heading"
            size="heading-lg"
            textColor="primary"
            className="mb-4 md:mb-10 max-w-120"
          >
            Fale direto com quem produz
          </Text>

          <Text
            size="lg"
            textColor="secondary"
            className="mb-8 md:mb-10 max-w-130"
          >
            Quer consultar produtos, disponibilidade ou fazer um pedido? Entre
            em contato com nossa equipe.
          </Text>

          <Text
            size="lg"
            textColor="secondary"
            className="mb-6 md:mb-10 max-w-130"
          >
            Atendemos consumidores, supermercados e distribuidores com produção
            própria e mais de 40 toneladas por dia.
          </Text>

          <Button
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            Chamar no WhatsApp
            <Icon
              svg={ArrowUpRight}
              fillColor="white"
              size="sm"
              animate="arrow-up-right"
            />
          </Button>
        </div>

        {/* Image */}
        <div className="relative min-h-110 md:min-h-150">
          <img
            src={ContactImage}
            alt="Verduras Guimarães comercializando verduras na CEAGESP"
            loading="lazy"
            className="absolute inset-0 size-full object-cover object-left rounded-2xl md:rounded-none"
          />

          {/* Overlay */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 z-10 rounded-2xl md:rounded-none
              bg-[#00731F]/20
            "
          />

          {/* Image label */}
          <div
            className="
              absolute right-3 bottom-3 z-20
              rounded-full bg-brand-light
              px-4 py-2
            "
          >
            <Text
              as="span"
              variant="tagline"
              size="sm"
              textColor="brand-dark"
              weight="medium"
            >
              CEAGESP · Pavilhão MLP, Pedra 90
            </Text>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div
        className="
          mt-12 flex flex-wrap
          items-center justify-center
          gap-5
          md:mt-16
        "
      >
        {highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand-medium"
            />

            <Text
              as="span"
              size="sm"
              textColor="secondary"
              className="uppercase"
            >
              {highlight}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
