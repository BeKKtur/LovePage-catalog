# LovePage

## БЫСТРОЕ УПРАВЛЕНИЕ LOVEPAGE

- Контакты и общие цены: `src/config/site.ts`
- Все дизайны: `src/data/templates.ts`
- Категории: `src/data/categories.ts`
- Фото дизайнов: `public/templates/`
- Фото категорий: `public/categories/`

## Где менять контакты
`src/config/site.ts` → `SITE_CONFIG.contacts.instagram` и `whatsapp`.
Instagram — полная ссылка. WhatsApp — международный номер или ссылка wa.me.
Пустой контакт отображается недоступным.

## Где менять цены
`src/config/site.ts` → `pricing.readyTemplate` и `customDesign` — цены «от».
Цена конкретного дизайна — его `price` в `src/data/templates.ts`.

## Как добавить новый дизайн
1. Добавь screenshot в `public/templates/`.
2. Открой `src/data/templates.ts` и скопируй первый объект.
3. Измени id, slug, title, description и price.
4. Выбери category: `wedding`, `kyz-uzatuu`, `love` или `gift`.
5. Укажи coverImage, например `/templates/my-design.webp`.
6. Вставь настоящую ссылку Vercel в demoUrl. Без неё показывается «Скоро».
7. Поставь featured: true, чтобы показать дизайн на главной.

## Категории и их изображения
Данные: `src/data/categories.ts`.
Изображения: `public/categories/` — wedding.webp, kyz-uzatuu.webp, love.webp, gift.webp.
Чтобы заменить изображение, замени файл или измени поле image.

## Где находятся компоненты
`src/components/layout/` — Header и Footer.
`home/` — главная и её секции. `catalog/` — карточки и mockup.
`order/` — окно и управление заказом. `shared/` — CTA, FAQ и контакты.
`src/app/[category]/page.tsx` — одна страница автоматически для каждой категории.

## Как запустить проект
```sh
npm install
npm run dev
```

## Как проверить перед публикацией
```sh
npm run lint
npm run typecheck
npm run build
```
Сборка создаёт `out/`. После изменения данных сделай push и публикацию.
Локальные /demo/ содержат примеры; RSVP не отправляется на сервер.

## Как поменять картинку сайта в телефоне
1. Подготовьте screenshot и добавьте в `public/templates/`, например `white-pearl.webp`.
2. В `src/data/templates.ts` найдите нужный шаблон.
3. Задайте `coverImage: "/templates/white-pearl.webp"`.
4. При необходимости задайте `imagePosition: "top"`. Варианты: `top`, `center`, `bottom`; по умолчанию `center`.
Компоненты и CSS менять не нужно. Если файл не загрузится, появится «Preview скоро».

## Управление каталогом
- `code`: короткий уникальный код, например `W-01`, `K-01`, `L-01`, `G-01`. Он включается в заказ.
- `status`: `available` (обычный режим), `soon` (пометка готовности; кнопка демо определяется demoUrl), `hidden` (скрыть). Без status действует available.
- `badge`: например `"Популярное"` или `"Новинка"`; можно не указывать.
- `order`: порядок карточек, меньшее число идёт первым.
- `featured: true`: показывать на главной.
- `price`: цена дизайна, `demoUrl`: настоящая ссылка на его сайт. Пустая ссылка = «Скоро».
Все изменения выполняются в объекте шаблона без редактирования React-компонентов.
