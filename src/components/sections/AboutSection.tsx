import { motion, useReducedMotion } from "motion/react";

import { fadeUp, staggerContainer } from "../../lib/motion";

import { YEARS_IN_BUSINESS } from "../../constants/company";

import { Text } from "../ui";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? undefined : fadeUp;

  return (
    <section
      id="quem-somos"
      className="
        relative z-10
        px-5 py-15
        md:px-20 md:py-66
      "
    >
      <motion.div
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          flex flex-col items-start
          md:items-center md:text-center
        "
      >
        {/* Tagline */}
        <motion.div variants={animation}>
          <Text
            as="span"
            variant="tagline"
            size="sm"
            textColor="brand-medium"
            weight="medium"
            className="md:text-base"
          >
            Quem somos
          </Text>
        </motion.div>

        {/* Heading */}
        <motion.div variants={animation}>
          <Text
            as="h2"
            variant="heading"
            size="heading-lg"
            textColor="primary"
            className="mt-5 md:mt-6 max-w-75 md:max-w-none"
          >
            Da produção à sua mesa
          </Text>
        </motion.div>

        {/* Description */}
        <div
          className="
            mt-12 flex flex-col gap-8
            md:mt-6 md:max-w-7xl md:gap-0
          "
        >
          <motion.div variants={animation}>
            <Text size="lg" textColor="secondary">
              Fundada por José Fernandes Guimarães, a Verduras Guimarães nasceu
              da decisão de assumir o controle total da cadeia produtiva.
            </Text>
          </motion.div>

          <motion.div variants={animation}>
            <Text size="lg" textColor="secondary">
              Diante das dificuldades de depender de terceiros, José adquiriu um
              módulo na CEAGESP e passou a unir plantio e comercialização em uma
              só operação.
            </Text>
          </motion.div>

          <motion.div variants={animation}>
            <Text size="lg" textColor="secondary">
              Há {YEARS_IN_BUSINESS} anos, a empresa acompanha cada etapa, da
              escolha das sementes à entrega final. São mais de 40 toneladas
              comercializadas por dia.
            </Text>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
