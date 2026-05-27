const a=`# Konfirmasi Entry di Breaker

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Konfirmasi Entry di Breaker](/images/lessons/level-23/05-konfirmasi.svg)

## Mengapa Materi Ini Penting
Memiliki zona Breaker Block yang tepat hanyalah separuh dari kemenangan. Separuh lainnya adalah mengeksekusi perdagangan (entry) di saat yang paling presisi. Melakukan *entry* membabi-buta hanya karena harga menyentuh zona Breaker (sering disebut *Blind Entry* atau *Limit Order Entry*) mengandung risiko tinggi jika tren sedang sangat impulsif. Belajar cara mendapatkan "konfirmasi" akan menyaring setup yang palsu, mengurangi kerugian (Stop Loss), dan secara dramatis meningkatkan *Win Rate* Anda.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan perbedaan antara *Blind Entry* dan *Confirmation Entry* pada zona Breaker.
- Menggunakan pergeseran struktur harga di *Lower Time Frame* (LTF) sebagai konfirmasi.
- Membaca penolakan candle (Price Action) sebagai konfirmasi tambahan.

## Penjelasan
Sama seperti area *Support/Resistance* atau zona SMC lainnya, Breaker Block bisa saja tidak dihormati oleh harga. Kadang harga terus menembus Breaker seakan-akan area itu tidak pernah ada. Untuk melindungi modal, trader profesional sangat bergantung pada **Konfirmasi Entry**.

Konfirmasi entry adalah tanda-tanda atau sinyal tambahan yang muncul *tepat di dalam* zona Breaker Block untuk memastikan bahwa Smart Money memang benar-benar melakukan mitigasi (bereaksi) di sana.

Ada dua jenis konfirmasi yang paling umum dan ampuh digunakan di Breaker Block:

### 1. Konfirmasi Struktur Multi-Time Frame (LTF CHoCH)
Ini adalah metode paling andal. Logikanya: Jika Breaker Block Anda berada di Time Frame besar (misalnya H1 atau H4), Anda turun ke Time Frame kecil (misalnya M15 atau M5) untuk mencari tanda pembalikan arah begitu harga menyentuh zona Breaker H1 Anda.

**Cara kerjanya (untuk setup Bullish Breaker):**
- Harga H1 sedang turun (pullback) mendekati zona Bullish Breaker H1.
- Anda pindah ke grafik M5. Di M5, pergerakan turun ini terlihat sebagai *downtrend* dengan struktur *Lower High* (LH) dan *Lower Low* (LL).
- Ketika harga M5 masuk ke zona Breaker H1, **jangan langsung beli!** Tunggu.
- Tunggu sampai harga di M5 mematahkan *Lower High* terakhirnya dengan kuat, menciptakan *Higher High* (HH). Ini adalah *Change of Character* (CHoCH) di M5.
- Setelah CHoCH M5 terbentuk, akan ada Order Block M5 atau FVG M5 yang baru tercipta. Anda melakukan *Buy* pada *pullback* di M5 tersebut. 

Metode ini memastikan bahwa momentum turun telah resmi berakhir, dan pembeli sudah kembali memegang kendali *sebelum* Anda masuk pasar.

### 2. Konfirmasi Price Action (Candlestick Rejection)
Bagi yang tidak suka berpindah-pindah Time Frame, Anda bisa menggunakan konfirmasi *Candlestick* di Time Frame yang sama. Anda mencari bukti bahwa zona Breaker memberikan penolakan keras terhadap harga.
- Tunggu candle pertama menyentuh atau masuk ke dalam zona Breaker.
- Perhatikan bagaimana candle tersebut ditutup (*close*). 
- Jika candle membentuk pinbar panjang dengan ekor (wick) tajam menyentuh Breaker dan body kecil, itu adalah tanda rejeksi yang bagus.
- Jika candle selanjutnya membentuk pola *Engulfing* yang searah dengan Breaker, itu adalah konfirmasi Anda untuk masuk di pergantian candle (open candle) berikutnya.

### Penempatan Stop Loss dan Take Profit
- **Stop Loss (SL)**: Dengan konfirmasi LTF, SL dapat diletakkan dengan sangat presisi di bawah *Low* M5 yang baru terbentuk, bukan di bawah zona H1 yang lebar. Ini mengecilkan risiko secara drastis (Tight SL).
- **Take Profit (TP)**: Targetkan likuiditas utama berikutnya (Swing High/Low dari Time Frame besar) atau zona *Supply/Demand* yang belum tersentuh (unmitigated).

## Contoh di Chart
Misalnya Anda memiliki Bearish Breaker di M30 pada pair AUDUSD. Anda membuka chart M3 untuk mencari *entry*.
Di M3, harga merayap naik, membentuk tangga anak tangga ke atas (Higher Highs). Harga lalu masuk ke zona Breaker M30.
Tiba-tiba, di M3 muncul candle merah besar yang menjebol *Higher Low* terakhir di M3. Ini CHoCH M3!
Anda kemudian meletakkan limit *Sell* di OB M3 atau FVG M3 yang baru tercipta dari pergerakan turun tadi. SL Anda hanya 4 pips (di atas puncak baru M3), dan TP Anda adalah 20 pips ke *Low* M30 terdekat. Anda mendapatkan rasio *Risk:Reward* 1:5!

## Kesalahan Umum
- **Turun ke Time Frame yang terlalu kecil.** Jika Breaker Anda di Daily, turun ke M1 akan memberikan terlalu banyak "noise" dan *CHoCH* palsu. Aturan umumnya adalah turun 2-3 tingkat (misal H4 ke M15, atau M15 ke M1).
- **Terlalu lama menunggu konfirmasi sehingga ketinggalan kereta.** Konfirmasi kadang terjadi sangat cepat. Jika tertinggal, jangan dikejar. Tunggu peluang lain.
- **Entry saat *close* candle yang sangat panjang.** Jika konfirmasi (misal Engulfing) sangat panjang, entry langsung akan membuat SL Anda menjadi terlalu besar.

## Latihan
Cobalah teknik ini di akun demo atau simulator *backtest*. Gambar sebuah Breaker di H1. Begitu harga masuk ke kotak Anda, pindah ke M5. Perhatikan apa yang terjadi. Bisakah Anda melihat perubahan struktur (CHoCH) sebelum harga akhirnya memantul sesuai harapan H1?

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada **cara memetakan CHoCH di Lower Time Frame (LTF) untuk mendapatkan entry yang tajam**.
`;export{a as default};
