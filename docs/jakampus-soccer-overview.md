# Jakampus Soccer ⚽

Jakampus Soccer adalah aplikasi web *live score* dan informasi sepak bola komprehensif (sebelumnya bernama GoalScope) yang didesain secara spesifik untuk memiliki cakupan data terluas dari berbagai liga di seluruh dunia, lengkap dengan fitur *Live Streaming*. 

Aplikasi ini terinspirasi dari platform populer seperti AiScore dengan mengedepankan performa tinggi, UI/UX modern (Dark Mode, Glassmorphism), dan interaksi *real-time*.

---

## 🌟 Fitur Utama (Features)

1. **Live Score Dashboard (Homepage)**
   - Menampilkan pertandingan yang sedang berlangsung (*live*), selesai (*finished*), dan yang akan datang (*scheduled*).
   - Pengelompokan pertandingan berdasarkan liga.
   - Filter tanggal (DatePicker) untuk melihat jadwal hari-hari sebelumnya atau berikutnya.
   - Indikator *real-time* yang berkedip untuk pertandingan yang sedang berlangsung.

2. **Cakupan Liga & Negara Terluas (Widest Coverage)**
   - Mendukung pencarian dari 190+ negara.
   - Mencakup lebih dari 1,200+ kompetisi liga dan piala (Cups) di seluruh dunia.
   - Halaman khusus daftar negara (`/countries`) dan daftar liga di suatu negara (`/leagues/[country]`).

3. **Detail Liga (League Detail)**
   - Halaman khusus untuk setiap liga (`/league/[id]`).
   - Menampilkan tab:
     - **Standings**: Klasemen lengkap dengan indikator zona (Champions League, Europa League, Relegation) dan status performa (Form: W/D/L).
     - **Fixtures**: Jadwal pertandingan liga terkait.
     - **Top Scorers**: Daftar pencetak gol terbanyak beserta statistik asis dan penampilan.

4. **Detail Pertandingan (Match Detail)**
   - Halaman mendalam untuk pertandingan tunggal (`/match/[id]`).
   - **Timeline Events**: Gol, kartu kuning/merah, dan pergantian pemain (Substitutions).
   - **Statistics**: Visualisasi grafik bar untuk Ball Possession, Shots, Corners, Fouls, Passes, dll.
   - **Lineups**: Menampilkan formasi lapangan (contoh: 4-3-3), susunan pemain (Starting XI), pelatih, dan pemain cadangan.
   - **Live Streaming**: Akses link streaming resmi yang terintegrasi di halaman yang sama.

5. **Live Streaming Hub**
   - Halaman khusus `/streaming` yang mengumpulkan semua pertandingan yang menyediakan tayangan langsung.
   - Bekerja sama dengan tautan siaran resmi (broadcasters) lengkap dengan indikator kualitas siaran (HD/4K) dan status akses (FREE/Paid).

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Aplikasi ini dibangun menggunakan arsitektur modern Next.js untuk memaksimalkan performa *Server-Side Rendering* (SSR) dan *Client-Side Interactivity*.

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) dengan Vanilla CSS Variables (`globals.css`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date Formatting**: `date-fns`
- **Data Source**: API-Football v3 (melalui *Proxy Route Handlers* internal Next.js)

---

## 📂 Struktur Folder (Project Structure)

```text
football_match/
├── app/
│   ├── api/                 # Proxy API Route Handlers (sembunyikan API Key)
│   │   ├── countries/
│   │   ├── fixture/[id]/
│   │   ├── fixtures/
│   │   ├── leagues/
│   │   ├── players/
│   │   └── standings/
│   │
│   ├── components/          # Reusable UI Components
│   │   ├── AutoRefresh.tsx  # Komponen auto-fetch data live
│   │   ├── DatePicker.tsx
│   │   ├── LeagueGroup.tsx
│   │   ├── MatchCard.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── countries/           # Halaman grid negara
│   ├── league/[id]/         # Halaman Detail Liga
│   ├── leagues/[country]/   # Halaman Daftar Liga di sebuah negara
│   ├── match/[id]/          # Halaman Detail Pertandingan
│   ├── streaming/           # Halaman List Live Streaming
│   │
│   ├── lib/
│   │   ├── api.ts           # Core API caller (Fetch layer)
│   │   ├── mock-data.ts     # Data dummy (Fallback jika API Key kosong)
│   │   └── types.ts         # TypeScript interfaces
│   │
│   ├── globals.css          # Design system & CSS Variables
│   ├── layout.tsx           # Root layout (Navbar, Footer, Font Inter)
│   └── page.tsx             # Halaman utama (Dashboard)
│
├── docs/                    # Dokumentasi (Anda berada di sini)
├── public/                  # Aset statis
├── .env.local               # Environment variables (API Key)
└── next.config.ts           # Konfigurasi Next.js (Image Domains)
```

---

## 🚀 Cara Menjalankan Aplikasi Lokal

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Atur API Key**
   Buka (atau buat) file `.env.local` di folder *root*, lalu tambahkan:
   ```env
   API_FOOTBALL_KEY=kode_api_key_anda_di_sini
   ```
   *Catatan: Jika API key belum diisi, aplikasi secara otomatis menggunakan `mock-data.ts` untuk menampilkan data sampel agar UI tetap bisa dites.*

3. **Jalankan Server Development**
   ```bash
   npm run dev
   ```
   Aplikasi akan terbuka di `http://localhost:3000`.

---

## 🎨 Design System & UI/UX

Jakampus Soccer menggunakan tema **Dark Premium** (Background: `#0b0e14` / `#0f1219`).
Fitur UI menonjol:
- **Glassmorphism**: Digunakan di *Navbar* (`backdrop-blur-xl`).
- **Smooth Animations**: Transisi stat bar pada tab *Statistics* dan tombol hover.
- **Pulse Indicator**: Animasi berkedip merah untuk tanda siaran/live status.
- **Mobile First**: *Sidebar* otomatis tersembunyi (*collapse*) pada layar *mobile*, mengedepankan konten utama.

---

## 🔄 Status & Pengembangan Berkelanjutan

*Fase Awal (Telah Selesai)*:
- ✅ Setup environment & arsitektur proyek
- ✅ Implementasi Mock Data & Types
- ✅ Pembangunan UI Layout & Komponen Modular
- ✅ Implementasi Halaman-halaman Utama
- ✅ Integrasi *Proxy API Routing*
- ✅ Auto-Refresh Data Live (Per 60 Detik)

*Ide Pengembangan Selanjutnya (Next Steps)*:
- Head-to-Head (H2H) comparison per match.
- Fitur "Follow/Favorite" tim atau liga menggunakan `localStorage`.
- Chatroom / Komentar interaktif pada halaman live streaming.
