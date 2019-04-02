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


## Список зависимостей в порядке их появления в лекциях
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


## Что такое шаблоны и для чего?

Все лекции продвинутого уровня построены на обучении реальным навыкам, а не работе в песочнице. Поэтому все студенты с первых лекций используют инфраструктуру, максимально похожую на промышленную:
* npm/yarn
* git
* babel, core-js и полифиллы
* eslint
* jest
* webpack
* webpack-dev-server
* continuous integration/deployment

Поэтому для всех лекций, кроме тех, где это отдельно оговорено, лекторам необходимо использовать заранее подготовленный шаблон, чтобы не возиться с настройкой вручную и не показывать код в "консольке браузера".

Мы делаем практический курс, который не оторван от жизни. Курс про то, как разработка строится в реальной жизни с:
* редактором кода (или IDE)
* npm
* git/GitHub
* Code Style
* Code Review
* CI/CD

Обязательно:
* при демонстрации на лекциях использовать базовый шаблон
* в качестве среды разработки использовать VSCode со светлой темой оформления и подключенным плагином ESLint

Недопустимо:
* использовать сервисы jsbin.com, repl.it и аналогичные для демонстрации
* отключение linter'а
* демонстрация через открытие файла html в браузере (file://)

Зачем: мы стремимся сделать курс для студентов, чтобы студент смог понять и повторить то, что вы делаете на лекции, не тратя кучу времени на то, чтобы разобраться:
* как настроен ваш проект
* как настроен ваш редактор кода
* и почему с него требуют ESLint и CodeStyle в домашках, а лектор на это забивает
