import { expect, test } from 'vitest'
import {
	BinaryNode,
	inOrderTraversal,
	postOrderTraversal,
	preOrderTraversal,
} from './tree-traversal'

test('pre-order traversal', () => {
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
	expect(preOrderTraversal(node)).toEqual([
		25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90,
	])
})

test('post-order traversal', () => {
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
	expect(postOrderTraversal(node)).toEqual([
		4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25,
	])
})

test('in-order traversal', () => {
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
	expect(inOrderTraversal(node)).toEqual([
		4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90,
	])
})
