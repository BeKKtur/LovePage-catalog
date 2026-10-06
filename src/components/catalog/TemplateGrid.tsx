import { templates } from "@/data/templates";
import type { TemplateCategory } from "@/data/categories";
import { TemplateCard } from "./TemplateCard";
export function TemplateGrid({
  category,
  featured = false,
}: {
  category?: TemplateCategory;
  featured?: boolean;
}) {
  const categoryTemplates = templates.filter(
    (template) => !category || template.category === category,
  );
  const visibleTemplates = featured
    ? categoryTemplates.filter((template) => template.featured)
    : categoryTemplates;
  return (
    <div className="catalog">
      {visibleTemplates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}
