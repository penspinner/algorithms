import { expect, test } from 'vitest'
import { bubbleSort } from './bubble-sort'

test('bubble sort', () => {
	expect(bubbleSort([1, 3, 4, 2, -1])).toEqual([-1, 1, 2, 3, 4])
})
