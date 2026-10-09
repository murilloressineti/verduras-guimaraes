import { Button, Icon, NavLink, ProductImage, Text } from "./components/ui";
import { Header } from "./components/layout";

import {
  ArrowUpRight,
  CalendarDots,
  InstagramLogo,
  List,
  MapPin,
  Medal,
  Plant,
  WhatsAppLogo,
  X,
} from "./assets/icons";
import {
  Alface,
  AlhoPoro,
  CouveManteiga,
  RepolhoBranco,
  RepolhoRoxo,
} from "./assets/images";

export default function ComponentsPage() {
  return (
    <div className="bg-brand-dark h-full">
      {/* Text */}
      <div>
        {/* Headings */}
        <Text variant="heading" size="heading-xl" weight="medium">
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
        <Icon svg={WhatsAppLogo} />
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

      {/* NavLink */}
      <div className="bg-white flex gap-2 p-4">
        <NavLink href="#inicio">Início</NavLink>

        <NavLink href="#produtos">Produtos</NavLink>

        <NavLink href="#diferenciais">Diferenciais</NavLink>

        <NavLink href="#quem-somos">Quem somos</NavLink>

        <NavLink href="#contato">Contato</NavLink>
      </div>

      {/* ProductImage */}
      <div className="flex flex-col md:flex-row gap-4">
        <ProductImage src={Alface} alt="Alface americana" />

        <ProductImage src={RepolhoBranco} alt="Repolho Branco" />

        <ProductImage src={RepolhoRoxo} alt="Repolho Roxo" />

        <ProductImage src={AlhoPoro} alt="Alho Poró" />

        <ProductImage src={CouveManteiga} alt="Couve Manteiga" />
      </div>

      {/* Header */}
      <Header />
    </div>
  );
}
