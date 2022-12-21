import { expect, test } from 'vitest'
import { conwaysGameOfLife } from './conways-game-of-life'

test("conway's game of life returns correct next board", () => {
	expect(
		conwaysGameOfLife([
			[0, 1, 0],
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 0],
		]),
	).toMatchInlineSnapshot(`
		[
		  [
		    0,
		    0,
		    0,
		  ],
		  [
		    1,
		    0,
		    1,
		  ],
		  [
		    0,
		    1,
		    1,
		  ],
		  [
		    0,
		    1,
		    0,
		  ],
		]
	`)
})
