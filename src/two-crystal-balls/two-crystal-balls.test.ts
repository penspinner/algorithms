import { expect, test } from 'vitest'
import { twoCrystalBalls } from './two-crystal-balls'

test('two crystal balls', () => {
	expect(twoCrystalBalls([false, false, false, true, true])).toBe(3)
	expect(twoCrystalBalls([false, false, false, false, true])).toBe(4)
	expect(twoCrystalBalls([false, false, false, false, false])).toBe(-1)
	expect(
		twoCrystalBalls([
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
		]),
	).toBe(9)
})
