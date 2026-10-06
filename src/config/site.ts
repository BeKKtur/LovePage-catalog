// Основные настройки сайта: меняйте бренд, контакты и начальные цены здесь.
export const SITE_CONFIG = {
  brandName: "LovePage", // Название бренда
  contacts: {
    instagram: "", // Полная ссылка на Instagram
    whatsapp: "", // Международный номер или ссылка https://wa.me/...
  },
  pricing: {
    readyTemplate: 1500, // Цена готового дизайна «от»
    customDesign: 3000, // Цена индивидуального дизайна «от»
  },
};
export const formatPrice = (price: number) =>
  `${new Intl.NumberFormat("ru-RU").format(price)} сом`;
export function whatsappUrl(
  message = "Здравствуйте! Хочу обсудить персональный сайт.",
) {
  const contact = SITE_CONFIG.contacts.whatsapp.trim();
  if (!contact) return "";
  if (contact.startsWith("https://")) {
    const url = new URL(contact);
    url.searchParams.set("text", message);
    return url.toString();
  }
  const number = contact.replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : "";
}
