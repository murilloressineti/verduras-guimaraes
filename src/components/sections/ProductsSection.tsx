import { motion, useReducedMotion } from "motion/react";

import { fadeUp, staggerContainer, staggerFast } from "../../lib/motion";

import { WHATSAPP_URL } from "../../constants/links";

import { Button, Icon, ProductImage, Text } from "../ui";

import { ArrowUpRight } from "../../assets/icons";
import {
  Alface,
  AlhoPoro,
  CouveManteiga,
  RepolhoBranco,
  RepolhoRoxo,
} from "../../assets/images";

const products = [
  {
    name: "Alface americana",
    image: Alface,
  },
  {
    name: "Repolho branco",
    image: RepolhoBranco,
  },
  {
    name: "Repolho roxo",
    image: RepolhoRoxo,
  },
  {
    name: "Alho-poró",
    image: AlhoPoro,
  },
  {
    name: "Couve manteiga",
    image: CouveManteiga,
  },
];

export default function ProductsSection() {
  const shouldReduceMotion = useReducedMotion();
  const animation = shouldReduceMotion ? undefined : fadeUp;

  return (
    <section
      id="produtos"
      className="
        bg-brand-dark
        px-5 py-15
        lg:px-20 md:py-20
      "
    >
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="
          flex flex-col items-center gap-8 text-center
          lg:flex-row lg:items-end lg:justify-between lg:text-left
        "
      >
        <div>
          <motion.div variants={animation}>
            <Text
              as="span"
              variant="tagline"
              size="sm"
              textColor="brand-light"
              weight="medium"
              className="md:text-base"
            >
              Produtos
            </Text>
          </motion.div>

          <motion.div variants={animation}>
            <Text
              as="h2"
              variant="heading"
              size="heading-lg"
              textColor="inverted"
              className="mx-auto mt-5 max-w-75 md:mx-0 md:mt-6 md:max-w-none"
            >
              Frescor que começa {""}
              <br className="hidden md:block" />
              na produção
            </Text>
          </motion.div>
        </div>

        <motion.div variants={animation}>
          <Text
            size="lg"
            textColor="inverted-secondary"
            className="max-w-100 lg:text-right"
          >
            Cultivamos e entregamos verduras frescas, no volume que o seu
            negócio precisa.
          </Text>
        </motion.div>
      </motion.div>

      {/* Products */}
      <div className="my-16 md:my-20">
        {/* Mobile */}
        <div className="grid grid-cols-1 gap-12 md:hidden">
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={animation}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <ProductImage src={product.image} alt={product.name} />

              <Text
                size="heading-xs"
                textColor="inverted-secondary"
                className="mt-2"
              >
                {product.name}
              </Text>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <motion.div
          variants={staggerFast}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="hidden md:grid md:grid-cols-6 md:gap-6 lg:grid-cols-5 lg:gap-4-4"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={animation}
              className={`
                md:col-span-2 lg:col-span-1
                ${index === 3 ? "md:col-start-2 lg:col-start-auto" : ""}
              `}
            >
              <ProductImage src={product.image} alt={product.name} />

              <Text
                size="heading-xs"
                textColor="inverted-secondary"
                className="mt-2"
              >
                {product.name}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        variants={animation}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="flex justify-center"
      >
        <Button
          as="a"
          variant="secondary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          Ver disponibilidade
          <Icon
            svg={ArrowUpRight}
            fillColor="brand-dark"
            size="sm"
            animate="arrow-up-right"
          />
        </Button>
      </motion.div>
    </section>
  );
}
