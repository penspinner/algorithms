export const getMissingWords = (s: string, t: string) => {
	const missingWords: string[] = []
	const sWords = s.split(' ')
	const tWords = t.split(' ')
	let tPointer = 0

	for (let sPointer = 0; sPointer < sWords.length; sPointer++) {
		if (sWords[sPointer] === tWords[tPointer]) {
			tPointer++
			continue
		}

		missingWords.push(sWords[sPointer])
	}

	return missingWords
}
