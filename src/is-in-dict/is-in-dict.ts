export const createDict = (strs: string[]) => {
	const dict = strs

	return {
		isInDict: (s: string) => {
			if (dict.includes(s)) {
				return true
			}

			for (const key of dict) {
				if (key.length !== s.length) {
					// Different length means there's no way the given string and the key match.
					continue
				}

				for (let i = 0; i < s.length; i++) {
					const char = s[i]

					if (char === '*') {
						continue
					}

					if (char !== key[i]) {
						return false
					}
				}
			}

			return true
		},
	}
}

export const createExpandedDict = (strs: string[]) => {
	const dict = strs.reduce<Record<string, boolean>>((acc, str) => {
		const getReplaceCombinations = (curr: string, position: number) => {
			if (position === str.length) {
				acc[curr] = true
				return
			}

			getReplaceCombinations(curr + str[position], position + 1)
			getReplaceCombinations(curr + '*', position + 1)
		}
		getReplaceCombinations('', 0)

		return acc
	}, {})

	return {
		isInDict: (s: string) => {
			return dict[s]
		},
	}
}
