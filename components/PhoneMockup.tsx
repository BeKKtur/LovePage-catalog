import Image from 'next/image';
import type { Template } from '@/data/templates';
export function PhoneMockup({template,priority=false}:{template:Template;priority?:boolean}) {return <div className="phone"><Image src={template.coverImage} alt={`Приглашение ${template.title}`} width={420} height={840} priority={priority}/></div>}
