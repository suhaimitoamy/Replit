# Latihan Menghitung Risk

Level: Level 07 — Risk Guardian
XP: 10

![Ilustrasi Kalkulator Risk](/images/lessons/level-07/hitung-risk.svg)

## Mengapa Materi Ini Penting
Teori tentang manajemen risiko tidak akan berguna jika Anda tidak bisa menerapkannya dalam praktik. Banyak trader gagal karena saat harga sudah di depan mata dan setup sudah muncul, mereka kebingungan dan kelabakan menghitung Lot yang harus dipakai. Latihan kali ini bertujuan untuk membuat perhitungan risiko (Risk Sizing) menjadi kebiasaan otomatis seperti reflek.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menghitung secara mandiri nilai risiko dalam dolar berdasarkan persentase modal.
- Menentukan besaran Lot dengan akurat yang disesuaikan dengan jarak pips Stop Loss.
- Membiasakan diri melakukan perhitungan ini *sebelum* menekan tombol Entry di platform trading.

## Penjelasan
Di materi sebelumnya, kita telah belajar rumusnya:
`Lot = (Nilai Risiko $) / (Jarak SL dalam Pips x Nilai per Pips Standar)`.
Catatan: Untuk pasangan mata uang utama (Mayor Pairs) dengan USD di belakang seperti EURUSD, GBPUSD, AUDUSD, nilai per Pips dari 1 Lot standar (1.00 Lot) rata-rata adalah sekitar $10. Oleh karena itu kita menggunakan angka pengali 10 untuk mempermudah perhitungan manual.

Mari kita asah reflek Anda! Hitunglah nilai ini secepat mungkin. Tidak perlu kalkulator rumit, cukup coretan kertas atau kalkulator di ponsel Anda.

*Catatan Penting*: Dalam kondisi aslinya, Anda sangat disarankan untuk menggunakan **Position Size Calculator** dari situs web atau aplikasi agar hasilnya sangat akurat dan memperhitungkan mata uang dasar broker Anda. Latihan di sini bertujuan untuk membentuk *Mindset Logis* Anda, bukan untuk lomba matematika.

## Contoh Soal dan Pembahasan
**Soal Contoh:**
- Modal Anda: $1,000
- Risk per Trade: 2%
- Jarak Stop Loss yang Anda temukan di Chart: 50 Pips.
- Berapa Lot yang harus Anda pakai (Asumsi Mayor Pair)?

**Pembahasan:**
1. Hitung Nilai Risiko $: 2% x $1,000 = $20. Artinya, Anda siap rugi maksimal $20.
2. Rumus: Lot = $20 / (50 Pips x 10)
3. Lot = $20 / 500 = **0.04 Lot.**

Uji Balik (Reverse Check): Coba buktikan apakah benar Lot 0.04 kalau loss sejauh 50 pips, kerugiannya $20?
0.04 Lot x 50 Pips x $10 = $20. Benar! Anda aman!

## Kesalahan Umum
- Lupa menghitung Lot dengan teliti, dan malah menggunakan ukuran Lot acak seperti "pokoknya 0.10".
- Menghitung Lot setelah Entry. *Ini terlambat!* Hitung Lot harus dilakukan sebelum posisi dibuka atau saat melakukan "Pending Order" (seperti Buy Limit / Sell Limit).
- Bingung membedakan antara Pips dan Poin (ingat, 1 Pip biasanya adalah digit ke-4 desimal, sedangkan 1 Poin/Pipette adalah digit ke-5 desimal. Pastikan Anda menghitung menggunakan satuan Pips).

## Latihan
Selesaikan kasus di bawah ini (Asumsi menggunakan Pair dengan USD sebagai Counter/Quote):

**Kasus 1:**
Modal Anda: $500. 
Risk per trade: 1%.
Jarak SL: 20 Pips.
Berapakah Lot yang harus digunakan?
*Coba kerjakan sebelum melihat jawaban di bawah!*

**Kasus 2:**
Modal Anda: $2,000.
Risk per trade: 1.5%.
Jarak SL: 15 Pips.
Berapakah Lot yang harus digunakan?
*Coba kerjakan sebelum melihat jawaban di bawah!*

**Kunci Jawaban:**
- **Jawaban Kasus 1**:
  - Risiko: 1% x $500 = $5.
  - Rumus: Lot = 5 / (20 x 10) = 5 / 200 = 0.025. 
  - Anda bisa membulatkan turun menjadi **0.02 Lot** demi keamanan.

- **Jawaban Kasus 2**:
  - Risiko: 1.5% x $2,000 = $30.
  - Rumus: Lot = 30 / (15 x 10) = 30 / 150 = **0.20 Lot**.

## Checklist Pemahaman
- [ ] Saya sudah paham cara menghitung nilai risiko dalam wujud nominal uang (dolar).
- [ ] Saya bisa menjabarkan logika perhitungan Lot berdasarkan jarak Pips.
- [ ] Saya berjanji akan selalu menggunakan "Risk Calculator" atau berhitung manual sebelum masuk Entry.

## Materi Remedial
Jika nilai hitungan masih salah, periksa kembali posisi desimal Anda dan ingat bahwa rumus pembaginya mengalikan Jarak Pips dengan 10 (sebagai representasi nilai pip standar 1 Lot = $10). Ulangi kembali materi Lot Size jika perlu.
