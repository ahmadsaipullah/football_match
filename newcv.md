AHMAD SAIFULLAH
@ Linkedin.com/in/ahmad-saifullah-7b1b61227/ | @ youtube.com/saipulahm4d | @ 0878-8018-2823
@ github.com/ahmadsaipullah | @ ahmadsaipullah140@gmail.com | @ Cipondoh, Tangerang, Banten

Lulusan S1 Teknik Informatika (IPK 3.72) dengan pengalaman sebagai MIS Staff dan Staff IT pada lingkungan
manufaktur industri skala enterprise serta multi-company. Berpengalaman dalam pengembangan, maintenance, dan
improvement aplikasi web berbasis Laravel yang terintegrasi dengan ERP Infor LN, pengelolaan sistem
enterprise seperti SQL Server, Accurate Online, Smile ERP, dan Moka POS, serta infrastruktur IT meliputi server
management, NAS Synology, jaringan Mikrotik, dan keamanan sistem. Terbiasa menyusun dan mempresentasikan 12 indikator KPI bulanan kepada Manager Departemen, Internal Audit, dan BOD, serta berkolaborasi lintas departemen bersama Direktur dan Sales dalam lingkungan manufaktur joint venture.

---

## PENGALAMAN KERJA

### MIS Staff | PT Cipta Saksama Indonesia (Holding) — PT Cipta Nissin Industries | Juni 2026 – Sekarang
PT Cipta Nissin Industries adalah perusahaan manufaktur otomotif joint venture antara PT Cipta Saksama Indonesia
dengan Nissin Kogyo Co., Ltd. (Jepang), berlokasi di Kawasan Industri Pulogadung, Jakarta Timur. Bertanggung jawab
atas pengelolaan, pengembangan, dan pemeliharaan seluruh sistem informasi serta infrastruktur IT perusahaan,
sekaligus mengintegrasikan aplikasi internal dengan ERP Infor LN.

#### Maintenance, Bug Fixes & Improvement Aplikasi Web (Cipta Apps — Framework Laravel)
Bertanggung jawab sebagai developer atas maintenance dan continuous improvement Cipta Apps — sistem informasi
internal perusahaan berbasis Laravel yang terintegrasi dengan ERP Infor LN — mencakup 7+ siklus UAT (User
Acceptance Testing) yang disetujui oleh Manager MIS dan User/Dept Head, antara lain:

- Modul Taskwork & Costing Report Workshop: Memperbaiki kalkulasi durasi jam kerja lintas hari (shift malam)
  yang menghasilkan nilai 0 atau negatif; memperbaiki double-count biaya pada SOK multi-PRO; memperbaiki
  sinkronisasi penarikan data aktual dari Infor LN agar selalu up-to-date; dan menyelaraskan tampilan UI dengan
  hasil export Excel (100% konsisten).

- Modul Quality Control (QC) — FRA & IRD: Menambahkan field No PRO pada formulir FRA; memperkuat
  sistem Role-Based Access Control untuk hak delete dokumen; menyelesaikan kendala CSRF Token Mismatch pada
  IRD; dan menyinkronkan hierarki approval Manager dengan struktur jabatan terbaru.

- Modul Request SOK — Visibilitas & QR Code Signature: Menyamakan visibilitas data antar user Role Workshop
  Supervised; mengimplementasikan QR Code dinamis sebagai tanda tangan digital pada dokumen PDF SOK;
  membangun halaman publik verifikasi dokumen yang dapat diakses tanpa login melalui scan QR Code.

- Modul Request SOK — Email Notifikasi & Type SOK: Mengimplementasikan email notifikasi otomatis berjenjang
  (Level 0 ke Level 1 ke Gudang/Workshop) menggunakan Background Job/Queue Laravel; memisah dan memvalidasi
  tipe SOK (TDJ & Pallet New/Repair) beserta kewajiban input No. PRO di modul Taskworks.

