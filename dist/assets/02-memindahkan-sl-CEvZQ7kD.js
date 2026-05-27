const a=`# Memindahkan SL (Trailing Stop)

Level: Level 29 — Trade Management Advanced
XP: 10

![Ilustrasi Memindahkan SL](/images/lessons/level-29/02-memindahkan-sl.svg)

## Mengapa Materi Ini Penting
Pasar tidak bergerak dalam satu garis lurus; harga selalu bergerak membentuk ayunan (*swing*). Saat posisi kita sudah *running* profit dan membentuk *swing* baru, membiarkan Stop Loss (SL) di titik awal bisa menjadi kerugian ganda: hilangnya profit yang sudah dikumpulkan dan risiko modal awal tetap ada. Memindahkan SL (*Trailing Stop*) secara strategis dapat melindungi keuntungan sekaligus meminimalisir atau menghilangkan risiko modal awal jika harga tiba-tiba berbalik arah.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengetahui kapan waktu yang tepat dan aman untuk memindahkan SL.
- Menggunakan *Market Structure* (seperti *Higher Low* / *Lower High*) sebagai titik acuan untuk memindahkan SL.
- Menghindari kesalahan menggeser SL terlalu mepet (*too tight*) yang menyebabkan tersentuh sebelum tren berlanjut.

## Penjelasan
Memindahkan SL atau *Trailing Stop* adalah tindakan menggeser level batas kerugian (SL) searah dengan posisi profit. Jika kamu *Buy*, SL digeser ke atas. Jika kamu *Sell*, SL digeser ke bawah. Tujuannya adalah mengamankan profit atau minimal membuang risiko modal (*risk free*).

Namun, kunci utamanya adalah **kapan** dan **ke mana** SL itu digeser. Banyak trader pemula yang memindahkan SL terlalu cepat atau terlalu dekat dengan harga saat ini. Akibatnya, saat harga melakukan *pullback* wajar, SL mereka tersentuh, dan harga kemudian kembali melesat ke arah target. Ini sangat membuat frustrasi.

**Cara Memindahkan SL yang Benar dengan Market Structure:**
1. **Tunggu Break of Structure (BOS) Baru:** Jangan memindahkan SL hanya karena harga sedang hijau. Pindahkan SL hanya ketika harga telah membentuk swing baru yang valid dan menembus swing sebelumnya (BOS).
2. **Geser ke Belakang Swing Low/High Terakhir:** Untuk posisi *Buy*, pindahkan SL sedikit di bawah titik *Higher Low* (HL) yang baru terbentuk. HL ini menjadi benteng pertahanan yang kuat karena jika harga turun menembus HL ini, artinya tren *bullish* mungkin sudah berakhir (terjadi *Change of Character* / CHoCH).
3. **Beri Ruang Bernapas (Breathing Room):** Jangan letakkan SL tepat di ujung sumbu (*wick*) dari *Higher Low*. Beri sedikit *buffer* (jarak beberapa pips) di bawah sumbu tersebut untuk menghindari *liquidity sweep* (sapuan likuiditas) oleh *Market Maker*.

## Contoh di Chart
Kamu masuk posisi Buy pada harga 1.0500 dengan SL di 1.0450 (Risk 50 pips).
1. Harga naik ke 1.0580.
2. Harga turun koreksi (pullback) membentuk *Higher Low* di 1.0530.
3. Kemudian harga naik lagi menembus puncak 1.0580 (BOS) dan berlanjut ke 1.0620.
Pada saat harga valid menembus 1.0580, struktur *bullish* baru telah terkonfirmasi. Ini adalah waktu yang tepat untuk **menggeser SL awalmu dari 1.0450 ke 1.0520** (sedikit di bawah Higher Low 1.0530). 
Sekarang, posisimu sudah profit +20 pips meskipun seandainya harga berbalik drastis, karena SL barumu sudah berada di atas harga entry.

## Kesalahan Umum
- **Menggeser SL Tanpa Alasan Struktur:** Menggeser SL hanya berdasarkan *feeling* atau karena "sudah profit 10 pips", tanpa menunggu konfirmasi terbentuknya swing yang aman.
- **Trailing Stop Otomatis Terlalu Kecil:** Menggunakan fitur Auto Trailing Stop sebesar 5-10 pips, sehingga posisi sering tersentuh pada koreksi kecil.
- **Mendekatkan SL Saat Loss:** Ini kebalikannya. Alih-alih memindahkan SL searah profit, memindahkan SL untuk menghindari loss saat harga hampir kena SL adalah kesalahan fatal yang menguras akun.

## Latihan
Amati chart H1 pada pair Gold (XAUUSD). Temukan sebuah tren naik yang jelas. Tandai setiap titik *Higher Low*. Bayangkan kamu entry di awal tren. Tarik garis putus-putus untuk menunjukkan di titik mana saja kamu seharusnya memindahkan SL setiap kali harga menembus Resistance (BOS).

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Cara Memindahkan SL yang Benar dengan Market Structure**.
`;export{a as default};
