type Coordinate = {
	x: number
	y: number
}

export const mazeSolver = (maze: string[], wall: string, start: Coordinate, end: Coordinate) => {
	const path: Coordinate[] = []
	const seenByCoordinate: Record<`${number},${number}`, boolean> = {}

	const walkMaze = (current: Coordinate) => {
		if (current.x < 0 || current.y < 0 || current.x >= maze[0].length || current.y >= maze.length) {
			return false
		}

		if (maze[current.y][current.x] === wall) {
			return false
		}

		if (seenByCoordinate[`${current.x},${current.y}`]) {
			return false
		}

		if (current.x === end.x && current.y === end.y) {
			path.push(current)
			return true
		}

		seenByCoordinate[`${current.x},${current.y}`] = true
		path.push(current)

		for (const [x, y] of [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		]) {
			if (walkMaze({ x: current.x + x, y: current.y + y })) {
				return true
			}
		}

		path.pop()
	}

	walkMaze(start)
	return path
}
