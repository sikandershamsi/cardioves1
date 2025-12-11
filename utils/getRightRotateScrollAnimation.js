

export function getRightRotateScrollAnimation() {
  return {
    offscreen: {
      rotate: -10,
      opacity: 1,
    },
    onscreen: ({ duration = 4 } = {}) => ({
      rotate: 7,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}
