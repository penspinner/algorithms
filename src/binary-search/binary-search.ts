export const binarySearch = (nums: number[], target: number) => {
	let lo = 0
	let hi = nums.length

	while (lo < hi) {
		const mid = Math.floor(lo + (hi - lo) / 2)
		const midNum = nums[mid]

		if (midNum === target) {
			return true
		}

		if (midNum > target) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}

	return false
}
