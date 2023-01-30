import { expect, test } from 'vitest'
import { getVolumeOfLakes } from './volume-of-lakes'

test('volume of lakes', () => {
	expect(getVolumeOfLakes([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2])).toBe(15)
})
