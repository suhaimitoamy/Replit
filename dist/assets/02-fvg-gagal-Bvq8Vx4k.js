const a=`# FVG yang Gagal

Level: Level 25 — Inversion FVG
XP: 10

![Ilustrasi FVG yang Gagal](/images/lessons/level-25/fvg-gagal.svg)

## Mengapa Materi Ini Penting
Banyak trader pemula merasa frustrasi ketika strategi mereka tidak bekerja 100%. Mereka melihat FVG yang terbentuk sangat cantik, memasang limit order di sana, dan kemudian terkejut saat harga melibas FVG tersebut hingga mengenai Stop Loss. Memahami anatomi "FVG yang Gagal" sangat penting agar Anda tidak terjebak dalam *denial* (penyangkalan) dan bisa dengan cepat mengubah sudut pandang analisis Anda. FVG yang gagal adalah fondasi utama dari terciptanya Inversion FVG.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi ciri-ciri FVG yang gagal menahan harga.
- Membedakan antara sapuan likuiditas (liquidity sweep) dan penembusan sejati (true break) pada FVG.
- Menghindari entri secara membabi buta pada setiap FVG yang terlihat di chart.

## Penjelasan
Sebuah FVG terbentuk ketika ada pergerakan impulsif yang meninggalkan celah kosong antara sumbu (wick) candle pertama dan candle ketiga. Teorinya, harga akan kembali mengisi celah ini dan memantul.

Namun, **kapan sebuah FVG dianggap gagal?**

Sebuah FVG dinyatakan gagal atau tidak valid lagi sebagai support/resistance aslinya ketika **body candle** ditutup (close) melewati batas ekstrem dari FVG tersebut.
- Jika itu adalah **Bullish FVG** (yang seharusnya menahan harga agar tidak turun), ia dinyatakan gagal jika body candle bearish *close* di bawah garis terbawah FVG tersebut.
- Jika itu adalah **Bearish FVG** (yang seharusnya menahan harga agar tidak naik), ia dinyatakan gagal jika body candle bullish *close* di atas garis teratas FVG tersebut.

Penting sekali untuk membedakan antara **Penembusan Sejati** (True Break) dan **Sapuan** (Sweep). Jika harga turun melewati Bullish FVG, namun kemudian ditarik kembali ke atas sebelum candle ditutup (meninggalkan ekor panjang/wick di bawah FVG), itu **bukan** FVG yang gagal. Itu hanya sapuan (sweep), dan FVG tersebut masih valid. FVG hanya dinyatakan gagal jika ada *body close* di luarnya.

Mengapa FVG bisa gagal? 
1. **Pergeseran Tren:** Market sedang bersiap mengubah arah, dan sentimen sebelumnya sudah melemah.
2. **Berita Fundamental:** Rilis berita besar (High Impact News) seringkali melibas FVG yang berlawanan arah dengan tren mayor.
3. **Target Likuiditas yang Lebih Besar:** Smart Money tidak tertarik memantulkan harga di FVG tersebut karena mereka mengincar kumpulan *stop loss* (liquidity) yang berada jauh di bawah/atas FVG itu.

## Contoh di Chart
Misalkan Anda trading di sesi London. Anda melihat pergerakan bullish kencang yang meninggalkan Bullish FVG. Anda siap mencari posisi buy saat harga kembali. Harga memang turun ke kotak FVG, tetapi bukannya melambat dan membentuk pola pembalikan, harga malah berupa candle bearish besar (Marubozu) yang menusuk langsung melewati FVG dan *close* jauh di bawahnya. 

Di titik ini, skenario *buy* Anda **batal total**. FVG tersebut telah gagal. Anda tidak boleh menahan posisi buy atau mencoba melakukan buy lagi di area tersebut, karena strukturnya sudah patah.

## Kesalahan Umum
- **Averaging Down di dalam FVG:** Trader menahan posisi rugi saat harga menembus FVG, berharap harga akan berbalik, padahal body candle sudah *close* di bawahnya.
- **Bingung antara Wick dan Body:** Menganggap FVG gagal hanya karena tertusuk jarum (wick), lalu buru-buru cut loss, padahal harga berbalik naik setelahnya.
- **Marah pada pasar:** FVG hanyalah probabilitas, bukan jaminan pasti. Menembusnya FVG adalah informasi dari pasar, bukan hukuman.

## Latihan
Buka chart XAUUSD (Gold) pada timeframe M5 atau M15. Cobalah cari 3 contoh FVG yang gagal. Perhatikan dengan teliti bagaimana bentuk candle yang menembusnya. Apakah candle tersebut berupa candle penuh (full body) yang meyakinkan?

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian perbedaan **Body Close** vs **Wick Sweep**. Ini adalah nyawa dari validasi Inversion FVG nantinya.
`;export{a as default};
