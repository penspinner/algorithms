import { expect, test } from 'vitest'
import { getBestSum } from './best-sum'

test('best sum', () => {
	expect(getBestSum(0, [1, 2])).toEqual([])
	expect(getBestSum(3, [14, 2])).toEqual(undefined)
	expect(getBestSum(7, [5, 3, 4, 7])).toEqual([7])
	expect(getBestSum(8, [2, 3, 5])).toEqual([3, 5])
	expect(getBestSum(8, [2, 3, 5])).toEqual([3, 5])
	expect(getBestSum(100, [1, 2, 25])).toEqual([25, 25, 25, 25])
})
