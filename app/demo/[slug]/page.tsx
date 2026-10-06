import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {templates} from '@/data/templates';
import {DemoExperience} from '@/components/DemoExperience';
export function generateStaticParams(){return templates.map(t=>({slug:t.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const t=templates.find(t=>t.slug===slug);return {title:`Демо ${t?.title??'приглашения'}`,description:t?.description,robots:{index:false,follow:true}};}
export default async function Demo({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const t=templates.find(t=>t.slug===slug);if(!t)notFound();return <div className={`demo-page ${t.category}`}><div className="demo-bar"><Link href={`/${t.category}`}>← В коллекцию</Link><span>Демонстрация · {t.title}</span></div><div className="demo-cover"><Image src={t.coverImage} alt={t.title} width={420} height={840} priority/></div><DemoExperience template={t}/></div>}
