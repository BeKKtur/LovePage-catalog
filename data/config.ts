export const BRAND_NAME = "INVITA";
export const WHATSAPP_NUMBER: string = "";
export const INSTAGRAM_URL: string = "";
export const PRICES = { ready: 1500, custom: 3000 };
export const formatPrice = (price: number) => `${new Intl.NumberFormat('ru-RU').format(price)} сом`;
