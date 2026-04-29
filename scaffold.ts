const writeFileIfNotExists = async (filePath: string, data: string) => {
	if (await Bun.file(filePath).exists()) {
		console.log(`File "${filePath}" already exists, not writing.`)
		return
	}
	await Bun.write(filePath, data)
	console.log(`File "${filePath}" written successfully.`)
}

const algorithmName = Bun.argv[2]
const directoryName = `src/${algorithmName}`
await writeFileIfNotExists(`${directoryName}/${algorithmName}.ts`, '')
await writeFileIfNotExists(`${directoryName}/${algorithmName}.test.ts`, '')
await writeFileIfNotExists(`${directoryName}/README.md`, `# ${algorithmName}`)
