# Publish to gh-pages
```bash
pnpm generate
cd .output/public
touch .nojekyll
echo alanwu.xyz >> CNAME
git init -b gh-pages
git add .
git commit -m "deploy"
git remote add origin https://github.com/lunw1024/lunw1024.github.io.git
git push -f origin gh-pages:gh-pages
```

Or, simply do `pnpm deploy`
