# Publish to gh-pages
```bash
pnpm generate
cd .output/public
touch .nojekyll
echo alanwu.xyz >> CNAME
git init
git add .
git commit -m "deploy"
git remote add origin https://github.com/lunw1024/lunw1024.github.io.git
git push -f origin main:gh-pages
```
