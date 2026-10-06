import { getVisibleTemplates } from "@/data/templates";
import type { TemplateCategory } from "@/data/categories";
import { TemplateCard } from "./TemplateCard";
export function TemplateGrid({
  category,
  featured = false,
}: {
  category?: TemplateCategory;
  featured?: boolean;
}) {
  const visibleTemplates = getVisibleTemplates(category, featured);
  return (
    <div className="catalog">
      {visibleTemplates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}
