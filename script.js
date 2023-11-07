const fs = require('fs');
let str = `
set -e
git add .
git commit -m"ok: ${new Date().getTime()}"
git push
`
fs.writeFileSync('gh.bat', str)