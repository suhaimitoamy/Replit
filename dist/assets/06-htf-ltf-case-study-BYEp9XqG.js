const a=`# Case Study: HTF to LTF Execution

Level: Level 28 — HTF to LTF Entry Model
XP: 10

![Ilustrasi Case Study](/images/lessons/level-28/06-htf-ltf-case-study.svg)

## Mengapa Materi Ini Penting
Teori tanpa praktik hanyalah angan-angan. Setelah memahami setiap kepingan puzzle dari *Bias, POI,* hingga *Trigger*, Anda perlu melihat bagaimana komponen-komponen ini hidup di pasar yang sebenarnya. Studi kasus (Case Study) memberikan Anda lensa pandang *over-the-shoulder* (mengintip dari balik bahu) seorang analis saat membedah sebuah *setup* trading dari awal hingga akhir. Ini menjembatani kesenjangan antara diagram di buku dan kekacauan grafik harga dunia nyata.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengamati penerapan 4 Langkah Entry Model dalam skenario pergerakan harga nyata.
- Memahami alur pemikiran analitis (*thought process*) di balik pengambilan keputusan buy/sell.
- Mengenali alasan penempatan Stop Loss dan Take Profit yang logis.

## Penjelasan
Mari kita bedah sebuah *setup* hipotetis namun sangat realistis pada pasangan mata uang EURUSD. Kita akan membayangkan berada di depan layar pada pagi hari sesi London.

**Latar Belakang Pasar:**
- Instrumen: EURUSD
- Sesi: Awal Sesi London.

**Step 1: Menganalisis HTF Bias (Chart M15)**
Saat membuka chart M15, kita melihat bahwa selama dua hari terakhir, harga secara agresif memecah level resistensi dan membentuk *Higher Highs* dan *Higher Lows*. Kemarin malam, harga baru saja menembus *High* utama dan melakukan konsolidasi.
- *Keputusan:* Bias kita adalah **Bullish**. Hari ini kita hanya fokus mencari posisi BUY.

**Step 2: Mencari HTF POI (Chart M15)**
Melihat ke bagian bawah dari *breakout* (tembusan) semalam, kita mencari pijakan. Terdapat sebuah *candle* merah tebal (*bearish candle*) yang seketika disusul oleh tiga *candle* hijau besar yang menciptakan *Fair Value Gap* (FVG) lebar. *Candle* merah ini adalah *Bullish Order Block* (Demand) kita yang belum disentuh (unmitigated). Posisinya ideal, berada di bawah level diskon (murah).
- *Tindakan:* Kita menggambar kotak hijau menutupi Order Block M15 tersebut. Harga saat ini masih jauh di atas, kita bersabar menunggu harga turun ke kotak tersebut.

**Step 3: Menunggu LTF Trigger (Chart M5 / M1)**
Dua jam kemudian, harga turun tajam, menembus likuiditas awal (Inducement), dan menyentuh bagian atas kotak M15 kita. Kita tidak panik dan tidak langsung menekan "Buy". Kita beralih ke chart M5.
Di M5, harga masih terlihat jatuh bebas. Namun, setelah menyentuh tengah-tengah kotak M15, sebuah *candle* penolakan kuat muncul. *Candle* hijau berikutnya meloncat naik dan berhasil menutup di atas titik *Lower High* terakhir di M5.
- *Analisis:* Terjadi penembusan struktur mikro (CHoCH Bullish) di M5. Arus telah berbalik arah sesuai dengan HTF Bias kita.

**Step 4: Eksekusi dan Manajemen Risiko**
CHoCH di M5 meninggalkan celah kecil berupa FVG M5 dan Order Block M5 di pangkalnya.
- *Entry:* Kita menempatkan pesanan *Buy Limit* di Order Block M5 tersebut.
- *Stop Loss:* SL ditempatkan 2 pips di bawah ujung jarum (wick) terendah dari zona M15/M5 tersebut. Jika harga turun melebihi level ini, skenario kita batal total. (Risiko terukur: 6 Pips).
- *Take Profit:* TP diatur pada level *Swing High* M15 yang terbentuk sebelum harga turun tadi. (Jarak TP: 30 Pips).
- *Hasil:* Harga kembali sedikit ke bawah (pullback) menyentuh order *Buy Limit* kita, mengaktifkan pesanan, lalu melesat kuat ke atas seiring dibukanya volume sesi New York, mengenai Take Profit kita. Rasio Risk:Reward (R:R) adalah 1:5.

Analisis dari studi kasus ini menunjukkan kekuatan strategi "menunggu dengan sabar". Kita tidak mengejar harga, melainkan membiarkan harga datang ke area penyergapan kita.

## Contoh di Chart
Perhatikan gambar diagram SVG di atas. Ia mensimulasikan persis apa yang telah diuraikan dalam studi kasus ini, merangkum perjalanan dari gambaran besar ke penembak runduk (sniper) di timeframe kecil.

## Kesalahan Umum
- **Mengubah Bias di tengah jalan**: Saat harga turun tajam menuju POI M15, trader menjadi takut dan mengira tren telah berubah menjadi *Bearish*, lalu malah ikut Sell di atas POI.
- **Meletakkan SL yang terlalu ketat**: Menempatkan SL tepat di angka bulat tanpa memberi ruang bernapas (buffer) untuk *spread* broker.
- **Serakah di Take Profit**: Berharap harga naik selamanya dan tidak mengambil untung di level resistensi logis (High sebelumnya).

## Latihan
Cobalah lakukan reka ulang (*backtest*). Gunakan *TradingView* dan fitur *Bar Replay*. Mundurkan grafik ke minggu lalu. Lakukan analisa dari M15, tandai POI, jalankan perlahan, lalu turun ke M5 untuk mencari CHoCH. Hitung berapa kali strategi mekanis ini berhasil dan gagal.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi seluruh materi di **Level 28** ini dari awal untuk memperkuat pondasi pemahaman Entry Model secara utuh.
`;export{a as default};
