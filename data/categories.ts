export const categories = [
{slug:'wedding',label:'Свадьба',title:'Свадебные приглашения',eyebrow:'WEDDING COLLECTION',description:'Приглашение, которое гости запомнят ещё до начала вашего праздника.',short:'Элегантное начало вашего главного дня.',color:'#eae2d4',sample:'white-pearl',note:'Ваша история начинается здесь',names:'Александр & София'},
{slug:'kyz-uzatuu',label:'Кыз узатуу',title:'Кыз узатуу',eyebrow:'KYZ UZATUU COLLECTION',description:'Красивое цифровое приглашение для особенного семейного события.',short:'Традиции, нежность и новый счастливый путь.',color:'#edddda',sample:'pink-blossom',note:'Сүйүү менен чакырабыз',names:'Айдана'},
{slug:'love',label:'Для любимых',title:'Для любимого человека',eyebrow:'LOVE STORIES',description:'Ваши воспоминания могут стать маленькой интерактивной историей.',short:'Самые дорогие воспоминания — в одной истории.',color:'#e2d4ca',sample:'our-story',note:'Некоторые истории — навсегда',names:'Ты. Я. Мы.'},
{slug:'gift',label:'Подарки',title:'Подарочные сайты',eyebrow:'DIGITAL GIFTS',description:'Подарок начинается ещё до того, как человек его откроет.',short:'Маленькая ссылка. Большой сюрприз.',color:'#e6ddbd',sample:'the-gift',note:'Для одного особенного человека',names:'Кое-что для тебя'},
] as const;
export type TemplateCategory = typeof categories[number]['slug'];
