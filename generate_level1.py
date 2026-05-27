import os

base_dir = "/storage/emulated/0/Download/Amy-Trading-Quest"
md_dir = os.path.join(base_dir, "src/lessons/level-01")
svg_dir = os.path.join(base_dir, "public/images/lessons/level-01")

os.makedirs(md_dir, exist_ok=True)
os.makedirs(svg_dir, exist_ok=True)

md_files = {
    "01-trading-itu-apa.md": """# Apa Itu Trading?

Level: Level 01 — Newbie Trader
XP: 10

![Ilustrasi Konsep Trading](/images/lessons/level-01/01-trading-concept.svg)

## Mengapa Materi Ini Penting
Memahami apa yang sebenarnya kita lakukan saat trading adalah fondasi utama. Banyak yang tersesat dan menganggap trading sebagai cara cepat kaya atau malah menyamakannya dengan judi. Dengan memahami bahwa trading adalah bisnis tukar-menukar nilai berdasarkan probabilitas, kamu akan memiliki ekspektasi yang benar sejak hari pertama.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Memahami pengertian dasar trading dan bedanya dengan perjudian atau sekadar untung-untungan.
- Menyadari bahwa trading adalah bisnis probabilitas yang membutuhkan kesabaran dan proses.
- Mengenal instrumen umum yang sering ditradingkan (forex, saham, crypto, emas).

## Penjelasan
Pernahkah kamu pergi ke luar negeri dan menukarkan Rupiah dengan mata uang negara tujuan? Atau mungkin kamu pernah membeli emas perhiasan lalu menjualnya bertahun-tahun kemudian saat harganya naik? Jika ya, selamat, kamu sebenarnya sudah pernah melakukan konsep dasar dari trading! Secara harfiah, trading berarti pertukaran barang atau jasa. Namun dalam konteks keuangan modern, trading adalah aktivitas jual beli instrumen finansial dengan tujuan mendapatkan selisih keuntungan dari pergerakan harga yang terjadi di pasar.

Bayangkan kamu membeli emas batangan di sebuah toko seharga satu juta rupiah per gram. Beberapa bulan kemudian, kondisi ekonomi dunia berubah, harga emas dunia melambung tinggi, dan toko tersebut bersedia membeli kembali emasmu dengan harga satu setengah juta rupiah. Selisih lima ratus ribu rupiah itulah yang disebut keuntungan dari trading. Bedanya, di era serba digital ini, kamu sama sekali tidak perlu repot membawa emas batangan atau tumpukan uang tunai di dalam koper. Semuanya bisa dilakukan hanya lewat layar ponsel atau komputer dari kamar tidurmu dalam hitungan detik.

Instrumen apa saja yang biasa ditradingkan? Ada banyak! Mulai dari Forex (Foreign Exchange atau pertukaran mata uang asing seperti Dolar, Euro, Yen), Saham (bukti kepemilikan sebuah perusahaan seperti Apple, BCA, atau Telkomsel), Komoditas (seperti emas, perak, minyak mentah), hingga yang paling modern saat ini yaitu Cryptocurrency (seperti Bitcoin dan Ethereum). Apapun instrumennya, prinsip utamanya tetap sama: beli di harga yang lebih rendah dan jual di harga yang lebih tinggi (atau sebaliknya jika instrumen tersebut mendukung konsep *short selling*).

Namun, mari kita luruskan satu kesalahpahaman raksasa yang sering menyesatkan banyak pemula: **Trading BUKANLAH cara untuk menjadi kaya dalam semalam**. Banyak pemula datang ke pasar keuangan dengan harapan palsu. Mereka bermimpi bisa melipatgandakan uang mereka dalam sehari, lalu membeli mobil mewah keesokan harinya. Hasilnya? Mereka keluar dengan kekecewaan mendalam dan saldo akun yang ludes tanpa sisa. 

Trading sejatinya adalah sebuah bisnis profesional. Sama seperti membuka kedai kopi atau merintis toko baju, ada modal yang harus dikelola dengan bijak, ada risiko kerugian yang selalu mengintai setiap hari, dan ada strategi yang harus disusun dengan matang serta dievaluasi terus-menerus. Kamu tidak bisa membuka bisnis kopi lalu berharap langsung balik modal dalam waktu dua hari, bukan? Begitu juga dengan trading.

Dalam dunia trading, kita sama sekali tidak bisa mengendalikan ke mana arah pasar akan bergerak. Kita tidak punya kekuatan untuk memaksa harga Bitcoin naik atau harga emas turun. Yang bisa kita lakukan hanyalah menganalisis data masa lalu (historis), mengamati kondisi saat ini, dan membuat "tebakan yang teredukasi" (educated guess) tentang ke mana probabilitas harga akan bergerak selanjutnya. Kata kunci paling krusial di sini adalah **probabilitas**. 

Seorang trader profesional tidak pernah tahu pasti 100% apakah satu transaksi berikutnya akan berujung untung atau rugi. Mereka hanya tahu bahwa jika mereka terus menerapkan strategi yang sudah teruji, secara konsisten membatasi kerugian saat salah, dan memaksimalkan keuntungan saat benar, maka dalam jangka panjang hasil akhir mereka akan surplus.

Sebagai seorang newbie trader, sangat penting untuk tidak terburu-buru. Pasar keuangan adalah sarana di mana kekayaan berpindah dari orang yang tidak sabar kepada mereka yang sabar. Jangan pernah tergiur dengan pameran kekayaan atau tangkapan layar keuntungan fantastis di media sosial. Di balik satu transaksi brilian yang sukses, selalu ada puluhan jam belajar di depan layar, latihan yang melelahkan, dan pergulatan mengelola emosi (keserakahan dan ketakutan) yang tidak pernah diperlihatkan ke publik. Fokuslah pada proses belajarmu, pahami dan hormati risikonya, serta perlakukan trading sebagai sebuah keahlian (skill) seumur hidup yang membutuhkan dedikasi penuh.

## Contoh di Chart
Bayangkan kamu sedang melihat layar yang menampilkan harga pergerakan EUR/USD (Euro berbanding Dolar AS). Saat ini sistem menunjukkan harga berada di angka 1.1000, yang artinya 1 Euro bernilai sama dengan 1.10 Dolar AS. Setelah menganalisis, kamu menyimpulkan bahwa nilai Euro akan menguat terhadap Dolar. Kamu lalu menekan tombol "Buy" (Beli) untuk EUR/USD. Beberapa jam kemudian, harga benar-benar naik menjadi 1.1050. Kamu kemudian memutuskan untuk "Close" (Tutup/Jual) posisi tersebut dan mengantongi keuntungan dari selisih 50 poin (pips) tersebut. Inilah contoh nyata mengambil untung dari selisih fluktuasi harga mata uang.

## Kesalahan Umum
- Menganggap trading sebagai tiket lotere atau jalan pintas untuk kaya mendadak tanpa kerja keras.
- Bertrading mengandalkan "feeling" murni atau tebak-tebakan buta tanpa dasar analisis apa pun.
- Memasukkan seluruh tabungan hidup (uang beras) ke dalam akun trading karena tergiur janji keuntungan pasti dari pihak tak bertanggung jawab.

## Latihan
Coba perhatikan fluktuasi harga barang-barang di pasar atau supermarket terdekat, misalnya harga telur ayam, bawang merah, atau bahkan harga tiket pesawat saat menjelang musim liburan. Amati bagaimana harganya tidak pernah diam dan selalu berubah-ubah dari waktu ke waktu tergantung seberapa banyak yang ingin membeli (permintaan) dan seberapa banyak barang yang tersedia (penawaran). Pikirkan satu alasan logis mengapa harga barang tersebut melonjak naik akhir-akhir ini.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Trading sebagai bisnis probabilitas** dan mengapa ekspektasi yang benar sangat menentukan keberhasilan masa depanmu.
""",
    "02-chart-dan-candlestick.md": """# Chart dan Anatomi Candlestick

Level: Level 01 — Newbie Trader
XP: 10

![Anatomi Candlestick](/images/lessons/level-01/02-candlestick-anatomy.svg)

## Mengapa Materi Ini Penting
Chart (grafik) adalah bahasa utama pasar keuangan. Jika kamu tidak bisa membaca chart, kamu sama seperti orang buta huruf yang mencoba membaca buku resep masakan. Candlestick adalah komponen terkecil yang membentuk chart, menceritakan kisah pertarungan antara pembeli dan penjual pada periode waktu tertentu. Memahami anatomi candlestick adalah langkah wajib pertama dalam analisis teknikal.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengenali apa itu chart harga dan bagaimana cara membacanya.
- Membedakan antara candlestick Bullish (naik) dan Bearish (turun).
- Mengidentifikasi 4 komponen utama candlestick: Open, High, Low, Close (OHLC).
- Memahami cerita di balik sumbu (wick/shadow) sebuah candle.

## Penjelasan
Di masa lalu, trader harus menggambar titik-titik harga secara manual di atas secarik kertas milimeter blok untuk melacak pergerakan pasar. Hari ini, teknologi menyediakan kita dengan "Chart" digital. Chart adalah representasi visual dari pergerakan harga suatu instrumen dari waktu ke waktu. Sumbu mendatar (X) di bagian bawah menunjukkan Waktu (menit, jam, hari), sedangkan sumbu tegak (Y) di sebelah kanan menunjukkan Harga.

Ada berbagai jenis chart yang digunakan, seperti Line Chart (grafik garis sederhana) dan Bar Chart. Namun, standar industri yang paling banyak digunakan oleh trader profesional di seluruh dunia adalah **Japanese Candlestick Chart**. Sesuai namanya, metode ini ditemukan di Jepang pada abad ke-18 oleh seorang pedagang beras legendaris bernama Munehisa Homma. Kenapa disebut candlestick? Karena bentuknya memang menyerupai batang lilin lengkap dengan sumbunya.

Satu buah candlestick merangkum seluruh aktivitas transaksi yang terjadi dalam satu periode waktu (Timeframe) yang kamu pilih. Jika kamu memilih timeframe 1 Hari (Daily), maka satu candle mewakili pergerakan harga selama 24 jam. Jika kamu memilih timeframe 15 Menit (M15), maka setiap 15 menit sekali, sebuah candle baru akan terbentuk dan candle yang lama akan tertutup.

Setiap candlestick terdiri dari dua bagian utama:
1. **Badan (Body):** Kotak tebal di tengah yang menunjukkan area antara harga pembukaan (Open) dan penutupan (Close).
2. **Sumbu (Wick/Shadow):** Garis tipis yang memanjang ke atas atau ke bawah dari badan, menunjukkan harga tertinggi (High) dan terendah (Low) yang pernah dicapai selama periode tersebut.

Secara umum, candlestick terbagi menjadi dua jenis berdasarkan arah pergerakannya:
- **Candle Bullish (Naik):** Terjadi ketika harga penutupan (Close) lebih tinggi daripada harga pembukaan (Open). Artinya, dalam periode waktu tersebut, pihak pembeli (Buyer/Bulls) memenangkan pertarungan melawan penjual dan berhasil mendorong harga naik. Biasanya candle ini diberi warna Hijau atau Putih.
- **Candle Bearish (Turun):** Terjadi ketika harga penutupan (Close) lebih rendah daripada harga pembukaan (Open). Ini menandakan bahwa pihak penjual (Seller/Bears) memegang kendali dan menekan harga turun. Candle ini umumnya berwarna Merah atau Hitam.

Mari kita bahas anatomi utamanya yang dikenal dengan singkatan **OHLC**:
- **O (Open):** Harga pada detik pertama saat periode candle dimulai.
- **H (High):** Titik harga paling tinggi yang pernah disentuh selama periode candle tersebut.
- **L (Low):** Titik harga paling rendah yang pernah disentuh.
- **C (Close):** Harga pada detik terakhir sebelum periode candle tersebut berakhir dan berganti ke candle baru. Harga Close inilah yang paling penting karena menunjukkan siapa pemenang akhir dalam periode tersebut.

Tidak semua candle memiliki badan yang besar atau sumbu yang panjang. Bentuk candle menyimpan informasi psikologis yang dalam. Misalnya, candle dengan badan kecil tapi memiliki sumbu bawah yang sangat panjang (sering disebut Pinbar atau Hammer). Sumbu bawah yang panjang ini bercerita bahwa pada awalnya penjual menekan harga turun secara brutal, namun tiba-tiba pasukan pembeli datang dan memborong hingga harga kembali naik dengan kuat sebelum candle tertutup. Ini menunjukkan adanya penolakan harga (Rejection) yang kuat dari bawah.

Membaca chart bukan hanya soal menghafal pola bentuk candle. Ini tentang memahami **bahasa pasar**. Setiap candle menceritakan seberapa agresif pembeli, seberapa putus asanya penjual, dan di mana keseimbangan bergeser. Dengan melatih mata melihat chart setiap hari, pelan-pelan kamu akan mulai memahami "emosi" dari ribuan orang yang bertransaksi di balik layar monitor tersebut.

## Contoh di Chart
Buka chart Bitcoin dengan timeframe 1 Jam (H1). Kamu melihat sebuah candle hijau raksasa terbentuk tanpa sumbu atas. Harga Open berada di $50,000 dan harga Close di $52,000. Tidak ada sumbu atas berarti harga Close sama dengan harga High. Ini adalah indikasi bahwa pembeli sangat kuat dan terus membeli hingga detik terakhir penutupan jam tersebut tanpa perlawanan sama sekali dari penjual. Momentum ini seringkali merupakan pertanda bahwa harga akan terus naik pada candle berikutnya.

## Kesalahan Umum
- Menghafal ratusan nama pola candlestick (Doji, Marubozu, Harami) tanpa memahami cerita psikologis pembeli dan penjual di baliknya.
- Terlalu cepat mengambil keputusan sebelum candle benar-benar tertutup (Close). Harga bisa saja berbalik drastis di detik-detik terakhir penutupan candle.
- Mengabaikan sumbu (wick). Sumbu sama pentingnya dengan body karena sumbu menunjukkan jejak langkah likuiditas dan area yang ditolak oleh pasar.

## Latihan
Buka aplikasi TradingView, pilih chart pair EUR/USD atau instrumen apa pun kesukaanmu, lalu ubah ke Timeframe H4 (4 Jam). Temukan 5 candle Bullish yang memiliki sumbu bawah lebih panjang dari badannya, dan 5 candle Bearish. Amati apa yang terjadi pada pergerakan harga setelah candle-candle tersebut muncul.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada pemahaman **OHLC** dan cara membaca cerita siapa yang menang antara pembeli dan penjual berdasarkan **ukuran badan dan panjang sumbu**.
""",
    "03-trend-dan-range.md": """# Market Structure Dasar: Trend dan Range

Level: Level 01 — Newbie Trader
XP: 10

![Trend dan Range](/images/lessons/level-01/03-trend-range.svg)

## Mengapa Materi Ini Penting
"Trend is your friend, until it bends." Ini adalah pepatah klasik dalam trading yang selalu relevan. Pasar keuangan tidak bergerak dalam garis lurus yang acak. Ia bergerak mengikuti pola struktural seperti ombak di lautan. Mampu mengidentifikasi apakah pasar sedang bergerak naik (Uptrend), turun (Downtrend), atau sekadar bergerak menyamping (Range/Sideways) akan menyelamatkanmu dari banyak kerugian fatal akibat melawan arah pasar.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi kondisi Uptrend (Bullish Market) beserta strukturnya (HH, HL).
- Mengidentifikasi kondisi Downtrend (Bearish Market) beserta strukturnya (LH, LL).
- Memahami kondisi Ranging/Sideways (Konsolidasi).
- Mengetahui aturan dasar: Kapan harus mencari peluang Buy, Sell, atau lebih baik diam.

## Penjelasan
Bayangkan kamu sedang mendaki gunung. Perjalanan menuju puncak tidak pernah berupa tanjakan garis lurus yang curam dari bawah sampai ke atas. Kamu akan mendaki sejauh beberapa kilometer, lalu menemukan pos peristirahatan (turun sedikit atau mendatar), sebelum akhirnya kembali mendaki lebih tinggi lagi. Pergerakan harga di pasar keuangan persis seperti itu. Harga bergerak dalam gelombang ayunan (swing).

Secara fundamental, pasar hanya bisa berada dalam satu dari tiga fase utama:

**1. Uptrend (Tren Naik)**
Uptrend terjadi ketika pasar didominasi oleh pembeli, sehingga harga secara konsisten bergerak ke atas. Namun, ingat analogi mendaki gunung tadi: harganya naik, terkoreksi turun sedikit (pullback), lalu naik lagi menembus puncak sebelumnya.
Dalam bahasa teknikal, Uptrend ditandai dengan pembentukan:
- **Higher High (HH):** Puncak (titik tertinggi ayunan) yang baru lebih tinggi dari puncak sebelumnya.
- **Higher Low (HL):** Lembah (titik terendah ayunan) yang baru lebih tinggi dari lembah sebelumnya.
Selama formasi HH dan HL ini terus terbentuk secara berurutan, pasar secara sah berada dalam Uptrend. Tugasmu sebagai trader pemula sangat sederhana: carilah peluang untuk **BUY (Beli)** ketika harga sedang turun sedikit membuat HL. Jangan pernah berpikir untuk melawan arus dengan menekan tombol Sell!

**2. Downtrend (Tren Turun)**
Downtrend adalah kebalikan dari Uptrend. Saat ini penjual sedang berpesta dan mendominasi pasar. Harga bergerak turun menuruni bukit, naik sedikit untuk beristirahat (pullback), sebelum akhirnya terjun lebih dalam lagi.
Struktur Downtrend ditandai dengan:
- **Lower Low (LL):** Lembah yang baru lebih rendah dari lembah sebelumnya.
- **Lower High (LH):** Puncak yang baru lebih rendah dari puncak sebelumnya.
Jika kamu melihat pola tangga turun seperti ini, pasar sedang dalam kondisi Downtrend. Aturan utamanya: carilah peluang **SELL (Jual)** saat harga sedang naik sedikit membuat LH. Mengambil posisi Buy saat Downtrend ibarat mencoba menangkap pisau jatuh dengan tangan kosong—sangat berbahaya!

**3. Ranging / Sideways (Konsolidasi)**
Apa yang terjadi jika pembeli dan penjual memiliki kekuatan yang sama seimbangnya? Harga tidak akan membentuk puncak yang lebih tinggi atau lembah yang lebih rendah. Sebaliknya, harga akan terpantul ke atas dan ke bawah di antara dua level batas yang relatif sama, seperti bola pingpong yang memantul di antara lantai dan plafon.
Inilah yang disebut kondisi Ranging atau Sideways (bergerak menyamping). Tidak ada tren yang jelas. Puncak-puncaknya berada di area level yang sama (Equal Highs), dan lembah-lembahnya berada di area yang sama (Equal Lows).
Bagi pemula, kondisi Ranging ini cukup berbahaya karena pergerakan harga cenderung menipu dan acak (choppy). Saran terbaik saat pasar sedang Ranging di tengah-tengah adalah **Duduk diam dan jangan bertrading (Wait and See)**, sampai harga berhasil menembus keluar (breakout) dari area konsolidasi tersebut dan membentuk tren baru.

Mengapa memahami ketiga fase ini krusial? Karena setiap kondisi pasar membutuhkan strategi yang berbeda. Banyak trader hancur karena mereka memaksakan strategi yang bekerja sangat baik saat Uptrend ke dalam kondisi pasar yang sedang Ranging. Kunci kesuksesan adalah kemampuan beradaptasi. Selalu tanyakan pada dirimu sebelum membuka posisi: *"Siapa yang sedang mengontrol pasar saat ini? Pembeli atau Penjual?"* Jika jawabannya tidak jelas, menyingkirlah sejenak dari pasar.

## Contoh di Chart
Kamu membuka chart XAU/USD (Emas) M15. Kamu melihat harga emas naik hingga mencetak titik puncak di 2000 (Higher High pertama). Lalu harga turun sebentar beristirahat di 1990 (Higher Low pertama). Setelah itu harga kembali meroket menembus puncak 2000 dan berhenti di 2010 (Higher High kedua). Turun lagi ke 1995 (Higher Low kedua) dan naik kembali ke 2020. Ini adalah struktur tangga naik klasik (Uptrend). Saat harga turun sebentar, itu bukan saat yang tepat untuk Sell, melainkan itu adalah diskon untuk mencari peluang Buy karena secara keseluruhan momentum sedang kuat naik.

## Kesalahan Umum
- **Melawan Tren:** Mencoba "menebak pucuk" (mencari titik tertinggi untuk sell saat Uptrend kuat) karena merasa harga "sudah terlalu tinggi dan pasti akan turun".
- **Terjebak di Ranging Market:** Bertrading terus-menerus saat arah market sedang tidak jelas, sehingga terkena stop loss berkali-kali ke atas dan ke bawah (whipsawed).
- Terlalu terpaku pada timeframe kecil (M1) sehingga tidak menyadari tren yang sebenarnya sedang terjadi di timeframe besar (H1 atau H4).

## Latihan
Buka chart apa saja di TradingView. Gunakan alat gambar (drawing tools) berupa teks atau kuas. Cari area pergerakan harga yang sedang naik, lalu tandai secara manual titik-titik puncak dengan huruf "HH" dan lembah dengan "HL". Lakukan hal yang sama untuk mencari Downtrend dan tandai "LH" serta "LL". Matamu akan terbiasa membaca struktur ini dalam beberapa hari.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada syarat mutlak terbentuknya sebuah tren, yaitu kombinasi **HH & HL untuk Uptrend**, dan **LH & LL untuk Downtrend**.
""",
    "04-support-resistance-awal.md": """# Dasar Support dan Resistance (S&R)

Level: Level 01 — Newbie Trader
XP: 10

![Support Resistance Basic](/images/lessons/level-01/04-snr-basic.svg)

## Mengapa Materi Ini Penting
Support dan Resistance (sering disingkat SnR) adalah pilar tertua dan paling dasar dari semua jenis analisis teknikal. Baik kamu bertrading menggunakan indikator, price action klasik, hingga konsep Smart Money Concept (SMC) modern yang rumit sekalipun, semuanya berakar dari pemahaman tentang bagaimana harga bereaksi terhadap zona-zona penting di masa lalu ini. S&R akan membantumu menentukan area "murah" dan "mahal" secara rasional.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Memahami konsep Support sebagai lantai (zona pantul bawah).
- Memahami konsep Resistance sebagai atap/plafon (zona pantul atas).
- Mengetahui cara menggambar area Support dan Resistance dasar di chart.
- Memahami prinsip dasar: "Resistance yang tertembus bisa menjadi Support (RBS)" dan sebaliknya.

## Penjelasan
Mari kita gunakan analogi properti. Bayangkan kamu berada di sebuah gedung bertingkat. Lantai tempat kakimu berpijak mencegahmu jatuh ke tingkat yang lebih bawah. Di saat yang sama, langit-langit (plafon) di atas kepalamu mencegahmu melompat tembus ke lantai atasnya. 

Di dunia trading, pasar juga bergerak di dalam "gedung bertingkat" imajiner ini.
- **Support (Lantai):** Adalah suatu area level harga di bawah posisi harga saat ini, di mana minat beli (permintaan/demand) cukup kuat untuk menahan harga agar tidak turun lebih dalam, dan berpotensi memantulkannya kembali ke atas. Support adalah zona "murah" di mana para pembeli biasanya bersiap-siap untuk masuk pasar.
- **Resistance (Plafon/Atap):** Adalah suatu area level harga di atas posisi harga saat ini, di mana minat jual (penawaran/supply) cukup besar sehingga menahan laju kenaikan harga, dan berpotensi menekannya kembali turun. Resistance adalah zona "mahal" tempat para penjual mulai beraksi untuk menekan harga ke bawah.

Bagaimana cara menemukannya di chart? Sangat mudah. Coba perhatikan chart secara sekilas, dan matamu pasti akan menemukan titik-titik (puncak atau lembah) di mana harga seperti menabrak "tembok tak kasat mata", lalu berbalik arah. Jika harga berulang kali mencoba menembus suatu titik atas namun selalu gagal dan berbalik turun, selamat, kamu baru saja menemukan zona Resistance yang kuat. Jika harga berulang kali mencoba turun melewati titik bawah tapi selalu tertahan dan memantul naik, itu adalah zona Support.

Namun, tidak ada tembok yang tidak bisa dihancurkan. Ketika pergerakan harga didorong oleh momentum kuat (misalnya karena ada berita ekonomi besar), lantai atau plafon ini bisa hancur tertembus. Inilah yang disebut dengan peristiwa **Breakout**. 

Di sinilah muncul aturan magis yang paling indah dalam konsep S&R klasik: **Perubahan Peran (Role Reversal)**.
Bayangkan kamu melompat sangat kuat hingga menjebol plafon ke lantai 2. Sekarang, plafon lantai 1 yang baru saja kamu tembus, berubah fungsi menjadi lantai baru tempatmu berpijak di lantai 2.
- Ketika harga berhasil menjebol Resistance ke atas, maka Resistance yang hancur tersebut akan berbalik sifat menjadi **Support baru (Resistance Becomes Support / RBS)**.
- Sebaliknya, ketika harga merosot jatuh menembus Support ke bawah, Support tersebut akan berubah menjadi **Resistance baru (Support Becomes Resistance / SBR)** yang akan menghalangi harga jika mencoba naik kembali.

Satu catatan penting untuk diingat seumur hidupmu: Support dan Resistance **BUKANLAH sebuah garis tipis**. Mereka adalah sebuah **Area atau Zona**. Pemula sering frustrasi karena harga terkadang menembus garis S&R mereka sejauh 5 pips lalu berbalik arah (Fakeout), membuat mereka merasa tertipu. Ini karena mereka menggambar S&R sebagai garis setebal rambut. Berlatihlah menggambar S&R menggunakan bentuk kotak persegi panjang untuk mewakili sebuah zona harga (price zone), yang mencakup penutupan badan candle (close body) hingga ke ujung sumbu terpanjangnya (wick).

## Contoh di Chart
Kamu melihat GBP/USD sedang naik menyentuh level harga 1.2500, lalu tiba-tiba turun tajam. Esok harinya, harga kembali naik perlahan ke area 1.2500, dan ternyata langsung ditolak tajam kembali ke bawah untuk kedua kalinya. Angka psikologis bulat 1.2500 ini telah resmi menjadi area Resistance yang kuat. Sebagai trader yang cerdas, saat harga kembali mendekati 1.2500 untuk ketiga kalinya, kamu tidak akan terburu-buru melakukan Buy. Sebaliknya, kamu akan waspada dan mencari peluang Sell di zona "mahal" tersebut karena sejarah membuktikan bahwa banyak penjual (seller) bersarang di area plafon itu.

## Kesalahan Umum
- Menggambar garis Support & Resistance terlalu banyak di setiap ayunan kecil, sehingga chart tampak seperti benang kusut yang membingungkan diri sendiri.
- Menganggap level S&R pasti akan memantulkan harga 100%. Tidak ada yang pasti di pasar. Level S&R yang terlalu sering diuji lambat laun akan melemah dan hancur.
- Menggambar S&R hanya menggunakan sebuah garis lurus tipis, bukan menganggapnya sebagai sebuah zona ketebalan.

## Latihan
Buka chart Timeframe Daily (D1) untuk melihat gambaran besar yang lebih bersih. Identifikasi puncak dan lembah paling ekstrim dalam 3 bulan terakhir. Gunakan alat "Rectangle" (Persegi Panjang) untuk menandai zona harga tersebut sebagai Support (di bawah) dan Resistance (di atas). Tarik kotak tersebut ke kanan untuk melihat bagaimana harga bereaksi di hari-hari berikutnya saat menyentuh zona tersebut.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada memvisualisasikan Support dan Resistance sebagai **sebuah ZONA KARET**, bukan dinding beton beton yang tidak bisa ditembus.
""",
    "05-risiko-dasar.md": """# Manajemen Risiko Fundamental: Jangan Sampai Bangkrut

Level: Level 01 — Newbie Trader
XP: 10

![Manajemen Risiko](/images/lessons/level-01/05-risk-management.svg)

## Mengapa Materi Ini Penting
Kebenaran yang pahit: kamu bisa memiliki strategi trading yang hanya benar 4 dari 10 kali (win rate 40%) tapi tetap menghasilkan uang jika manajemen risikomu brilian. Sebaliknya, kamu bisa punya strategi dengan win rate 90%, namun satu kali kerugian besar tanpa manajemen risiko bisa menghanguskan seluruh modalmu (Margin Call). Manajemen risiko bukan hanya sekadar pelindung, ini adalah satu-satunya rahasia panjang umur (survival) di industri trading yang kejam ini.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengerti bahwa tugas nomor 1 trader adalah melindungi modal, bukan mencari cuan.
- Memahami konsep wajib Stop Loss (SL).
- Memahami aturan emas risiko: "Jangan pernah merisikokan lebih dari 1-2% modal per transaksi".
- Memahami konsep dasar Risk-to-Reward Ratio (RRR).

## Penjelasan
Mari kita bongkar sebuah paradoks besar dalam trading. Banyak pemula masuk ke pasar dengan pikiran, "Berapa banyak uang yang bisa saya menangkan hari ini?" 
Sedangkan trader profesional masuk ke pasar dengan pikiran, "Berapa banyak uang yang berani saya hilangkan pada transaksi ini, jika ternyata analisis saya salah total?"
Pola pikir inilah yang membedakan antara penjudi dan pebisnis tulen. Modal tradingmu (balance) adalah peluru. Jika pelurumu habis, kamu tidak bisa menembak (trading) lagi, secantik apa pun peluang emas yang muncul besok harinya di depan matamu. Tugas utamamu BUKAN mencetak uang, melainkan MELINDUNGI modal. Uang akan datang dengan sendirinya jika modalmu terlindungi dengan baik.

Berikut adalah tiga pilar utama manajemen risiko fundamental yang pantang dilanggar:

**1. Selalu Gunakan Stop Loss (SL)**
Stop Loss adalah fitur di aplikasi trading yang secara otomatis akan menutup posisi transaksimu saat harga menyentuh batas kerugian tertentu yang sudah kamu tentukan sebelumnya. Ini adalah sabuk pengamanmu.
Berjalan tanpa Stop Loss ibarat mengendarai mobil berkecepatan 200 km/jam tanpa rem. Jika harga bergerak ekstrem melawan analisismu karena berita buruk mendadak yang tidak terduga, fitur Stop Loss akan menghentikan pendarahan dan menyelamatkan akunmu dari kehancuran total (Margin Call / kebangkrutan). Jangan pernah—sekali lagi, jangan pernah—membuka transaksi apa pun tanpa menetapkan Stop Loss.

**2. Aturan Emas 1% (Position Sizing)**
Berapa banyak uang yang boleh hilang dalam satu transaksi yang gagal? Standar industri profesional menetapkan batas maksimal 1% hingga 2% dari total modalmu per satu kali trading.
Mengapa harus sekecil itu? Bayangkan kamu memiliki modal Rp 10.000.000. Jika kamu mengambil risiko 1% (Rp 100.000 per transaksi), maka kamu harus mengalami kerugian 100 kali berturut-turut untuk membuat modalmu habis. Skenario tersebut sangat mustahil terjadi.
Namun, jika kamu nekat mempertaruhkan 25% modal per transaksi, kamu hanya butuh rentetan kerugian 4 kali berturut-turut untuk kehilangan seluruh uangmu. Dan percayalah, kalah 4 kali beruntun adalah hal yang sangat normal dan sering terjadi bahkan pada trader master sekalipun. Membatasi risiko per transaksi memastikan kamu tetap bisa bertahan di tengah rentetan kekalahan beruntun (losing streak).

**3. Risk to Reward Ratio (RRR / Rasio Risiko terhadap Imbalan)**
Ini adalah konsep matematika terpenting yang wajib dipahami. RR mengukur berapa banyak potensi keuntunganmu dibandingkan dengan risiko kerugian yang kamu tanggung.
Contoh: Kamu menetapkan risiko rugi (Stop Loss) sebesar Rp 100.000. Sebagai imbalannya, kamu menargetkan potensi keuntungan (Take Profit) sebesar Rp 200.000. Ini berarti RRR kamu adalah 1:2 (Risiko 1, Imbalan 2).
Mengapa ini magis? Dengan menggunakan RRR 1:2 atau lebih baik, kamu bisa sering salah namun secara keseluruhan akunmu tetap tumbuh (profit). Misalnya kamu bertrading 10 kali. Kamu kalah 6 kali (rugi Rp 600.000) dan hanya menang 4 kali (untung Rp 800.000). Win ratemu jelek, hanya 40%, namun hasil akhirnya saldo kamu tetap untung bersih Rp 200.000! RRR adalah bukti matematis bahwa kamu tidak perlu menjadi cenayang yang selalu benar untuk sukses di trading.

Memang butuh kedewasaan mental yang luar biasa untuk menerima kerugian kecil. Ego kita tidak suka mengaku salah. Namun trader sukses adalah pecundang yang profesional; mereka sangat ahli dalam memotong kerugian sekecil mungkin, dan membiarkan keuntungan berjalan sejauh mungkin.

## Contoh Praktis
Kamu mengamati chart dan menemukan peluang Buy yang bagus dengan target keuntungan berjarak 60 pips (Take Profit) dan batas kerugian teknikal berjarak 20 pips (Stop Loss). 
- Modal akunmu adalah $1000.
- Kamu disiplin hanya mau merisikokan maksimal 1% modal, yaitu $10.
- Maka kamu mengatur besaran lot (volume) transaksimu sedemikian rupa sehingga jika SL sejauh 20 pips itu tersentuh, kamu hanya rugi tepat $10 (ini disebut kalkulasi Position Sizing).
- Potensi RRR transaksi ini adalah Risiko 20 pips vs Reward 60 pips, yang artinya RRR 1:3. 
- Jika menang, kamu dapat $30. Jika kalah, kamu hanya kehilangan $10. Ini adalah contoh set-up trading berisiko rendah berkualitas tinggi!

## Kesalahan Umum
- **Averaging Down/Martingale:** Saat posisi rugi dan minus membesar, bukannya cut loss (memotong rugi), malah nekat membuka posisi baru dengan lot lebih besar (averaging/martingale) karena yakin harga akan berbalik arah. Ini resep utama Margin Call.
- **Menggeser atau Menghapus Stop Loss:** Saat harga mendekati SL, trader ketakutan dan menggeser menjauhkan SL-nya. Ini membuat kerugian yang tadinya kecil membengkak menjadi bencana yang tak bisa dipulihkan. Terimalah kerugian awal dengan ksatria!
- Mengejar RRR negatif, misalnya mengambil risiko rugi $50 hanya demi mengejar keuntungan receh $10 (RRR 5:1 terbalik).

## Latihan
Ambil secarik kertas. Lakukan simulasi hitungan matematika sederhana. Jika modalmu $500, hitunglah berapa batas risiko uang maksimal dalam Dolar jika kamu menggunakan aturan 1% dan 2%? 
Lalu hitung, jika sebuah sistem memiliki Win Rate hanya 30% (3 kali menang, 7 kali kalah dari 10 transaksi) namun menggunakan RRR yang konsisten 1:3, apakah hasil akhir setelah 10 transaksi itu untung, impas, atau rugi total? Buktikan sendiri kekuatan matematika RRR!

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada memahami cara kerja matematika di balik **Risk to Reward Ratio (RRR)** dan mengapa merisikokan lebih dari 2% per transaksi adalah tindakan bunuh diri finansial.
""",
    "06-ringkasan-level-1.md": """# Ringkasan Level 1 & Ujian Kelulusan

Level: Level 01 — Newbie Trader
XP: 10

![Ringkasan Level 1](/images/lessons/level-01/06-level1-summary.svg)

## Mengapa Materi Ini Penting
Selamat! Kamu telah menyelesaikan modul Level 1: Newbie Trader. Sebelum kita melangkah ke Level 2 yang lebih rumit, sangat penting untuk menarik jeda sejenak, merangkai semua kepingan puzzle dasar yang telah kita pelajari, dan memastikan tidak ada konsep krusial yang terlewat atau disalahpahami. Pondasi bangunan yang retak tidak akan kuat menahan lantai gedung yang menjulang tinggi.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Merangkum 5 fondasi penting trading dari bab sebelumnya.
- Memastikan pondasi pola pikir (mindset) telah selaras.
- Bersiap menghadapi mini-quiz untuk membuka gembok Level 2.

## Penjelasan
Mari kita lakukan kilas balik dan merangkum inti sari perjalananmu di Level 1 ini.
Kamu memulai perjalanan dengan paradigma baru: menggeser sudut pandang bahwa trading bukanlah skema berjudi atau cepat kaya, melainkan sebuah **bisnis probabilitas yang serius**. Sama seperti bisnis pada umumnya, ada modal, risiko kerugian operasional (dalam bentuk kekalahan transaksi/stop loss), dan perlunya strategi konsisten jangka panjang.

Kamu juga sudah belajar membaca bahasa mesin yang bernama **Chart Candlestick**. Kamu tahu bahwa setiap candle menceritakan pertarungan brutal antara pihak pembeli dan penjual. Ingatlah komponen OHLC, dan jangan abaikan panjang sumbu (wick) yang menceritakan jejak likuiditas, penolakan (rejection), dan kepanikan pasar.

Lebih jauh, kamu mempelajari **Market Structure Dasar**. Harga bergerak secara struktural dalam gelombang, tidak dalam garis lurus. Kita telah membagi kondisi pasar menjadi 3 fase utama:
1. Uptrend (Kumpulan tangga naik HH dan HL) — Tempat kita mencari peluang Buy (Beli).
2. Downtrend (Kumpulan tangga turun LH dan LL) — Tempat kita mencari peluang Sell (Jual).
3. Ranging/Sideways (Konsolidasi yang tidak beraturan) — Tempat kita duduk di luar pagar (wait and see) untuk mengamankan uang.

Lalu, kita membekali diri dengan alat analisis paling purba di dunia, **Support & Resistance (S&R)**. Kamu mulai melihat pasar seperti gedung bertingkat, lengkap dengan batas lantai (support) dan plafon (resistance). Pemahaman bahwa batas S&R ini adalah Zona yang bisa ditembus (breakout) lalu berubah sifatnya (RBS dan SBR) memberikanmu lensa untuk mendeteksi area transaksi yang paling probabilitas-tinggi.

Akhirnya, dan mungkin ini adalah bab terpenting dari seluruh ensiklopedia trading mana pun, kamu dibekali perisai **Manajemen Risiko**. Mengetahui arah harga hanyalah sepertiga bagian dari teka-teki. Membatasi kerugianmu maksimal 1-2% dari modal (position sizing), dan memastikan potensi keuntunganmu selalu lebih besar dari risiko yang ditanggung (Risk-to-Reward minimum 1:2), adalah resep ajaib matematika yang akan menahanmu tetap hidup di pasar ini selama puluhan tahun.

Inilah pilar-pilar penyangga karir tradingmu kelak. Tanpa S&R, kamu tidak tahu di mana harus menaruh uang. Tanpa mengetahui Struktur Trend, kamu akan sering tertabrak arus besar (melawan tren). Tanpa membaca Candlestick, kamu tak tahu apakah pembeli atau penjual yang sedang berkuasa di zona tersebut. Dan tanpa Manajemen Risiko, sekeras apa pun usahamu, kebangkrutan akun (Margin Call) hanyalah soal waktu. Semua komponen ini harus dipadukan menjadi satu kesatuan mesin trading yang solid.

Persiapkan dirimu, karena di Level 2 nanti, kita akan masuk ke tingkatan menengah. Kita akan membedah secara lebih rinci konsep Market Structure Lanjutan (Break of Structure / BOS) dan mulai menyentuh dasar-dasar pergerakan uang institusional atau Smart Money Concepts (SMC).

## Contoh di Chart
Anggaplah chart adalah peta, candlestick adalah petunjuk jejak kaki, Market Structure adalah kompas arah (utara/selatan), Support dan Resistance adalah rintangan gunung atau sungai di peta, dan Manajemen Risiko adalah logistik air dan makananmu. Semua bekerja berkesinambungan. Jika kompas menunjuk ke Utara (Uptrend), carilah jejak kaki naik di sekitar rintangan lantai (Support), dan pastikan logistikmu selalu cukup (Risiko 1%) seandainya kamu tersesat. Begitulah cara trader profesional memandang sebuah chart.

## Kesalahan Umum
- Merasa materi dasar terlalu membosankan dan ingin langsung lompat ke materi strategi sakti yang rumit (SMC/ICT). Kebanyakan trader ahli kembali menyederhanakan strateginya ke prinsip dasar S&R dan Tren.
- Masih memiliki mindset ingin mengubah uang Rp 100 ribu menjadi Rp 10 Juta dalam waktu seminggu menggunakan full margin (all-in).
- Belum disiplin memasang Stop Loss secara konsisten di setiap transaksi (masih sering menggunakan alasan "Ah nanti harga pasti balik lagi kok").

## Latihan
Luangkan waktu 15 menit, lalu coba jelaskan konsep-konsep ini kepada orang awam (teman, saudara, pasangan) dengan bahasamu sendiri, tanpa menggunakan istilah bahasa Inggris yang rumit:
1. Apa itu uptrend dan downtrend?
2. Kenapa kita harus membatasi kerugian sekecil mungkin?
Jika orang awam itu mengerti penjelasanmu, maka kamu benar-benar sudah menguasai materi Level 1 ini secara fundamental.

## Checklist Pemahaman
- [ ] Saya paham seluruh intisari Level 1.
- [ ] Saya bisa mengkombinasikan Tren, S&R, dan Candlestick.
- [ ] Saya berjanji akan selalu menggunakan batasan risiko Stop Loss.
- [ ] Saya siap lanjut ke Ujian Kelulusan Level 1.

## Materi Remedial
Jika ada bagian yang masih abu-abu, kembalilah ke modul tersebut. Fondasi yang setengah matang akan berbahaya saat kita mulai menumpuk konsep yang lebih berat (seperti Inducement dan Liquidity) di level-level selanjutnya.
"""
}

