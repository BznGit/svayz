const fs = require('fs');
let str = `
set -e
git add .
git commit -m"qqqqqqqqqqqqqqq${new Date().getTime()}"
git push
`
fs.writeFileSync('gh.bat', str)