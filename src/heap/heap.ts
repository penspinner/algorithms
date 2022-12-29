/**
 * A min heap states that every node below needs to be greater than or equal to the current node.
 * It is a complete tree (all nodes are filled from left).
 */
export class MinHeap {
	length: number
	private data: number[]

	constructor() {
		this.data = []
		this.length = 0
	}

	insert(value: number) {
		this.data[this.length] = value
		this.heapifyUp(this.length)
		this.length++
	}

	delete() {
		if (this.length === 0) {
			return
		}

		const first = this.data[0]
		this.length--

		if (this.length === 0) {
			this.data = []
			return first
		}

		this.data[0] = this.data[this.length]
		this.heapifyDown(0)
		return first
	}

	private heapifyDown(index: number) {
		if (index >= this.length) {
			return
		}

		const leftChildIndex = this.getLeftChildIndex(index)

		if (leftChildIndex >= this.length) {
			return
		}

		const rightChildIndex = this.getRightChildIndex(index)
		const leftChild = this.data[leftChildIndex]
		const rightChild = this.data[rightChildIndex]
		const current = this.data[index]

		if (leftChild > rightChild && current > rightChild) {
			this.data[index] = rightChild
			this.data[rightChildIndex] = current
			this.heapifyDown(rightChildIndex)
		} else if (rightChild > leftChild && current > leftChild) {
			this.data[index] = leftChild
			this.data[leftChildIndex] = current
			this.heapifyDown(leftChildIndex)
		}
	}

	private heapifyUp(index: number) {
		if (index === 0) {
			return
		}

		const parentIndex = this.getParentIndex(index)
		const parent = this.data[parentIndex]
		const current = this.data[index]

		if (parent > current) {
			this.data[index] = parent
			this.data[parentIndex] = current
			this.heapifyUp(parentIndex)
		}
	}

	private getParentIndex(index: number) {
		return Math.floor((index - 1) / 2)
	}

	private getLeftChildIndex(index: number) {
		return index * 2 + 1
	}

	private getRightChildIndex(index: number) {
		return index * 2 + 2
	}
}

export class MaxHeap {
	length: number
	private data: number[]

	constructor() {
		this.data = []
		this.length = 0
	}

	insert(value: number) {
		this.data[this.length] = value
		this.heapifyUp(this.length)
		this.length++
	}

	delete() {
		if (this.length === 0) {
			return
		}

		const first = this.data[0]
		this.length--

		if (this.length === 0) {
			this.data = []
			return first
		}

		this.data[0] = this.data[this.length]
		this.heapifyDown(0)
		return first
	}

	private heapifyDown(index: number) {
		if (index >= this.length) {
			return
		}

		const leftChildIndex = this.getLeftChildIndex(index)

		if (leftChildIndex >= this.length) {
			return
		}

		const rightChildIndex = this.getRightChildIndex(index)
		const leftChild = this.data[leftChildIndex]
		const rightChild = this.data[rightChildIndex]
		const current = this.data[index]

		if (leftChild < rightChild && current < rightChild) {
			this.data[index] = rightChild
			this.data[rightChildIndex] = current
			this.heapifyDown(rightChildIndex)
		} else if (rightChild < leftChild && current < leftChild) {
			this.data[index] = leftChild
			this.data[leftChildIndex] = current
			this.heapifyDown(leftChildIndex)
		}
	}

	private heapifyUp(index: number) {
		if (index === 0) {
			return
		}

		const parentIndex = this.getParentIndex(index)
		const parent = this.data[parentIndex]
		const current = this.data[index]

		if (parent < current) {
			this.data[index] = parent
			this.data[parentIndex] = current
			this.heapifyUp(parentIndex)
		}
	}

	private getParentIndex(index: number) {
		return Math.floor((index - 1) / 2)
	}

	private getLeftChildIndex(index: number) {
		return index * 2 + 1
	}

	private getRightChildIndex(index: number) {
		return index * 2 + 2
	}
}
