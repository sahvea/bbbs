# Сайт для организации “Старшие Братья Старшие Сёстры” [BBBS]

НКО поддерживает детей, которым требуется внимание: оставшихся без попечения родителей, приёмных, детей из неполных, многодетных или неблагополучных семей, детей с ограниченными возможностями.


| [Ссылка на макет](https://www.figma.com/file/7W1tGYowENhNjf276209jp/BBBS) | Ссылка на GitHub Pages(будет позже)  |
| --- | --- |


### Добавление основных линтеров в проект

Установить `NodeJS` на компьютер, если еще не установлен: https://nodejs.org/en/ (рекомендованную версию)

**Проверка установленных версий**
Для проверки установленных версий прописать в терминале команды:
* `node --version`
* `npm --version`
* `npx --version`

**Установка Gulp**
* `npm install --global gulp-cli`
* `npm install --save-dev gulp`

**Установка необходимых пакетов npm**
* `npm i autoprefixer`
* `npm install editorconfig`
* `npm i browser-sync`
* `npm install eslint`
* `npm i eslint-config`
* `npm install gulp-csso`
* `npm install gulp-imagemin`
* `npm install gulp-plumber`
* `npm install postcss gulp-postcss`
* `npm i gulp-posthtml`
* `npm i gulp-rename`
* `npm install node-sass gulp-sass`
* `npm i gulp-sourcemaps`
* `npm install node-normalize-scss`
* `npm install normalize.css`
* `npm i posthtml-include`
* `npm i stylelint`
* `npm i stylelint-config-standard`
* `npm install del`


### Настройки редактора

**Необходимые плагины**
* Sass
* ESlint
* Prettier - Code formatter
* EditorConfig for VS Code


### Работа с Gulp

Команда в терминале `gulp start` запускает компиляцию Scss, копирует необходимые файлы в папку `build`, оптимизирует изображения и запускает лайв-сервер.

Выйти из команды `gulp watch` в терминале можно сочетанием клавиш `Ctrl + C`.
