export const expand = {
  //hoạt ảnh bị ngược
  initial: {
    height: "100%",
    top: 0,
  },

  enter: (i) => ({
    height: 0,
    top: "100dvh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { top: 0, height: 0 },
  }),

  exit: (i) => ({
    height: "100%",
    top: 0,
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};
