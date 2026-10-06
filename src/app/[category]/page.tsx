import Image from "next/image";
import { SITE_CONFIG, formatPrice } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { TemplateGrid } from "@/components/catalog/TemplateGrid";
import { CTA } from "@/components/shared/CTA";
import { templates } from "@/data/templates";
export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const selectedCategory = categories.find(
    (selectedCategory) => selectedCategory.slug === category,
  );
  return {
    title: selectedCategory?.seoTitle,
    description: selectedCategory?.description,
    openGraph: {
      title: `${selectedCategory?.seoTitle} | ${SITE_CONFIG.brandName}`,
      description: selectedCategory?.description,
    },
  };
}
export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const selectedCategory = categories.find(
    (selectedCategory) => selectedCategory.slug === category,
  );
  if (!selectedCategory) notFound();
  return (
    <>
      <section className={`collection-hero ${selectedCategory.slug}`}>
        <div>
          <div className="breadcrumb">
            <Link href="/">Главная</Link>
            <span>/</span>
            {selectedCategory.title}
          </div>
          <p className="eyebrow">{selectedCategory.eyebrow}</p>
          <h1>{selectedCategory.title}</h1>
          <p>{selectedCategory.description}</p>
          <span className="collection-note">{selectedCategory.note}</span>
        </div>
        <div className="collection-image">
          <Image
            src={selectedCategory.image}
            alt={selectedCategory.title}
            width={720}
            height={480}
            priority
            sizes="(max-width: 600px) 90vw, 35vw"
          />
        </div>
      </section>
      <section className="section collection-catalog">
        <div className="catalog-heading">
          <h2>
            Найдите <em>свой дизайн.</em>
          </h2>
          <span>
            {
              templates.filter(
                (template) => template.category === selectedCategory.slug,
              ).length
            }{" "}
            дизайна · от {formatPrice(SITE_CONFIG.pricing.readyTemplate)}
          </span>
        </div>
        <TemplateGrid category={selectedCategory.slug} />
      </section>
      <CTA />
    </>
  );
}
