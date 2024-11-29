import { expect, test } from 'vitest'
import { type BinaryNode, breadthFirstSearch, depthFirstSearch } from './tree-search'

test('breadth-first search', () => {
	const node: BinaryNode<number> = {
		value: 25,
		left: {
			value: 15,
			left: { value: 10, left: { value: 4 }, right: { value: 12 } },
			right: { value: 22, left: { value: 18 }, right: { value: 24 } },
		},
		right: {
			value: 50,
			left: { value: 35, left: { value: 31 }, right: { value: 44 } },
			right: { value: 70, left: { value: 66 }, right: { value: 90 } },
		},
	}
	expect(breadthFirstSearch(node, 22)).toBe(true)
	expect(breadthFirstSearch(node, 9999)).toBe(false)
	expect(breadthFirstSearch(undefined, 100)).toBe(false)
})

test('depth-first search', () => {
	const node: BinaryNode<number> = {
		value: 25,
		left: {
			value: 15,
			left: { value: 10, left: { value: 4 }, right: { value: 12 } },
			right: { value: 22, left: { value: 18 }, right: { value: 24 } },
		},
		right: {
			value: 50,
			left: { value: 35, left: { value: 31 }, right: { value: 44 } },
			right: { value: 70, left: { value: 66 }, right: { value: 90 } },
		},
	}
	expect(depthFirstSearch(node, 66)).toBe(true)
	expect(depthFirstSearch(node, 22)).toBe(true)
	expect(depthFirstSearch(node, 9999)).toBe(false)
	expect(depthFirstSearch(undefined, Number.POSITIVE_INFINITY)).toBe(false)
})
