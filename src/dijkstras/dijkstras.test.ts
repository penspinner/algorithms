import { expect, test } from 'vitest'
import { dijkstras, GraphEdgesByVertex } from './dijkstras'

export const graphEdges1: GraphEdgesByVertex = []

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
graphEdges1[0] = [
	{ to: 1, weight: 3 },
	{ to: 2, weight: 1 },
]
graphEdges1[1] = [
	{ to: 0, weight: 3 },
	{ to: 2, weight: 4 },
	{ to: 4, weight: 1 },
]
graphEdges1[2] = [
	{ to: 1, weight: 4 },
	{ to: 3, weight: 7 },
	{ to: 0, weight: 1 },
]
graphEdges1[3] = [
	{ to: 2, weight: 7 },
	{ to: 4, weight: 5 },
	{ to: 6, weight: 1 },
]
graphEdges1[4] = [
	{ to: 1, weight: 1 },
	{ to: 3, weight: 5 },
	{ to: 5, weight: 2 },
]
graphEdges1[5] = [
	{ to: 6, weight: 1 },
	{ to: 4, weight: 2 },
	{ to: 2, weight: 18 },
]
graphEdges1[6] = [
	{ to: 3, weight: 1 },
	{ to: 5, weight: 1 },
]

test("dijkstra's algorithm", () => {
	expect(dijkstras(0, 6, graphEdges1)).toEqual([0, 1, 4, 5, 6])
})
