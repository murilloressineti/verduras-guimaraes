import { motion, useReducedMotion } from "motion/react";

import { fadeUp, staggerContainer } from "../../lib/motion";

import { YEARS_IN_BUSINESS } from "../../constants/company";

import { Icon, Text } from "../ui";

import { CalendarDots, Medal, Plant } from "../../assets/icons";

const stats = [
  {
    icon: Plant,
    title: "Produção 60% a 70% própria",
    description:
      "Da semente à comercialização, cada etapa passa pela nossa equipe.",
  },
  {
    icon: Medal,
    title: `${YEARS_IN_BUSINESS} anos de mercado`,
    description:
      "Três décadas atendendo consumidores, redes e distribuidores em todo o estado.",
  },
  {
    icon: CalendarDots,
    title: "+40 toneladas por dia",
    description:
      "Volume real para abastecer mercados, distribuidores e clientes diretos.",
  },
];

export default function StatsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-brand-dark px-5 py-15 md:px-20 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="flex flex-col items-center text-center"
          >
            <Icon svg={stat.icon} fillColor="brand-light" className="mb-5" />

            <Text
              as="h2"
              size="heading-xs"
              textColor="inverted"
              className="mb-2"
            >
              {stat.title}
            </Text>

            <Text
              size="lg"
              textColor="inverted-secondary"
              className="max-w-100"
            >
              {stat.description}
            </Text>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
