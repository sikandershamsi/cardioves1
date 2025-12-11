export default function getTopScrollAnimation() {
	return ({
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: ({duration = 2} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}
