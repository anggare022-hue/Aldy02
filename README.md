# Vercel-ready Next.js App

Ini adalah proyek Next.js (App Router) siap deploy ke Vercel.

## Cara Pakai
1. `npm install` atau `pnpm install` atau `yarn`
2. `npm run dev` untuk development.
3. `npm run build && npm start` untuk production lokal.
4. Deploy ke Vercel:
   - **Opsi 1:** Push repo ke GitHub, lalu import ke Vercel (Framework: Next.js).
   - **Opsi 2:** `vercel` via CLI (auto detect).

## Struktur
- `app/` -> routes dengan App Router.
- `public/` -> aset statis (gambar, ikon).
- `vercel.json` -> konfigurasi opsional.

## Migrasi dari ZIP Anda
Letakkan file HTML statis ke dalam `app` sebagai route (lihat contoh di `app/page.tsx`), 
simpan CSS/JS/gambar ke folder `public/` dan update import path. 

> Catatan: File `Web.zip` yang Anda unggah tampak korup ketika diekstrak otomatis.
> Jika Anda unggah ulang file yang valid, saya bisa bantu migrasi konten asli masuk ke proyek ini.
