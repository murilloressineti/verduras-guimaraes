import { Header } from "./components/layout";
import {
  HeroSection,
  ProductsSection,
  StatsSection,
  DifferentialsSection,
  AboutSection,
  ContactSection
} from "./components/sections";

export default function App() {
  return (
    <>
      <Header />

      <main className="relative z-10 md:z-auto">
        <HeroSection />
        <StatsSection />
        <ProductsSection />
        <DifferentialsSection />
        <div className="relative isolate overflow-hidden bg-bg-default">
          <AboutSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
