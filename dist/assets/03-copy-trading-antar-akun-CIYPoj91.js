const a=`# Copy Trading Antar Akun

Level: Level 48 — Scaling Up
XP: 10

![Ilustrasi Copy Trading](/images/lessons/level-48/03-copy-trading-antar-akun.svg)

## Mengapa Materi Ini Penting
Ketika Anda mulai sukses mendanai (funded) di berbagai prop firm, mengeksekusi posisi satu per satu di setiap platform akan memperlambat Anda, memicu salah ketik lot, dan menyebabkan perbedaan harga eksekusi (slippage). Menggunakan software Trade Copier adalah langkah profesional untuk mengelola banyak akun secara serentak layaknya manajer dana (fund manager).

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengerti konsep dasar Master Account dan Slave Account.
- Memahami cara kerja proportional lot sizing menggunakan trade copier.
- Mengetahui risiko dan batasan teknis penggunaan trade copier pada prop firm.

## Penjelasan
Trade Copier adalah perangkat lunak (biasanya berupa Expert Advisor/EA atau software cloud) yang menyalin aktivitas trading dari satu akun utama (**Master Account**) ke akun-akun lainnya (**Slave Accounts**) secara instan.

**Bagaimana ini bekerja saat Scale Up?**
Misalkan Anda telah lulus evaluasi dan memiliki:
- 1 Akun Prop Firm A sebesar $100,000 (Master)
- 1 Akun Prop Firm B sebesar $50,000 (Slave 1)
- 1 Akun Prop Firm C sebesar $200,000 (Slave 2)

Anda tidak perlu membuka 3 platform MetaTrader. Anda cukup melakukan analisa dan membuka posisi di Master Account. Software copier akan secara otomatis menghitung proporsi lot dan mengeksekusinya di Slave 1 dan Slave 2.

**Proportional Lot Sizing:**
Copier yang bagus tidak akan sekadar menyalin "Lot 1.0" ke semua akun. Ia akan menghitung *berdasarkan ukuran saldo (balance)*. 
Jika di akun Master ($100k) Anda merisikokan 1% dengan 10 Lot, maka:
- Di akun Slave 1 ($50k), copier akan otomatis membuka **5 Lot** (separuhnya).
- Di akun Slave 2 ($200k), copier akan otomatis membuka **20 Lot** (dua kali lipatnya).

Ini memastikan bahwa persentase risiko Anda (misal 1%) tetap presisi di semua akun Anda, tanpa Anda harus menghitung manual yang rawan human error.

**Aturan Prop Firm tentang Copier:**
Sangat penting untuk diingat! Hampir semua prop firm MENGIZINKAN Anda menggunakan trade copier **selama semua akun tersebut adalah milik Anda sendiri**. 
Namun, menyalin sinyal dari akun orang lain atau layanan sinyal publik sangat dilarang dan dapat menyebabkan akun Anda di-banned.

## Contoh Penggunaan
Anda mengelola total modal gabungan senilai $500,000 yang tersebar di 5 prop firm berbeda untuk diversifikasi risiko (jika satu prop firm bermasalah, Anda masih punya yang lain). 

Anda meng-hosting trade copier Anda di sebuah VPS (Virtual Private Server). Anda cukup fokus pada 1 chart dan 1 MT4/MT5. Ketika Anda menekan tombol "Buy" EURUSD, kelima akun tersebut seketika terbuka posisinya dalam waktu sepersekian milidetik, dengan jumlah lot yang sudah disesuaikan secara matematis dengan ukuran masing-masing akun.

## Kesalahan Umum
- **Salah setting arah copy:** Tidak sengaja mengatur multiplier lot menjadi terbalik (akun kecil buka lot raksasa). Selalu uji copier di akun demo terlebih dahulu!
- **Slippage tinggi:** Menggunakan VPS yang lambat sehingga waktu salin dari Master ke Slave memakan waktu beberapa detik. Pada market yang cepat (saat news), harga sudah berubah drastis.
- **Copy antar akun yang berbeda instrumen:** Nama simbol di broker A adalah "EURUSD", sementara di broker B adalah "EURUSD.pro". Jika tidak di-mapping dengan benar di software copier, transaksi tidak akan tereksekusi.

## Latihan
1. Lakukan riset kecil tentang software Trade Copier lokal (EA MT4) maupun berbasis Cloud (seperti SocialTraderTools).
2. Pahami menu "Risk Multiplier" atau "Lot Multiplier" pada dokumentasi mereka.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan fungsi Master dan Slave account.
- [ ] Saya tahu bahwa copier akan menyesuaikan ukuran lot secara proporsional.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika Anda kesulitan memahami mengapa ukuran lot berbeda, ulas kembali materi "Position Sizing" di level manajemen risiko awal. Lot harus selalu mengikuti ukuran Balance.
`;export{a as default};
