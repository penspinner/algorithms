export type BinaryNode<T> = {
	value: T
	left?: BinaryNode<T>
	right?: BinaryNode<T>
}

export const preOrderTraversal = <T>(node: BinaryNode<T>) => {
	const nodes: T[] = []

	const preOrderTraverse = (current?: BinaryNode<T>) => {
		if (!current) {
			return
		}

		nodes.push(current.value)
		preOrderTraverse(current.left)
		preOrderTraverse(current.right)
	}

	preOrderTraverse(node)
	return nodes
}

export const postOrderTraversal = <T>(node: BinaryNode<T>) => {
	const nodes: T[] = []

	const postOrderTraverse = (current?: BinaryNode<T>) => {
		if (!current) {
			return
		}

		postOrderTraverse(current.left)
		postOrderTraverse(current.right)
		nodes.push(current.value)
	}

	postOrderTraverse(node)
	return nodes
}

export const inOrderTraversal = <T>(node: BinaryNode<T>) => {
	const nodes: T[] = []

	const inOrderTraverse = (current?: BinaryNode<T>) => {
		if (!current) {
			return
		}

		inOrderTraverse(current.left)
		nodes.push(current.value)
		inOrderTraverse(current.right)
	}

	inOrderTraverse(node)
	return nodes
}
