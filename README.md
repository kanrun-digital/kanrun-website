# KANRUN Digital — маркетинговий сайт

Многосторонній сайт агенції KANRUN Digital: екосистема з шести AI-продуктів
та класичні послуги digital-агентства (з 2009 року).

## Сторінки

| Сторінка | Зміст |
|---|---|
| `index.html` | Головна: позиціонування, фабрика продуктів, 6 рішень |
| `products.html` | Продукти: OrderOps, Salon OS, TolQA, SEO Engine, Outreach Ops, Transcriber |
| `services.html` | Послуги: SEO, PPC, SMM, веб-розробка (з підпослугами) |
| `company.html` | Компанія: історія 2009 → сьогодні, принципи |
| `contacts.html` | Контакти та кроки після звернення |

## Стек

Vanilla HTML/CSS/JS + [Vite](https://vite.dev). Без фреймворків — швидко, мінімум залежностей.

## Розробка

```bash
npm install
npm run dev      # http://localhost:7100
```

## Продакшн

```bash
npm run build    # dist/ — статика, готова до будь-якого хостингу
npm run preview  # локальний перегляд зібраної версії
```

`vite.config.js` встановлено `base: './'`, тому папку `dist/` можна
публікувати на GitHub Pages (гілка `gh-pages` або GitHub Actions), S3, Netlify,
Vercel чи будь-який static-хостинг без додаткового конфігурування.

## Структура

```
├── index.html / products.html / services.html / company.html / contacts.html
├── styles.css            # спільна дизайн-система (CSS-змінні в :root)
├── assets/               # логотипи та favicon
└── vite.config.js        # 5 входів + base './'
```

Мова сайту: українська. Канонічний домен: https://kanrun.ua
