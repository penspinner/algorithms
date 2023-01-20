import { expect, test } from 'vitest'
import { createDict, createExpandedDict } from './is-in-dict'

test('dict', () => {
	const dict = createDict(['abcd'])
	expect(dict.isInDict('abcd')).toBe(true)
	expect(dict.isInDict('*bcd')).toBe(true)
})

test('expanded dict', () => {
	const expandedDict = createExpandedDict(['abcd'])
	expect(expandedDict.isInDict('abcd')).toBe(true)
	expect(expandedDict.isInDict('*bcd')).toBe(true)
})
