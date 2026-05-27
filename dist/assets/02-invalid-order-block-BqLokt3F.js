const a=`# Invalid Order Block

Level: Level 21 — Order Block Refinement
XP: 10

![Ilustrasi Invalid Order Block](/images/lessons/level-21/02-invalid-order-block.svg)

## Mengapa Materi Ini Penting
Sama pentingnya dengan mengetahui OB mana yang harus ditradingkan, kamu *wajib* tahu OB mana yang harus **dihindari**. Jebakan terbesar bagi trader pemula yang belajar SMC (Smart Money Concepts) adalah melihat *setiap* lembah dan puncak sebagai Order Block, tanpa melihat struktur dan momentum. Masuk ke *Invalid Order Block* adalah cara tercepat untuk menghabiskan modal karena harga biasanya akan menembusnya begitu saja seperti pisau panas memotong mentega.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengenali ciri-ciri *Invalid Order Block*.
- Menghindari area jebakan yang sering digunakan market maker untuk mengumpulkan likuiditas (Inducement).
- Menghemat modal dengan memfilter zona-zona *low probability*.

## Penjelasan
Sebuah Order Block menjadi **Invalid (Tidak Valid)** atau memiliki probabilitas yang sangat rendah jika gagal memenuhi kriteria dasar dari jejak uang institusi.

Berikut adalah tanda-tanda Order Block yang harus kamu abaikan:

1. **Sudah Dimitigasi (Mitigated / Tested)**
   Institusi besar meninggalkan jejak order karena mereka tidak bisa masuk ke pasar secara bersamaan. Ketika harga bergerak menjauh lalu kembali lagi (meskipun hanya tersentuh oleh ujung jarum/wick candle berikutnya), order yang tertinggal sudah "diambil". Jika kamu mencoba entry saat harga kembali ke sana untuk yang *kedua kalinya*, kemungkinan besar harga akan menembus OB tersebut karena sudah tidak ada lagi sisa order yang menahan harga.

2. **Tidak Ada Displacement (Pergerakan Lambat & Chop)**
   Jika setelah sebuah *bearish candle* harga berbalik naik tapi dengan candle-candle kecil yang pelan dan saling tumpang tindih (*choppy*), itu bukan uang institusi. Itu hanyalah ritel yang sedang bertransaksi biasa. OB tanpa momentum kuat di belakangnya sangat rapuh.

3. **Tidak Ada Fair Value Gap (FVG)**
   Terkait dengan poin ke-2, jika pergerakannya lambat, maka wick dari candle-candle yang terbentuk akan saling bersentuhan, menutup semua *gap*. Jika sebuah OB tidak memiliki FVG (area imbalance), harga tidak punya "magnet kuat" untuk bereaksi tajam di sana.

4. **Gagal Membuat Break of Structure (BOS)**
   Sebuah candle berbalik arah tapi gagal menembus *high* atau *low* sebelumnya. Ini berarti tren belum cukup kuat. OB yang terbentuk di sini hanyalah koreksi kecil di dalam range, dan sangat rentan disapu oleh pergerakan utama.

5. **Terbentuk di Tengah-tengah Range (Bukan di Ekstrem)**
   OB yang sangat kuat biasanya berada di titik paling ujung (ekstrem) dari suatu dorongan harga. OB yang berada di tengah pergerakan sering kali bertindak sebagai *Inducement* (jebakan likuiditas) yang sengaja dibuat untuk memancing trader awal, lalu harga akan menembusnya menuju OB yang sesungguhnya di ekstrem.

## Contoh di Chart
Misalnya di chart EURUSD M15:
Kamu melihat harga turun tajam, lalu ada satu *bullish candle* hijau, diikuti harga yang turun pelan-pelan ke bawah memakan waktu belasan candle kecil tanpa menembus *support*. 
Kamu mungkin tergoda menganggap *bullish candle* hijau tadi sebagai *Bearish Order Block*. Namun, karena turunnya sangat pelan, tidak ada FVG, dan tidak ada BOS, OB tersebut **Invalid**. Jika harga kembali naik, kemungkinan besar ia akan menjebol OB tersebut dan melanjutkan kenaikan.

## Kesalahan Umum
- **Memaksakan Trade:** Melihat setup kurang sempurna tapi tetap masuk karena "takut ketinggalan" (FOMO).
- **Salah mengira Inducement sebagai OB:** Memilih OB yang posisinya tidak di ujung (*extreme*) dan malah terkena stop loss saat harga melakukan *liquidity sweep* ke OB di bawahnya/atasnya.
- **Entry di OB yang Wick-nya sudah tersentuh:** Mengabaikan bahwa wick dari candle kedua sudah menyentuh kembali OB.

## Latihan
Buka chart di TradingView. Coba cari area di mana kamu pernah terkena Stop Loss karena salah menebak titik pantul. Periksa area tersebut. Apakah candle sebelum pergerakan itu meninggalkan FVG? Apakah pergerakannya kuat? Besar kemungkinan kamu masuk di *Invalid OB*.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Sudah Dimitigasi** dan **Tidak Ada Displacement**. Menguasai filter ini akan otomatis menaikkan Win Rate kamu!
`;export{a as default};
