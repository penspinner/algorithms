import {
	getPermutationsArr,
	getPermutationsStr,
	getUniquePermutationsArr,
	getUniquePermutationsStr,
} from './permutations'
import { describe, expect, test } from 'vitest'

describe('getPermutationsStr', () => {
	test('returns all permutations of a string', () => {
		expect(getPermutationsStr('abc')).toMatchInlineSnapshot(`
      [
        "abc",
        "acb",
        "bac",
        "bca",
        "cab",
        "cba",
      ]
    `)
	})

	test('returns empty array when passed an empty string', () => {
		expect(getPermutationsStr('')).toEqual([])
	})
})

describe('getUniquePermutationsStr', () => {
	test('returns all permutations of a string', () => {
		expect(getUniquePermutationsStr('abc')).toMatchInlineSnapshot(`
      [
        "abc",
        "acb",
        "bac",
        "bca",
        "cab",
        "cba",
      ]
    `)
	})

	test('returns all unique permutations of a string', () => {
		expect(getUniquePermutationsStr('acc')).toMatchInlineSnapshot(`
      [
        "acc",
        "cac",
        "cca",
      ]
    `)
	})
})

test('getPermutationsArr', () => {
	test('returns all permutations of an array', () => {
		expect(getPermutationsArr([1, 2, 3])).toMatchInlineSnapshot(`
      [
        [
          1,
          2,
          3,
        ],
        [
          1,
          3,
          2,
        ],
        [
          2,
          1,
          3,
        ],
        [
          2,
          3,
          1,
        ],
        [
          3,
          1,
          2,
        ],
        [
          3,
          2,
          1,
        ],
      ]
    `)
	})

	test('returns empty array when passed an empty array', () => {
		expect(getPermutationsArr([])).toEqual([])
	})
})

describe('getUniquePermutationsArr', () => {
	test('returns all permutations of an array', () => {
		expect(getUniquePermutationsArr([1, 2, 2])).toMatchInlineSnapshot(`
			[
			  [
			    1,
			    2,
			    2,
			  ],
			  [
			    2,
			    1,
			    2,
			  ],
			  [
			    2,
			    2,
			    1,
			  ],
			]
		`)
	})

	test('returns empty array when passed an empty array', () => {
		expect(getUniquePermutationsArr([])).toEqual([])
	})
})
