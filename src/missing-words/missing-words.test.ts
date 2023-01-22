import { expect, test } from 'vitest'
import { getMissingWords } from './missing-words'

test('missing words', () => {
	expect(getMissingWords('I like apples', 'like')).toEqual(['I', 'apples'])
	expect(getMissingWords('1 2 3 4 5', '2 4')).toEqual(['1', '3', '5'])
	expect(
		getMissingWords('I am using hackerrank to improve programming', 'am hackerrank to improve'),
	).toEqual(['I', 'using', 'programming'])
})
