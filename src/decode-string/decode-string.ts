export const decodeString = (s: string) => {
	const stack: string[] = []

	for (const c of s) {
		if (c === ']') {
			// Keep popping the stack and building the string until we find a '['.
			let str = ''
			let popped = stack.pop()
			while (popped && popped !== '[') {
				str = popped + str
				popped = stack.pop()
			}

			// Keep popping the stack until we find the number of times to repeat.
			let repeatCount = ''
			popped = stack.pop()
			while (popped && !isNaN(+popped)) {
				repeatCount = popped + repeatCount
				popped = stack.pop()
			}

			if (popped) {
				stack.push(popped)
			}

			stack.push(str.repeat(+repeatCount))
		} else {
			stack.push(c)
		}
	}

	return stack.join('')
}
