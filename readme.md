# Базовый шаблон для верстки

Базовый шаблон для верстки с настроенной gulp сборкой

## Используемые технологии

Html(PUG), CSS(SCSS), javaScript(jQuery), SwiperJS, NodeJs, Gulp

## Установка

Рекомендуемая среда разработки - VS Code.
Предварительно установите Node.js (https://nodejs.org/en/) и gulp (https://gulpjs.com/).
Затем в консоли пропишите:

```bash
cd gulp
npm i
```

## Запуск

```bash
cd gulp
```

```bash
gulp
```

### Собрать только Стили

```bash
gulp css
```

### Собрать только JavaScript

```bash
gulp js
```

## Структура файлов

### Аpp/assets

В данной папки храним картика (img), javascript(js), шрифты (fonts)

### App/pages

Данная папка предназначена для работы с pug

#### App/pages/сommon

1. layout.pug - Базовый шаблон разметки
2. header.pug - Разметка для шапки
3. footer.pug - Разметка подвала сайта
4. popup.pug - Разметка всплывающих окон

### App/pages/includes

В данной папки хранятся общии блоки для страниц, и блоки для отдельных страниц

1. папка index - Храним блоки для главной страницы.
2. Папка common - Храним общии блоки, которые повторятся на нескольки страницах.

## App/scss

Стили в scss всего сайта

### App/scss/common

Элементы для сайта

1. global.scss - Базовые стили, подключение Normalize css
2. text.scss - Общии стили заголовков, абзацев и других текстовых элементов
3. buttons.scss - Стили для кнопок на сайте.
4. header.scss - Стили для шапки сайта
5. footer.scss - Стили подвала сайта
6. popup.scss - Стили для всплывающих окон

### App/scss/mixins

Миксины для сайта

1. media.scss - Миксимы для адаптивов

```bash
@include media-custom(123px) {}      // Костумные запросы
@include media-tablet-horizontal {} // 1024px и выше
@include media-tablet {}            // 640px и выше
@include media-mobile-horizontal {} // 480px и выше
@include media-mobile {}            // 320px и выше
```

### App/scss/pages

данной папки хранятся общии стили блоков для страниц, и стили блоков для отдельных страниц

1. папка index - Хранит стили для главной страницы.
2. Папка common - Хранит общии стили блоков, которые повторятся на нескольки страницах.

### App/scss/utils

Утильты для scss

1. fonts.scss - Подключаем шрифты для сайта
2. variables.scss - Переменые, цвета, размеры адаптивов и тд.
