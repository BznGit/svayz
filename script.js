const fs = require('fs');
let date = new Date().getTime()
console.log(date)
let str = `
set -e
git add .
git commit -m"${new Date().getTime()}"
git push
`
fs.writeFileSync('gh.bat', str)