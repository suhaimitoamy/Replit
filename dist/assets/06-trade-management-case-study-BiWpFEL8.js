const a=`# Trade Management Case Study

Level: Level 29 — Trade Management Advanced
XP: 10

![Ilustrasi Case Study Trade Management](/images/lessons/level-29/06-trade-management-case-study.svg)

## Mengapa Materi Ini Penting
Belajar setiap teknik secara terpisah memang baik, namun kekuatan sesungguhnya dari *Trade Management* muncul saat kamu menggabungkan semua strategi tersebut dalam satu siklus trading penuh (mulai dari *entry*, *floating*, *partial close*, pindah SL, hingga eksekusi akhir). Melalui *case study* (studi kasus) nyata, kamu akan melihat gambaran utuh bagaimana pro-trader berpikir dan bereaksi saat pasar bergerak.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menggabungkan konsep *Hold vs Exit*, *Partial Close*, *Break Even*, dan *Trailing Stop* dalam satu skenario terstruktur.
- Mengembangkan *SOP (Standard Operating Procedure)* untuk mengelola posisi.
- Mengadopsi pola pikir probabilitas dan disiplin saat mengelola posisi yang sedang berjalan.

## Penjelasan (Case Study Skenario Penuh)
Bayangkan kamu sedang melakukan analisa pada pair GBPJPY.
*Modal*: $1000. 
*Risk per Trade*: 1% ($10).
*Analisa*: Setup Buy berdasarkan pantulan dari Order Block Daily dan konfirmasi *Change of Character* (CHoCH) *bullish* di H1.

**SOP Trade Management:**
- **Entry:** 150.00
- **SL (Stop Loss):** 149.50 (Jarak 50 pips, jika rugi -$10). Volume lot disesuaikan agar pas.
- **TP (Take Profit) Akhir:** 152.00 (Jarak 200 pips, RR 1:4).
- **TP Parsial (Target 1):** 151.00 (RR 1:2, di area minor resistance).

**Perjalanan Trade:**

1. **Fase 1: The Wait (Floating Profit)**
   Harga bergerak pelan, naik ke 150.50 (Profit 50 pips / +$10).
   *Reaksi Amatir:* Tangan gatal ingin langsung *close* karena sudah profit sama besar dengan resiko (1:1).
   *Reaksi Kamu (Pro):* Kamu ingat aturan. Harga masih jauh dari TP Parsial (151.00), dan struktur *bullish* masih mulus membuat *Higher High*. Keputusan: **HOLD**.

2. **Fase 2: The Pullback (Ujian Psikologi)**
   Tiba-tiba, hari berikutnya harga drop dari 150.80 turun hingga kembali ke 150.20!
   *Reaksi Amatir:* Panik! Profit yang tadinya besar menguap. Menutup posisi sekarang agar masih dapat "sedikit".
   *Reaksi Kamu:* Kamu melihat ini adalah koreksi normal untuk mengisi *Fair Value Gap* dan membuat *Higher Low* baru di H1. Keputusan: **TETAP HOLD**.

3. **Fase 3: The Milestone (Partial Close & BEP)**
   Koreksi selesai, harga meledak naik dan menyentuh area 151.00.
   Ini adalah *Target 1 (RR 1:2)* kamu.
   *Aksi yang Dilakukan:* 
   - **Partial Close:** Kamu menutup 50% lot posisimu. Profit yang dikunci ke saldo = +$10 (karena 50% volume X RR 1:2).
   - **Pindah SL ke BEP:** SL awal di 149.50 digeser naik sejajar dengan harga Entry yaitu 150.00.
   *Status saat ini:* Kamu sudah untung $10 di kantong. Sisa posisi adalah transaksi "tanpa risiko" (Risk-Free).

4. **Fase 4: The Runner (Trailing Stop)**
   Harga berlanjut naik dan menembus area 151.50 (membentuk BOS baru).
   *Aksi:* SL yang tadinya di BEP (150.00), kini kamu **Trailing (geser naik)** ke 150.80 (di bawah swing *Higher Low* terakhir). 
   *Status:* Sisa posisi sekarang tidak hanya tanpa risiko, tapi *dijamin untung* sedikit meski berbalik.

5. **Fase 5: The End (Target Hit atau Manual Exit)**
   Tiba-tiba ada berita kuat. Harga mendekati 151.90 (hanya 10 pips dari TP akhir), tapi kemudian muncul pinbar *reversal* raksasa di timeframe Daily, menunjukkan bahwa kekuatan *buyer* habis total.
   *Aksi:* Bukti baru menyatakan tren berbalik drastis sebelum mengenai TP otomatis. Keputusan: **MANUAL EXIT**. Sisa posisi ditutup.
   Kamu tidak rakus menunggu angka eksak 152.00 tercapai. 

*Hasil Akhir:* Kamu membawa pulang profit rapi dengan perlindungan berlapis di setiap tahap perjalanan harga.

## Kesalahan Umum
- **Tidak Punya SOP Manajemen:** Masuk ke pasar tanpa rencana kapan mengambil parsial, dan kapan menggeser SL. Semuanya dilakukan secara acak (random).
- **Lupa Menggeser SL Setelah Partial Close:** Ini bahaya. Setelah mencairkan sebagian dana, pastikan sisanya benar-benar dilindungi agar tidak memakan margin.

## Latihan
Buatlah **"Checklist Trade Management"** milikmu sendiri di secarik kertas. Isinya bisa berupa:
1. Target Parsial ada di RR: ...
2. Syarat pindah SL ke BEP: ...
3. Syarat potong kerugian lebih awal (Exit): ...
Tempel di dekat komputermu dan patuhi setiap kali trade sedang berlangsung.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Perjalanan Trade (Fase 1 sampai Fase 5)**.
`;export{a as default};
