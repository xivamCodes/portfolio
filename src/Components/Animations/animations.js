export const svgAnimation = {
  initial: {
    fill: "#727272",
  },
  enter: {
    fill: "#131212",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    fill: "#727272",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const menuSlide = {
  initial: {
    x: "-120%",
    backgroundColor: "#727272",
  },
  enter: {
    x: "0%",
    backgroundColor: "#131212",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "120%",
    backgroundColor: "#727272",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: {
    x: "100vh",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
