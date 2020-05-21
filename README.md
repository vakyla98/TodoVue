# To Do List 

This is my first project with using Vue.js and vue-ecosystem.
You also can see list of all technology at vakyla98.github.io/TodoVue/dist

## Local install and other command
Install all dependencies 
```sh
$ npm i
```
Run local-host and hot reloading
```sh
$ npm run serve
```
Build prod with minifying code
```sh
$ npm run dev
```
Run test
```sh
$ npm run test
```
Creating svg-sprite from images in `.\assest`
```sh
$ gulp
```

### Some screens with explanations

1.Modal window change ToDo text. Used basic data-flow with `data` and `props`
![Changing data](https://github.com/vakyla98/TodoVue/blob/gh-pages/src/assets/readme/Edit.png)

2.Here i create a svg-sprite using Gulp \
![Sprites](https://github.com/vakyla98/TodoVue/blob/gh-pages/src/assets/readme/Sprite.png)

3. Items holds at two list with computed properties. We can create,delete, or edit item. 
https://github.com/vakyla98/TodoVue/blob/gh-pages/src/assets/readme/Tasks.png

4. At Users page i used placeholder REST API with user list. When they loading, we see beautiful spinner, too we have error handling on timeout and error code like a 404. \
![User loading](https://github.com/vakyla98/TodoVue/blob/gh-pages/src/assets/readme/User_loading.png) \
![User loaded](https://github.com/vakyla98/TodoVue/blob/gh-pages/src/assets/readme/User_loaded.png) \
![Error handling](https://github.com/vakyla98/TodoVue/blob/gh-pages/src/assets/readme/User_error.png)
