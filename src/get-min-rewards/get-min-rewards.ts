export const getMinRewards = (scores: number[]) => {
	const minRewards = new Array(scores.length).fill(1)

	for (let i = 1; i < scores.length; i++) {
		const score = scores[i]
		const prevScore = scores[i - 1]

		if (score > prevScore) {
			minRewards[i] = minRewards[i - 1] + 1
		}
	}

	for (let i = scores.length - 2; i >= 0; i--) {
		const score = scores[i]
		const nextScore = scores[i + 1]

		if (score > nextScore) {
			minRewards[i] = Math.max(minRewards[i], minRewards[i + 1] + 1)
		}
	}

	return minRewards.reduce((total, reward) => total + reward, 0)
}
