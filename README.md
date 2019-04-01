# Шаблоны для лекций AJS

Набор шаблонов для проведения лекций по AJS

Содержание:
* [Рабочее окружение](/workspace)
* [Модули](/modules)
* [Тесты и Continuous Integration](/tests-ci)
* [JSDoc](/jsdoc)
* [Все остальные лекции](/all)
* [TypeScript](/typescript)

По всем вопросам обращайтесь к @coursar.

## Как использовать

1. Склонируйте репозиторий
1. Перейдите в каталог интересующей вас лекции
1. Запустите `npm install` для установки зависимостей
1. Запустите `npm start` для старта в режиме разработки
1. Запустите `npm build` для сборки (лекция Modules+)
1. Запустите `npm test` для прогона тестов (лекция CI+)
1. Запустите `npm run doc` для генерации документации (лекция JSDoc+)


## Список зависимостей в порядке их повления в лекциях
```
# Рабочее окружение
npm install --save-dev live-server
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install @babel/polyfill core-js@3

# Модули
npm install --save-dev webpack webpack-cli
npm install --save-dev babel-loader css-loader html-loader html-webpack-plugin mini-css-extract-plugin
npm install --save-dev webpack-dev-server

# Test & CI
npm install --save-dev jest babel-jest

# JSDoc
npm install --save-dev jsdoc
```