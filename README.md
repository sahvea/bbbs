# Сайт для организации “Старшие Братья Старшие Сёстры” [BBBS]


НКО поддерживает детей, которым требуется внимание: оставшихся без попечения родителей, приёмных, детей из неполных, многодетных или неблагополучных семей, детей с ограниченными возможностями.


| [Ссылка на макет](https://www.figma.com/file/11gCLSDOYlvkbuI3FU36Up/BBBS-for-students) | Ссылка на GitHub Pages(будет позже) | [Ссылка на бриф](https://www.notion.so/a12abc4ad03448ab82dc2578365a4f64) |
| --- | --- | --- |

_____

### Добавление основных линтеров в проект

Установить `NodeJS` на компьютер, если еще не установлен, с [официального сайта](https://nodejs.org/en/) (рекомендованную версию)

**Проверка установленных версий**
* `node --version`
* `npm --version`
* `npx --version`

**Установка Gulp**
* `npm install --global gulp-cli`
* `npm install --save-dev gulp`

**Установка необходимых пакетов npm**
`npm i gulp autoprefixer editorconfig browser-sync eslint eslint-config gulp-csso gulp-imagemin gulp-plumber postcss gulp-postcss gulp-posthtml gulp-rename node-sass gulp-sass gulp-sourcemaps node-normalize-scss normalize.css posthtml-include stylelint stylelint-config-standard del --save-dev`



### Настройки редактора

**Необходимые плагины**
* Sass
* ESlint
* Prettier - Code formatter
* EditorConfig for VS Code


### Работа с Gulp

Команда в терминале `gulp start` запускает компиляцию Scss, копирует необходимые файлы в папку `build`, оптимизирует изображения и запускает лайв-сервер.

Команда в терминале `gulp build` пересобирает папку `build` (нужно, когда добавляются новые изображения или прочие файлы).

Выйти из режима `gulp watch` в терминале можно сочетанием клавиш `Ctrl + C`.
