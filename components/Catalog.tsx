"use client";
import {templates,type Template} from '@/data/templates';
import {categories,type TemplateCategory} from '@/data/categories';
import {BRAND_NAME,formatPrice} from '@/data/config';
import {PhoneMockup} from './PhoneMockup';
import {useExperience} from './Experience';
export function InvitationCard({template}:{template:Template}){
 const {order}=useExperience();
 const demoUrl=template.demoUrl?.trim();
 const visual=<><PhoneMockup template={template}/><span className="visual-caption">{BRAND_NAME} COLLECTION</span></>;
 return <article className={`invitation-card ${template.category}`}>
 {demoUrl?<a className="card-visual" href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Посмотреть ${template.title}`}>{visual}</a>:<div className="card-visual">{visual}</div>}
 <div className="card-info"><p className="card-category">{categories.find(c=>c.slug===template.category)?.label}</p><h3>{template.title}</h3><div className="card-prices">{template.oldPrice&&<del>{formatPrice(template.oldPrice)}</del>}<strong>{formatPrice(template.price)}</strong></div><div className="card-actions">{demoUrl?<a href={demoUrl} target="_blank" rel="noopener noreferrer">Посмотреть <span>↗</span></a>:<button disabled>Скоро</button>}<button onClick={()=>order(template)}>Заказать <span>↗</span></button></div></div></article>;
}
export function Catalog({category,featured=false}:{category?:TemplateCategory;featured?:boolean}){const list=templates.filter(t=>(!category||t.category===category)&&(!featured||t.featured));return <div className="catalog">{list.map(t=><InvitationCard template={t} key={t.id}/>)}</div>}
