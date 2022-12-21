export type Node = {
	next?: Node
}

export const hasCycle = (head?: Node) => {
	let tortoise = head
	let hare = head?.next

	while (tortoise && hare) {
		if (tortoise === hare) {
			return true
		}

		tortoise = tortoise?.next
		hare = hare?.next?.next
	}

	return false
}
