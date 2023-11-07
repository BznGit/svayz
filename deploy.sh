set -e
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:BznGit/svayz.git master:gh-pages
cd -