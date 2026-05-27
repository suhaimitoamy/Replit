const a=`# Partial Close (Taking Partial Profits)

Level: Level 29 — Trade Management Advanced
XP: 10

![Ilustrasi Partial Close](/images/lessons/level-29/04-partial-close.svg)

## Mengapa Materi Ini Penting
"You never go broke taking profits." Ini adalah pepatah legendaris dalam dunia trading. Sering kali harga mendekati target maksimal (Take Profit akhir), namun berbalik arah secara drastis sehingga posisi yang tadinya profit besar kembali menjadi nol, atau bahkan terkena Stop Loss. *Partial close* adalah strategi brilian untuk meredam risiko dan memastikan saldo akunmu bertumbuh (*securing the bag*), sembari tetap memberi peluang pada sebagian posisimu untuk mencetak profit maksimal jika tren terus berlanjut.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan konsep *Partial Close* (Menutup Sebagian Posisi).
- Menentukan area strategis yang tepat untuk mengambil sebagian keuntungan (Partial TP).
- Mengintegrasikan *Partial Close* dengan strategi *Break Even* untuk trade tanpa risiko absolut.

## Penjelasan
**Partial Close** artinya kamu menutup sebagian dari lot/volume yang sedang aktif dalam sebuah trade, lalu membiarkan sisa volumenya tetap berjalan mencari target yang lebih jauh.
Misalnya, kamu open posisi Buy sebanyak **1.0 Lot**. Saat harga mencapai resistance pertama (misal mencapai Risk:Reward 1:2), kamu melakukan *close* manual sebesar **0.5 Lot** (50% dari posisi). Sisa **0.5 Lot** lainnya tetap berjalan.

**Keuntungan Ekstrim Partial Close:**
1. **Mengunci Profit Nyata:** Profit mengambang (*floating*) belum menjadi milikmu sebelum ditutup. Dengan mengambil parsial, profit sudah masuk ke *balance* akun.
2. **Ketenangan Psikologis:** Dengan sebagian profit sudah diamankan, kamu akan sangat rileks melihat sisa posisi mengambang. Kalaupun harga berbalik menyentuh BEP, kamu tetap sudah cuan di hari itu.
3. **Fleksibilitas Menahan Posisi (Runner):** Sisa posisi (*runner*) bisa dibiarkan berlari jauh mengikuti tren tanpa ketakutan berlebih, yang sangat sulit dilakukan jika menggunakan full lot.

**Kapan Melakukan Partial Close?**
- **Di Level Support/Resistance Kunci:** Area ini sering kali menjadi titik pembalikan harga (reversal) atau koreksi. Aman untuk mencairkan sebagian profit di sini.
- **Di Rasio Risk:Reward (RR) Tertentu:** Banyak *Smart Money Concept* trader mengambil parsial saat harga mencapai RR 1:2 atau 1:3, sebagai jaminan agar *win rate* tetap memiliki dampak matematis positif.

**Integrasi: Partial Close + Break Even**
Ini adalah kombinasi ajaib:
1. Harga naik ke RR 1:2.
2. Kamu tutup 50% lot untuk *Partial Profit*.
3. Secara bersamaan, geser SL sisa posisi ke titik Entry (Break Even).
Hasilnya: Kamu sudah dapat profit yang pasti, dan sisa posisimu 100% *Risk-Free* untuk mencari target RR 1:5 atau lebih!

## Contoh di Chart
Kamu masuk posisi Sell EURUSD di 1.0800 dengan Stop Loss di 1.0820 (Risk: 20 pips). Lot yang digunakan adalah 0.20 Lot. Target TP Akhir ada di 1.0700 (100 pips).
Harga kemudian turun ke 1.0760 (profit +40 pips, RR 1:2). Di area 1.0760 ada titik *support minor* dari kemarin.
Kamu mengambil keputusan cerdas: **Close parsial 0.10 Lot** (mengamankan profit sekitar +$40), dan **Pindahkan SL** yang tadinya di 1.0820 ke 1.0800 (BEP).
Sisa 0.10 Lot terus berjalan. Jika benar menembus sampai 1.0700, kamu akan dapat tambahan +$100. Total = $140. Jika harga malah berbalik memantul dan kena 1.0800, sisa posisi loss $0, kamu tetap bawa pulang $40.

## Kesalahan Umum
- **Partial Close Terlalu Dini:** Mengambil parsial saat posisi baru berjalan RR 1:0.5. Hal ini merusak *Expectancy* (Rasio Harapan) matematis dari tradingmu. Jika kamu risk $100, jangan ambil parsial saat baru profit $20. Tunggu minimal 1:1 atau 1:2.
- **Lupa Menyesuaikan SL:** Terkadang setelah mengambil parsial, trader lupa mengamankan sisa posisinya ke BEP atau Trailing Stop.
- **Platform/Broker Tidak Mendukung Parsial Kecil:** Ingat, jika kamu hanya open 0.01 lot, kamu tidak bisa melakukan parsial close, karena 0.01 adalah batas lot terkecil. Minimal open 0.02 lot jika ingin strategi parsial (close 0.01, sisa 0.01).

## Latihan
Jika kamu menggunakan MetaTrader, latih cara *close parsial* karena butuh sedikit kecepatan. Di layar posisi berjalan, pilih "Modify/Close", lalu ketik volume yang lebih kecil dari volume aslimu (misal dari 0.10 ketik 0.05), lalu klik Close. Biasakan jari-jarimu melakukan ini di akun Demo agar tidak bingung saat pasar sungguhan bergerak cepat.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Integrasi: Partial Close + Break Even**.
`;export{a as default};
