# Invalidasi Mitigation Block

Level: Level 24 — Mitigation Block
XP: 10

![Ilustrasi Invalidasi Mitigation Block](/images/lessons/level-24/05-invalidasi-mitigation.svg)

## Mengapa Materi Ini Penting
Tidak ada konsep dalam trading yang memiliki tingkat keberhasilan (win rate) 100%. Terkadang, setup Mitigation Block yang tampak sempurna akan gagal dan tertembus oleh harga. Mengetahui *kapan* sebuah Mitigation Block dianggap "gagal" atau tidak valid lagi sangat penting agar Anda bisa segera memotong kerugian (cut loss) dengan logis, atau bahkan membalik arah posisi Anda (berubah bias).

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi tanda-tanda awal bahwa sebuah Mitigation Block akan gagal.
- Memahami konsep penutupan *candle* (candle close) di atas *Mean Threshold* sebagai sinyal kelemahan blok.
- Menentukan aturan yang tegas kapan harus meninggalkan rencana entry di Mitigation Block.

## Penjelasan

Sebuah Mitigation Block berfungsi sebagai tameng pertahanan tempat institusi mempertahankan posisi mereka. Namun, jika ada pergeseran narasi fundamental atau masuknya pesanan *Smart Money* baru yang jauh lebih besar dan berlawanan arah, tameng ini akan hancur.

Berikut adalah kriteria **Invalidasi (kegagalan)** sebuah Mitigation Block, dengan mengambil contoh **Bearish Mitigation Block** (kita mengharapkan harga memantul turun):

**1. Penutupan Candle di atas Mean Threshold (Sinyal Peringatan)**
- Ingat kembali bahwa 50% dari badan Mitigation Block disebut *Mean Threshold*.
- Jika harga naik memasuki blok, lalu sebuah *candle* dengan *timeframe* yang sama (atau lebih besar) **ditutup (close)** di atas garis 50% ini, ini adalah peringatan bahaya (Red Flag).
- Penutupan *candle body* yang solid menembus pertengahan blok menandakan dorongan pembeli (buyer) terlalu kuat, dan penjual (seller) mulai kehilangan kendali. Jika Anda sudah berada dalam posisi Entry, ini adalah saat yang tepat untuk mengetatkan Stop Loss atau memangkas ukuran posisi.

**2. Penutupan Candle di luar Blok Sepenuhnya (Invalidasi Total)**
- Jika harga berhasil ditutup (*close*) sepenuhnya di atas batas tertinggi (High / ekstrim) dari Mitigation Block, maka setup Mitigation Block ini **resmi batal (invalid)**.
- Ini berarti narasi bahwa institusi sedang "memitigasi" pesanan *Buy* yang terjebak ternyata salah, atau kekuatan beli baru telah mengambil alih struktur pasar.
- Begitu sebuah Mitigation Block dinyatakan invalid, ia tidak boleh digunakan lagi untuk entry *Sell*. 

**3. Mitigation Block Menjadi Inverse Block**
- Konsep tingkat lanjut: Ketika sebuah Mitigation Block dihancurkan dengan kekuatan tinggi (misalnya Bearish Mitigation Block ditembus tajam ke atas dengan *Fair Value Gap*), blok yang gagal tersebut sering kali berubah fungsi.
- Harga mungkin akan kembali untuk menguji sisi atas dari blok tersebut, mengubahnya menjadi *Support* baru (sering disebut konsep *Reclaimed Block* atau *Inverse Mitigation*).

## Contoh di Chart
Anda menandai *Bearish Mitigation Block* di timeframe H1. Rentang badan blok adalah 1.2000 (Open) hingga 1.2020 (Close), dengan ekstrim *High* sumbu di 1.2030. Mean Threshold di 1.2010.
- Harga naik menyentuh 1.2000, Anda Entry Sell.
- H1 *candle* kemudian ditutup utuh di harga 1.2015 (di atas 1.2010 Mean Threshold). Ini adalah peringatan kuat bahwa blok ini melemah.
- Jam berikutnya, *candle* H1 ditutup di harga 1.2035 (di luar batas atas blok). *Setup Invalid!* Stop Loss Anda (yang diletakkan di atas 1.2030) tersentuh dan kerugian tereksekusi dengan disiplin. Ini wajar. Jangan mencoba Sell lagi karena tren struktur telah dilanggar.

## Kesalahan Umum
- **Memindahkan Stop Loss semakin jauh ketika harga menembus blok.** Jika blok sudah invalid, terima kerugian tersebut. Menahan posisi pada struktur yang sudah hancur adalah jalan tercepat menuju *Margin Call*.
- **Bingung antara *wicking* (terjilat sumbu) dan *closing* (penutupan candle).** Jika harga hanya melampaui blok berupa sumbu (wick) namun *candle close* kembali di dalam area blok, Mitigation Block masih dianggap valid (itu sering kali merupakan proses pengambilan likuiditas sebelum turun).

## Latihan
Periksa kembali jurnal trading atau *backtest* lama Anda. Cari 3 setup Mitigation Block yang gagal (harga malah terus bablas). Analisa *candle* yang menembus blok tersebut: Apakah ia ditutup kuat di atas *Mean Threshold*? Apakah ia langsung menembus blok sepenuhnya? Amati polanya.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Perbedaan Wicking dan Closing**, karena ini menentukan apakah harga sekadar 'menyentuh' atau benar-benar 'menghancurkan' blok.
