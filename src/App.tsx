import { Header } from "./components/layout";
import { HeroSection, StatsSection } from "./components/sections";

export default function App() {
  return (
    <>
      <Header />

      <main className="relative z-10 md:z-auto">
        <HeroSection />

        <StatsSection />

        <div className="h-300 bg-bg-dark">
          Teste
        </div>
      </main>

    </>
  );
}
