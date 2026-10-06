# LovePage

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
