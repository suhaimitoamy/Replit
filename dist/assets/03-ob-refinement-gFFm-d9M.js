const a=`# OB Refinement

Level: Level 21 — Order Block Refinement
XP: 10

![Ilustrasi OB Refinement](/images/lessons/level-21/03-ob-refinement.svg)

## Mengapa Materi Ini Penting
Salah satu masalah terbesar saat menggunakan Order Block di *Higher Timeframe* (HTF) seperti H4 atau Daily adalah **Stop Loss yang terlalu lebar**. Jika OB H4 memiliki lebar 50 pips, maka *Risk to Reward* (R:R) kita akan menjadi sangat kecil. Di sinilah teknik **Refinement** (Penyempurnaan/Penyaringan) berperan. Dengan Refinement, kita bisa membedah OB raksasa di HTF untuk mencari titik entry yang sangat presisi di *Lower Timeframe* (LTF), sehingga Stop Loss menjadi sangat tipis dan R:R bisa meroket hingga 1:10 atau lebih!

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Memahami konsep dasar pergerakan harga di dalam OB besar (*fractal market*).
- Melakukan *Refinement* dari Timeframe Besar (H4/H1) ke Timeframe Kecil (M15/M5).
- Meningkatkan *Risk to Reward Ratio* dalam trading tanpa mengorbankan akurasi.

## Penjelasan
Pasar itu bersifat **fraktal** (fractal), artinya pola yang terjadi di timeframe besar (Daily/H4) juga terbentuk dari pola yang sama di timeframe kecil (M15/M1). Sebuah candle *bearish* yang menjadi Order Block di H4, jika kita "zoom in" ke M15, sebenarnya adalah sebuah rentetan tren turun yang berakhir dengan akumulasi sebelum harga berbalik naik.

**Langkah-langkah OB Refinement:**

1. **Identifikasi HTF OB (Higher Timeframe)**
   Pertama, temukan OB yang valid di H4 atau H1. Tandai area tersebut dengan kotak. Ingat kriteria valid: Ada BOS, FVG, Displacement, dan *Unmitigated*.
   *Catatan: Area ini biasanya sangat lebar.*

2. **Turun ke LTF (Lower Timeframe)**
   Pindah ke timeframe yang lebih kecil.
   - Jika HTF di H4 -> Refine ke M15
   - Jika HTF di H1 -> Refine ke M5

3. **Cari LTF OB di dalam Kotak HTF**
   Di dalam kotak raksasa H4 tadi, carilah Order Block M15 yang berada **paling ujung (extreme)** atau OB M15 yang menyebabkan terjadinya perubahan arah struktur (CHoCH) di dalam area tersebut.
   
4. **Tarik Kotak Baru (Refined OB)**
   Tarik kotak baru khusus untuk OB M15 tersebut. Sekarang kamu memiliki area entry yang jauh lebih sempit. Kamu bisa menempatkan Stop Loss tepat di bawah OB M15 ini, bukan di bawah seluruh OB H4.

**Penting:** Terkadang ada 2 atau 3 OB di M15 yang berada di dalam satu OB H4. OB mana yang dipilih? Sebaiknya pilih OB yang berada di titik paling ekstrem (paling bawah untuk bullish, paling atas untuk bearish).

## Contoh di Chart
Kamu menemukan Bullish OB di H4 pada pair EURUSD. Lebar kotak H4 itu dari harga 1.0500 ke 1.0540 (40 pips SL). 
Kamu masuk ke M15, dan di dalam area harga 1.0500 - 1.0540 tersebut, kamu melihat struktur harga yang lebih detail. Ternyata, gerakan besar itu aslinya berawal dari satu candle bearish kecil di M15 tepat di harga 1.0505 hingga 1.0510.
Kamu memperkecil kotaknya menjadi 1.0505 - 1.0510. Sekarang, area entry kamu hanya selebar 5 pips! Jika harga memantul dari sini dan naik 40 pips, R:R kamu menjadi 1:8, bukan 1:1 lagi.

## Kesalahan Umum
- **Refine terlalu ekstrem:** Mencoba refine dari H4 langsung ke M1. Harga sering kali tidak menyentuh OB M1 dan malah memantul di OB M15, membuatmu tertinggal kereta (*missed entry*).
- **Lupa mengawasi reaksi:** Terkadang harga tidak sampai ke *Refined OB* di ekstrem, tapi sudah berbalik karena bereaksi di ujung atas OB H4. Jika ini terjadi, lebih baik tunggu konfirmasi LTF CHoCH ketimbang memaksa masuk dengan Limit Order.
- **Mengabaikan Tren HTF:** Fokus pada M15 tapi lupa bahwa struktur Daily sedang *bearish* kuat.

## Latihan
Ambil *chart* masa lalu (Backtest). Temukan satu OB H4 yang valid. Gambarkan kotak. Lalu, turunkan *timeframe* ke M15 dan lihat apa yang ada di dalam kotak tersebut. Temukan OB M15-nya dan lihat seberapa jauh kamu bisa memperkecil area Stop Loss-mu.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika bingung cara memilih TF yang tepat, ingat pasangan ini: **Daily -> H1**, **H4 -> M15**, **H1 -> M5**. Jangan melompat terlalu jauh!
`;export{a as default};
