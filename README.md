# InspectSea Survey

Багатомовний (UA/EN) сайт сюрвеєрської компанії. Stack: Vite + React 19 + TypeScript, React Router, Tailwind CSS v4, i18next. Форма заявки працює через Vercel serverless-функцію (`/api/contact`) + Resend.

## Розробка

```bash
yarn
yarn dev       # http://localhost:5173
yarn build     # tsc -b + vite build → dist/
yarn lint
```

## Структура

```
api/contact.ts          # Vercel-функція для форми заявки (Resend)
src/
  i18n/                 # i18next + локалі ua.ts / en.ts
  data/services.ts      # перелік послуг (slug + іконка)
  components/           # Header, Footer, Logo, ServiceCard, ...
  pages/                # Home, Services, ServiceDetail, About, Locations, Contact
```

Контент послуг, офісів тощо живе в `src/i18n/locales/{ua,en}.ts` — редагуй там.

## Деплой на Vercel

1. Імпортуй репозиторій у Vercel (пресет Vite визначиться автоматично).
2. Додай Environment Variables:

| Змінна            | Опис                                                        |
| ----------------- | ----------------------------------------------------------- |
| `RESEND_API_KEY`  | ключ із https://resend.com/api-keys                         |
| `CONTACT_TO`      | пошта, куди приходять заявки (напр. `info@inspectsea.com`)  |
| `CONTACT_FROM`    | верифікований відправник (для тестів `onboarding@resend.dev`) |

3. Deploy. SPA-роутинг і `/api/contact` налаштовані у `vercel.json`.

> Локально форма шле запит на `/api/contact` — щоб перевірити її повністю, запусти `vercel dev` (потрібен Vercel CLI) або задеплой у прев'ю.

## Атрибуція зображень

Фото в `public/images/` — під ліцензіями Creative Commons (атрибуція обовʼязкова):

| Файл                     | Автор / джерело                                                   | Ліцензія    |
| ------------------------ | ---------------------------------------------------------------- | ----------- |
| `hero.jpg`               | "Container Ship" — NOAA's National Ocean Service (Flickr)        | CC BY 2.0   |
| `port-cranes.jpg`        | "ANL WANGARATTA" — dok1 (Flickr)                                 | CC BY 2.0   |
| `container-terminal.jpg` | "Port of Oakland Crane Horses" — Wilson Hui (Flickr)             | CC BY 2.0   |
| `container-ship.jpg`     | "Container ship at Thamesport" — suvodeb (Flickr)               | CC BY 2.0   |
| `bulk-carrier.jpg`       | "Bulk carrier Sea Etiquette, Kwinana Bulk Terminal" — Calistemon (Wikimedia Commons) | CC BY-SA 4.0 |

> Якщо хочеш власні фото — просто заміни файли в `public/images/` (імена ті самі) і прибери цю таблицю.

## Брендинг

Кольори з логотипу INSPECTSEA задані як Tailwind-токени у `src/index.css` (`@theme`): `navy`, `teal`, `green` + утиліти `brand-gradient` / `text-brand-gradient`.
