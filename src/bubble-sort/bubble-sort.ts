export const bubbleSort = (nums: number[]) => {
	for (let i = nums.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (nums[j] > nums[j + 1]) {
				const temp = nums[j]
				nums[j] = nums[j + 1]
				nums[j + 1] = temp
			}
		}
	}

	return nums
}
