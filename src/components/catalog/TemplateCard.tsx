"use client";
import { type Template } from "@/data/templates";
import { categories } from "@/data/categories";
import { SITE_CONFIG, formatPrice } from "@/config/site";
import { PhoneMockup } from "@/components/catalog/PhoneMockup";
import { useOrder } from "@/components/order/OrderProvider";
export function TemplateCard({ template }: { template: Template }) {
  const { openOrderModal } = useOrder();
  // Заполненная ссылка всегда открывает демо; пустая показывает «Скоро».
  const demoUrl = template.demoUrl?.trim();
  const visual = (
    <>
      <PhoneMockup
        image={template.coverImage}
        demoUrl={template.demoUrl}
        alt={`${template.title} — превью дизайна`}
        imagePosition={template.imagePosition}
      />
      <span className="visual-caption">{SITE_CONFIG.brandName} COLLECTION</span>
    </>
  );
  return (
    <article
      data-template-code={template.code}
      className={`invitation-card ${template.category}`}
    >
      {demoUrl ? (
        <a
          className="card-visual"
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Посмотреть ${template.title}`}
        >
          {visual}
          {template.badge && (
            <span className="template-badge">{template.badge}</span>
          )}
        </a>
      ) : (
        <div className="card-visual">
          {visual}
          {template.badge && (
            <span className="template-badge">{template.badge}</span>
          )}
        </div>
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
            <a
              aria-label={`Посмотреть ${template.title}`}
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="desktop-preview-label">Посмотреть</span>
              <span className="mobile-preview-label">Смотреть</span>{" "}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button disabled>Скоро</button>
          )}
          <button
            aria-label={`Заказать ${template.title}`}
            onClick={() => openOrderModal(template)}
          >
            Заказать <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}
