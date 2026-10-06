/*
==================================================
КАК ДОБАВИТЬ НОВЫЙ ДИЗАЙН
==================================================
1. Добавь screenshot в /public/templates/.
2. Скопируй первый объект шаблона ниже.
3. Измени id, slug, title, category, description,
   code (уникальный), order, price, coverImage и demoUrl.
4. featured: true — дизайн также появится на главной.
status: available — обычная карточка; soon — пометка готовности (demoUrl определяет доступность демо); hidden — скрыта.
badge: "Новинка" — маленькая метка (можно не указывать).
order — порядок карточек, меньшее число идёт раньше.
imagePosition: "top", "center" или "bottom" — кадрирование screenshot.

Категории:
wedding    = Свадьба
kyz-uzatuu = Кыз узатуу
love       = Для любимых
gift       = Подарки
==================================================
*/
import type { TemplateCategory } from "./categories";
export interface Template {
  id: string;
  slug: string;
  code: string;
  order: number;
  status?: "available" | "soon" | "hidden";
  badge?: string;
  imagePosition?: string;
  title: string;
  category: TemplateCategory;
  description: string;
  oldPrice?: number;
  price: number;
  coverImage: string;
  demoUrl?: string;
  featured?: boolean;
}
export const templates: Template[] = [
  {
    id: "white-pearl",
    code: "W-01",
    order: 1,
    status: "available",
    slug: "white-pearl",
    // Название в каталоге
    title: "White Pearl",
    // Категория из списка выше
    category: "wedding",
    // Короткое описание
    description:
      "Персональный дизайн «White Pearl»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    // Старая цена (можно убрать)
    oldPrice: 2500,
    // Цена именно этого дизайна
    price: 1500,
    // Screenshot: например /templates/white-pearl.webp
    coverImage: "/previews/white-pearl.svg",
    // Какая часть screenshot видна: top, center или bottom
    imagePosition: "center",
    // Реальная ссылка Vercel или другого хостинга; пустая = «Скоро»
    demoUrl: "https://marriage-coral.vercel.app",
    // Показывать также среди избранных на главной
    featured: true,
  },
  {
    id: "golden-vows",
    code: "W-02",
    order: 2,
    status: "available",
    slug: "golden-vows",
    title: "Golden Vows",
    category: "wedding",
    description:
      "Персональный дизайн «Golden Vows»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/golden-vows.svg",
    demoUrl: "",
    featured: false,
  },
  {
    id: "emerald-wedding",
    code: "W-03",
    order: 3,
    status: "available",
    slug: "emerald-wedding",
    title: "Emerald Wedding",
    category: "wedding",
    description:
      "Персональный дизайн «Emerald Wedding»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/emerald-wedding.svg",
    demoUrl: "",
    featured: true,
  },
  {
    id: "royal-blue",
    code: "W-04",
    order: 4,
    status: "available",
    slug: "royal-blue",
    title: "Royal Blue",
    category: "wedding",
    description:
      "Персональный дизайн «Royal Blue»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/royal-blue.svg",
    demoUrl: "",
    featured: false,
  },
  {
    id: "pink-blossom",
    code: "K-01",
    order: 1,
    status: "available",
    slug: "pink-blossom",
    title: "Pink Blossom",
    category: "kyz-uzatuu",
    description:
      "Персональный дизайн «Pink Blossom»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/pink-blossom.svg",
    demoUrl: "",
    featured: true,
  },
  {
    id: "white-butterfly",
    code: "K-02",
    order: 2,
    status: "available",
    slug: "white-butterfly",
    title: "White Butterfly",
    category: "kyz-uzatuu",
    description:
      "Персональный дизайн «White Butterfly»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/white-butterfly.svg",
    demoUrl: "",
    featured: false,
  },
  {
    id: "golden-flower",
    code: "K-03",
    order: 3,
    status: "available",
    slug: "golden-flower",
    title: "Golden Flower",
    category: "kyz-uzatuu",
    description:
      "Персональный дизайн «Golden Flower»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/golden-flower.svg",
    demoUrl: "",
    featured: false,
  },
  {
    id: "our-story",
    code: "L-01",
    order: 1,
    status: "available",
    slug: "our-story",
    title: "Our Story",
    category: "love",
    description:
      "Персональный дизайн «Our Story»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/our-story.svg",
    demoUrl: "",
    featured: true,
  },
  {
    id: "love-letter",
    code: "L-02",
    order: 2,
    status: "available",
    slug: "love-letter",
    title: "Love Letter",
    category: "love",
    description:
      "Персональный дизайн «Love Letter»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/love-letter.svg",
    demoUrl: "",
    featured: false,
  },
  {
    id: "forever-us",
    code: "L-03",
    order: 3,
    status: "available",
    slug: "forever-us",
    title: "Forever Us",
    category: "love",
    description:
      "Персональный дизайн «Forever Us»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/forever-us.svg",
    demoUrl: "",
    featured: false,
  },
  {
    id: "the-gift",
    code: "G-01",
    order: 1,
    status: "available",
    slug: "the-gift",
    title: "The Gift",
    category: "gift",
    description:
      "Персональный дизайн «The Gift»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/the-gift.svg",
    demoUrl: "",
    featured: true,
  },
  {
    id: "secret-box",
    code: "G-02",
    order: 2,
    status: "available",
    slug: "secret-box",
    title: "Secret Box",
    category: "gift",
    description:
      "Персональный дизайн «Secret Box»: ваши имена, фотографии и особенные слова в гармоничной композиции.",
    oldPrice: 2500,
    price: 1500,
    coverImage: "/previews/secret-box.svg",
    demoUrl: "",
    featured: true,
  },
];

// Скрытые дизайны не попадают в каталог. Исходный массив не изменяется.
export function getVisibleTemplates(
  category?: TemplateCategory,
  featured = false,
) {
  return templates
    .filter(
      (template) =>
        template.status !== "hidden" &&
        (!category || template.category === category) &&
        (!featured || template.featured),
    )
    .sort((first, second) => first.order - second.order);
}
