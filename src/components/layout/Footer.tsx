import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { categories } from "@/data/categories";
import { ContactLinks } from "@/components/shared/ContactLinks";
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand" href="/">
          {SITE_CONFIG.brandName}
          <span>digital atelier</span>
        </Link>
        <p>
          Цифровые приглашения
          <br />
          для особенных моментов.
        </p>
      </div>
      <nav>
        {categories.map((c) => (
          <Link key={c.slug} href={`/${c.slug}`}>
            {c.label}
          </Link>
        ))}
      </nav>
      <div className="footer-contact">
        <ContactLinks />
      </div>
      <div className="footer-bottom">
        <span>© 2026 {SITE_CONFIG.brandName}</span>
        <span>С вниманием к каждой истории.</span>
      </div>
    </footer>
  );
}
