const a=`# Mengidentifikasi Valid Fair Value Gap (FVG)

Level: Level 22 — FVG Refinement
XP: 10

![Ilustrasi Valid FVG](/images/lessons/level-22/valid-fvg.svg)

## Mengapa Materi Ini Penting
Di market, Anda akan sering melihat banyak sekali "gap" atau celah kosong yang ditinggalkan oleh pergerakan harga. Namun, tidak semua gap tersebut adalah *Fair Value Gap* (FVG) yang valid dan layak dijadikan acuan trading. Kemampuan membedakan mana FVG yang benar-benar mewakili ketidakseimbangan (imbalance) institusional dan mana yang sekadar pergerakan biasa akan menyelamatkan Anda dari banyak jebakan dan stop loss yang tidak perlu. Memilih FVG yang tepat adalah fondasi dari strategi entry yang tajam.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mendefinisikan apa itu Fair Value Gap (FVG) yang valid.
- Mengenali struktur tiga candle yang membentuk FVG.
- Membedakan antara FVG yang menunjukkan jejak institusi dan gap yang lemah.

## Penjelasan
*Fair Value Gap* (FVG) sering disebut juga sebagai *Imbalance* atau *Inefficiency*. Sederhananya, ini adalah area di chart di mana harga bergerak begitu cepat ke satu arah sehingga pembeli atau penjual tidak memiliki kesempatan yang adil (fair) untuk berpartisipasi di area harga tersebut. 

Secara visual, FVG terbentuk dari formasi **tiga candle berturut-turut**. Mari kita bahas FVG bullish (yang menandakan dorongan pembeli kuat):
1. **Candle Pertama:** Candle ini bebas bergerak, kita perhatikan titik tertingginya (High).
2. **Candle Kedua:** Ini adalah candle pendorong (displacement). Candle ini harus panjang, besar, dan menunjukkan momentum kuat ke atas.
3. **Candle Ketiga:** Candle ini turun sedikit tetapi titik terendahnya (Low) **tidak berhasil menyentuh** titik tertinggi dari Candle Pertama.

Nah, ruang kosong yang tersisa antara High dari Candle Pertama dan Low dari Candle Ketiga itulah yang disebut sebagai **Bullish FVG**. Pada area ruang kosong ini, market hanya memfasilitasi transaksi satu arah (dalam hal ini hanya pembeli), sehingga meninggalkan "utang" transaksi penjual.

Sebaliknya, **Bearish FVG** terjadi dalam pergerakan turun:
1. Perhatikan Low dari Candle Pertama.
2. Candle Kedua turun tajam dan panjang ke bawah.
3. High dari Candle Ketiga **tidak menyentuh** Low dari Candle Pertama.
Ruang antara Low Candle Pertama dan High Candle Ketiga adalah Bearish FVG.

**Apa yang membuat sebuah FVG menjadi "Valid" dan penting?**
FVG yang valid biasanya terjadi setelah adanya manipulasi harga (seperti mengambil liquidity) atau saat harga berhasil menembus struktur penting (*Break of Structure* atau BOS / *Change of Character* atau CHoCH). FVG yang terbentuk tanpa alasan struktural (misalnya bergerak sideways lalu tiba-tiba ada FVG kecil) seringkali memiliki probabilitas yang rendah. Institusi besar meninggalkan FVG sebagai jejak langkah kaki mereka, dan mereka sering kembali ke area tersebut untuk mengambil sisa pesanan (mitigasi) sebelum melanjutkan pergerakan utama.

## Contoh di Chart
Bayangkan Anda melihat harga bergerak turun perlahan, lalu tiba-tiba ada satu candle hijau raksasa yang menembus resisten terdekat (CHoCH). 
- Anda melihat ke candle sebelum candle raksasa itu, titik High-nya ada di harga 1.1000. 
- Anda melihat ke candle sesudah candle raksasa itu, titik Low-nya ada di harga 1.1020. 
Celah kosong antara 1.1000 hingga 1.1020 (sebesar 20 pips) ini adalah area Bullish FVG. Area inilah yang nantinya akan kita pantau saat harga mulai turun (koreksi).

## Kesalahan Umum
- **Menganggap semua celah antar candle adalah FVG penting.** Padahal, FVG yang berada di tengah *choppy market* (sideways) tidak memiliki probabilitas yang bagus.
- **Mengabaikan konteks struktur market.** FVG melawan arah tren (counter-trend) tanpa adanya CHoCH yang valid sangat berisiko.
- **Mengukur FVG di body candle.** FVG diukur dari **ujung sumbu (wick)** candle pertama ke **ujung sumbu (wick)** candle ketiga, bukan dari bodinya.

## Latihan
1. Buka chart XAUUSD atau EURUSD di timeframe H1.
2. Cari pergerakan momentum yang sangat kuat (satu atau dua candle besar berturut-turut).
3. Cari formasi tiga candle, dan tandai jarak antara sumbu candle 1 dan sumbu candle 3. 
4. Amati apakah harga di masa depan kembali masuk ke kotak FVG yang Anda tandai tersebut.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **aturan formasi tiga candle** dalam pembentukan FVG. Pastikan Anda mengukur dari sumbu ke sumbu.
`;export{a as default};
