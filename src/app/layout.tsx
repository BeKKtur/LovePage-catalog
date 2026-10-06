import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrderProvider } from "@/components/order/OrderProvider";
import { SITE_CONFIG } from "@/config/site";
export const metadata: Metadata = {
  title: {
    default: `Цифровые приглашения и сайты-подарки | ${SITE_CONFIG.brandName}`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Персональные свадебные приглашения, Кыз узатуу, любовные сайты и цифровые подарки. Выберите дизайн для вашего особенного момента.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_CONFIG.brandName,
    title: `Цифровые приглашения и сайты-подарки | ${SITE_CONFIG.brandName}`,
    description: "Ваши особенные моменты заслуживают красивого начала.",
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <OrderProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
