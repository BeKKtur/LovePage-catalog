import Link from 'next/link';
import {Hero} from '@/components/Hero';
import {CategoryGrid} from '@/components/CategoryGrid';
import {Catalog} from '@/components/Catalog';
import {HowItWorks,Features,Pricing,Benefits,FAQ,CTA} from '@/components/Sections';
export default function Home(){return <><Hero/><CategoryGrid/><section className="section featured" id="designs"><div className="section-heading"><div><p className="eyebrow">02 / ИЗБРАННЫЕ ДИЗАЙНЫ</p><h2>Любовь <em>с первого взгляда.</em></h2></div><Link href="#collections" className="text-link">Смотреть все коллекции ↗</Link></div><Catalog featured/></section><HowItWorks/><Features/><Pricing/><Benefits/><FAQ/><CTA/></>}