- Modul FRA, IRD, Core & Master Standar (28 Poin UAT): Improvement komprehensif meliputi relasi dinamis
  AJAX antara Seksi/Line dan Mesin; perbaikan bug hak akses (RBAC) dan Permission Middleware; penambahan
  fitur print landscape, pencarian multi-kriteria (tanggal, seksi, nama proses); otomasi jam sistem; pencegahan
  duplicate entry; dan standarisasi checklist FRA.

- Sistem Kanban — Cetak Kanban Production & Purchase Order (PHP Native): Memperbaiki nilai QR Code
  agar menggunakan Standar Lot; menyesuaikan layout PDF cetakan Kanban (repositioning barcode, penyesuaian
  ukuran dan margin) untuk optimasi keterbacaan scanner.

- Modul Stock Opname (STO): Menambahkan 4 kolom baru pada database (no_pro, lot, standar_lot,
  jumlah_ng_karat); mengintegrasikan input STO dengan pembacaan QR Code serta input kondisional untuk
  remarks Karat/NG.

#### Project Digitalisasi — New Web Application Development
Merancang dan membangun aplikasi web baru dari nol sebagai inisiatif digitalisasi proses bisnis perusahaan:

- Daily Activity Management System (Laravel 13, PHP 8.3, MySQL, Spatie RBAC):
  Mendigitalkan sistem pelaporan kerja harian karyawan; mengembangkan fitur Import/Export Excel massal
  (Maatwebsite Excel), Load Template Aktivitas, Generate Laporan PDF (DomPDF), dan sistem submit/lock
  laporan harian; membangun RBAC multi-level (Admin, BOD, Employee) dengan visibilitas data berbasis hierarki.

- Sistem Approval CNI — Purchase Order & Purchase Requisition (Laravel 13, Tailwind CSS 4, AJAX, DomPDF):
  Mendigitalkan dan mengotomatisasi alur persetujuan dokumen PO & PR secara bertingkat (Section Head,
  Finance, BOD); membangun sinkronisasi data real-time dengan ERP Infor; mengimplementasikan Conditional
  Approval System berbasis Kode Unik untuk routing persetujuan BOD; dan menerapkan verifikasi keaslian
  dokumen via QR Code yang dapat diakses publik (anti-pemalsuan dokumen vendor).

- TTO — Tanda Terima Online (Laravel 13, React.js 18, Inertia.js 2.0, Framer Motion, TailwindCSS):
  Mendigitalkan proses BAST (Berita Acara Serah Terima) antar departemen menjadi Single Page Application
  (SPA); membangun sistem manajemen Inbox/Outbox dengan pelacakan status real-time (Pending, Partial,
  Selesai, Dikembalikan); mengimplementasikan debounced live search dengan filter multi-kriteria (tanggal,
  departemen, status); dan meningkatkan UX dengan micro-animations Framer Motion.

#### KPI & Pelaporan Bulanan
Menyusun dan mempresentasikan 12 indikator KPI bulanan kepada Manager Departemen dan Internal Audit, dengan kehadiran BOD pada sesi tertentu, meliputi:
- MIS Service Index (infrastruktur & web), Server Uptime (hardware & software), Data Loss Prevention,
  Number of Security Breach, Fulfillment of User Inquiries (ticketing system), Realization of Backup Task
  Schedule, Realization of Maintenance Plan (HDD monitoring via CrystalDiskInfo), Number of Digitalization
  Projects Completed, Implementasi 5R, Realization of Training Plan, Cost Saving from Development Project,
  dan Budget Utilization.

#### Infrastruktur & Dukungan Teknis
- Melakukan perawatan, troubleshooting, dan upgrade hardware PC, laptop, server, printer, dan scanner.
- Melakukan backup data server dan aplikasi secara berkala ke storage eksternal dan cloud storage.
- Monitoring server dan jaringan secara proaktif untuk menjamin uptime dan stabilitas operasional.
- Konfigurasi dan pemeliharaan perangkat jaringan (router, switch, access point), keamanan (firewall,
  Symantec Endpoint Protection/antivirus), dan monitoring.
- Pengelolaan NAS Synology, sistem PABX, dan CCTV di lingkungan pabrik dan kantor.
- Instalasi, setup, dan konfigurasi perangkat IT untuk kebutuhan operasional pabrik.

