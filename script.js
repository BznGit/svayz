const fs = require('fs');
let str = `
set -e
git add .
git commit -m"${new Date().getUTCDate()}"
git push
`
fs.writeFileSync('gh.bat', str)