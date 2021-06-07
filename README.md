| [Ссылка на макет](https://www.figma.com/file/11gCLSDOYlvkbuI3FU36Up/BBBS-for-students) | [Ссылка на GitHub Pages](https://sophiemilash.github.io/bbbs/) | [Ссылка на бриф](https://www.notion.so/a12abc4ad03448ab82dc2578365a4f64) |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ |

---

### Как посмотреть версию авторизованного/неавторизованного пользователя

`(логика только для проверяющих, в продакшене будет лучше)`

- Любая страница, которая имеет версию для каждого типа пользователя меняет свою версию (на авторизованную или наоборот) при клике на иконку личного кабинета.
- Попасть в личный кабинет можно по клику на иконку личного кабинета со страниц, где "нет" версии авторизованного пользователя (т.е. права детей и любой раздел из читать и смотреть).

---

### Добавление основных линтеров в проект

Установить `NodeJS` на компьютер, если еще не установлен, с [официального сайта](https://nodejs.org/en/)

**Проверка установленных версий**

- `node --version`
- `npm --version`
- `npx --version`

**Установка Gulp**

- `npm install --global gulp-cli`
- `npm install --save-dev gulp`

**Установка необходимых пакетов npm**

- `npm i gulp autoprefixer editorconfig browser-sync eslint eslint-config gulp-csso gulp-imagemin gulp-plumber postcss gulp-postcss gulp-posthtml gulp-rename node-sass gulp-sass gulp-sourcemaps node-normalize-scss normalize.css posthtml-include stylelint stylelint-config-standard del --save-dev`

### Настройки редактора

**Необходимые плагины**

- Sass
- ESlint
- Prettier - Code formatter
- EditorConfig for VS Code

### Работа с Gulp

Команда в терминале `gulp start` запускает компиляцию Scss, копирует необходимые файлы в папку `build`, оптимизирует изображения и запускает лайв-сервер.

Команда в терминале `gulp build` пересобирает папку `build` (нужно, когда добавляются новые изображения или прочие файлы).

Выйти из режима `gulp watch` в терминале можно сочетанием клавиш `Ctrl + C`.
=======
[Ссылка на GitHub Pages](https://sophiemilash.github.io/bbbs-2/)

* HTML5 & SCSS;
* Gulp
* JS;
* BEM flat.