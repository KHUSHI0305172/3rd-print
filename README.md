# Aqua 3D – 3D Printing Studio (Next.js)

One-page website for a 3D printing business with an animated 3D car that "prints" layer by layer (three.js).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages

`/` Home · `/about` About Us · `/materials` Materials · `/products` Products Store · `/projects` Projects / Gallery · `/industries` Industries · `/quote` Get Instant Quote · `/contact` Contact Us

Each page is `src/app/<route>/page.js`.

## Edit your content

- `src/data/site.js` – business name, **WhatsApp number**, city, services, prices, FAQs, portfolio items, reviews.
- `src/app/globals.css` – all styling (colors are CSS variables at the top: `--ac` is the orange accent).
- `src/components/` – one component per section (Navbar, Hero, CarScene, Services, About, Process, Work, Pricing, Reviews, Faq, CtaBanner, Contact, Footer).
- `src/components/CarScene.jsx` – the three.js 3D model. Replace it with a GLTF/STL loader to show your own model.

Designed by Khushi Parikh.
