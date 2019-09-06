# deploy.sh
# 错误时停止
set -e

# 打包
yarn build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com/bertcai/lifebuoy 项目的 gh-pages 分支
git push -f git@github.com:bertcai/lifebuoy.git master:gh-pages

cd -
