const a=`# Studi Kasus: Trading dengan Mitigation Block

Level: Level 24 — Mitigation Block
XP: 10

![Studi Kasus Mitigation Block](/images/lessons/level-24/06-mitigation-block-case-study.svg)

## Mengapa Materi Ini Penting
Teori tanpa praktik adalah hampa. Dalam materi terakhir di Level 24 ini, kita akan menggabungkan semua konsep yang telah dipelajari: *Failure Swing, Logika Institusi, Reaction Zone, dan Aturan Invalidasi* ke dalam satu studi kasus pasar yang realistis. Ini akan membangun peta jalan (roadmap) yang jelas tentang bagaimana mengeksekusi Mitigation Block langkah demi langkah di chart sesungguhnya.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Melakukan analisis *top-down* untuk menemukan konteks Mitigation Block.
- Mengeksekusi posisi dengan *Entry, Stop Loss, dan Take Profit* yang sistematis.
- Menerapkan manajemen risiko berdasarkan reaksi harga pada *Reaction Zone*.

## Penjelasan (Studi Kasus Langkah demi Langkah)

Mari kita bedah sebuah simulasi *trade* yang komprehensif menggunakan **Bullish Mitigation Block**.

**Konteks Pasar (Analisis Struktur)**
Kita melihat pasangan mata uang GBPUSD di *timeframe* M15. Pasar sebelumnya berada dalam tren turun yang kuat, namun perlahan-lahan mulai bergerak mendatar (*ranging/konsolidasi*).

**Langkah 1: Mengidentifikasi Setup (*The Failure Swing*)**
- Harga menciptakan sebuah titik terendah **(Low)** di 1.2500.
- Harga *rebound* memantul ke atas menciptakan **High** minor di 1.2540.
- Penjual (Seller) kembali menekan harga untuk melanjutkan tren turun. Namun, kali ini tekanan jual tertahan. Harga hanya berhasil turun ke 1.2520, membentuk **Higher Low**. (Ini adalah *Failure Swing*, gagal menembus 1.2500).
- Secara tiba-tiba, muncul volume beli agresif yang memecahkan harga ke atas, menembus High 1.2540 (Market Structure Shift / BOS ke atas) dan mencetak **Higher High** di 1.2580.

**Langkah 2: Menandai Mitigation Block**
- *Bullish Mitigation Block* kita adalah *candle* turun (bearish) terakhir yang membentuk *Higher Low* di area 1.2520 sebelum harga melesat naik memecahkan *High*.
- Anda menandai area ini dengan alat kotak (*rectangle*). Rentang badan *candle* ini dari Open di 1.2525 hingga Close di 1.2520. Sumbu terbawahnya di 1.2515.
- Anda menandai garis tengah badan (Mean Threshold) di sekitar 1.2522.5.

**Langkah 3: Rencana Eksekusi (Entry & SL)**
- **Entry:** Anda memasang *Buy Limit Order* di batas *Open* blok yaitu 1.2525.
- **Stop Loss (SL):** Anda meletakkan SL sedikit di bawah ekstrim terbawah dari *candle* tersebut, plus *buffer*. Mari letakkan SL di 1.2510 (risiko 15 pips).
- **Take Profit (TP):** Anda melihat ada likuiditas (*Buy Side Liquidity*) dari para ritel *trader* di atas *Higher High* 1.2580, bahkan ada level resistensi terdekat di 1.2600. Anda mengatur TP di 1.2600. (Potensi Profit 75 pips. RR = 1:5).

**Langkah 4: Reaksi Harga (*Price Action*)**
- Beberapa jam kemudian, harga terkoreksi (retracement) kembali turun lambat-laun menuju zona 1.2525.
- Harga menyentuh 1.2525 dan pesanan Anda **tereksekusi**. Harga sempat menembus sedikit ke 1.2522 (mencium *Mean Threshold*) tapi kemudian ditolak ke atas dengan keras meninggalkan sumbu (wick). Institusi telah "memitigasi" pesanan jual mereka.
- Pada penutupan *candle* M15, badan *candle* berhasil tutup di atas level 1.2525, menandakan blok valid.
- Harga berbalik naik kencang secara impulsif.

**Langkah 5: Manajemen Posisi**
- Saat harga menembus kembali level 1.2580 (*Higher High*), Anda memindahkan *Stop Loss* ke titik *Break-Even* (1.2525) untuk menghilangkan risiko.
- Tak lama kemudian, harga melesat menyentuh 1.2600. **Take Profit tersentuh!**

## Kesalahan Umum
- **Mengambil Mitigation Block tanpa momentum kuat setelahnya.** Jika penembusan *High* (ke Higher High) terlihat loyo atau hanya sekadar terjilat sumbu tanpa pergeseran struktur yang meyakinkan, setup mitigasi ini berprobabilitas rendah.
- **Gagal mengidentifikasi Likuiditas Target.** Mitigation Block adalah tempat *entry*, Anda tetap butuh *Target (TP)* yang logis berdasarkan area *Liquidity* atau ketidakseimbangan (FVG).

## Latihan
Buat tangkapan layar (screenshot) dari chart riwayat Anda di MetaTrader atau TradingView. Gambar persis skema langkah demi langkah di atas pada chart tersebut. Semakin sering mata Anda merekam pola ini melalui studi kasus visual, semakin cepat alam bawah sadar Anda mengenali setup *real-time*.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Langkah 1 (Mengidentifikasi Setup)**, pastikan Anda bisa menceritakan ulang narasi kegagalan swing (failure swing) dengan runtut.
`;export{a as default};
