export const getGameWinner = (colors: string) => {
	let wendyMoves = 0
	let bobMoves = 0

	for (let i = 1; i < colors.length - 1; i++) {
		const color = colors[i]

		if (colors[i - 1] === color && colors[i + 1] === color) {
			if (color === 'w') {
				wendyMoves++
			} else if (color === 'b') {
				bobMoves++
			}
		}
	}

	if (wendyMoves <= bobMoves) {
		return 'bob'
	}

	return 'wendy'
}
