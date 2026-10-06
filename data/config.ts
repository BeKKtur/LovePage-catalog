export const BRAND_NAME = "LovePage";
export const CONTACTS: { instagram: string; whatsapp: string } = {
  instagram: "", // Полная ссылка https://www.instagram.com/ваш_профиль/
  whatsapp: "", // Международный номер, например 996XXXXXXXXX
};
export const PRICES = { ready: 1500, custom: 3000 };
export const formatPrice = (price: number) => `${new Intl.NumberFormat('ru-RU').format(price)} сом`;
export function whatsappUrl(message = "Здравствуйте! Хочу обсудить персональный сайт.") {
  const number = CONTACTS.whatsapp.replace(/\D/g, '');
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '';
}
