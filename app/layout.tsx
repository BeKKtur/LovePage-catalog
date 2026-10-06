import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Sections';
import {Experience} from '@/components/Experience';
import {BRAND_NAME} from '@/data/config';
export const metadata:Metadata={title:{default:`Цифровые приглашения и сайты-подарки | ${BRAND_NAME}`,template:`%s | ${BRAND_NAME}`},description:'Персональные свадебные приглашения, Кыз узатуу, любовные сайты и цифровые подарки. Выберите дизайн для вашего особенного момента.',openGraph:{type:'website',locale:'ru_RU',siteName:BRAND_NAME,title:`Цифровые приглашения и сайты-подарки | ${BRAND_NAME}`,description:'Ваши особенные моменты заслуживают красивого начала.'},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Experience><Header/><main>{children}</main><Footer/></Experience></body></html>}
