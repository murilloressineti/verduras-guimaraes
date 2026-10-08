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
  return (
    <section
      id="diferenciais"
      className="
        bg-brand-dark px-3 py-5
        md:px-5
      "
    >
      <div
        className="
          grid grid-cols-1 gap-20
          rounded-2xl bg-bg-default px-5 py-12
          md:grid-cols-2 md:gap-6
          md:rounded-none md:bg-transparent md:p-0
        "
      >
        {/* Heading */}
        <div
          className="
            flex flex-col items-center justify-center
            text-center
            md:items-start md:rounded-2xl md:bg-bg-default
            md:px-20 md:py-15 md:text-left
            gap-3 md:gap-5
          "
        >
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

          <Text
            as="h2"
            variant="heading"
            size="heading-lg"
            textColor="primary"
            className="max-w-110"
          >
            Direto do produtor faz diferença
          </Text>

          <Text size="lg" textColor="secondary" className="max-w-100">
            Estrutura para abastecer do varejo aos grandes distribuidores.
          </Text>
        </div>

        {/* Differentials */}
        <div
          className="
            flex flex-col gap-12
            md:justify-center md:gap-8
            md:rounded-2xl md:bg-bg-default
            md:px-16 md:py-15
          "
        >
          {differentials.map((item) => (
            <div
              key={item.number}
              className="
                flex flex-col gap-4 items-center text-center
                md:items-start md:text-left
              "
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

              <Text size="lg" textColor="secondary" className="max-w-100">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
