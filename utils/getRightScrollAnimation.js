export default function getRightScrollAnimation() {
    return {
      offscreen: {
        x: -100, // Start off to the left
        opacity: 0,
      },
      onscreen: ({ duration = 2 } = {}) => ({
        x: 0, // Move to original position
        opacity: 1,
        transition: {
          type: "spring",
          duration,
        },
      }),
    };
  }