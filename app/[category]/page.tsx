import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {categories} from '@/data/categories';
import {Catalog} from '@/components/Catalog';
import {CTA} from '@/components/Sections';
import {templates} from '@/data/templates';
import {PhoneMockup} from '@/components/PhoneMockup';
export function generateStaticParams(){return categories.map(c=>({category:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{category:string}>}):Promise<Metadata>{const {category}=await params;const c=categories.find(c=>c.slug===category);const titles:Record<string,string>={wedding:'Свадебные онлайн-приглашения','kyz-uzatuu':'Кыз узатуу — онлайн приглашения',love:'Любовные сайты для пары',gift:'Персональные сайты-подарки'};return {title:titles[category]??c?.title,description:c?.description,openGraph:{title:`${titles[category]} | INVITA`,description:c?.description}};}
export default async function Category({params}:{params:Promise<{category:string}>}){const {category}=await params;const c=categories.find(c=>c.slug===category);if(!c)notFound();const sample=templates.find(t=>t.slug===c.sample)!;return <><section className={`collection-hero ${c.slug}`}><div><div className="breadcrumb"><Link href="/">Главная</Link><span>/</span>{c.title}</div><p className="eyebrow">{c.eyebrow}</p><h1>{c.title}</h1><p>{c.description}</p><span className="collection-note">{c.note}</span></div><div className="collection-phone"><PhoneMockup template={sample} priority/></div></section><section className="section collection-catalog"><div className="catalog-heading"><h2>Найдите <em>свой дизайн.</em></h2><span>{templates.filter(t=>t.category===c.slug).length} дизайна · от 1 500 сом</span></div><Catalog category={c.slug}/></section><CTA/></>}
