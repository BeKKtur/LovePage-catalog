// Чтобы добавить категорию, добавьте объект ниже и задайте image, href и тексты.
export const categories = [
  {
    slug: "wedding",
    seoTitle: "Свадебные онлайн-приглашения",
    href: "/wedding",
    image: "/categories/wedding.webp",
    label: "Свадьба",
    title: "Свадебные приглашения",
    eyebrow: "WEDDING COLLECTION",
    description:
      "Приглашение, которое гости запомнят ещё до начала вашего праздника.",
    short: "Элегантное начало вашего главного дня.",
    note: "Ваша история начинается здесь",
  },
  {
    slug: "kyz-uzatuu",
    seoTitle: "Кыз узатуу — онлайн приглашения",
    href: "/kyz-uzatuu",
    image: "/categories/kyz-uzatuu.webp",
    label: "Кыз узатуу",
    title: "Кыз узатуу",
    eyebrow: "KYZ UZATUU COLLECTION",
    description:
      "Красивое цифровое приглашение для особенного семейного события.",
    short: "Традиции, нежность и новый счастливый путь.",
    note: "Сүйүү менен чакырабыз",
  },
  {
    slug: "love",
    seoTitle: "Любовные сайты",
    href: "/love",
    image: "/categories/love.webp",
    label: "Для любимых",
    title: "Для любимого человека",
    eyebrow: "LOVE STORIES",
    description:
      "Ваши воспоминания могут стать маленькой интерактивной историей.",
    short: "Самые дорогие воспоминания — в одной истории.",
    note: "Некоторые истории — навсегда",
  },
  {
    slug: "gift",
    seoTitle: "Персональные сайты-подарки",
    href: "/gift",
    image: "/categories/gift.webp",
    label: "Подарки",
    title: "Подарочные сайты",
    eyebrow: "DIGITAL GIFTS",
    description: "Подарок начинается ещё до того, как человек его откроет.",
    short: "Маленькая ссылка. Большой сюрприз.",
    note: "Для одного особенного человека",
  },
] as const;
export type TemplateCategory = (typeof categories)[number]["slug"];
