"use client";
import { type Template } from "@/data/templates";
import { categories } from "@/data/categories";
import { SITE_CONFIG, formatPrice } from "@/config/site";
import { PhoneMockup } from "@/components/catalog/PhoneMockup";
import { useOrder } from "@/components/order/OrderProvider";
export function TemplateCard({ template }: { template: Template }) {
  const { openOrderModal } = useOrder();
  const demoUrl = template.demoUrl?.trim();
  const visual = (
    <>
      <PhoneMockup template={template} />
      <span className="visual-caption">{SITE_CONFIG.brandName} COLLECTION</span>
    </>
  );
  return (
    <article className={`invitation-card ${template.category}`}>
      {demoUrl ? (
        <a
          className="card-visual"
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Посмотреть ${template.title}`}
        >
          {visual}
        </a>
      ) : (
        <div className="card-visual">{visual}</div>
      )}
      <div className="card-info">
        <p className="card-category">
          {categories.find((c) => c.slug === template.category)?.label}
        </p>
        <h3>{template.title}</h3>
        <div className="card-prices">
          {template.oldPrice && <del>{formatPrice(template.oldPrice)}</del>}
          <strong>{formatPrice(template.price)}</strong>
        </div>
        <div className="card-actions">
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Посмотреть <span>↗</span>
            </a>
          ) : (
            <button disabled>Скоро</button>
          )}
          <button onClick={() => openOrderModal(template)}>
            Заказать <span>↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}
