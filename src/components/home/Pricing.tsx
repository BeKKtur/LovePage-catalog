import { ArrowUpRight, CheckIcon } from "@/components/shared/Icons";
import Link from "next/link";
import { SITE_CONFIG, formatPrice } from "@/config/site";
export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / СТОИМОСТЬ</p>
          <h2>
            Особенное —<br />
            <em>не значит сложное.</em>
          </h2>
        </div>
        <p>
          Выберите готовую композицию
          <br />
          или создайте свою с чистого листа.
        </p>
      </div>
      <div className="pricing-grid">
        {[
          {
            name: "Готовый дизайн",
            price: SITE_CONFIG.pricing.readyTemplate,
            items: [
              "Выбранный дизайн",
              "Ваши имена и дата",
              "Фотографии и текст",
              "Адрес мероприятия",
              "Адаптация под телефон",
            ],
          },
          {
            name: "Индивидуальный",
            price: SITE_CONFIG.pricing.customDesign,
            items: [
              "Уникальный дизайн",
              "Индивидуальные анимации",
              "Дополнительные блоки",
              "Нестандартный функционал",
              "Дизайн под вашу идею",
            ],
          },
        ].map((p, i) => (
          <article className={`pricing-card ${i ? "dark" : ""}`} key={p.name}>
            <p className="eyebrow">
              {i ? "СОЗДАНО ТОЛЬКО ДЛЯ ВАС" : "ВАША ИСТОРИЯ, НАША КОЛЛЕКЦИЯ"}
            </p>
            <h3>{p.name}</h3>
            <p className="pricing-value">
              <small>от</small> {formatPrice(p.price)}
            </p>
            <ul>
              {p.items.map((x) => (
                <li key={x}>
                  <CheckIcon /> <span>{x}</span>
                </li>
              ))}
            </ul>
            {i ? (
              <Link className="button" href="/custom">
                Обсудить идею <ArrowUpRight />
              </Link>
            ) : (
              <Link className="button" href="#collections">
                Выбрать дизайн <ArrowUpRight />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
