import { expect, test } from 'vitest'
import { getGameWinner } from './game-winner'

test('game winner', () => {
	expect(getGameWinner('wwwbbbbwww')).toBe('bob')
	expect(getGameWinner('wwwwbbbbwww')).toBe('wendy')
	expect(getGameWinner('wbwbwbwbwb')).toBe('bob')
	expect(getGameWinner('wwwbb')).toBe('wendy')
})