---

### Staff IT (Head Office — Multi Company) | PT Tritunggal Maju Sejahtera (Holding Company) | Februari 2024 – Mei 2026
Bertanggung jawab atas pengelolaan sistem dan infrastruktur IT secara terpusat pada kantor pusat (Head Office) serta
seluruh unit usaha perusahaan yang beroperasi dalam skema multi-company dan multi-lokasi.

#### Manajemen Operasional Kantor & Multi Unit
- Menangani dukungan IT untuk operasional kantor pusat (Head Office) yang meliputi divisi administrasi,
  keuangan, manajemen, dan operasional.
- Memberikan dukungan IT terpusat untuk seluruh unit bisnis perusahaan, termasuk gudang triplek, toko retail
  material bangunan, restoran, serta pabrik manufaktur plywood dan pabrik cat.
- Menangani support IT untuk beberapa anak perusahaan, antara lain:
  - Toko Master Bangunan MB Picung & Sukamantri
  - Toko Material Bangunan Sinar Terang Jaya
  - Resto Bakoel Kampoeng
  - Pabrik Louis Warna Cemerlang
  - Pabrik Borneo Kayu Indonesia
  - Pabrik Kaliaren Jaya Plywood
  - Pabrik Indowood Jaya Bersama

#### Sistem Enterprise & Database
- Bertindak sebagai administrator utama sistem operasional perusahaan: SQL Server, Accurate Online,
  Smile ERP, dan Moka POS, untuk seluruh kantor pusat dan unit usaha.
- Melakukan update sistem operasi dan aplikasi end-user secara berkala.
- Mengimplementasikan dan mengelola NAS Synology sebagai solusi penyimpanan data terpusat, pengaturan
  hak akses (user privilege), dan automated backup.
- Melakukan koordinasi dengan vendor ERP, ISP, dan penyedia layanan IT untuk maintenance dan troubleshooting.

#### Infrastruktur & Keamanan Jaringan
- Mengelola infrastruktur jaringan kantor pusat dan cabang menggunakan Mikrotik, router, dan switch.
- Melakukan network monitoring harian serta troubleshooting jaringan secara langsung (hands-on).
- Mengelola sistem CCTV analog dan IP Camera, termasuk konfigurasi DVR dan NVR.
- Melakukan perencanaan, instalasi, konfigurasi, dan perawatan perangkat IT di seluruh unit usaha.

#### Dukungan Teknis & Maintenance
- Memberikan dukungan teknis harian kepada karyawan kantor pusat, cabang, dan manajemen.
- Menangani printer, scanner, dan perangkat pendukung kantor.
- Melakukan konfigurasi dan maintenance sistem PABX / telepon kantor.
- Menjadi pusat koordinasi IT antara manajemen, user, dan vendor eksternal.

---

### Web Developer | Full Stack Laravel Freelance | 2022 – Sekarang

1. Sistem Informasi Manajemen OBE (SIMOBE) | Universitas Muhammadiyah Tangerang
- Merancang dan membangun sistem manajemen kurikulum berbasis Outcome Based Education (OBE), mencakup
  modul Profil Lulusan (PL), CPL, Bahan Kajian, Mata Kuliah, CPMK, dan Sub-CPMK.
- Mengimplementasikan Curriculum Mapping dinamis untuk memetakan keterkaitan PL-CPL-MK-BK.
- Membangun Custom Role-Based Access Control (RBAC) mandiri dan granular tanpa library pihak ketiga,
  dilengkapi Activity Log dan Soft Deletes untuk audit trail.
- Mengoptimalkan performa dengan Server-side DataTables (AJAX) dan fitur Export/Import (Excel/PDF).

2. Sistem Informasi Manajemen Pembayaran & Keuangan | LPK
- Merancang sistem manajemen keuangan terintegrasi dengan modul Dynamic Billing untuk berbagai jenis tagihan.
- Mengimplementasikan alur Verifikasi Pembayaran Manual (upload bukti + Approve/Reject admin).
- Membangun antarmuka modern (Mobile-First) menggunakan Laravel 10, Tailwind CSS, dan Alpine.js.
- Menerapkan enkripsi ID pada URL (Route Model Binding with Encryption) untuk keamanan data siswa.

