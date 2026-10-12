import { AboutSection, ContactSection } from "./";

import { GridBottom, GridTop } from "../../assets/images";

export default function InstitutionalSection() {
  return (
    <div className="relative isolate overflow-hidden bg-bg-default">
      {/* Decoração superior esquerda */}
      <img
        src={GridTop}
        aria-hidden="true"
        loading="lazy"
        className="
          pointer-events-none absolute
          -top-90 left-0
          hidden w-75
          md:block
        "
      />

      {/* Decoração lateral direita */}
      <img
        src={GridBottom}
        aria-hidden="true"
        loading="lazy"
        className="
          pointer-events-none absolute
          top-105 right-0
          hidden w-100
          md:block
        "
      />

      <AboutSection />

      <ContactSection />
    </div>
  );
}
