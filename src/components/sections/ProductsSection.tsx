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
  return (
    <section
      id="produtos"
      className="
        bg-brand-dark
        px-5 py-15
        md:px-20 md:py-20
      "
    >
      {/* Heading */}
      <div
        className="
          flex flex-col items-center gap-8 text-center
          md:flex-row md:items-end md:justify-between md:text-left
        "
      >
        <div>
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
        </div>

        <Text
          size="lg"
          textColor="inverted-secondary"
          className="max-w-100 md:text-right"
        >
          Cultivamos e entregamos verduras frescas, no volume que o seu negócio
          precisa.
        </Text>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-12 my-16 md:grid-cols-5 md:gap-4 md:my-20">
        {products.map((product) => (
          <div key={product.name}>
            <ProductImage src={product.image} alt={product.name} />

            <Text
              size="heading-xs"
              textColor="inverted-secondary"
              className="mt-2"
            >
              {product.name}
            </Text>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
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
      </div>
    </section>
  );
}
