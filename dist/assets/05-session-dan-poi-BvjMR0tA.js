const a=`# Sesi Trading dan Point of Interest (POI)

Level: Level 09 — ICT Apprentice
XP: 10

![Ilustrasi Sesi dan POI](/images/lessons/level-09/05-session-dan-poi.svg)

## Mengapa Materi Ini Penting
Dalam ICT, *KAPAN* Anda melakukan trading sama pentingnya dengan *DI MANA* Anda melakukan trading. Konsep ini dikenal dengan "Time and Price Theory" (Teori Waktu dan Harga). Algoritma pasar tidak bergerak secara acak sepanjang hari; ia memiliki jadwal tertentu untuk berekspansi, mengambil likuiditas, atau beristirahat. Memahami sesi trading (Killzones) akan mencegah Anda terjebak di pasar yang sedang tidak bergerak (sideways) dan memfokuskan Anda pada waktu di mana peluang menang paling tinggi.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengetahui pembagian tiga sesi utama dalam trading (Asia, London, New York).
- Memahami konsep "Killzone" (Zona Waktu Entri).
- Menentukan Point of Interest (POI) yang tepat berdasarkan waktu dan harga.

## Penjelasan
Pasar Forex dan Gold buka 24 jam, tetapi volume dan volatilitasnya terpusat pada sesi-sesi tertentu:

1. **Sesi Asia (Konsolidasi):**
   Sesi Asia biasanya ditandai dengan pergerakan yang lambat dan merayap dalam rentang yang sempit (range-bound). Dalam kacamata ICT, sesi Asia ini sedang membangun likuiditas di atas (Asian High) dan di bawah (Asian Low). *Trader ICT jarang melakukan entri pada sesi ini.*

2. **Sesi London (Manipulasi):**
   Sesi London dikenal sebagai sesi yang sering menciptakan *High of the Day* (Titik Tertinggi Hari Itu) atau *Low of the Day* (Titik Terendah Hari Itu). Pergerakan khas sesi London adalah: harga bergerak cepat mengambil likuiditas Sesi Asia (manipulasi), lalu berbalik arah dan memulai tren utama hari itu. Waktu terbaik (Killzone) London biasanya sekitar jam 13.00 - 16.00 WIB.

3. **Sesi New York (Ekspansi/Distribusi):**
   Sesi New York biasanya melanjutkan tren yang sudah dibangun oleh London, atau memberikan peluang masuk kedua (retracement) sebelum melanjutkan tren. Killzone New York adalah waktu yang sangat bertenaga, sekitar jam 19.00 - 22.00 WIB.

**Point of Interest (POI):**
POI adalah "Titik Perhatian" di mana Anda akan mencari entri. Sebuah POI yang valid menurut ICT adalah kombinasi dari **Harga** (seperti Order Block atau FVG) yang tersentuh pada **Waktu** yang tepat (di dalam Killzone).

Jika harga menyentuh Order Block Anda pada jam 11 siang (masih di zona Asia yang mati), itu bukanlah POI yang bagus. Tetapi jika harga menyentuh Order Block tersebut pada jam 2 siang (London Killzone), probabilitas keberhasilannya meningkat drastis.

## Contoh di Chart
Perhatikan chart EURUSD M15. Gambarlah kotak yang mencakup pergerakan harga selama Sesi Asia. Anda akan melihat harga bergerak naik turun dalam kotak tersebut. Saat Sesi London dibuka, harga tiba-tiba melesat turun menembus batas bawah kotak Asia (Asian Low). Ini adalah manipulasi (pengambilan likuiditas). Setelah menyentuh Order Block di bawah, harga melesat naik dengan kuat membentuk displacement. Itulah momen Anda mencari FVG untuk melakukan BUY. 

## Kesalahan Umum
- Trading 24 jam tanpa henti. (Trader profesional tahu kapan harus diam).
- Mengambil entri di luar zona waktu Killzone. Harga sering kali hanya *sideways* dan menyentuh stop loss secara perlahan.
- Mengabaikan likuiditas Asia. Asian High dan Asian Low adalah target utama market maker setiap harinya.

## Latihan
Gunakan indikator "Sessions" di platform trading Anda untuk menandai Sesi Asia, London, dan New York. Coba amati apa yang terjadi pada harga saat peralihan dari Sesi Asia ke Sesi London. Berapa kali Anda melihat Sesi London menembus area Asia (manipulasi) sebelum berbalik arah?

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Perbedaan Karakteristik Sesi Asia dan London**.
`;export{a as default};
