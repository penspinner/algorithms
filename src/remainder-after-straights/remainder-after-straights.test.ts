import { expect, test } from 'vitest'
import { getRemainderAfterStraights } from './remainder-after-straights'

test('remainder after straights', () => {
	expect(getRemainderAfterStraights([2, 4, 3, 1, 2, 1], 4)).toBe(2)
	expect(getRemainderAfterStraights([2, 4, 3, 1, 2, 11], 4)).toBe(2)
	expect(getRemainderAfterStraights([2, 4, 3, 1, 2, 11], 5)).toBe(6)
	expect(getRemainderAfterStraights([2, 4, 3, 1, 2, 11], 2)).toBe(2)
	expect(getRemainderAfterStraights([2, 3, 1], 3)).toBe(0)
	expect(getRemainderAfterStraights([2, 1, 3, 3, 1, 2, 3], 3)).toBe(1)
	expect(getRemainderAfterStraights([4, 5], 3)).toBe(2)
	expect(getRemainderAfterStraights([1, 2, 3, 4, 5, 6], 2)).toBe(0)
	expect(getRemainderAfterStraights([2, 3, 4, 5, 6], 3)).toBe(2)
	expect(getRemainderAfterStraights([2, 3, 1, 4, 3, 4, 2, 1, 5], 3)).toBe(3)
	expect(getRemainderAfterStraights([2, 3, 1, 4, 3, 4, 2, 1, 5, 6, 8], 3)).toBe(2)
})
