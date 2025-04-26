function fadin(direction, delay) {
  return {
    initial: {
      opacity: 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "spring",
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
  };
}

export default fadin;
