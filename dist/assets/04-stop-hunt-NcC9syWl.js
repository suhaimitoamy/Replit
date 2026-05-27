const a=`# Stop Hunt Market Maker

Level: Level 06 — Liquidity Seeker
XP: 10

![Ilustrasi Stop Hunt](/images/lessons/level-06/stop-hunt.svg)

## Mengapa Materi Ini Penting
"Pialang saya tahu di mana letak *stop loss* saya!" Pernahkah Anda merasakan hal itu? Anda meletakkan batas kerugian (*Stop Loss*) di area yang tampaknya aman. Tiba-tiba harga melesat cepat seperti roket hanya untuk menyentuh *stop loss* Anda dengan presisi milimeter, lalu segera berbalik dan terbang jauh ke arah analisa awal Anda. Fenomena ini sering disebut *Stop Hunt*. Memahami bagaimana dan mengapa *Stop Hunt* dilakukan oleh *Market Maker* (penyedia likuiditas) akan merubah frustrasi Anda menjadi peluang keuntungan.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan konsep *Stop Hunt* sebagai proses manipulasi alami dari pasar.
- Mengetahui waktu dan zona di mana *Stop Hunt* paling sering terjadi (biasanya di awal pembukaan sesi).
- Berhenti merasa dipermainkan pasar dan mulai memanfaatkan pergerakan *Stop Hunt*.

## Penjelasan
*Stop Hunt* atau "berburu stop loss" adalah sebuah pergerakan pasar yang cepat, tajam, dan agresif yang bertujuan dengan sengaja memicu *stop loss* para trader ritel sebelum harga bergerak ke arah yang sebenarnya. Banyak trader berpikir bahwa ini adalah konspirasi jahat dari pialang (*broker*) yang ingin merampok uang mereka. Walaupun ada pialang nakal, dalam sebagian besar pasar sesungguhnya (terutama yang bervolume raksasa), *Stop Hunt* dilakukan oleh pemain besar atau algoritma antar bank untuk mendapatkan likuiditas yang diperlukan untuk masuk ke pasar.

Seperti yang dibahas pada pelajaran likuiditas dasar, institusi tidak bisa sekadar menekan tombol "Buy" dengan ukuran satu juta lot tanpa membuat harga berantakan. Mereka butuh likuiditas, dan *stop loss* kitalah bahan bakar yang paling murah dan melimpah.

**Ciri-ciri khas sebuah Stop Hunt:**
1. **Kecepatan:** Pergerakan ini terjadi sangat tiba-tiba. Candlestick membesar dengan momentum tinggi seolah-olah ada berita ekonomi besar yang rilis.
2. **Pemulihan Cepat (V-Shape Recovery):** Segera setelah menyentuh area *Support* atau *Resistance* mayor dan mengambil *stop loss*, harga berbalik sama agresifnya. Ini akan menciptakan bentuk huruf "V" yang tajam di chart.
3. **Penyapuan Level Psikologis:** Sering kali terjadi di atas *Equal Highs*, di bawah *Equal Lows*, atau pada harga bulat (misal 1.10000 di EURUSD).

*Stop Hunt* paling sering terjadi pada masa transisi zona waktu trading, misalnya:
- Transisi antara sesi Asia ke sesi London. (Sering disebut *London Judas Swing* atau Manipulasi London).
- Transisi dari sesi London ke New York.
Pada saat pembukaan sesi, volume meningkat drastis. Institusi di sesi baru membutuhkan posisi, sehingga mereka sengaja "mendorong" harga ke arah yang salah untuk memicu kepanikan dan mengeksekusi *stop loss*, lalu masuk ke arah yang sebenarnya.

**Bagaimana menghadapinya?**
Alih-alih menjadi korban, jadilah predator. Jika Anda memiliki analisis bahwa EURUSD akan naik (Bullish), jangan terburu-buru masuk posisi beli. Tunggulah sebuah pergerakan turun tajam yang menembus *Support* (mengambil SSL). Saat harga turun dan mengambil *stop loss* para pembeli tak sabar, barulah Anda mencari konfirmasi pembalikan (seperti pola *Sweep* atau *CHoCH*) untuk ikut membeli bersama *Smart Money*.

## Contoh di Chart
Perhatikan sesi Asia yang bergerak datar (*ranging/sideways*) dan meninggalkan batas atas dan batas bawah yang sangat jelas. Begitu sesi London dibuka pada jam 14:00 WIB, harga mendadak anjlok ke bawah melewati batas bawah sesi Asia. Para trader *Breakout* mulai melakukan *Sell*, sementara trader yang pasang Buy di sesi Asia terkena *Stop Loss*. Lima belas menit kemudian, muncul sebuah candle *bullish* besar yang menelan habis seluruh pergerakan turun tadi (*Engulfing*). Harga kemudian naik sepanjang hari. Penurunan mendadak di awal sesi London itu adalah *Stop Hunt* klasik.

## Kesalahan Umum
- Meletakkan *stop loss* persis satu atau dua *pips* di belakang level *support/resistance* tanpa mempertimbangkan nafas tambahan untuk *spread* dan kemungkinan *stop hunt*.
- Mudah panik saat melihat sebuah candle raksasa melawan posisi analisa Anda, lalu menutup posisi secara manual sesaat sebelum harga berbalik menguntungkan.
- Masuk ke pasar tepat pada saat rilis berita (*news*), di mana *Stop Hunt* terjadi secara brutal ke dua arah (atas dan bawah).

## Latihan
Perhatikan pembukaan sesi London (sekitar jam 14:00 atau 15:00 WIB tergantung Daylight Saving). Apakah sering kali terjadi pergerakan yang berlawanan dengan tren utama hari itu? Cobalah amati beberapa hari berturut-turut pada pasangan mata uang GBPUSD atau EURUSD dan rekam hasilnya dalam catatan Anda.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **transisi zona waktu dan mengapa Stop Hunt sering terjadi di sana**.
`;export{a as default};
