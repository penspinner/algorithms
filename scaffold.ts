import * as fs from 'node:fs/promises'
import path from 'node:path'

const writeFileIfNotExists: typeof fs.writeFile = async (filePath, data) => {
	try {
		await fs.access(filePath.toString())
		console.log(`File "${filePath}" already exists, not writing.`)
	} catch (caught) {
		if (caught instanceof Error && 'code' in caught && caught.code === 'ENOENT') {
			await fs.writeFile(filePath, data)
			console.log(`File "${filePath}" written successfully.`)
		} else {
			console.error(`Error accessing file "${filePath}":`, caught)
		}
	}
}

const algorithmName = process.argv[2]
const directoryName = path.join('src', algorithmName)
await fs.mkdir(directoryName, { recursive: true })
console.log(`Directory ${directoryName} created successfully.`)
await writeFileIfNotExists(path.join(directoryName, `${algorithmName}.ts`), '')
await writeFileIfNotExists(path.join(directoryName, `${algorithmName}.test.ts`), '')
await writeFileIfNotExists(path.join(directoryName, 'README.md'), `# ${algorithmName}`)
