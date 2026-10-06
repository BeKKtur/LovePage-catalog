"use client";
import {createContext,useContext,useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import type {Template} from '@/data/templates';
import {BRAND_NAME,WHATSAPP_NUMBER,formatPrice} from '@/data/config';
import {PhoneMockup} from './PhoneMockup';
const Context=createContext<{preview:(t:Template)=>void;order:(t?:Template)=>void}>({preview:()=>{},order:()=>{}});
export const useExperience=()=>useContext(Context);
export function Experience({children}:{children:React.ReactNode}) {
 const [preview,setPreview]=useState<Template|null>(null); const [order,setOrder]=useState<{template?:Template}|null>(null); const [copied,setCopied]=useState(false); const dialog=useRef<HTMLDialogElement>(null);
 const active=!!preview||!!order;
 useEffect(()=>{const el=dialog.current;if(active){el?.showModal();document.body.style.overflow='hidden';}else {el?.close();document.body.style.overflow='';}return()=>{document.body.style.overflow='';};},[active]);
 const close=()=>{setPreview(null);setOrder(null);setCopied(false);};
 const message=order?.template?`Здравствуйте!\nХочу заказать дизайн «${order.template.title}».\nПодскажите, пожалуйста, подробнее.`:'Здравствуйте! Хочу обсудить индивидуальный сайт. Подскажите, пожалуйста, подробнее.';
 function openOrder(t?:Template){if(WHATSAPP_NUMBER){window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent(t?`Здравствуйте! Хочу заказать дизайн «${t.title}». Подскажите, пожалуйста, подробнее.`:message)}`,'_blank','noopener,noreferrer');return;}setPreview(null);setOrder({template:t});}
 return <Context.Provider value={{preview:t=>t.demoUrl?window.open(t.demoUrl,'_blank','noopener,noreferrer'):setPreview(t),order:openOrder}}>{children}<dialog ref={dialog} className="modal" onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close();}}><button className="close" aria-label="Закрыть окно" onClick={close}>×</button>{preview?<div className="preview-layout"><PhoneMockup template={preview}/><div><p className="eyebrow">ЗНАКОМСТВО С ДИЗАЙНОМ</p><h2>{preview.title}</h2><p>{preview.description}</p><p className="price">{formatPrice(preview.price)}</p><Link className="button" href={`/demo/${preview.slug}`} onClick={close}>Открыть приглашение</Link><button className="button outline" onClick={()=>openOrder(preview)}>Заказать этот дизайн</button><small>Демонстрация. Все имена и даты — примеры.</small></div></div>:order?<div className="order-content"><p className="eyebrow">ВАША ИСТОРИЯ НАЧИНАЕТСЯ</p><h2>{order.template?order.template.title:'Расскажите о вашей идее'}</h2><p>Контакты {BRAND_NAME} скоро появятся. Пока сохраните сообщение для заказа — его можно отправить нам после подключения WhatsApp.</p><textarea aria-label="Сообщение для заказа" value={message} readOnly rows={5}/><button className="button" onClick={async()=>{try{await navigator.clipboard.writeText(message);setCopied(true);}catch{setCopied(false);}}}>{copied?'Сообщение скопировано':'Скопировать сообщение'}</button><small>Заявка ещё не отправлена.</small></div>:null}</dialog></Context.Provider>;
}
export function OrderButton({template,children,className='button'}:{template?:Template;children:React.ReactNode;className?:string}){const {order}=useExperience();return <button className={className} onClick={()=>order(template)}>{children}</button>}
