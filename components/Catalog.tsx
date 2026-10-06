"use client";
import {templates,type Template} from '@/data/templates';
import {categories,type TemplateCategory} from '@/data/categories';
import {formatPrice} from '@/data/config';
import {PhoneMockup} from './PhoneMockup';
import {useExperience} from './Experience';
export function InvitationCard({template}:{template:Template}){const {preview,order}=useExperience();return <article className={`invitation-card ${template.category}`}><button className="card-visual" onClick={()=>preview(template)} aria-label={`Посмотреть ${template.title}`}><PhoneMockup template={template}/><span className="visual-caption">INVITA COLLECTION</span></button><div className="card-info"><p className="card-category">{categories.find(c=>c.slug===template.category)?.label}</p><h3>{template.title}</h3><div className="card-prices">{template.oldPrice&&<del>{formatPrice(template.oldPrice)}</del>}<strong>{formatPrice(template.price)}</strong></div><div className="card-actions"><button onClick={()=>preview(template)}>Посмотреть</button><button onClick={()=>order(template)}>Заказать <span>↗</span></button></div></div></article>}
export function Catalog({category,featured=false}:{category?:TemplateCategory;featured?:boolean}){const list=templates.filter(t=>(!category||t.category===category)&&(!featured||t.featured));return <div className="catalog">{list.map(t=><InvitationCard template={t} key={t.id}/>)}</div>}
