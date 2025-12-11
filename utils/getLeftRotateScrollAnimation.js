

export function getLeftRotateScrollAnimation() {
  return {
    offscreen: {
      rotate: 30,
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
