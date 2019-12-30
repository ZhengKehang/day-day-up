call npm run docs:build
cd docs/.vuepress/dist
pause
call git add -A
call git commit -m 'deploy'
call git push -f git@github.com:ZhengKehang/ZhengKehang.github.io.git master

cd ..
pause