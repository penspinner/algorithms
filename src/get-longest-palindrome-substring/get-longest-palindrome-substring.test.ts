import { expect, test } from 'vitest'
import {
	getLongestPalindromeSubstring,
	getLongestPalindromeSubstringFast,
} from './get-longest-palindrome-substring'

test('get longest palindrome substring', () => {
	expect(getLongestPalindromeSubstring('')).toEqual('')
	expect(getLongestPalindromeSubstring('bb')).toEqual('bb')
	expect(getLongestPalindromeSubstring('asdfdasdfaa')).toEqual('dfd')
	expect(getLongestPalindromeSubstring('asdasdfaa')).toEqual('aa')
})

test('get longest palindrome substring fast', () => {
	expect(getLongestPalindromeSubstringFast('')).toEqual('')
	expect(getLongestPalindromeSubstringFast('bb')).toEqual('bb')
	expect(getLongestPalindromeSubstringFast('asdfdasdfaa')).toEqual('dfd')
	expect(getLongestPalindromeSubstringFast('asdasdfaa')).toEqual('aa')
})
