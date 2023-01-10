import { expect, test } from 'vitest'
import { decodeString } from './decode-string'

test('decode string', () => {
	expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
	expect(decodeString('3[a2[c]]')).toBe('accaccacc')
	expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
})
