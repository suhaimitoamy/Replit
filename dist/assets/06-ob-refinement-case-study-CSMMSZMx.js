const a=`# Case Study: OB Refinement

Level: Level 21 — Order Block Refinement
XP: 10

![Ilustrasi Case Study OB Refinement](/images/lessons/level-21/06-ob-refinement-case-study.svg)

## Mengapa Materi Ini Penting
Belajar teori memang bagus, tapi melihat bagaimana semua konsep dirangkai menjadi satu eksekusi nyata adalah hal yang mengubah pengetahuan menjadi *skill* yang bisa mencetak profit. Studi kasus ini akan memandumu menggabungkan H4 Order Block, M15 Refinement, dan konfirmasi M15 CHoCH untuk mendapatkan eksekusi tingkat *sniper* dengan *Risk to Reward Ratio* (R:R) yang asimetris (SL sangat kecil, TP sangat besar).

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Merangkai *Top-Down Analysis* dari Timeframe Besar (H4) ke Timeframe Eksekusi (M15).
- Menunggu konfirmasi masuk (LTF CHoCH) sebelum menekan tombol *Buy/Sell*.
- Merencanakan penempatan Stop Loss dan Take Profit yang logis.

## Penjelasan & Walkthrough

Mari kita bedah eksekusi *Buy* pada pair EURUSD melalui studi kasus langkah demi langkah:

### Langkah 1: Konteks Timeframe Besar (H4)
- **Tren:** Harga di H4 jelas sedang *Uptrend* (membuat *Higher High* dan *Higher Low*).
- **Identifikasi POI:** Harga baru saja memecahkan struktur ke atas (H4 BOS) dengan *Displacement* yang sangat kuat (candle hijau besar). Di dasar pergerakan tersebut, terdapat *Bearish Candle* terakhir yang meninggalkan FVG besar.
- **Tindakan:** Kamu menarik kotak di area *Bearish Candle* tersebut. Kotak ini adalah **H4 Bullish Order Block**. Lebar kotak ini adalah 40 pips.

### Langkah 2: Sabar Menunggu (H4)
- Harga mulai koreksi turun. Di titik ini, kamu **TIDAK** melakukan apa-apa. Biarkan harga merayap turun menyentuh kotak H4 OB yang sudah kamu buat. 
- *Kesalahan trader pemula: Pasang Buy Limit langsung di H4 OB dengan SL 40 pips.* (Bisa menang, tapi R:R kecil).

### Langkah 3: Zoom In dan Refinement (M15)
- Begitu harga menyentuh ujung atas kotak H4, kamu segera pindah ke chart **M15**.
- Di M15, kamu melihat struktur harga sedang turun (*Downtrend*)—wajar karena harga sedang koreksi di H4. 
- Di dalam kotak H4 tersebut, kamu melihat ada OB M15 yang berada paling bawah (*Extreme M15 OB*). Kamu tandai kotak kecil M15 ini. Lebarnya hanya 5 pips.

### Langkah 4: Menunggu Konfirmasi (CHoCH M15)
- Kamu **bisa** langsung pasang *Buy Limit* di OB M15 yang selebar 5 pips tadi. Ini disebut *Risk Entry*.
- Atau, untuk probabilitas lebih tinggi (*Confirmation Entry*), biarkan harga menyentuh M15 OB, lalu tunggu harga berbalik naik menembus *Lower High* terakhir di M15 (Terjadi **M15 CHoCH**).
- Setelah M15 CHoCH terbentuk, ia akan membuat OB M15 *baru* hasil ledakan ke atas. 

### Langkah 5: Eksekusi dan Target
- Pasang pending order **Buy Limit** di OB M15 yang baru terbentuk setelah CHoCH.
- **Stop Loss (SL):** Pasang 1-2 pips di bawah *Low* dari OB M15 (Total SL sekitar 6-8 pips).
- **Take Profit (TP):** Jangan ambil TP di M15! Targetkan *Swing High* H4 yang lama, karena ini adalah target likuiditas. Jaraknya mungkin 80 pips.
- **Hasil:** Risk 8 pips, Reward 80 pips. *Risk to Reward* = 1:10! Kamu mempertaruhkan 1% modal untuk mendapatkan 10% keuntungan dalam satu trade.

## Kesalahan Umum
- **Tidak sinkron antara Timeframe:** Memaksa mencari pola M15 padahal tren H4 sedang *Downtrend* kuat. 
- **Tidak Sabar:** Harga belum masuk ke POI H4, tapi sudah mencoba mencari CHoCH di M15. Ini sering disebut "menangkap pisau jatuh". Pastikan harga sudah mengetuk "pintu" H4 OB terlebih dahulu!
- **Terlalu Serakah pada SL:** Meletakkan SL persis di ujung wick tanpa memberi ruang napas (*buffer* spread). Akibatnya tersentuh SL karena spread broker lalu harga melesat ke arah TP.

## Latihan
Cobalah metode *Top-Down* ini di akun Demo:
1. Buka chart H4, tandai 1 OB valid yang belum disentuh harga.
2. Turun ke M15, tandai OB terekstrem di dalam kotak H4 tersebut.
3. Pasang *alert/alarm* saat harga mendekati area M15 tersebut.
4. Saat alert berbunyi, lihat apakah harga bereaksi membentuk CHoCH.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika bingung dengan istilah CHoCH (Change of Character), harap kembali ke materi Level Market Structure. Ingat, *Refinement* adalah seni menggabungkan kesabaran (H4) dengan ketepatan (M15). Terapkan dengan disiplin!
`;export{a as default};