svg_files = {
    "01-trading-concept.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" style="background:#1a1a2e; font-family:sans-serif;">
  <rect width="800" height="400" fill="#1a1a2e"/>
  
  <text x="400" y="50" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Konsep Dasar Trading</text>
  
  <!-- Left Side: Buy -->
  <rect x="150" y="150" width="120" height="80" rx="10" fill="#00ffaa" fill-opacity="0.2" stroke="#00ffaa" stroke-width="2"/>
  <text x="210" y="190" fill="#00ffaa" font-size="20" font-weight="bold" text-anchor="middle">BUY</text>
  <text x="210" y="215" fill="#ffffff" font-size="14" text-anchor="middle">Harga Rendah</text>

  <!-- Right Side: Sell -->
  <rect x="530" y="150" width="120" height="80" rx="10" fill="#ff3366" fill-opacity="0.2" stroke="#ff3366" stroke-width="2"/>
  <text x="590" y="190" fill="#ff3366" font-size="20" font-weight="bold" text-anchor="middle">SELL</text>
  <text x="590" y="215" fill="#ffffff" font-size="14" text-anchor="middle">Harga Tinggi</text>

  <!-- Arrow & Price Path -->
  <path d="M 280 190 Q 400 50 520 190" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="10 5"/>
  <polygon points="525,190 510,180 515,195" fill="#ffffff"/>
  
  <rect x="350" y="100" width="100" height="40" rx="20" fill="#2d2d44" stroke="#ffffff" stroke-width="1"/>
  <text x="400" y="125" fill="#00ffaa" font-size="16" font-weight="bold" text-anchor="middle">+ Profit</text>
  
  <!-- Explanation -->
  <text x="400" y="320" fill="#aaaaaa" font-size="16" text-anchor="middle">Trading = Bisnis Probabilitas Mencari Selisih Harga</text>
  <text x="400" y="350" fill="#aaaaaa" font-size="14" text-anchor="middle">Beli (Buy) di zona murah, Jual (Sell) di zona mahal</text>
</svg>''',
    
    "02-candlestick-anatomy.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" style="background:#1a1a2e; font-family:sans-serif;">
  <rect width="800" height="400" fill="#1a1a2e"/>
  <text x="400" y="50" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Anatomi Candlestick (OHLC)</text>

  <!-- Bullish Candle -->
  <g transform="translate(250, 100)">
    <!-- Wick -->
    <line x1="25" y1="20" x2="25" y2="200" stroke="#00ffaa" stroke-width="4"/>
    <!-- Body -->
    <rect x="0" y="60" width="50" height="100" fill="#00ffaa" stroke="#00ffaa" stroke-width="2"/>
    
    <!-- Labels -->
    <text x="70" y="25" fill="#ffffff" font-size="14">High (Tertinggi)</text>
    <text x="70" y="65" fill="#00ffaa" font-size="14" font-weight="bold">Close (Penutupan)</text>
    <text x="70" y="165" fill="#00ffaa" font-size="14" font-weight="bold">Open (Pembukaan)</text>
    <text x="70" y="205" fill="#ffffff" font-size="14">Low (Terendah)</text>
    <text x="-40" y="115" fill="#00ffaa" font-size="16" font-weight="bold" transform="rotate(-90 -40 115)">BULLISH</text>
  </g>

  <!-- Bearish Candle -->
  <g transform="translate(550, 100)">
    <!-- Wick -->
    <line x1="25" y1="20" x2="25" y2="200" stroke="#ff3366" stroke-width="4"/>
    <!-- Body -->
    <rect x="0" y="60" width="50" height="100" fill="#ff3366" stroke="#ff3366" stroke-width="2"/>
    
    <!-- Labels -->
    <text x="-140" y="25" fill="#ffffff" font-size="14">High (Tertinggi)</text>
    <text x="-150" y="65" fill="#ff3366" font-size="14" font-weight="bold">Open (Pembukaan)</text>
    <text x="-155" y="165" fill="#ff3366" font-size="14" font-weight="bold">Close (Penutupan)</text>
    <text x="-135" y="205" fill="#ffffff" font-size="14">Low (Terendah)</text>
    <text x="90" y="115" fill="#ff3366" font-size="16" font-weight="bold" transform="rotate(90 90 115)">BEARISH</text>
  </g>

  <text x="400" y="360" fill="#aaaaaa" font-size="14" text-anchor="middle">Sumbu (Wick) mewakili penolakan pergerakan harga, Badan (Body) menunjukkan pemenang (Bulls vs Bears)</text>
</svg>''',

    "03-trend-range.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" style="background:#1a1a2e; font-family:sans-serif;">
  <rect width="800" height="400" fill="#1a1a2e"/>
  
  <text x="400" y="40" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Market Structure Dasar</text>

  <!-- Uptrend -->
  <g transform="translate(50, 100)">
    <text x="80" y="-10" fill="#00ffaa" font-size="16" font-weight="bold">UPTREND (Bullish)</text>
    <path d="M 0 180 L 40 100 L 80 140 L 140 40 L 180 80 L 220 0" fill="none" stroke="#00ffaa" stroke-width="3"/>
    
    <circle cx="40" cy="100" r="5" fill="#ffffff"/> <text x="30" y="90" fill="#ffffff" font-size="12">HH</text>
    <circle cx="80" cy="140" r="5" fill="#ffffff"/> <text x="70" y="160" fill="#ffffff" font-size="12">HL</text>
    <circle cx="140" cy="40" r="5" fill="#ffffff"/> <text x="130" y="30" fill="#ffffff" font-size="12">HH</text>
    <circle cx="180" cy="80" r="5" fill="#ffffff"/> <text x="170" y="100" fill="#ffffff" font-size="12">HL</text>
  </g>

  <!-- Downtrend -->
  <g transform="translate(550, 100)">
    <text x="30" y="-10" fill="#ff3366" font-size="16" font-weight="bold">DOWNTREND (Bearish)</text>
    <path d="M 0 0 L 40 80 L 80 40 L 140 140 L 180 100 L 220 180" fill="none" stroke="#ff3366" stroke-width="3"/>
    
    <circle cx="40" cy="80" r="5" fill="#ffffff"/> <text x="30" y="100" fill="#ffffff" font-size="12">LL</text>
    <circle cx="80" cy="40" r="5" fill="#ffffff"/> <text x="70" y="30" fill="#ffffff" font-size="12">LH</text>
    <circle cx="140" cy="140" r="5" fill="#ffffff"/> <text x="130" y="160" fill="#ffffff" font-size="12">LL</text>
    <circle cx="180" cy="100" r="5" fill="#ffffff"/> <text x="170" y="90" fill="#ffffff" font-size="12">LH</text>
  </g>

  <!-- Ranging -->
  <g transform="translate(300, 200)">
    <text x="100" y="-20" fill="#f39c12" font-size="16" font-weight="bold">RANGING (Sideways)</text>
    <!-- Resistance Line -->
    <line x1="0" y1="20" x2="200" y2="20" stroke="#f39c12" stroke-width="2" stroke-dasharray="5 5"/>
    <!-- Support Line -->
    <line x1="0" y1="100" x2="200" y2="100" stroke="#f39c12" stroke-width="2" stroke-dasharray="5 5"/>
    
    <path d="M 0 60 L 40 20 L 80 100 L 120 20 L 160 100 L 200 60" fill="none" stroke="#ffffff" stroke-width="3"/>
    <text x="210" y="25" fill="#f39c12" font-size="12">Resistance (Equal Highs)</text>
    <text x="210" y="105" fill="#f39c12" font-size="12">Support (Equal Lows)</text>
  </g>

  <text x="400" y="370" fill="#aaaaaa" font-size="14" text-anchor="middle">HH = Higher High, HL = Higher Low | LH = Lower High, LL = Lower Low</text>
</svg>''',

    "04-snr-basic.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" style="background:#1a1a2e; font-family:sans-serif;">
  <rect width="800" height="400" fill="#1a1a2e"/>
  
  <text x="400" y="40" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Support &amp; Resistance (Role Reversal)</text>

  <!-- Old Resistance -->
  <rect x="50" y="150" width="300" height="20" fill="#ff3366" fill-opacity="0.3" stroke="#ff3366" stroke-width="1"/>
  <text x="200" y="145" fill="#ff3366" font-size="14" text-anchor="middle">Resistance (Plafon)</text>

  <!-- Breakout -->
  <path d="M 50 250 L 120 150 L 180 250 L 250 150 L 290 200 L 330 80" fill="none" stroke="#00ffaa" stroke-width="3"/>
  <circle cx="330" cy="80" r="5" fill="#ffffff"/>
  <text x="350" y="70" fill="#ffffff" font-size="14" font-style="italic">Breakout Kuat</text>

  <!-- Old Resistance Becomes New Support (RBS) -->
  <rect x="350" y="150" width="400" height="20" fill="#00ffaa" fill-opacity="0.3" stroke="#00ffaa" stroke-width="1"/>
  <text x="550" y="145" fill="#00ffaa" font-size="14" text-anchor="middle">Resistance Becomes Support (RBS)</text>
  
  <path d="M 330 80 L 400 150 L 480 50 L 550 150 L 630 30 L 700 150" fill="none" stroke="#ffffff" stroke-width="3"/>
  
  <!-- Arrow reflections -->
  <path d="M 120 175 L 120 195" stroke="#ff3366" stroke-width="2" marker-start="url(#arrow)"/>
  <path d="M 250 175 L 250 195" stroke="#ff3366" stroke-width="2" marker-start="url(#arrow)"/>
  
  <path d="M 400 125 L 400 105" stroke="#00ffaa" stroke-width="2" marker-start="url(#arrow-up)"/>
  <path d="M 550 125 L 550 105" stroke="#00ffaa" stroke-width="2" marker-start="url(#arrow-up)"/>
  <path d="M 700 125 L 700 105" stroke="#00ffaa" stroke-width="2" marker-start="url(#arrow-up)"/>

  <!-- Markers -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff3366" />
    </marker>
    <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#00ffaa" />
    </marker>
  </defs>

  <text x="400" y="340" fill="#aaaaaa" font-size="14" text-anchor="middle">Harga memantul berkali-kali di zona (Plafon/Lantai). S&amp;R adalah ZONA karet, bukan garis tipis beton.</text>
</svg>''',

    "05-risk-management.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" style="background:#1a1a2e; font-family:sans-serif;">
  <rect width="800" height="400" fill="#1a1a2e"/>
  
  <text x="400" y="40" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Manajemen Risiko &amp; RRR (Risk to Reward Ratio)</text>

  <!-- Entry Point -->
  <line x1="200" y1="200" x2="600" y2="200" stroke="#ffffff" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="180" y="205" fill="#ffffff" font-size="14" text-anchor="end">Harga Entry</text>

  <!-- Stop Loss Zone -->
  <rect x="350" y="200" width="100" height="50" fill="#ff3366" fill-opacity="0.3"/>
  <line x1="200" y1="250" x2="600" y2="250" stroke="#ff3366" stroke-width="2"/>
  <text x="180" y="255" fill="#ff3366" font-size="14" text-anchor="end" font-weight="bold">Stop Loss (SL)</text>
  <text x="400" y="230" fill="#ff3366" font-size="16" font-weight="bold" text-anchor="middle">Risiko: 1%</text>
  <text x="620" y="230" fill="#ff3366" font-size="14">-20 Pips</text>

  <!-- Take Profit Zone -->
  <rect x="350" y="50" width="100" height="150" fill="#00ffaa" fill-opacity="0.3"/>
  <line x1="200" y1="50" x2="600" y2="50" stroke="#00ffaa" stroke-width="2"/>
  <text x="180" y="55" fill="#00ffaa" font-size="14" text-anchor="end" font-weight="bold">Take Profit (TP)</text>
  <text x="400" y="130" fill="#00ffaa" font-size="16" font-weight="bold" text-anchor="middle">Imbalan: 3%</text>
  <text x="620" y="130" fill="#00ffaa" font-size="14">+60 Pips</text>

  <!-- Path representation -->
  <path d="M 300 280 L 350 200 L 400 230 L 450 150 L 500 180 L 550 50" fill="none" stroke="#ffffff" stroke-width="3"/>
  <circle cx="550" cy="50" r="5" fill="#00ffaa"/>

  <rect x="250" y="320" width="300" height="50" rx="10" fill="#2d2d44" stroke="#ffffff" stroke-width="1"/>
  <text x="400" y="350" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">RRR = 1 : 3</text>
</svg>''',

    "06-level1-summary.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" style="background:#1a1a2e; font-family:sans-serif;">
  <rect width="800" height="400" fill="#1a1a2e"/>
  
  <text x="400" y="40" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Ringkasan Pondasi Trading (Level 1)</text>

  <!-- Central Badge -->
  <circle cx="400" cy="200" r="60" fill="#00ffaa" fill-opacity="0.1" stroke="#00ffaa" stroke-width="3"/>
  <text x="400" y="200" fill="#00ffaa" font-size="24" font-weight="bold" text-anchor="middle">LVL 1</text>
  <text x="400" y="220" fill="#ffffff" font-size="12" text-anchor="middle">Newbie Trader</text>

  <!-- Pillar 1: Mindset -->
  <rect x="80" y="80" width="160" height="60" rx="10" fill="#2d2d44" stroke="#f39c12" stroke-width="2"/>
  <text x="160" y="105" fill="#f39c12" font-size="14" font-weight="bold" text-anchor="middle">Mindset Bisnis</text>
  <text x="160" y="125" fill="#ffffff" font-size="11" text-anchor="middle">Probabilitas, bukan Judi</text>

  <!-- Pillar 2: Candlestick -->
  <rect x="560" y="80" width="160" height="60" rx="10" fill="#2d2d44" stroke="#00ffaa" stroke-width="2"/>
  <text x="640" y="105" fill="#00ffaa" font-size="14" font-weight="bold" text-anchor="middle">Candlestick (OHLC)</text>
  <text x="640" y="125" fill="#ffffff" font-size="11" text-anchor="middle">Bahasa emosi market</text>

  <!-- Pillar 3: Market Structure -->
  <rect x="80" y="260" width="160" height="60" rx="10" fill="#2d2d44" stroke="#3498db" stroke-width="2"/>
  <text x="160" y="285" fill="#3498db" font-size="14" font-weight="bold" text-anchor="middle">Market Structure</text>
  <text x="160" y="305" fill="#ffffff" font-size="11" text-anchor="middle">Uptrend, Downtrend, Range</text>

  <!-- Pillar 4: S&R -->
  <rect x="560" y="260" width="160" height="60" rx="10" fill="#2d2d44" stroke="#e74c3c" stroke-width="2"/>
  <text x="640" y="285" fill="#e74c3c" font-size="14" font-weight="bold" text-anchor="middle">Support &amp; Resistance</text>
  <text x="640" y="305" fill="#ffffff" font-size="11" text-anchor="middle">Zona pantul (Lantai &amp; Plafon)</text>

  <!-- Connecting Lines -->
  <path d="M 240 110 Q 320 150 350 170" fill="none" stroke="#f39c12" stroke-width="2" stroke-dasharray="4"/>
  <path d="M 560 110 Q 480 150 450 170" fill="none" stroke="#00ffaa" stroke-width="2" stroke-dasharray="4"/>
  <path d="M 240 290 Q 320 250 350 230" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="4"/>
  <path d="M 560 290 Q 480 250 450 230" fill="none" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>

  <!-- Big Foundational Risk Management -->
  <rect x="250" y="330" width="300" height="50" rx="10" fill="#9b59b6" fill-opacity="0.2" stroke="#9b59b6" stroke-width="2"/>
  <text x="400" y="355" fill="#9b59b6" font-size="16" font-weight="bold" text-anchor="middle">MANAJEMEN RISIKO (Risk Management)</text>
  <text x="400" y="372" fill="#ffffff" font-size="12" text-anchor="middle">Stop Loss Wajib &amp; Aturan Risiko 1% (Perisai Pelindung)</text>
</svg>'''
}

for filename, content in md_files.items():
    path = os.path.join(md_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
        
for filename, content in svg_files.items():
    path = os.path.join(svg_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())

print("Successfully generated all Level 1 files.")
