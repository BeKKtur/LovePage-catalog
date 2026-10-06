/*
==================================================
КАК ДОБАВИТЬ НОВЫЙ ДИЗАЙН
==================================================
1. Добавь screenshot в /public/templates/.
2. Скопируй первый объект шаблона ниже.
3. Измени id, slug, title, category, description,
   price, coverImage и demoUrl.
4. featured: true — дизайн также появится на главной.

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
    // Реальная ссылка Vercel или другого хостинга; пустая = «Скоро»
    demoUrl: "",
    // Показывать также среди избранных на главной
    featured: true,
  },
  {
    id: "golden-vows",
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
