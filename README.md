# Goldbro Prototype

Goldbro adalah prototype aplikasi **financial intelligence khusus gold (XAUUSD)** yang terinspirasi dari konsep Neurobro, tetapi dipersempit menjadi satu niche supaya lebih realistis untuk dibangun.

## Isi prototype ini
- dashboard ringkas untuk gold
- daily brief
- event radar
- setup scanner (long vs short)
- Ask Gold AI berbasis local mock logic
- roadmap produk

## Fokus utama
Aplikasi ini sengaja hanya fokus pada gold supaya:
- lebih tajam
- lebih mudah divalidasi
- lebih ringan dari sisi data
- lebih mudah dikembangkan jadi MVP nyata

## Stack
- React
- Vite
- CSS sederhana tanpa dependensi UI tambahan

## Cara menjalankan
```bash
npm install
npm run dev
```

## Hal yang masih mock
Prototype ini belum memakai data live. Nilai seperti XAUUSD, DXY, US10Y, dan brief masih berupa data contoh agar struktur produknya bisa divalidasi dulu.

## Fitur yang sebaiknya ditambahkan berikutnya
1. integrasi live market data untuk XAUUSD, DXY, dan US10Y
2. economic calendar API
3. auth dan user settings
4. alert engine
5. persistence untuk riwayat pertanyaan dan watchlist
6. backend AI untuk jawaban yang lebih dinamis

## Struktur file
- `src/App.jsx` - UI utama dan mock intelligence logic
- `src/styles.css` - styling
- `ARCHITECTURE.md` - rancangan sistem menuju versi production
- `REPLIT_PROMPT.md` - prompt praktis jika ingin lanjutkan di Replit

## Arah produk
Aplikasi ini cocok dijadikan fondasi untuk:
- gold dashboard
- gold advisory app
- gold trader copilot
- event-driven XAUUSD assistant
