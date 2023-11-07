const fs = require('fs');
let str = `
set -e
git add .
git commit -m"some else+++"
git push
`
fs.writeFileSync('gh.bat', str)