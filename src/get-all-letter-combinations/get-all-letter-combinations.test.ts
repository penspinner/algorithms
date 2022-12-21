import { expect, test } from 'vitest'
import { getAllLetterCombinations } from './get-all-letter-combinations'

test('returns all letter combinations', () => {
	expect(getAllLetterCombinations('79')).toMatchInlineSnapshot(`
		[
		  "PW",
		  "PX",
		  "PY",
		  "PZ",
		  "QW",
		  "QX",
		  "QY",
		  "QZ",
		  "RW",
		  "RX",
		  "RY",
		  "RZ",
		  "SW",
		  "SX",
		  "SY",
		  "SZ",
		]
	`)
})
