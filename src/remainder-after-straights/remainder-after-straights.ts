export const getRemainderAfterStraights = (cards: number[], straight: number) => {
	let sortedCards = cards.slice().sort((a, b) => a - b)

	const removeCardsAtIndexes = (indexes: number[]) => {
		sortedCards = sortedCards.filter((_, index) => !indexes.includes(index))
	}

	const getStraightIndexes = () => {
		let straightIndexes: number[] = [0]

		for (let i = 1; i < sortedCards.length; i++) {
			const currCard = sortedCards[i]
			const lastStraightIndex = straightIndexes.at(-1)

			if (lastStraightIndex === undefined) {
				throw new Error('Staight indexes was empty when it should never be.')
			}

			const prevCard = sortedCards[lastStraightIndex]

			if (currCard - prevCard > 1) {
				straightIndexes = [currCard]
			} else if (currCard - prevCard === 1) {
				straightIndexes.push(i)

				if (straightIndexes.length === straight) {
					return straightIndexes
				}
			}
		}

		return undefined
	}

	let currStraightIndexes = getStraightIndexes()

	while (sortedCards.length >= straight && currStraightIndexes) {
		removeCardsAtIndexes(currStraightIndexes)
		currStraightIndexes = getStraightIndexes()
	}

	return sortedCards.length
}
