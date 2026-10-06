import { CONTACTS, whatsappUrl } from '@/data/config';
export function ContactLinks({ message }: { message?: string }) {
  return <div className="contact-links">{[
    { label: 'Instagram', url: CONTACTS.instagram.trim() },
    { label: 'WhatsApp', url: whatsappUrl(message) },
  ].map(({label,url}) => url
    ? <a key={label} className="text-link" href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>
    : <span key={label} className="text-link contact-disabled" aria-disabled="true" title="Контакт пока не подключён">{label} ↗</span>)}</div>;
}
