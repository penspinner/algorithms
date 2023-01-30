export const getVolumeOfLakes = (volumes: number[]) => {
	if (volumes.length === 0) {
		return 0
	}

	let l = 0
	let r = volumes.length - 1
	let currMaxLeft = volumes[l]
	let currMaxRight = volumes[r]
	let volumeOfLakes = 0

	while (l < r) {
		if (currMaxLeft < currMaxRight) {
			l++
			currMaxLeft = Math.max(currMaxLeft, volumes[l])
			volumeOfLakes += currMaxLeft - volumes[l]
		} else {
			r--
			currMaxRight = Math.max(currMaxRight, volumes[r])
			volumeOfLakes += currMaxRight - volumes[r]
		}
	}

	return volumeOfLakes
}
