import { motion, useReducedMotion } from "motion/react";

import { fadeUp, staggerContainer, heroImage } from "../../lib/motion";

import { YEARS_IN_BUSINESS } from "../../constants/company";
import { WHATSAPP_URL } from "../../constants/links";

import { Button, Icon, Text } from "../ui";

import { ArrowUpRight } from "../../assets/icons";
import { HeroImage } from "../../assets/images";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? undefined : fadeUp;

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
          relative flex items-center
          min-h-220 overflow-hidden rounded-2xl px-5
          md:min-h-170 md:px-20
        "
      >
        {/* Background animado */}
        <motion.div
          aria-hidden="true"
          variants={shouldReduceMotion ? undefined : heroImage}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="
            absolute inset-0
            bg-cover bg-center bg-no-repeat
          "
          style={{ backgroundImage: `url(${HeroImage})` }}
        />

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

        {/* Animated Content */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10 flex flex-col gap-8 md:max-w-175 md:items-start md:gap-6"
        >
          {/* Tagline */}
          <motion.div variants={animation}>
            <Text
              as="span"
              variant="tagline"
              size="sm"
              textColor="brand-light"
              weight="medium"
            >
              Produzindo há {YEARS_IN_BUSINESS} anos
            </Text>
          </motion.div>

          {/* Title */}
          <motion.div variants={animation}>
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
          </motion.div>

          {/* Description */}
          <motion.div variants={animation}>
            <Text size="lg" textColor="inverted">
              Da semente à comercialização, cuidamos de todo o processo para
              entregar verduras frescas, qualidade e condições competitivas para
              consumidores, supermercados e distribuidores.
            </Text>
          </motion.div>

          {/* CTA */}
          <motion.div variants={animation}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
