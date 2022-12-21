const lettersByDigit: Record<string, string> = {
	'2': 'ABC',
	'3': 'DEF',
	'4': 'GHI',
	'5': 'JKL',
	'6': 'MNO',
	'7': 'PQRS',
	'8': 'TUV',
	'9': 'WXYZ',
}

export const getAllLetterCombinations = (input: string) => {
	const letterCombinations: string[] = []

	const getLetterCombinations = (currentKey: string, currentDigits: string) => {
		if (currentDigits.length === 0) {
			letterCombinations.push(currentKey)
			return
		}

		const digit = currentDigits[0]
		const keys = lettersByDigit[digit]

		for (const key of keys) {
			getLetterCombinations(currentKey + key, currentDigits.slice(1))
		}
	}

	getLetterCombinations('', input)
	return letterCombinations
}
