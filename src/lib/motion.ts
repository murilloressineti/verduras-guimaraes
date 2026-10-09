import type { Variants } from "motion/react";

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export const headerEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export const ctaPulse: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: [1, 1.035, 1, 1.035, 1],
    transition: {
      opacity: {
        duration: 0.7,
        ease: "easeOut",
      },
      y: {
        duration: 0.7,
        ease: "easeOut",
      },
      scale: {
        duration: 1.4,
        delay: 1.1,
        times: [0, 0.2, 0.4, 0.8, 1],
        ease: "easeInOut",
      },
    },
  },
};

export const dotReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 2.5,
  },
  visible: {
    opacity: 1,
    scale: [2.5, 0.8, 1],
    transition: {
      duration: 0.8,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};