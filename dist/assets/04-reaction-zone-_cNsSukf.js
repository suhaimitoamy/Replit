const a=`# Menentukan Reaction Zone pada Mitigation Block

Level: Level 24 — Mitigation Block
XP: 10

![Ilustrasi Reaction Zone](/images/lessons/level-24/04-reaction-zone.svg)

## Mengapa Materi Ini Penting
Anda sudah bisa menemukan Mitigation Block yang valid di chart. Pertanyaan selanjutnya adalah: *"Di titik mana persisnya saya harus menempatkan order Entry dan Stop Loss?"* Menentukan Zona Reaksi (Reaction Zone) yang presisi sangat penting agar Anda tidak ketinggalan pergerakan (jika entry terlalu dalam) atau terkena floating loss terlalu besar (jika entry terlalu awal).

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menentukan titik *Open* (pembukaan) dari Mitigation Block.
- Menghitung dan menemukan titik 50% (*Mean Threshold*) dari Mitigation Block.
- Memilih level entri yang optimal berdasarkan anatomi *candle* dan struktur harga.

## Penjelasan

Sebuah Mitigation Block biasanya diidentifikasi dari satu atau beberapa *candle* terakhir yang berlawanan arah sebelum terjadinya *failure swing* dan penembusan harga yang masif. 

Untuk menentukan zona reaksi tempat kita akan meletakkan pesanan (Entry), kita menggunakan anatomi dari *candle* yang menjadi Mitigation Block tersebut.

Ada dua titik sensitif utama dalam Mitigation Block yang berfungsi sebagai *Reaction Zone*:

**1. Level Buka (Open / Proximal Line)**
Ini adalah titik pertama di mana blok tersebut mulai "tersentuh".
- Untuk **Bearish Mitigation Block**, ini adalah harga *Open* (pembukaan) dari *candle* bullish terakhir pembentuk *Lower High*.
- Untuk **Bullish Mitigation Block**, ini adalah harga *Open* dari *candle* bearish terakhir pembentuk *Higher Low*.
- Sering kali, harga bereaksi langsung seketika hanya dengan mencium (tap) level *Open* ini karena institusi ingin segera menutup posisi impas mereka secepat mungkin.

**2. Titik Tengah (Mean Threshold / 50%)**
*Mean Threshold* adalah level ekuilibrium atau 50% dari total panjang *body* (badan) candle Mitigation Block. 
- Jika panjang badan candle (dari Open ke Close) cukup besar, harga biasanya akan masuk lebih dalam (menembus level *Open*) untuk mencari likuiditas tambahan di level 50% ini sebelum akhirnya berbalik arah.
- Ini adalah level pertahanan terakhir. Jika harga merangsek naik dan ditutup (*close*) di atas level 50% ini (untuk bearish), blok tersebut mulai kehilangan kekuatannya.

### Bagaimana dengan Sumbu (Wick)?
Dalam menentukan Mitigation Block, perhatikan apakah sumbu candle sangat panjang atau standar.
- **Standar:** Jika candle normal, kita fokus pada badan candle (Open sampai Close).
- **Sumbu Panjang (Long wick):** Jika candle memiliki sumbu yang jauh lebih panjang dari badannya, maka seluruh *candle* (dari High ke Low) sering kali dianggap sebagai area Mitigation Block, dan *Mean Threshold* ditarik 50% dari keseluruhan rentang High-Low candle tersebut.

## Contoh di Chart
Misalnya Anda melihat sebuah Bearish Mitigation Block berupa satu candle hijau besar di EURUSD. 
- Candle hijau dibuka (*Open*) di harga 1.0500.
- Candle ditutup (*Close*) di harga 1.0520.
- Titik tengah (*Mean Threshold*) berada di 1.0510 (tengah-tengah antara 1.0500 dan 1.0520).

Rencana trading Anda:
- Anda bisa menempatkan Entry Sell limit di 1.0500 (Level Open) jika Anda agresif.
- Atau, untuk mendapatkan rasio Risk:Reward yang lebih baik, Anda bisa entry separuh lot di 1.0500, dan separuh lagi di 1.0510 (Mean Threshold).
- *Stop Loss* (SL) Anda sebaiknya diletakkan sedikit di atas titik *High* dari candle Mitigation Block tersebut (misalnya di 1.0525).

## Kesalahan Umum
- **Meletakkan Stop Loss terlalu sempit tepat di level ekstrim *body*.** Anda perlu memberi ruang penyangga (buffer) untuk *spread* dan sedikit volatilitas *wick* harga. Selalu letakkan SL di atas sumbu tertinggi dari blok tersebut.
- **Abaikan Mean Threshold pada candle besar.** Jika Mitigation block terdiri dari candle yang sangat tebal/panjang, Entry langsung di level *Open* bisa membuat Anda menahan drawdown (floating loss) yang cukup lebar sebelum harga mencapai 50% dan memantul.

## Latihan
Gunakan *Fibonacci Retracement* dengan hanya menyalakan level 0, 0.5, dan 1. Tarik alat ini pada area *body* (badan) dari candle yang merupakan Mitigation Block di chart Anda. Alat ini akan otomatis menandai level pembukaan, 50% (*Mean Threshold*), dan penutupan candle dengan cepat dan presisi.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Titik Tengah (Mean Threshold)**, pastikan Anda bisa mengukurnya dengan benar pada badan *candle*.
`;export{a as default};
