import { expect, test } from 'vitest'
import { removeIslands } from './remove-islands'

test('remove islands', () => {
	expect(
		removeIslands([
			[1, 0, 0, 0, 0, 0],
			[0, 1, 0, 1, 1, 1],
			[0, 0, 1, 0, 1, 0],
			[1, 1, 0, 0, 1, 0],
			[1, 0, 1, 1, 0, 0],
			[1, 0, 0, 0, 0, 1],
		]),
	).toEqual([
		[1, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1],
		[0, 0, 0, 0, 1, 0],
		[1, 1, 0, 0, 1, 0],
		[1, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 1],
	])
})
