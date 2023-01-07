import { expect, test } from 'vitest'
import { getMinRewards } from './get-min-rewards'

test('get min rewards', () => {
	expect(getMinRewards([8, 4, 2, 1, 3, 6, 7, 9, 5])).toEqual(25)
})
