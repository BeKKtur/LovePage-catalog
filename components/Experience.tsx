"use client";
import {createContext,useContext,useEffect,useRef,useState} from 'react';
import type {Template} from '@/data/templates';
import {categories} from '@/data/categories';
import {formatPrice, CONTACTS} from '@/data/config';
import {ContactLinks} from './ContactLinks';
const Context=createContext<{order:(t?:Template)=>void}>({order:()=>{}});
export const useExperience=()=>useContext(Context);
export function Experience({children}:{children:React.ReactNode}) {
 const [order,setOrder]=useState<{template?:Template}|null>(null);
 const [copyStatus,setCopyStatus]=useState<'idle'|'copied'|'failed'>('idle');
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const el=dialog.current;if(order){el?.showModal();document.body.style.overflow='hidden';}else{el?.close();document.body.style.overflow='';}return()=>{document.body.style.overflow='';};},[order]);
 const close=()=>{setOrder(null);setCopyStatus('idle');};
 const template=order?.template;
 const category=categories.find(c=>c.slug===template?.category);
 const message=template?`Здравствуйте! Хочу заказать дизайн «${template.title}» за ${formatPrice(template.price)}.`:'Здравствуйте! Хочу обсудить индивидуальный сайт.';
 async function copyMessage(){try{await navigator.clipboard.writeText(message);setCopyStatus('copied');}catch{setCopyStatus('failed');dialog.current?.querySelector('textarea')?.select();}}
 return <Context.Provider value={{order:t=>{setCopyStatus('idle');setOrder({template:t});}}}>{children}<dialog ref={dialog} className="modal order-modal" aria-labelledby="order-title" onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close();}}><button className="close" aria-label="Закрыть окно" onClick={close}>×</button>{order&&<div className="order-content"><p className="eyebrow">{template?'ВЫ ВЫБРАЛИ':'ВАША ИСТОРИЯ НАЧИНАЕТСЯ'}</p><h2 id="order-title">{template?.title??'Обсудим вашу идею'}</h2>{template&&<div className="order-selection"><span>{category?.title}</span><strong>{formatPrice(template.price)}</strong></div>}<p>Как вам удобнее связаться?</p><ContactLinks message={message}/><textarea aria-label="Сообщение для заказа" value={message} readOnly rows={3}/><button className="text-link copy-message" onClick={copyMessage}>Скопировать сообщение</button><span className="copy-feedback" role="status">{copyStatus==='copied'?'Скопировано ✓':copyStatus==='failed'?'Выделили текст — скопируйте вручную.':''}</span>{(!CONTACTS.instagram||!CONTACTS.whatsapp)&&<small>Контакты пока подключены не полностью. Сообщение можно сохранить для заказа.</small>}</div>}</dialog></Context.Provider>;
}
export function OrderButton({template,children,className='button'}:{template?:Template;children:React.ReactNode;className?:string}){const {order}=useExperience();return <button className={className} onClick={()=>order(template)}>{children}</button>}
