/**
 * Gets the longest palindrome substring with time complexity O(n^3).
 */
export const getLongestPalindromeSubstring = (s: string) => {
	let longestPalindromeSubstring = ''

	for (let i = 0; i < s.length; i++) {
		for (let j = 1; j <= s.length; j++) {
			const current = s.slice(i, j)

			if (isPalindrome(current) && current.length > longestPalindromeSubstring.length) {
				longestPalindromeSubstring = current
			}
		}
	}

	return longestPalindromeSubstring
}

const isPalindrome = (s: string) => {
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== s[s.length - 1 - i]) {
			return false
		}
	}

	return true
}

/**
 * Gets the longest palindrome substring with time complexity O(n^2).
 */
export const getLongestPalindromeSubstringFast = (s: string) => {
	let longestPalindromeSubstring = ''

	for (let i = 0; i < s.length; i++) {
		const evenPalindrome = getLongestPalindromeFrom(s, i - 1, i + 1)

		if (evenPalindrome.length > longestPalindromeSubstring.length) {
			longestPalindromeSubstring = evenPalindrome
		}

		const oddPalindrome = getLongestPalindromeFrom(s, i, i + 1)

		if (oddPalindrome.length > longestPalindromeSubstring.length) {
			longestPalindromeSubstring = oddPalindrome
		}
	}

	return longestPalindromeSubstring
}

const getLongestPalindromeFrom = (s: string, l: number, r: number) => {
	let tempL = l
	let tempR = r

	while (tempL >= 0 && tempR < s.length && s[tempL] === s[tempR]) {
		tempL--
		tempR++
	}

	return s.substring(tempL + 1, tempR)
}
