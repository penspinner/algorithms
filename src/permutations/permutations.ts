export const getPermutationsStr = (s: string) => {
	if (s.length === 0) {
		return []
	}

	const permutations: string[] = []
	const permute = (s1: string, s2: string) => {
		if (s2.length === 0) {
			permutations.push(s1)
			return
		}

		for (let i = 0; i < s2.length; i++) {
			const char = s2[i]
			permute(s1 + char, s2.slice(0, i) + s2.slice(i + 1))
		}
	}
	permute('', s)
	return permutations
}

export const getUniquePermutationsStr = (s: string) => {
	if (s.length === 0) {
		return []
	}

	const permutations: string[] = []
	const seenPermutations: Record<string, boolean> = {}
	const permute = (s1: string, s2: string) => {
		if (s2.length === 0) {
			permutations.push(s1)
			return
		}

		for (let i = 0; i < s2.length; i++) {
			const left = s1 + s2[i]

			if (seenPermutations[left]) {
				continue
			}

			seenPermutations[left] = true
			permute(left, s2.slice(0, i) + s2.slice(i + 1))
		}
	}
	permute('', s)
	return permutations
}

export const getPermutationsArr = <T>(arr: T[]) => {
	if (arr.length === 0) {
		return []
	}

	const permutations: T[][] = []
	const permute = (arr1: T[], arr2: T[]) => {
		if (arr2.length === 0) {
			permutations.push(arr1.slice(0))
			return
		}

		for (const [i, num] of arr2.entries()) {
			permute(arr1.concat(num), arr2.slice(0, i).concat(arr2.slice(i + 1)))
		}
	}
	permute([], arr)
	return permutations
}

export const getUniquePermutationsArr = <T>(arr: T[]) => {
	if (arr.length === 0) {
		return []
	}

	const permutations: T[][] = []
	const seenPermutations: Record<string, boolean> = {}
	const permute = (arr1: T[], arr2: T[]) => {
		if (arr2.length === 0) {
			permutations.push(arr1.slice(0))
			return
		}

		for (const [i, num] of arr2.entries()) {
			const left = arr1.concat(num)
			const stringifiedLeft = left.join(',')

			if (seenPermutations[stringifiedLeft]) {
				continue
			}

			seenPermutations[stringifiedLeft] = true
			permute(arr1.concat(num), arr2.slice(0, i).concat(arr2.slice(i + 1)))
		}
	}
	permute([], arr)
	return permutations
}
