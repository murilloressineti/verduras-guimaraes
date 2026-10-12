import { motion, useReducedMotion } from "motion/react";

import {
  fadeUp,
  fadeRight,
  staggerContainer,
  cardReveal,
} from "../../lib/motion";

import { YEARS_IN_BUSINESS } from "../../constants/company";

import { Text } from "../ui";

const differentials = [
  {
    number: "01",
    title: "Do campo à mesa",
    description:
      "Controlamos todo o processo, da escolha da semente à entrega no ponto de venda.",
  },
  {
    number: "02",
    title: "Confiança comprovada",
    description: `${YEARS_IN_BUSINESS} anos construindo relações diretas com quem compra. Nossos clientes voltam.`,
  },
  {
    number: "03",
    title: "Preço de produtor",
    description:
      "Sem intermediários. Quem compra direto da fonte paga menos e recebe mais fresco.",
  },
];

export default function DifferentialsSection() {
  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? undefined : fadeUp;
  const backgroundAnimation = shouldReduceMotion ? undefined : cardReveal;

  return (
    <section
      id="diferenciais"
      className="
        bg-brand-dark px-3 py-5
        lg:px-5
      "
    >
      <div
        className="
          relative isolate
          grid grid-cols-1 gap-20
          rounded-2xl px-5 py-12
          lg:grid-cols-2 lg:gap-6
          lg:rounded-none lg:p-0
        "
      >
        {/* Mobile Background */}
        <motion.div
          aria-hidden="true"
          variants={backgroundAnimation}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            pointer-events-none absolute inset-0 -z-10
            rounded-2xl bg-bg-default
            lg:hidden
          "
        />

        {/* Heading */}
        <div
          className="
            relative
            flex flex-col items-center justify-center
            text-center
            lg:items-start
            lg:rounded-2xl
            lg:px-20 lg:py-15 lg:text-left
          "
        >
          {/* Desktop Background */}
          <motion.div
            aria-hidden="true"
            variants={backgroundAnimation}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="
              pointer-events-none absolute inset-0
              hidden rounded-2xl bg-bg-default
              lg:block
            "
          />

          {/* Heading Content */}
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative z-10
              flex flex-col items-center gap-3
              lg:items-start lg:gap-5
            "
          >
            <motion.div variants={animation}>
              <Text
                as="span"
                variant="tagline"
                size="sm"
                textColor="brand-medium"
                weight="medium"
                className="md:text-base"
              >
                Diferenciais
              </Text>
            </motion.div>

            <motion.div variants={animation}>
              <Text
                as="h2"
                variant="heading"
                size="heading-lg"
                textColor="primary"
                className="max-w-110"
              >
                Direto do produtor faz diferença
              </Text>
            </motion.div>

            <motion.div variants={animation}>
              <Text size="lg" textColor="secondary" className="max-w-100">
                Estrutura para abastecer do varejo aos grandes distribuidores.
              </Text>
            </motion.div>
          </motion.div>
        </div>

        {/* Differentials */}
        <div
          className="
            relative
            flex flex-col gap-12
            md:justify-center md:gap-8
            md:rounded-2xl
            md:px-16 md:py-12
          "
        >
          {/* Desktop Background */}
          <motion.div
            aria-hidden="true"
            variants={backgroundAnimation}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="
              pointer-events-none absolute inset-0
              hidden rounded-2xl bg-bg-default
              lg:block
            "
          />

          {/* Mobile */}
          <div className="relative z-10 flex flex-col gap-12 lg:hidden">
            {differentials.map((item) => (
              <motion.div
                key={item.number}
                variants={animation}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <Text as="span" size="heading-xs" textColor="brand-medium">
                  {item.number}
                </Text>

                <Text as="h3" size="heading-sm" textColor="primary">
                  {item.title}
                </Text>

                <Text size="lg" textColor="tertiary" className="max-w-120">
                  {item.description}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Desktop */}
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative z-10 hidden lg:flex md:flex-col lg:gap-8"
          >
            {differentials.map((item) => (
              <motion.div
                key={item.number}
                variants={shouldReduceMotion ? undefined : fadeRight}
                className="flex flex-col items-start gap-4 text-left"
              >
                <Text as="span" size="heading-xs" textColor="brand-medium">
                  {item.number}
                </Text>

                <Text
                  as="h3"
                  size="heading-sm"
                  textColor="primary"
                  className="md:text-4xl"
                >
                  {item.title}
                </Text>

                <Text size="lg" textColor="tertiary" className="max-w-120">
                  {item.description}
                </Text>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
