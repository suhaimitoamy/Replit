const a=`# Partial Fill FVG: Mengapa Harga Hanya Menyentuh Setengah?

Level: Level 22 — FVG Refinement
XP: 10

![Ilustrasi Partial Fill FVG](/images/lessons/level-22/partial-fill.svg)

## Mengapa Materi Ini Penting
Seringkali trader menjadi frustrasi karena harga tidak pernah mencapai bagian ujung dari FVG yang sudah ditandai, lalu harga tiba-tiba berbalik arah dan terbang (atau terjun) meninggalkan mereka. Market tidak selalu memberikan pengisian FVG 100% (*fully filled*). Memahami fenomena *Partial Fill* dan konsep **Consequent Encroachment (CE)** akan membantu Anda untuk lebih fleksibel dalam menentukan titik entry.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Memahami konsep *Partial Fill* pada sebuah FVG.
- Mengetahui apa itu *Consequent Encroachment* (batas tengah 50% FVG).
- Menyesuaikan strategi entry agar tidak tertinggal oleh pergerakan pasar.

## Penjelasan
Tidak semua utang harus dilunasi secara penuh seketika. Di dalam market, saat dorongan order institusi (*order flow*) sedang sangat kuat dan agresif, institusi tidak punya waktu (dan tidak ingin memberikan harga diskon yang terlalu dalam) untuk membawa harga kembali mengisi penuh FVG. Akibatnya, harga hanya akan menyentuh sedikit bagian atas FVG, atau paling sering memantul persis di **garis tengah FVG**.

**Consequent Encroachment (CE)**
Istilah teknikal yang sering digunakan untuk menyebut level tengah (50%) dari sebuah FVG adalah *Consequent Encroachment*. Jika Anda menarik alat *Fibonacci Retracement* dari ujung atas FVG ke ujung bawah FVG, level 0.5 (50%) adalah titik ekuilibrium (keseimbangan) dari gap tersebut.

Bagaimana cara market berinteraksi secara *partial*:
1. **Shallow Mitigation:** Harga hanya "mencium" sedikit ujung luar dari FVG (misalnya 10-20% terisi), lalu memantul kuat. Ini menandakan *buyer* (atau *seller*) sangat agresif.
2. **Consequent Encroachment (50% Mitigation):** Ini adalah reaksi paling umum pada FVG yang sehat. Harga masuk hingga menyentuh tepat di pertengahan area FVG, mengumpulkan cukup banyak order (likuiditas internal), lalu berbalik arah dengan tajam.

Jika harga menembus level 50% (CE) ini dan terus menekan ke bawah (pada Bullish FVG), probabilitasnya akan menurun. Harga memang masih bisa memantul dari batas bawah FVG, namun tubuh (body) candle yang di tutup melebihi 50% FVG seringkali menjadi tanda pelemahan struktur. FVG yang berkualitas tinggi biasanya akan merespon dengan cepat saat harga menyentuh area 50%-nya.

## Contoh di Chart
Anda menemukan Bearish FVG di EURUSD (harga turun kuat). FVG ini terbentuk antara harga 1.0500 dan 1.0450 (lebar 50 pips). 
Level 50% (CE) berada di 1.0475.
Saat harga mulai *pullback* (naik perlahan ke atas), Anda tidak harus menempatkan *Sell Limit* di harga terdalam 1.0500. Alih-alih, pantau bagaimana candle bereaksi saat menyentuh 1.0475. Jika sebuah candle menyentuh 1.0475 dan ditutup dengan wick (ekor) panjang ke atas, ini adalah konfirmasi *Partial Fill* di CE yang valid untuk melakukan Sell.

## Kesalahan Umum
- **Memaksakan harga harus mengisi 100%.** Sifat kaku ini akan membuat Anda melewatkan *setup* probabilitas tinggi (biasanya disebut "ketinggalan kereta").
- **Menaruh Stop Loss di tengah FVG.** Karena kita tidak tahu persis apakah market akan mengisi 10%, 50%, atau 100%, sangat disarankan Stop Loss diletakkan **di luar** atau sedikit lebih jauh dari batas luar FVG.
- **Masuk Terlalu Cepat (Early Entry).** Hanya karena harga menyentuh ujung FVG, bukan berarti Anda harus langsung *market execution*. Ada baiknya melihat reaksi *wick* terlebih dahulu, terutama di timeframe yang lebih kecil.

## Latihan
1. Buka Chart, cari FVG yang cukup lebar.
2. Gunakan *Fibonacci Tool* (atau *Gann Box*) yang sudah di-setting hanya untuk menampilkan level 0, 0.5, dan 1.
3. Tarik dari ujung ke ujung FVG tersebut untuk mencari batas 50% (CE).
4. Amati histori pergerakan harga. Seberapa sering harga memantul persis di garis 50% dibandingkan garis 100%?

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya mengerti apa arti istilah *Consequent Encroachment*.
- [ ] Saya paham mengapa institusi tidak selalu mengisi FVG secara penuh.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika bingung cara mencari 50% FVG, cara paling sederhana adalah mengukur total panjang FVG dibagi dua. Jika FVG membentang dari 10 sampai 20, maka garis tengahnya ada di 15. Area inilah titik fokus kita.
`;export{a as default};
