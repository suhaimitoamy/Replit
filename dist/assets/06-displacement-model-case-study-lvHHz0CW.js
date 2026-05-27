const a=`# Studi Kasus Displacement Model

Level: Level 26 — Displacement Model
XP: 10

![Ilustrasi Studi Kasus Displacement Model](/images/lessons/level-26/06-displacement-model-case-study.svg)

## Mengapa Materi Ini Penting
Menyatukan semua potongan puzle teori menjadi satu model trading yang utuh dan dapat dieksekusi (actionable) adalah tujuan akhir dari belajar trading. Mempelajari studi kasus komprehensif akan membantu Anda melihat bagaimana sweep likuiditas, displacement, market structure shift, dan imbalance bekerja bersama layaknya orkestra dalam satu trade.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi "Displacement Model" secara utuh dari awal hingga akhir.
- Membaca narasi chart yang lengkap, bukan hanya sepotong-sepotong.
- Menerapkan checklist model ini ke dalam rencana trading (trading plan) pribadi.

## Penjelasan
"Displacement Model" adalah salah satu model trading paling populer di kalangan trader SMC/ICT. Model ini bersandar pada premis sederhana bahwa institusi memanipulasi untuk mengumpulkan likuiditas, kemudian mengeksekusi pergerakan sejati mereka yang terlihat melalui displacement.

Mari kita bedah model ini langkah demi langkah melalui sebuah studi kasus yang ideal (berlaku untuk buy maupun sell, namun kita pakai skenario sell untuk contoh ini):

**Langkah 1: Mengidentifikasi Target Likuiditas (Liquidity Sweep)**
Skenario dimulai ketika harga berada di dekat level kunci, misalnya Daily High sebelumnya. Trader ritel yang konservatif meletakkan stop loss buy mereka tepat di atas level ini. Pasar perlahan naik dan menembus Daily High tersebut sedikit saja. Ini memicu stop loss (berubah jadi order buy) dan breakout traders (juga order buy). Institusi yang berniat menurunkan harga menggunakan lautan order buy ini untuk menjual. Likuiditas sukses disapu.

**Langkah 2: Menunggu Konfirmasi (The Displacement & Market Structure Shift)**
Setelah menembus sedikit (sweep), harga tiba-tiba bereaksi sangat kasar ke bawah. Sebuah candle bearish besar atau serangkaian candle berukuran masif terbentuk. Pergerakan cepat ini menembus level swing low terdekat di timeframe lebih kecil (seperti M15 atau M5), menyebabkan Market Structure Shift (MSS) atau Change of Character (CHoCH). Inilah displacement. Penurunan keras ini adalah bukti bahwa fase manipulasi (sweep) telah selesai dan tren turun sesungguhnya sedang dimulai.

**Langkah 3: Mengidentifikasi Area Entri (Imbalance/FVG)**
Kita tidak mengejar harga yang sedang lari (chasing the price). Kita periksa kembali pergerakan displacement turun tadi. Apakah ada celah atau Imbalance (Fair Value Gap) yang tertinggal? Dalam model yang valid, harus ada FVG. Inilah zona entri kita.

**Langkah 4: Eksekusi (Return to Imbalance)**
Kita menempatkan Sell Limit di area FVG yang terbentuk oleh displacement tersebut. Stop Loss diletakkan secara aman di atas titik tertinggi (High) yang baru saja terbentuk dari proses sweep. Target profit (Take Profit) diarahkan ke area likuiditas berlawanan, misalnya Daily Low atau FVG/Order Block yang belum tersentuh di bawah. Harga kemudian pullback naik secara korektif, menyentuh FVG (memfill order kita), dan kemudian melanjutkan kejatuhannya hingga target tercapai.

**Kesimpulan Studi Kasus**
Kekuatan dari Displacement Model terletak pada urutannya: **Sweep -> Displacement + MSS -> FVG Tertinggal -> Pullback -> Entry.** Jika salah satu elemen hilang (misalnya harga berbalik tetapi pelan tanpa displacement), maka model ini menjadi tidak valid dan trade sebaiknya dibatalkan.

## Contoh di Chart
Perhatikan chart ketika berita ekonomi dirilis (NFP atau CPI). Harga sering melesat tajam menembus resistance terdekat, menyapu stop loss, lalu dalam hitungan menit dibanting turun puluhan pips dengan candle raksasa. Menghancurkan support terdekat (MSS) dan meninggalkan celah lebar (FVG). Setengah jam kemudian harga perlahan naik mengisi FVG tersebut. Saat menyentuh FVG, harga kembali amblas melanjutkan tren. Itulah manifestasi nyata dari model ini di pasar asli.

## Kesalahan Umum
- Memaksa masuk trade meskipun tidak ada FVG yang jelas setelah displacement.
- Terjebak dalam pergerakan awal (sweep) karena mengira itu adalah tren baru, sehingga lupa mencari konfirmasi pembalikan (displacement).
- Meletakkan Stop Loss terlalu sempit di dalam FVG, tidak melindunginya di balik swing high/low struktural utama.

## Latihan
Cobalah untuk mem-backtest atau meriset riwayat chart. Cari 5 contoh Displacement Model yang lengkap dan berhasil. Dokumentasikan setiap langkahnya: di mana sweep-nya, tunjukkan displacement dan MSS-nya, tandai FVG-nya, dan perhatikan bagaimana reaksi saat pullback. Ini akan melatih insting visual Anda luar biasa pesat.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan susun kembali langkah-langkah Displacement Model di selembar kertas sebagai checklist trading Anda sendiri.
`;export{a as default};
