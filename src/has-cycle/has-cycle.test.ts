import { expect, test } from 'vitest'
import { hasCycle, Node } from './has-cycle'

test('returns true when a linked list has a cycle', () => {
	const head: Node = {}
	const node1: Node = {}
	const node2: Node = {}
	head.next = node1
	node1.next = node2
	node2.next = head
	expect(hasCycle(head)).toBe(true)
})

test('returns false when passed nothing', () => {
	expect(hasCycle(undefined)).toBe(false)
})

test('returns false when a linked list does not have a cycle', () => {
	const head: Node = {}
	const node1: Node = {}
	const node2: Node = {}
	head.next = node1
	node1.next = node2
	expect(hasCycle(head)).toBe(false)
})
