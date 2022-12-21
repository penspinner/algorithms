export const conwaysGameOfLife = (board: number[][]) => {
	const nextBoard: typeof board = []
	board.forEach((row, rowIndex) => {
		const newRow: typeof board[number] = []
		row.forEach((column, columnIndex) => {
			const liveNeighborsCount = getLiveNeighborsCount(board, rowIndex, columnIndex)

			if (column === 0) {
				if (liveNeighborsCount === 3) {
					newRow.push(1)
				} else {
					newRow.push(0)
				}
			} else if (column === 1) {
				if (liveNeighborsCount < 2) {
					newRow.push(0)
				} else if (liveNeighborsCount > 3) {
					newRow.push(0)
				} else {
					newRow.push(1)
				}
			}
		})
		nextBoard.push(newRow)
	})
	return nextBoard
}

const neighborCoordinates = [
	[1, 0],
	[1, 1],
	[0, 1],
	[-1, 1],
	[-1, 0],
	[-1, -1],
	[0, -1],
	[1, -1],
]

const getLiveNeighborsCount = (board: number[][], rowIndex: number, columnIndex: number) => {
	let liveNeighborsCount = 0
	neighborCoordinates.forEach(([x, y]) => {
		const cell = board[rowIndex + y]?.[columnIndex + x]

		if (cell === 1) {
			liveNeighborsCount++
		}
	})
	return liveNeighborsCount
}