3. Landing Page SIMOBE (Studi Kasus SEO) | Stack: Astro, React, Tailwind CSS
- Mengembangkan landing page performa tinggi; berhasil terindeks Google dan ranking keyword "simobe" < 24 jam.
- Mengoptimalkan Semantic HTML, preloading aset, dan skema JSON-LD untuk crawlability maksimal.

4. Sistem Informasi Lembaga Pelatihan Kerja (LPK)
- Merancang sistem terintegrasi mencakup Company Profile, Manajemen Pelatihan, dan Job Portal.
- Membangun Pendaftaran Online dengan approval admin dan notifikasi email otomatis.
- Mengimplementasikan CMS dinamis dan RBAC (Super Admin, Admin, User).

5. Sistem Informasi Bimbingan Skripsi & Kerja Praktek (SIBIM) | Universitas Muhammadiyah Tangerang
- Merancang sistem manajemen skripsi dan KP end-to-end menggunakan Laravel 10 dan MySQL.
- Mengembangkan modul Manajemen Kuota Dosen dinamis berbasis Tahun Akademik.
- Membangun Bimbingan Online terstruktur per Bab (Bab 1–5) dengan riwayat revisi dan feedback digital.
- Mengintegrasikan DomPDF dan Laravel Excel untuk cetak Kartu Kontrol Bimbingan dan rekapitulasi data.

---

## PENGALAMAN MAGANG

### Asisten Lab Komputer | Universitas Muhammadiyah Tangerang | September 2023 – Februari 2024
- Membantu pelaksanaan praktikum serta maintenance komputer dan server laboratorium.
- Menangani troubleshooting dasar perangkat dan sistem komputer.

### Web Apps Sistem Developer | GMF Aero Asia | Juli 2023 – September 2023
- Monitoring dan maintenance aplikasi internal berbasis web.
- Melakukan pembaruan data dan job card maintenance pesawat pada sistem.

---

## PENGALAMAN ORGANISASI

- Kepala Divisi Litbang | 2022 – 2023
- Anggota Divisi Litbang | 2021 – 2022

---

## KEAHLIAN

### Technical Skills
- Operating System: Windows, Windows Server
- Database: SQL Server, MySQL
- Networking: Mikrotik, LAN/WAN, Network Monitoring, Firewall
- System & Infrastructure: NAS Synology, Server Management, Backup & Recovery, CCTV (DVR/NVR), PABX

### Enterprise Systems
- Infor LN (ERP — Integrasi Data & Sinkronisasi)
- Accurate Online
- Smile ERP
- Moka POS
- Symantec Endpoint Protection

### Web Development
- Backend: PHP, Laravel, Queue/Job, RBAC (Spatie & Custom), RESTful API
- Frontend: React.js 18, Inertia.js, Framer Motion, JavaScript, HTML, CSS
- Styling: Tailwind CSS 4, Bootstrap
- Tools & Libraries: DomPDF, Maatwebsite Excel, SweetAlert2, AJAX, Hashids, QR Code Generator
- Other: Astro (Static Site), SEO Technical

### Supporting Skills
- Microsoft Office
- Basic Graphic Tools (Canva, Adobe Photoshop)

### Soft Skills
- Komunikasi & Presentasi KPI kepada Manager Departemen, Internal Audit, dan BOD
- Kerja Sama Tim & Kolaborasi Lintas Departemen
- Problem Solving & Analytical Thinking

---

## PENDIDIKAN

Universitas Muhammadiyah Tangerang | Tangerang | 2020 – 2024
S1 Teknik Informatika | IPK 3,72

SMK Bangun Nusantara | Tangerang | 2014 – 2017
Teknik Komputer dan Jaringan

---

## BAHASA

- Indonesia | Aktif
- Inggris | Reading & Technical Documentation
