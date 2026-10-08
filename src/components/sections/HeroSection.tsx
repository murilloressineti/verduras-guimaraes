import { YEARS_IN_BUSINESS } from "../../constants/company";
import { WHATSAPP_URL } from "../../constants/links";

import { Button, Icon, Text } from "../ui";

import { ArrowUpRight } from "../../assets/icons";
import { HeroImage } from "../../assets/images";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="
        bg-brand-dark
        px-2 py-5
        md:pt-20
        md:px-5
        md:pb-5
      "
    >
      {/* Content */}
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-cover bg-center bg-no-repeat
          flex items-center
          min-h-220 px-5
          md:min-h-180 md:px-20
        "
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay geral */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient */}
        <div
          className="
            absolute inset-0
            bg-linear-[120deg]
            from-black/70 via-black/20 to-transparent
            md:bg-linear-to-r
          "
        />

        <div className="z-10 flex flex-col gap-8 md:max-w-175 md:items-start md:gap-6">
          <Text
            as="span"
            variant="tagline"
            size="sm"
            textColor="brand-light"
            weight="medium"
          >
            Produzindo há {YEARS_IN_BUSINESS} anos
          </Text>

          <Text
            as="h1"
            variant="heading"
            size="heading-lg"
            textColor="inverted"
            weight="medium"
            className="md:text-6xl"
          >
            Verduras <br className="md:hidden" /> frescas,
            <br />
            direto de <br className="md:hidden" /> quem produz
          </Text>

          <Text size="lg" textColor="inverted">
            Da semente à comercialização, cuidamos de todo o processo para
            entregar verduras frescas, qualidade e condições competitivas para
            consumidores, supermercados e distribuidores.
          </Text>

          <Button
            as="a"
            variant="secondary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
            <Icon
              svg={ArrowUpRight}
              fillColor="brand-dark"
              size="sm"
              animate="arrow-up-right"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
