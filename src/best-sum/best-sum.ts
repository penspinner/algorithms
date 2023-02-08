export const getBestSum = (target: number, numbers: number[]) => {
	const table: (number | undefined)[][] = Array.from({ length: target + 1 })
	table[0] = []

	for (let i = 0; i <= target; i++) {
		if (table[i] !== undefined) {
			for (const number of numbers) {
				const combination = [...table[i], number]

				if (!table[i + number] || table[i + number].length > combination.length) {
					table[i + number] = combination
				}
			}
		}
	}

	return table[target]
}
