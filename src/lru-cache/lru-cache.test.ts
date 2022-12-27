import { expect, test } from 'vitest'
import { LRUCache } from './lru-cache'

test('LRUCache', () => {
	const lruCache = new LRUCache<string, number>(3)
	expect(lruCache.get('foo')).toBe(undefined)

	lruCache.update('foo', 69)
	expect(lruCache.get('foo')).toBe(69)

	lruCache.update('bar', 420)
	expect(lruCache.get('bar')).toBe(420)

	lruCache.update('baz', 1337)
	expect(lruCache.get('baz')).toBe(1337)

	lruCache.update('ball', 69420)
	expect(lruCache.get('ball')).toBe(69420)
	expect(lruCache.get('foo')).toBe(undefined)
	expect(lruCache.get('bar')).toBe(420)

	lruCache.update('foo', 69)
	expect(lruCache.get('bar')).toBe(420)
})
