const fs = require('fs')

module.exports = {
  name: 'import-css',
  setup(build) {
    build.onEnd(() => {
      const outFile = './dist/index.js'
      const code = fs.readFileSync(outFile, 'utf-8')
      const newCode = `import"./style.css";${code}`
      fs.writeFileSync(outFile, newCode)
    })
  },
}
