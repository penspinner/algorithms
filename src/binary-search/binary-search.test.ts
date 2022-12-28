import { expect, test } from 'vitest'
import { binarySearch } from './binary-search'

test('binary search', () => {
	expect(binarySearch([1, 3, 4, 23, 34, 56, 99, 3434, 23423], 4)).toBe(true)
	expect(binarySearch([1, 3, 4, 23, 34, 56, 99, 3434, 23423], 444)).toBe(false)
})
