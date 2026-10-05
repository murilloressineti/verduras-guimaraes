import { Button, Icon, Text } from "./components/ui";

import {
  ArrowUpRight,
  CalendarDots,
  InstagramLogo,
  List,
  MapPin,
  Medal,
  Plant,
  WhatsappLogo,
  X,
} from "./assets/icons";

export default function App() {
  return (
    <div className="bg-brand-dark h-full">
      {/* Text */}
      <div>
        {/* Headings */}
        <Text variant="heading" size="heading-xxl" weight="medium">
          Direto de quem produz
        </Text>
        <Text variant="heading" size="heading-xl">
          Da semente à sua mesa
        </Text>
        <Text size="heading-lg">Produção que abastece</Text>
        <Text size="heading-md">Colheita diária e fresca</Text>
        <Text size="heading-sm">Qualidade em cada folha</Text>
        <Text size="heading-xs">36 anos cultivando relações</Text>

        {/* Text */}
        <Text size="lg">
          Verduras frescas, selecionadas e entregues todos os dias.
        </Text>
        <Text size="md">
          Produção própria para mercados, distribuidoras e famílias.
        </Text>
        <Text size="sm">
          Do campo ao ponto de venda, com controle em cada etapa.
        </Text>

        {/* Label and tagline */}
        <Text variant="label" weight="medium">
          Falar no WhatsApp
        </Text>
        <Text variant="tagline" size="sm" weight="medium">
          Produção própria
        </Text>
        <Text variant="tagline" weight="bold">
          Verduras Guimarães
        </Text>
      </div>

      {/* Icon */}
      <div>
        <Icon svg={ArrowUpRight} />
        <Icon svg={CalendarDots} />
        <Icon svg={InstagramLogo} />
        <Icon svg={List} />
        <Icon svg={MapPin} />
        <Icon svg={Medal} />
        <Icon svg={Plant} />
        <Icon svg={WhatsappLogo} />
        <Icon svg={X} />
      </div>

      {/* Button */}
      <div>
        <Button>
          Falar no WhatsApp{" "}
          <Icon
            svg={ArrowUpRight}
            fillColor="white"
            size="sm"
            animate="arrow-up-right"
          />
        </Button>

        <Button variant="secondary">
          Falar no WhatsApp{" "}
          <Icon
            svg={ArrowUpRight}
            fillColor="brand-dark"
            size="sm"
            animate="arrow-up-right"
          />
        </Button>

        <Button disabled={true}>
          Falar no WhatsApp{" "}
          <Icon
            svg={ArrowUpRight}
            fillColor="white"
            size="sm"
            animate="arrow-up-right"
          />
        </Button>
      </div>
    </div>
  );
}
