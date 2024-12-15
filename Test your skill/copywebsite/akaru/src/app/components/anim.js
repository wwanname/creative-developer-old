export const animation = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      ease: [0.32, 1, 0.68, 1],
      delay: 0.04 * i,
    },
  }),
  exit: (i) => ({
    y: "100%",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.008 * i
    },
  }),
};

export const animation1 = {
  initial: { y: "100%" },
  enter: {
    y: "0",
    transition: {
      duration: 0.4,
      ease: [0.32, 1, 0.68, 1],
      delay: 0.4,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const animation2 = {
  initial: { y: "100%" },
  enter: {
    y: "0",
    transition: {
      duration: 0.4,
      ease: [0.32, 1, 0.68, 1],
      delay: 0.4,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
