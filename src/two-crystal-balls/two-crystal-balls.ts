export const twoCrystalBalls = (breaks: boolean[]) => {
	// Using square root results in the time complexity of O(√n).
	const jump = Math.floor(Math.sqrt(breaks.length))
	let i = jump

	for (; i < breaks.length; i += jump) {
		if (breaks[i]) {
			break
		}
	}

	i -= jump

	for (let j = 0; j <= jump; j++, i++) {
		if (breaks[i]) {
			return i
		}
	}

	return -1
}
