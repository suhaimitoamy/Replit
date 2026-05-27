const a=`# Likuiditas Internal (Internal Liquidity)

Level: Level 16 — Internal and External Liquidity
XP: 10

![Ilustrasi Internal Liquidity](/images/lessons/level-16/internal-liquidity.svg)

## Mengapa Materi Ini Penting
Likuiditas adalah bahan bakar pergerakan pasar. Namun, likuiditas tidak semuanya sama. Memahami "Internal Liquidity" (Likuiditas Internal) akan membantumu mengerti ke mana harga mungkin akan bergerak *setelah* terjadi sebuah pergerakan besar, dan di mana area entri dengan probabilitas tinggi berada.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mendefinisikan apa itu Internal Liquidity.
- Mengidentifikasi Internal Liquidity di dalam sebuah rentang harga (trading range).
- Memahami mengapa algoritma pasar sering mencari likuiditas ini.

## Penjelasan
Bayangkan sebuah pergerakan harga yang kuat dari titik A (Swing Low) ke titik B (Swing High). Jarak antara titik A dan titik B ini kita sebut sebagai *Trading Range* atau rentang harga utama.

**Internal Liquidity** adalah semua likuiditas (area di mana banyak stop loss dan pending order berada) yang terbentuk **di dalam** rentang harga antara Swing Low dan Swing High tersebut. 

Bentuk paling umum dari Internal Liquidity adalah:
1. **Fair Value Gap (FVG)**: Ketidakseimbangan harga yang tertinggal di dalam range pergerakan yang cepat. FVG adalah magnet kuat bagi harga.
2. **Minor Swing Highs / Lows**: Puncak dan lembah kecil yang terbentuk saat harga sedang berayun naik turun di dalam range besar. 

Mengapa harga kembali ke Internal Liquidity? 
Ketika institusi besar (Smart Money) menggerakkan harga secara impulsif (misalnya ke atas), mereka sering kali meninggalkan celah inefisiensi (seperti FVG) atau membangun struktur kecil yang menarik *retail traders* untuk masuk pasar terlalu dini. Harga kemudian akan ditarik kembali (pullback/retracement) ke dalam range untuk "mengambil" Internal Liquidity tersebut. Ini berfungsi untuk menyeimbangkan pasar dan mengumpulkan pesanan tambahan sebelum harga melanjutkan tren utamanya.

Jadi, jika kamu melihat sebuah dorongan harga yang kuat, jangan buru-buru mengejarnya (FOMO). Tunggulah harga kembali ke dalam mencari Internal Liquidity, seperti area FVG, sebagai titik entri yang jauh lebih aman.

## Contoh di Chart
Misalnya pada chart GBPUSD H1, harga tiba-tiba melonjak naik menembus resistance dan membuat Swing High baru. Jarak dari Low ke High adalah 100 pips. Di tengah-tengah pergerakan 100 pips tersebut, terdapat sebuah Fair Value Gap (FVG) yang belum tersentuh. 

Harga kemudian mulai turun perlahan. Banyak trader ritel panik dan berpikir tren sudah berbalik arah menjadi turun. Namun, sebenarnya harga hanya sedang turun untuk mengambil **Internal Liquidity** (menutup FVG). Setelah FVG tersentuh, harga memantul kuat dan melanjutkan kenaikannya.

## Kesalahan Umum
- Mengejar harga yang sedang berlari kencang tanpa menunggu harga kembali mengambil Internal Liquidity.
- Mengira bahwa pullback (koreksi) ke arah Internal Liquidity adalah sebuah *reversal* atau pembalikan tren utama.
- Menempatkan Stop Loss terlalu dekat dengan area Internal Liquidity, sehingga mudah tersapu saat harga melakukan *sweep*.

## Latihan
Buka chart XAUUSD (Gold) di timeframe 1 Jam (H1). Temukan satu pergerakan naik (bullish impulsif) yang sangat kuat. Tarik garis pada Swing Low (awal mula pergerakan) dan Swing High (ujung pergerakan). Lihat ke bagian dalam rentang tersebut, bisakah kamu menemukan sebuah FVG? Amati bagaimana harga bereaksi ketika kembali ke FVG tersebut.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Mendefinisikan apa itu Internal Liquidity dan bentuknya (seperti FVG)**.
`;export{a as default};
