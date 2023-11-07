const fs = require('fs');
let str = `
set -e
git add .
git commit -m"${new Date()}"
git push
`
fs.writeFileSync('gh.bat', str)