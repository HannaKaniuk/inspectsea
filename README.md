# InspectSea Survey

Багатомовний (UA/EN) сайт сюрвеєрської компанії.

**Stack:** Vite + React 19 + TypeScript, React Router, Tailwind CSS v4, i18next.  
**Форма:** Web3Forms (client-side API) → `info@inspectsea.com.ua`

## Розробка

```bash
yarn
yarn dev       # http://localhost:5173
yarn build     # tsc -b + vite build → dist/
yarn lint
```

## Структура

```
src/
  lib/submitContact.ts  # Web3Forms submit helper
  data/site.ts          # CONTACT_EMAIL тощо
  i18n/locales/         # ua.ts / en.ts
  components/
  pages/
public/
  images/logo.jpg
  favicon.svg
  favicon-32.png
  apple-touch-icon.png
scripts/setup-email.mjs # опційно: env + Vercel deploy
```

## Email (contact form)

1. Створи Access Key на [web3forms.com](https://web3forms.com) для `info@inspectsea.com.ua`
2. Додай env (локально в `.env.local`, на Vercel — production/preview/development):

```bash
VITE_WEB3FORMS_ACCESS_KEY=your-access-key
```

3. Або одним скриптом:

```bash
WEB3FORMS_ACCESS_KEY=xxxx yarn setup:email
```

Access Key у Web3Forms публічний by design (ідентифікатор форми). На free-плані відправка йде з браузера.

## Атрибуція зображень

Фото в `public/images/` — Creative Commons (атрибуція обовʼязкова):

| Файл                     | Автор / джерело                                                   | Ліцензія    |
| ------------------------ | ---------------------------------------------------------------- | ----------- |
| `hero.jpg`               | "Container Ship" — NOAA's National Ocean Service (Flickr)        | CC BY 2.0   |
| `port-cranes.jpg`        | "ANL WANGARATTA" — dok1 (Flickr)                                 | CC BY 2.0   |
| `container-terminal.jpg` | "Port of Oakland Crane Horses" — Wilson Hui (Flickr)             | CC BY 2.0   |
| `container-ship.jpg`     | "Container ship at Thamesport" — suvodeb (Flickr)               | CC BY 2.0   |
| `bulk-carrier.jpg`       | "Bulk carrier Sea Etiquette, Kwinana Bulk Terminal" — Calistemon (Wikimedia Commons) | CC BY-SA 4.0 |

## Брендинг

Кольори з логотипу задані як Tailwind-токени у `src/index.css` (`@theme`): `navy`, `teal`, `green` + утиліти `brand-gradient` / `text-brand-gradient`.
