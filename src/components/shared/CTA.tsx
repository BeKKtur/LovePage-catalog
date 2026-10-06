import Link from "next/link";
import { ContactLinks } from "@/components/shared/ContactLinks";
export function CTA() {
  return (
    <section className="cta">
      <p className="eyebrow">ВАША ИСТОРИЯ МОЖЕТ БЫТЬ ДРУГОЙ</p>
      <h2>
        Не нашли <em>тот самый</em> дизайн?
      </h2>
      <p>Создадим приглашение специально для вас.</p>
      <div>
        <Link href="/custom" className="button">
          Индивидуальный дизайн ↗
        </Link>
        <div className="cta-contacts">
          <p>Связаться с нами</p>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
