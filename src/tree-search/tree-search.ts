export type BinaryNode<T> = {
	value: T
	left?: BinaryNode<T>
	right?: BinaryNode<T>
}

export const breadthFirstSearch = <T>(node: BinaryNode<T> | undefined, target: T) => {
	const q = [node]

	while (q.length !== 0) {
		const current = q.shift()

		if (!current) {
			continue
		}

		if (current.value === target) {
			return true
		}

		q.push(current.left)
		q.push(current.right)
	}

	return false
}

export const depthFirstSearch = <T>(node: BinaryNode<T> | undefined, target: T): boolean => {
	if (!node) {
		return false
	}

	if (node.value === target) {
		return true
	}

	return depthFirstSearch(node.left, target) || depthFirstSearch(node.right, target)
}
