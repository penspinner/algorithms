type Vertex = number
type GraphEdge = { to: Vertex; weight: number }
export type GraphEdgesByVertex = GraphEdge[][]

export const dijkstras = (
	source: number,
	destination: number,
	graphEdgesByVertex: GraphEdgesByVertex,
) => {
	const seenByVertex = new Array(graphEdgesByVertex.length).fill(false)
	const prevByVertex = new Array(graphEdgesByVertex.length).fill(-1)
	const distanceByVertex = new Array(graphEdgesByVertex.length).fill(Number.POSITIVE_INFINITY)
	distanceByVertex[source] = 0

	const hasUnvisitedVertices = () => {
		return seenByVertex.some(
			(seen, index) => !seen && distanceByVertex[index] < Number.POSITIVE_INFINITY,
		)
	}

	const getLowestUnvisitedVertex = () => {
		let lowestUnvisitedVertex = -1
		let lowestDistance = Number.POSITIVE_INFINITY

		for (let i = 0; i < seenByVertex.length; i++) {
			if (seenByVertex[i]) {
				continue
			}

			if (distanceByVertex[i] < lowestDistance) {
				lowestDistance = distanceByVertex[i]
				lowestUnvisitedVertex = i
			}
		}

		return lowestUnvisitedVertex
	}

	while (hasUnvisitedVertices()) {
		const lowestUnvisitedVertex = getLowestUnvisitedVertex()
		seenByVertex[lowestUnvisitedVertex] = true
		const graphEdges = graphEdgesByVertex[lowestUnvisitedVertex]

		for (const graphEdge of graphEdges) {
			if (seenByVertex[graphEdge.to]) {
				continue
			}

			const newDistance = distanceByVertex[lowestUnvisitedVertex] + graphEdge.weight

			if (newDistance < distanceByVertex[graphEdge.to]) {
				distanceByVertex[graphEdge.to] = newDistance
				prevByVertex[graphEdge.to] = lowestUnvisitedVertex
			}
		}
	}

	const shortestPathToDestination: number[] = []
	let curr = destination

	while (prevByVertex[curr] !== -1) {
		shortestPathToDestination.push(curr)
		curr = prevByVertex[curr]
	}

	shortestPathToDestination.push(source)
	return shortestPathToDestination.reverse()
}
