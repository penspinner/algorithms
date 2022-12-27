type Node<T> = {
	value: T
	next?: Node<T>
	prev?: Node<T>
}

const createNode = <V>(value: V): Node<V> => {
	return { value }
}

/**
 * LRU Cache stands for least recently used cache. The cache stores a certain number of key-value
 * pairs up to a given capacity. When the size of the cache exceeds the given capacity, the least
 * recently used node will be removed from the cache.
 */
export class LRUCache<K, V> {
	/**
	 * The length denotes the currently size of the cache.
	 */
	private length: number
	/**
	 * The head represents the most recently used node.
	 */
	private head?: Node<V>
	/**
	 * The tail represents the least recently used node.
	 */
	private tail?: Node<V>
	private lookup: Map<K, Node<V>>
	private reverseLookup: Map<Node<V>, K>

	constructor(private capacity: number) {
		this.length = 0
		this.head = this.tail = undefined
		this.lookup = new Map<K, Node<V>>()
		this.reverseLookup = new Map<Node<V>, K>()
	}

	/**
	 * Retrieves the value for the given key.
	 * @param key
	 * @returns V | `undefined`
	 */
	get(key: K) {
		const node = this.lookup.get(key)

		if (!node) {
			return undefined
		}

		this.detach(node)
		this.prepend(node)
		return node.value
	}

	/**
	 * Updates the cache given the key and the value.
	 * @param key
	 * @param value
	 */
	update(key: K, value: V) {
		const node = this.lookup.get(key)

		if (!node) {
			const newNode = createNode(value)
			this.lookup.set(key, newNode)
			this.reverseLookup.set(newNode, key)
			this.length++
			this.prepend(newNode)
			this.trim()
		} else {
			this.detach(node)
			this.prepend(node)
			node.value = value
		}
	}

	/**
	 * Detaches the node from its next and prev. If the detached node is the head, set the head to
	 * the next. If the detached node is the tail, set the tail to the prev.
	 * @param node
	 */
	private detach(node: Node<V>) {
		const prev = node.prev
		const next = node.next

		if (prev) {
			prev.next = next
		}

		if (next) {
			next.prev = prev
		}

		if (this.head === node) {
			this.head = this.head.next
		}

		if (this.tail === node) {
			this.tail = this.tail.prev
		}

		node.next = undefined
		node.prev = undefined
	}

	/**
	 * Moves the node to the front of the linked list as the head.
	 * @param node
	 */
	private prepend(node: Node<V>) {
		if (!this.head) {
			this.head = this.tail = node
			return
		}

		node.next = this.head
		this.head.prev = node
		this.head = node
	}

	/**
	 * Ensures that the cache does not exceed the capacity. If the length of the cache exceeds the
	 * capacity, detach the tail, which the the least recently used node.
	 */
	private trim() {
		if (this.length <= this.capacity) {
			return
		}

		if (!this.tail) {
			throw new Error('Unable to find tail while trimming cache.')
		}

		const tail = this.tail
		this.detach(tail)
		const tailKey = this.reverseLookup.get(tail)

		if (!tailKey) {
			throw new Error('Unable to find tail key while trimming cache.')
		}

		this.lookup.delete(tailKey)
		this.reverseLookup.delete(tail)
		this.length--
	}
}
