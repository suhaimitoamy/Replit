const a=`# Menentukan Bias, Liquidity, dan POI

Level: Level 10 — God Level Candidate
XP: 10

![Ilustrasi Bias Liquidity POI](/images/lessons/level-10/02-bias-liq-poi.svg)

## Mengapa Materi Ini Penting
Tiga pilar utama sebelum Anda menekan tombol trading adalah Bias, Liquidity, dan Point of Interest (POI). Tanpa arah bias yang jelas, Anda akan menebak-nebak pasar. Tanpa memahami likuiditas, Anda akan menjadi target manipulasi market (menjadi likuiditas itu sendiri). Dan tanpa POI yang akurat, entry Anda tidak akan memiliki probabilitas tinggi. Ketiga elemen ini bekerja secara sinergis layaknya kompas, bahan bakar, dan titik tujuan. Memahami cara menggabungkan ketiganya membedakan antara trader amatir yang selalu *stop loss* (SL) terjemput dengan trader profesional yang masuk bersama institusi (smart money).

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menentukan bias harian atau mingguan yang berprobabilitas tinggi berdasarkan arah pergerakan harga.
- Membaca zona-zona likuiditas (liquidity pools) yang menjadi incaran market makers.
- Memilih Point of Interest (POI) yang paling valid dan menghindari POI palsu atau lemah.

## Penjelasan
Mari kita bahas ketiga pilar ini satu per satu dengan pendekatan yang dalam namun mudah dipahami. 

Pertama adalah **Bias**. Bias adalah kecenderungan arah pasar dalam periode waktu tertentu. Anda tidak bisa setiap saat berpikir ingin Buy lalu tiba-tiba ingin Sell hanya karena melihat candle merah yang besar di timeframe 1 menit. Bias dibangun dari *Higher Timeframe* (HTF) seperti Daily atau H4. Jika HTF secara jelas mencetak serangkaian Higher High (HH) dan Higher Low (HL), maka bias Anda adalah Bullish. Ketika bias Anda Bullish, tugas Anda hanyalah mencari peluang Buy. Mengabaikan sinyal Sell, betapapun menggodanya di timeframe kecil, akan menyelamatkan Anda dari banyak kekalahan yang tidak perlu.

Kedua adalah **Liquidity** (Likuiditas). Pasar tidak bergerak karena indikator teknikal; pasar bergerak karena uang. Uang dalam trading berkumpul di area tempat mayoritas trader meletakkan *Stop Loss* (SL) atau *Buy/Sell Stop* mereka. Area ini biasanya berada di atas batas Resistance (Equal Highs), di bawah batas Support (Equal Lows), atau di sepanjang garis trend (Trendline Liquidity). Institusi besar (Smart Money) butuh likuiditas ini untuk mengeksekusi order raksasa mereka tanpa menggeser harga terlalu parah. Karena itu, harga sering terlihat secara sengaja "menyapu" (sweep/hunt) level-level support/resistance ini hanya untuk membuang trader ritel keluar sebelum harga berbalik ke arah aslinya. Memahami di mana kolam uang ini berada berarti Anda tahu ke mana harga akan tertarik (seperti magnet).

Ketiga adalah **Point of Interest (POI)**. Setelah Anda tahu arahnya (Bias) dan tahu dari mana harga akan mengambil bahan bakarnya (Liquidity), Anda perlu menentukan di mana titik pantulnya. Inilah POI. POI bisa berupa *Order Block*, *Fair Value Gap* (FVG), atau area *Supply/Demand* yang sangat kuat. POI yang berkualitas tinggi adalah POI yang berada *setelah* likuiditas diambil, atau POI yang letaknya sejalan dengan bias utama. Bayangkan POI sebagai stasiun kereta api. Anda tahu kereta (harga) mengarah ke utara (Bias), kereta perlu mengambil penumpang di halte (Liquidity), lalu berhenti di stasiun utama (POI) sebelum berangkat kencang.

Menggabungkan ketiganya: Anda memiliki Bias Bullish dari Daily. Anda melihat ada Equal Lows (Liquidity) di timeframe H1. Tepat di bawah Equal Lows tersebut terdapat Order Block H4 yang masih segar (POI). Skenarionya adalah: Harga akan turun menjemput Equal Lows (menyapu SL para pembeli awal), lalu menyentuh Order Block H4, dan akhirnya melesat naik mengikuti Bias Bullish Daily. Ini adalah setup dengan probabilitas sangat tinggi.

## Contoh di Chart
Pada chart EURUSD M15, Anda melihat tren mayor dari H4 sedang *Bearish*. Di sesi Asia, harga bergerak sideways membentuk kotak kecil dengan *Equal Highs* di atasnya. Di atas *Equal Highs* tersebut (sekitar 10 pips di atasnya) terdapat sebuah zona FVG dan Order Block M15. Saat pembukaan sesi London, harga tiba-tiba melonjak naik menembus *Equal Highs* (mengambil Liquidity dari trader breakout dan SL trader sellers). Harga masuk persis ke FVG dan Order Block (POI). Tak lama setelah itu, terbentuk *Bearish Engulfing* yang menandakan market memantul dari POI, dan harga terjun ke bawah menyelaraskan diri dengan tren H4 (*Bearish Bias*).

## Kesalahan Umum
- Menentukan POI secara sembarangan tanpa mengecek apakah ada likuiditas yang sudah diambil atau belum.
- Memaksakan bias *Buy* di saat HTF jelas-jelas menunjukkan fase koreksi tajam.
- Terjebak dalam pergerakan *sweep liquidity*, mengira itu adalah *breakout* arah baru, lalu masuk posisi di ujung pucuk dan terkena *reversal*.

## Latihan
Buka chart pair mayor. Cobalah tandai:
1. Satu area *Equal Highs* atau *Equal Lows* yang sangat jelas.
2. Area Order Block atau FVG yang berada persis di balik/di bawah area liquidity tersebut.
3. Amati bagaimana harga bereaksi saat menyentuh area-area yang Anda tandai.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian interaksi antara *Liquidity Sweep* dengan *POI*.
`;export{a as default};
