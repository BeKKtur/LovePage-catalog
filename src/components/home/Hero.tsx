import Link from "next/link";
import { getVisibleTemplates } from "@/data/templates";
import { PhoneMockup } from "@/components/catalog/PhoneMockup";
export function Hero() {
  const weddingTemplate = getVisibleTemplates("wedding")[0];
  const kyzTemplate = getVisibleTemplates("kyz-uzatuu")[0];
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">ЦИФРОВЫЕ ПРИГЛАШЕНИЯ & ОСОБЕННЫЕ ИСТОРИИ</p>
        <h1>
          Особенные моменты
          <br />
          заслуживают
          <br />
          <em>красивого начала.</em>
        </h1>
        <p className="hero-description">
          Персональные сайты-приглашения и сайты-подарки.
          <br className="desktop-break" /> Чтобы почувствовать праздник ещё до
          встречи.
        </p>
        <div className="hero-actions">
          <Link className="button" href="#collections">
            Выбрать дизайн <span>↗</span>
          </Link>
          <Link className="text-link" href="/custom">
            Индивидуальный заказ
          </Link>
        </div>
        <div className="hero-note">
          <span className="tiny-star">✧</span>
          <p>
            Создано с вниманием к вашей истории.
            <br />
            <span>Легко отправить. Невозможно забыть.</span>
          </p>
        </div>
      </div>
      <div className="hero-art">
        <span className="art-label">A MOMENT TO REMEMBER</span>
        <div className="hero-phone back">
          <PhoneMockup
            image={kyzTemplate?.coverImage}
            demoUrl={kyzTemplate?.demoUrl}
            alt={`${kyzTemplate?.title ?? "Кыз узатуу"} — превью дизайна`}
            imagePosition={kyzTemplate?.imagePosition}
            priority
          />
        </div>
        <div className="hero-phone front">
          <PhoneMockup
            image={weddingTemplate?.coverImage}
            demoUrl={weddingTemplate?.demoUrl}
            alt={`${weddingTemplate?.title ?? "Свадебное приглашение"} — превью дизайна`}
            imagePosition={weddingTemplate?.imagePosition}
            priority
          />
        </div>
        <div className="art-stamp">
          made with
          <br />
          <em>love</em>
        </div>
        <p className="art-bottom">YOUR STORY, BEAUTIFULLY TOLD.</p>
      </div>
      <div className="hero-bottom">
        <span>СВАДЬБА</span>
        <i>✧</i>
        <span>КЫЗ УЗАТУУ</span>
        <i>✧</i>
        <span>LOVE STORIES</span>
        <i>✧</i>
        <span>ПОДАРКИ</span>
      </div>
    </section>
  );
}
