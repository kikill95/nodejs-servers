const fs = require('fs')
const path = require('path')

const pathToFile = path.resolve(__dirname, 'big.file')
const pathToUpdatedFile = path.resolve(__dirname, 'big.updated.file')

const file = fs.createWriteStream(pathToFile)
for (let i = 0; i <= 1e3; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n')
}
file.end()

//

const writable = fs.createWriteStream(pathToUpdatedFile)
const readable = fs.createReadStream(pathToFile)

// readableSrc
//   .pipe(transformStream1)
//   .pipe(transformStream2)
//   .pipe(finalWrtitableDest)

readable.on('data', (chunk) => {
  writable.write(chunk.toString().slice(0, 20) + '\n')
})
readable.on('end', () => {
  writable.end()
})
