import { YEARS_IN_BUSINESS } from "../../constants/company";

import { Text } from "../ui";

export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="
        relative z-10
        px-5 py-15
        md:px-20 md:py-66
      "
    >
      <div
        className="
          flex flex-col items-start
          md:items-center md:text-center
        "
      >
        {/* Tagline */}
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

        {/* Heading */}
        <Text
          as="h2"
          variant="heading"
          size="heading-lg"
          textColor="primary"
          className="mt-5 md:mt-6 max-w-75 md:max-w-none"
        >
          Da produção à sua mesa
        </Text>

        {/* Description */}
        <div
          className="
            mt-12 flex flex-col gap-8
            md:mt-6 md:max-w-7xl md:gap-0
          "
        >
          <Text size="lg" textColor="primary">
            Fundada por José Fernandes Guimarães, a Verduras Guimarães nasceu da
            decisão de assumir o controle total da cadeia produtiva.
          </Text>

          <Text size="lg" textColor="primary">
            Diante das dificuldades de depender de terceiros, José adquiriu um
            módulo na CEAGESP e passou a unir plantio e comercialização em uma
            só operação.
          </Text>

          <Text size="lg" textColor="primary">
            Há {YEARS_IN_BUSINESS} anos, a empresa acompanha cada etapa, da
            escolha das sementes à entrega final. São mais de 40 toneladas
            comercializadas por dia.
          </Text>
        </div>
      </div>
    </section>
  );
}
