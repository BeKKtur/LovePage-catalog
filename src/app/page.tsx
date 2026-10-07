import { ArrowUpRight } from "@/components/shared/Icons";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { TemplateGrid } from "@/components/catalog/TemplateGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";
import { Benefits } from "@/components/home/Benefits";
import { FAQ } from "@/components/shared/FAQ";
import { CTA } from "@/components/shared/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <section className="section featured" id="designs">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / ИЗБРАННЫЕ ДИЗАЙНЫ</p>
            <h2>
              Любовь <em>с первого взгляда.</em>
            </h2>
          </div>
          <Link href="#collections" className="text-link">
            Смотреть все коллекции <ArrowUpRight />
          </Link>
        </div>
        <TemplateGrid featured />
      </section>
      <HowItWorks />
      <Features />
      <Pricing />
      <Benefits />
      <FAQ />
      <CTA />
    </>
  );
}
