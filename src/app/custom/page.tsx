import { SITE_CONFIG, formatPrice } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import { OrderButton } from "@/components/order/OrderProvider";
import { FAQ } from "@/components/shared/FAQ";
export const metadata: Metadata = {
  title: "Индивидуальный сайт-приглашение",
  description:
    "Персональный дизайн, анимации и функционал под вашу особенную идею.",
  openGraph: {
    title: `Индивидуальный дизайн | ${SITE_CONFIG.brandName}`,
    description: "Создадим вашу идею специально для вас.",
  },
};
export default function Custom() {
  return (
    <>
      <section className="custom-hero section">
        <div className="breadcrumb">
          <Link href="/">Главная</Link>
          <span>/</span>Индивидуальный дизайн
        </div>
        <p className="eyebrow">ЕСТЬ СВОЯ ИДЕЯ?</p>
        <h1>
          Создадим её
          <br />
          <em>специально для вас.</em>
        </h1>
        <p>
          Если среди готовых дизайнов нет того самого — расскажите нам свою
          идею. Мы создадим персональный сайт с индивидуальным дизайном,
          анимациями и функционалом.
        </p>
        <OrderButton>Обсудить идею ↗</OrderButton>
        <span className="custom-signature">One of a kind.</span>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>
            Каждая деталь —<br />
            <em>по вашему желанию.</em>
          </h2>
          <p>
            От {formatPrice(SITE_CONFIG.pricing.customDesign)}.<br />
            Стоимость и сроки согласуем до начала работы.
          </p>
        </div>
        <div className="custom-options">
          {[
            "Дизайн",
            "Цвета",
            "Музыка",
            "Фотографии",
            "Анимации",
            "Тексты",
            "Интерактив",
            "Дополнительные блоки",
          ].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              <h3>{x}</h3>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
    </>
  );
}
