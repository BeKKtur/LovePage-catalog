import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
export function Categories() {
  return (
    <section className="section" id="collections">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / КОЛЛЕКЦИИ</p>
          <h2>
            У каждого момента
            <br />
            <em>свой характер.</em>
          </h2>
        </div>
        <p>
          Выберите повод.
          <br />
          Мы найдём для него красивые слова и форму.
        </p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <Link
            className={`category-card ${category.slug}`}
            href={category.href}
            key={category.slug}
          >
            <div className="category-art">
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 600px) 45vw, (max-width: 850px) 43vw, 23vw"
              />
            </div>
            <div className="category-text">
              <h3>{category.title}</h3>
              <p>{category.short}</p>
              <span className="text-link">Смотреть коллекцию ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
