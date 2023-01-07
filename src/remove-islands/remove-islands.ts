export const removeIslands = (matrix: number[][]): number[][] => {
	const isAtBorder = (rowIndex: number, colIndex: number) => {
		return (
			rowIndex === 0 ||
			rowIndex === matrix.length - 1 ||
			colIndex === 0 ||
			colIndex === matrix[rowIndex].length - 1
		)
	}

	const isLand = (rowIndex: number, colIndex: number) => {
		return matrix[rowIndex][colIndex] === 1
	}

	const isWater = (rowIndex: number, colIndex: number) => {
		return matrix[rowIndex][colIndex] === 0
	}

	const isConnectedToLandAtBorderByCoordinate: Record<`${number},${number}`, boolean | undefined> =
		{}

	const isConnectedToLandAtBorder = (
		rowIndex: number,
		colIndex: number,
		visitedByCoordinate: Record<`${number},${number}`, boolean | undefined> = {},
	) => {
		if (isWater(rowIndex, colIndex)) {
			return false
		}

		if (isConnectedToLandAtBorderByCoordinate[`${rowIndex},${colIndex}`]) {
			return true
		}

		if (visitedByCoordinate[`${rowIndex},${colIndex}`]) {
			return false
		}

		visitedByCoordinate[`${rowIndex},${colIndex}`] = true

		if (isLand(rowIndex, colIndex) && isAtBorder(rowIndex, colIndex)) {
			return true
		}

		for (const [x, y] of [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		]) {
			if (isConnectedToLandAtBorder(rowIndex + y, colIndex + x, visitedByCoordinate)) {
				Object.keys(visitedByCoordinate).forEach((coordinate) => {
					isConnectedToLandAtBorderByCoordinate[coordinate as keyof typeof visitedByCoordinate] =
						true
				})
				return true
			}
		}

		return false
	}

	const newMatrix: number[][] = []

	for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
		const newMatrixRow: number[] = []

		for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
			if (isConnectedToLandAtBorder(rowIndex, colIndex)) {
				newMatrixRow.push(1)
			} else {
				newMatrixRow.push(0)
			}
		}

		newMatrix.push(newMatrixRow)
	}

	return newMatrix
}
