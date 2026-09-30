import { Button, Icon, Text } from "./components/ui";

export default function App() {
  return (
    <div>
      {/* Text */}
      <div>
        <Text>Verduras Guimarães</Text>

        <Text size="xs">Verduras Guimarães</Text>
        <Text size="sm">Verduras Guimarães</Text>
        <Text size="md">Verduras Guimarães</Text>
        <Text size="lg">Verduras Guimarães</Text>
        <Text size="xl">Verduras Guimarães</Text>

        <Text textColor="primary">Verduras Guimarães</Text>
        <Text textColor="secondary">Verduras Guimarães</Text>
        <Text textColor="inverted">Verduras Guimarães</Text>

        <Text weight="regular">Verduras Guimarães</Text>
        <Text weight="semiBold">Verduras Guimarães</Text>
        <Text weight="bold">Verduras Guimarães</Text>
      </div>

      {/* Icon */}
      <div></div>

      {/* Button */}
      <div>
        <Button>Botão</Button>

        <Button disabled={true}>Botão</Button>
      </div>
    </div>
  );
}
