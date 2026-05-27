const a=`# Fair Value Gap (FVG)

Level: Level 09 — ICT Apprentice
XP: 10

![Ilustrasi Fair Value Gap](/images/lessons/level-09/03-fvg.svg)

## Mengapa Materi Ini Penting
Fair Value Gap (FVG) adalah jejak paling jelas dari intervensi institusi di pasar. Saat institusi membeli atau menjual dengan sangat agresif, mereka meninggalkan ketidakseimbangan (imbalance) di chart. Mengenali FVG adalah kemampuan super karena harga, yang digerakkan oleh algoritma (IPDA), secara alami akan selalu berusaha menyeimbangkan kembali area-area yang kosong ini. FVG sering kali menjadi area entri yang jauh lebih presisi dibandingkan Order Block murni.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan konsep ketidakseimbangan (imbalance) harga.
- Mengidentifikasi formasi 3-candle yang membentuk Fair Value Gap.
- Menggunakan FVG sebagai titik masuk (entry) atau target keuntungan (take profit).

## Penjelasan
**Fair Value Gap (FVG)**, yang juga sering disebut sebagai *Imbalance* atau *Inefficiency*, terjadi ketika harga bergerak terlalu cepat dalam satu arah (naik atau turun) sehingga pihak lawan tidak mendapat kesempatan untuk berpartisipasi. 

Bayangkan sebuah lelang. Jika harga tiba-tiba melompat dari Rp10.000 ke Rp15.000 tanpa ada transaksi di harga Rp11.000, Rp12.000, dst., maka ada celah (gap) nilai wajar. Harga sering kali akan kembali turun untuk mengisi celah harga tersebut agar adil bagi semua partisipan.

**Cara Mengidentifikasi FVG di Chart:**
FVG selalu terdiri dari formasi **3 candle berurutan**.

* **Bullish FVG (Celah Naik):**
  - **Candle 1:** Harga tertingginya (high).
  - **Candle 2:** Candle besar dan panjang naik ke atas (displacement).
  - **Candle 3:** Harga terendahnya (low).
  - *Celah (Gap) berada di antara High Candle 1 dan Low Candle 3.* Bagian tubuh Candle 2 yang tidak tumpang tindih dengan ekor (wick) Candle 1 dan Candle 3 adalah area FVG.

* **Bearish FVG (Celah Turun):**
  - **Candle 1:** Harga terendahnya (low).
  - **Candle 2:** Candle besar dan panjang turun ke bawah.
  - **Candle 3:** Harga tertingginya (high).
  - *Celah (Gap) berada di antara Low Candle 1 dan High Candle 3.* 

**Bagaimana Memanfaatkannya?**
Saat harga kembali ke area FVG, algoritma sedang melakukan *rebalancing* (penyeimbangan ulang). Ini adalah momen yang tepat untuk masuk ke pasar. 
1. Jika tren sedang naik dan harga turun menyentuh Bullish FVG, itu adalah peluang BUY.
2. Jika Anda sedang menahan posisi BUY dan melihat ada Bearish FVG yang belum terisi di atas sana, Anda bisa menjadikan FVG tersebut sebagai target Take Profit.

## Contoh di Chart
Perhatikan chart saat berita besar rilis (misalnya NFP). Biasanya ada candle hijau yang sangat panjang ke atas. Lihat candle sebelum candle panjang tersebut, dan candle sesudahnya. Jika ekor atas candle pertama tidak bersentuhan dengan ekor bawah candle ketiga, ruang kosong di tengah itulah Fair Value Gap. Anda bisa menggambar kotak di sana dan menunggu harga turun perlahan menyentuh kotak tersebut untuk melakukan buy.

## Kesalahan Umum
- Memaksakan FVG di kondisi pasar yang sedang *sideways* atau *ranging*. FVG paling valid muncul setelah pengambilan likuiditas atau saat terjadi Break of Structure (BOS).
- Langsung masuk (entry) seketika harga menyentuh ujung FVG tanpa melihat struktur tren secara keseluruhan.
- Tidak sabar menunggu harga mencapai FVG sepenuhnya dan melakukan *fear of missing out* (FOMO) entry di tengah jalan.

## Latihan
Buka chart apa saja di timeframe M15. Cari candle dengan bodi yang panjang-panjang. Periksa candle ke-1 dan ke-3 dari rangkaian tersebut. Gambarlah kotak di area yang tidak memiliki *overlap* ekor candle. Amati apa yang terjadi pada harga beberapa jam kemudian.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Cara Mengidentifikasi FVG di Chart dengan 3 Candle**.
`;export{a as default};
