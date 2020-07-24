# остановить публикацию при ошибках
set -e

# сборка
gulp
npm run test
npm run build

# переход в каталог сборки
# cd dist
# git init

git add .
echo 'Enter your commit for deploy: '
read -r commitName
git commit -a -m "${commitName}"

git push
echo 'Succesfull push. Congrat!'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages