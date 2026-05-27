import os

md_dir = '/storage/emulated/0/Download/Amy-Trading-Quest/src/lessons/level-23'
svg_dir = '/storage/emulated/0/Download/Amy-Trading-Quest/public/images/lessons/level-23'

os.makedirs(md_dir, exist_ok=True)
os.makedirs(svg_dir, exist_ok=True)

md_files = [
    {
        "name": "01-apa-itu-breaker-block.md",
        "title": "Apa Itu Breaker Block",
        "svg": "01-breaker-block.svg",
        "content": """# Apa Itu Breaker Block

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Apa Itu Breaker Block](/images/lessons/level-23/01-breaker-block.svg)

## Mengapa Materi Ini Penting
Memahami Breaker Block sangat penting karena dalam trading, tidak semua Order Block akan dihormati oleh harga. Banyak trader pemula yang bingung dan merugi ketika Order Block andalan mereka ditembus begitu saja. Konsep Breaker Block akan mengubah pandangan Anda: sebuah Order Block yang gagal bukanlah sebuah bencana, melainkan sebuah peluang baru yang seringkali menawarkan probabilitas lebih tinggi. Ini adalah cara institusi mengurangi risiko mereka (mitigasi), dan kita bisa menunggangi jejak mereka.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mendefinisikan apa yang dimaksud dengan Breaker Block dalam konteks Smart Money Concepts (SMC).
- Membedakan antara Order Block biasa dan Breaker Block.
- Memahami psikologi di balik pergerakan harga yang membentuk Breaker Block.

## Penjelasan
Pernahkah Anda menandai sebuah Order Block (OB) yang terlihat sangat sempurna, lengkap dengan *Imbalance* (FVG), lalu Anda menempatkan pending order di sana, tapi harga malah menembusnya dengan kencang seolah-olah level Anda tidak ada artinya? Jika ya, jangan berkecil hati. Itulah kenyataan pasar.

Namun, di sinilah letak rahasianya: **Order Block yang gagal tidak menjadi tidak berguna. Order Block yang gagal sering kali berubah peran menjadi Breaker Block.**

Secara definisi, Breaker Block adalah sebuah Order Block lama yang telah gagal menahan harga (ditembus dengan momentum kuat), dan kini berbalik fungsi. Konsep ini mirip dengan prinsip "Support Become Resistance (SBR)" atau "Resistance Become Support (RBS)" dalam analisa teknikal klasik (Price Action). Bedanya, Breaker Block didasarkan pada logika pesanan institusi.

Mari kita bahas analoginya agar lebih mudah dipahami. Bayangkan institusi (Smart Money) menyuntikkan dana besar untuk memanipulasi harga ke atas, menciptakan Order Block bearish. Mereka memiliki posisi jual (sell) di sana. Namun, ternyata tren berbalik lebih kuat, dan harga menembus ke atas Order Block tersebut. Posisi jual mereka kini dalam keadaan merugi (*floating loss*).

Institusi tidak suka merugi. Karena mereka memiliki dana tak terbatas, mereka akan memanipulasi harga untuk turun kembali (*pullback*) ke area Order Block yang tadinya ditembus tersebut. Tujuannya? Untuk menutup (*break even*) posisi jual mereka yang merugi, dan menambah posisi beli (*buy*) yang baru searah dengan tren yang kuat. Saat mereka menutup posisi jual, mereka harus membeli, dan saat mereka membuka posisi beli baru, mereka juga membeli. Hasil akhirnya adalah lonjakan permintaan yang kuat di area tersebut, membuat harga memantul naik.

Itulah mengapa area Order Block yang gagal itu menjadi area pijakan baru yang sangat kuat. Dalam grafik, Breaker Block ditandai dari candle terakhir yang berlawanan sebelum pergerakan impulsif yang kemudian ditembus oleh pergerakan impulsif yang lebih besar lagi ke arah sebaliknya. 

Ingat: Breaker Block yang valid biasanya terbentuk setelah terjadinya perburuan likuiditas (*Liquidity Sweep*) atau *Stop Hunt* di salah satu sisi, lalu harga berbalik dengan keras dan menembus OB yang bertanggung jawab atas perburuan likuiditas tersebut.

## Contoh di Chart
Bayangkan Anda sedang melihat chart GBPUSD di time frame H1. Harga bergerak naik dan membuat *Higher High*, meninggalkan sebuah *Bullish Order Block* di bawah. Namun, tiba-tiba harga turun dengan sangat drastis (membentuk candle marubozu merah panjang) dan menembus tembus *Bullish Order Block* tersebut. 

Kini, *Bullish Order Block* itu telah gagal. Anda tidak membuang kotak yang sudah Anda gambar. Anda memperpanjangnya ke kanan. Ketika harga pelan-pelan merangkak naik kembali (*pullback*) dan menyentuh area kotak tersebut dari bawah, harga langsung ditolak ke bawah dengan keras. Kotak itu kini telah menjadi *Bearish Breaker Block*.

## Kesalahan Umum
- **Menganggap semua Order Block yang gagal adalah Breaker.** Hanya OB yang ditembus dengan pergerakan impulsif kuat (momentum) yang valid menjadi Breaker.
- **Tidak menunggu konfirmasi di time frame kecil.** Trader terburu-buru entry saat harga menyentuh Breaker Block, padahal harga bisa saja terus melaju.
- **Melupakan konteks tren.** Breaker Block bekerja paling baik jika searah dengan tren besar (HTF trend) atau setelah terjadinya *Liquidity Sweep*.

## Latihan
Buka chart aset favorit Anda di time frame H1 atau H4. Carilah area di mana harga sebelumnya menembus sebuah zona konsolidasi atau Support/Resistance kuat, meninggalkan Order Block, lalu OB tersebut ditembus berlawanan arah dengan keras. Tandai OB yang gagal itu, perpanjang ke kanan, dan perhatikan apa yang terjadi saat harga kembali ke sana.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **logika mengapa institusi kembali ke Order Block yang gagal untuk mitigasi risiko**.
"""
    },
    {
        "name": "02-failed-ob-menjadi-breaker.md",
        "title": "Failed OB Menjadi Breaker",
        "svg": "02-failed-ob.svg",
        "content": """# Failed OB Menjadi Breaker

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Failed OB Menjadi Breaker](/images/lessons/level-23/02-failed-ob.svg)

## Mengapa Materi Ini Penting
Dalam trading, fleksibilitas adalah segalanya. Menyadari momen ketika Order Block gagal dan berubah menjadi Breaker adalah titik balik dari trader yang "kaku" menjadi trader yang "adaptif". Menguasai transisi ini memungkinkan Anda untuk membalikkan posisi (*flip bias*) dengan cepat dan logis ketika struktur pasar bergeser (Change of Character / CHoCH), alih-alih terjebak dalam posisi yang salah (dan terus-terusan merugi) karena berharap harga akan berbalik sesuai OB lama Anda.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi ciri-ciri Order Block (OB) yang akan gagal.
- Menganalisis bagaimana dan kapan tepatnya OB bertransformasi menjadi Breaker Block.
- Menggunakan transisi ini untuk mencari peluang *entry* yang selaras dengan momentum baru.

## Penjelasan
Transformasi dari "Failed Order Block" (OB yang gagal) menjadi Breaker Block tidak terjadi secara acak. Ada urutan kronologis atau jejak yang sangat jelas di chart yang bisa kita ikuti. Mari kita bedah anatomi kegagalan ini secara perlahan.

Sebuah Order Block terbentuk ketika institusi menggerakkan harga ke satu arah secara tiba-tiba (biasanya untuk membersihkan likuiditas), sebelum membalikkan harga secara agresif ke arah yang berlawanan. Misalnya, sebuah candle hijau terakhir sebelum pergerakan turun yang tajam adalah *Bearish Order Block*. Trader menandainya dengan harapan bahwa saat harga kembali ke sana, akan terjadi penolakan (rejection) ke bawah.

Namun, apa yang terjadi jika sentimen pasar berubah besar-besaran, atau ada rilis berita makroekonomi yang tak terduga? 

Harga kembali mendekati *Bearish Order Block* tersebut. Bukannya melambat dan membentuk pola penolakan (seperti pinbar), harga justru melaju kencang dengan candle-candle impulsif (momentum panjang) dan menembus OB tersebut ke atas. Tidak ada reaksi sama sekali. OB itu resmi **gagal**.

Proses transisinya adalah sebagai berikut:
1. **Pembentukan Awal**: Ada OB yang valid secara struktural.
2. **Kegagalan (The Failure)**: Harga menembus zona OB dengan momentum penuh (candle besar, seringkali meninggalkan FVG baru di sebaliknya). Penembusan ini menandakan bahwa dominasi pasar telah bergeser; pembeli kini lebih kuat dari penjual institusional yang awalnya menciptakan OB tersebut.
3. **Konfirmasi Breaker**: Setelah ditembus, zona OB tersebut **berubah nama** menjadi Breaker Block. Sifatnya berbalik. OB yang tadinya berfungsi sebagai *resistance* (atap) kini berfungsi sebagai *support* (lantai).
4. **Mitigasi**: Harga kemudian melakukan *pullback* (koreksi) kembali ke dalam zona Breaker tersebut. Inilah momen di mana Smart Money menutup posisi yang terjebak tadi dan menyuntikkan pesanan baru searah tren.
5. **Rejeksi**: Harga menyentuh zona Breaker dan memantul kuat sesuai dengan tren yang baru menembus OB tersebut.

Kunci utama di sini adalah **Momentum Penembusan**. Jika harga menembus OB dengan ragu-ragu (banyak *wick* / sumbu, bentuk candle kecil-kecil), itu mungkin hanya pergerakan manipulasi biasa, dan OB belum sepenuhnya "mati". Tetapi jika harga menembus dengan *Body Candle* yang solid dan besar, OB tersebut sudah sah menjadi Breaker Block.

## Contoh di Chart
Anda memantau XAUUSD (Gold) di M30. Harga sedang tren turun. Anda melihat candle hijau terakhir sebelum pergerakan turun impulsif yang menciptakan *Lower Low*. Anda menandai candle hijau tersebut sebagai *Bearish OB*. 
Beberapa jam kemudian, data NFP dirilis. Harga emas melonjak naik dengan tiga candle biru panjang berturut-turut, menembus lurus *Bearish OB* Anda tanpa rem. *Bearish OB* itu kini adalah *Bullish Breaker Block*. 
Esok harinya, harga emas mulai terkoreksi pelan-pelan ke bawah. Saat menyentuh bagian atas dari kotak *Bearish OB* lama Anda (yang sekarang jadi Breaker), harga langsung mencetak *Bullish Engulfing* dan terbang menciptakan *Higher High* baru.

## Kesalahan Umum
- **Langsung *entry* saat OB gagal ditembus tanpa menunggu *pullback*.** Mengejar harga (FOMO) sering berakhir pada jebakan *fakeout*.
- **Menandai setiap penembusan sebagai Breaker.** Padahal jika penembusan tidak disertai momentum atau FVG yang jelas, harga bisa saja hanya menyapu likuiditas di atas OB.
- **Mengabaikan struktur market keseluruhan.** Breaker akan sangat ampuh jika penembusannya terjadi bersamaan dengan *Change of Character* (CHoCH) pada time frame makro.

## Latihan
Buka chart riwayat (history) pada pair major seperti EURUSD. Cari area di mana harga berbalik arah drastis mengubah tren dari turun menjadi naik (atau sebaliknya). Di area transisi tersebut, cari OB lama yang berhasil "ditabrak" hingga hancur, lalu perhatikan apakah harga kembali ke sana (mitigasi) untuk menjadikannya pijakan tren baru.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **pentingnya Momentum Penembusan (body candle) untuk mengkonfirmasi gagalnya sebuah OB**.
"""
    },
    {
        "name": "03-breaker-bullish.md",
        "title": "Breaker Bullish",
        "svg": "03-breaker-bullish.svg",
        "content": """# Breaker Bullish

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Breaker Bullish](/images/lessons/level-23/03-breaker-bullish.svg)

## Mengapa Materi Ini Penting
Mengenali setup Bullish Breaker yang valid sangat penting untuk menangkap pergerakan naik yang kuat (*bullish rally*) tepat di pangkalnya. Setup ini adalah salah satu pola yang paling andal dalam SMC karena menggabungkan elemen pengambilan likuiditas (Liquidity Sweep/Stop Hunt) dan pergeseran struktur (Change of Character/BOS), menjadikannya amunisi yang sangat ampuh untuk mengincar posisi *buy* dengan risiko rendah namun potensi keuntungan (Reward) yang masif.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi secara visual struktur pembentukan Bullish Breaker Block.
- Menjelaskan langkah demi langkah kriteria validnya Bullish Breaker.
- Menempatkan zona *entry*, *Stop Loss*, dan *Take Profit* pada skenario Bullish Breaker.

## Penjelasan
Bullish Breaker Block adalah skenario spesifik di mana sebuah *Bearish Order Block* yang tadinya bertujuan menekan harga ke bawah, akhirnya digilas oleh kekuatan beli institusi (bullish), dan kemudian berubah fungsi menjadi pijakan untuk harga memantul naik.

Untuk memastikannya sebagai Bullish Breaker probabilitas tinggi, Anda harus melihat sebuah "cerita" yang spesifik pada struktur harga. Cerita ini terdiri dari 4 tahapan krusial:

1. **Harga Membentuk Swing High Terakhir**: Harga membuat suatu titik tertinggi (High), yang kemudian bergerak turun menciptakan *Higher Low* atau konsolidasi sementara.
2. **Manipulasi ke Bawah (Liquidity Sweep)**: Dari titik tersebut, harga tiba-tiba didorong tajam ke bawah hingga menembus *Low* terdekat. Pergerakan turun ini memakan semua *Stop Loss* dari para *buyer* awal (membentuk *Lower Low* tiruan atau *Stop Hunt*). *Bearish Order Block* terbentuk dari candle naik (hijau/putih) terakhir sebelum pergerakan tajam ke bawah ini.
3. **Ekspansi Agresif ke Atas (The Break)**: Setelah likuiditas di bawah disapu bersih, institusi langsung memasukkan pesanan beli (*buy orders*) skala besar. Harga melesat naik dengan sangat kencang, tidak hanya melewati *Bearish OB* tadi, tetapi juga menembus *Swing High* sebelumnya. Penembusan ini disebut *Break of Structure* (BOS) atau *Change of Character* (CHoCH), dan memvalidasi bahwa *Bearish OB* telah gagal total.
4. **Pullback & Entry (Mitigasi)**: Harga yang melesat tadi akan kehabisan bahan bakar dan butuh istirahat. Harga turun perlahan (korektif) menuju ke area *Bearish OB* yang telah gagal tadi. Kotak OB lama ini sekarang diarsir sebagai **Bullish Breaker Block**. Saat harga menyentuh area ini, kita mencari konfirmasi untuk melakukan *entry Buy*.

Mengapa bentuknya selalu seperti ini? Karena pergerakan turun (langkah 2) adalah inisiatif institusi yang "menjual (sell) untuk memanipulasi harga". Ketika harga dipaksa naik kencang (langkah 3), posisi jual institusi sedang merugi. Mereka menarik harga kembali ke Breaker Block (langkah 4) murni untuk menutup posisi jual mereka di titik impas (break-even), sehingga tekanan beli mendominasi dan harga kembali meroket.

**Cara Menggambar Bullish Breaker:**
Temukan candle *Bullish* (Hijau) terakhir sebelum pergerakan manipulatif yang menyapu *Low* (membentuk *Lower Low*). Tarik kotak dari *High* hingga *Low* dari candle tersebut, dan perpanjang ke kanan. Itulah zona Bullish Breaker Anda.

## Contoh di Chart
Pada chart USDJPY M15, Anda melihat harga membuat pola V terbalik.
1. Ada sebuah resistance di atas (Swing High).
2. Tiba-tiba harga drop kencang menembus support terdekat (mencetak Lower Low), didahului oleh candle hijau (Bearish OB). 
3. Satu jam kemudian, harga terbang kencang naik (candle marubozu biru) menembus kembali ke atas, menghancurkan Bearish OB dan mematahkan Swing High. 
4. Anda menyoroti candle hijau sebelum drop tadi dan memanjangkannya ke kanan.
5. Ketika harga kembali turun ke area kotak hijau itu (*pullback*), ia langsung membentur sisi atas kotak, lalu berbalik naik tajam mencetak Higher High baru. Ini adalah *buy* yang sempurna.

## Kesalahan Umum
- **Mengambil Breaker Block yang tidak diawali dengan *Stop Hunt* (Liquidity Sweep) di bawahnya.** Bullish Breaker yang tidak menyapu *Low* sebelumnya rentan ditembus lagi.
- **Memilih candle yang salah.** Bullish Breaker ditarik dari *up-candle* (candle naik) terakhir sebelum pergerakan impulsif turun yang menyapu *Low*.
- **SL yang terlalu sempit.** Terkadang harga masuk sedikit lebih dalam ke zona Breaker. Letakkan SL di bawah zona Breaker dengan sedikit ruang napas (buffer).

## Latihan
Buka chart kripto (misalnya BTCUSD) atau Forex favorit Anda. Temukan sebuah fase di mana pasar turun memakan likuiditas (*Stop Hunt* bawah) lalu berbalik melesat naik dengan keras dan mematahkan struktur ke atas. Tandai candle pembalikan awal, dan lihat apakah harga kembali ke candle tersebut untuk memberikan *entry Buy*.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada **4 tahapan krusial terbentuknya Bullish Breaker, terutama pentingnya fase Manipulasi ke Bawah (Sweep)**.
"""
    },
    {
        "name": "04-breaker-bearish.md",
        "title": "Breaker Bearish",
        "svg": "04-breaker-bearish.svg",
        "content": """# Breaker Bearish

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Breaker Bearish](/images/lessons/level-23/04-breaker-bearish.svg)

## Mengapa Materi Ini Penting
Sama kuatnya dengan saudaranya (Bullish Breaker), Bearish Breaker adalah senjata utama untuk menangkap peluang *Sell* saat tren mulai menunjukkan kelemahan dan beralih arah ke bawah (downtrend). Mengetahui setup ini memungkinkan trader untuk menghindari jebakan beli (bull trap) dan justru menunggangi momentum penjualan institusional ketika Smart Money memutuskan untuk membuang barang dan menekan harga ke bawah.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi secara visual struktur pembentukan Bearish Breaker Block.
- Memahami dinamika "manipulasi ke atas" yang mendahului terciptanya Breaker.
- Menentukan area *Sell* berisiko rendah berdasarkan Bearish Breaker di chart.

## Penjelasan
Bearish Breaker Block pada dasarnya adalah kebalikan dari Bullish Breaker. Ini adalah skenario di mana sebuah *Bullish Order Block* (yang awalnya dimaksudkan untuk melambungkan harga) digagalkan dan dijebol oleh kekuatan *sell* (penjualan) yang masif. Order Block yang gagal tersebut kemudian menjadi area "atap" baru, yang kita manfaatkan sebagai area untuk membuka posisi *Sell*.

Mari kita jabarkan 4 tahapan cerita terbentuknya Bearish Breaker:

1. **Harga Membentuk Swing Low Terakhir**: Harga membuat sebuah pijakan (Low) dan mencoba untuk konsolidasi atau naik perlahan.
2. **Manipulasi ke Atas (Liquidity Sweep)**: Tiba-tiba, harga ditarik ke atas dengan kencang hingga menembus puncak (*High*) terdekat, seolah-olah akan memulai tren naik (bullish) yang kuat. Penembusan ke atas ini memakan semua *Stop Loss* dari para *seller* pemula, alias melakukan perburuan likuiditas (*Stop Hunt* / *Higher High* tiruan). *Bullish Order Block* terbentuk dari candle turun (merah/hitam) terakhir sebelum pergerakan manipulatif naik ini.
3. **Ekspansi Agresif ke Bawah (The Break)**: Setelah likuiditas atas berhasil dikumpulkan, institusi membuang posisi mereka. Harga anjlok dengan sangat deras, menembus ke bawah *Bullish OB* yang baru saja tercipta dan juga menembus lantai (*Swing Low*) sebelumnya (BOS/CHoCH ke bawah). Penembusan keras ini mengonfirmasi bahwa *Bullish OB* tersebut telah mati dan resmi menjadi Breaker.
4. **Pullback & Entry (Mitigasi)**: Pergerakan anjlok yang agresif biasanya akan diikuti oleh tarikan napas (koreksi). Harga akan naik kembali dengan lambat menuju kotak *Bullish OB* yang telah hancur tadi. Area kotak ini sekarang telah bertransformasi menjadi **Bearish Breaker Block**. Ini adalah zona *Sell* emas kita. Institusi mengembalikan harga ke titik ini untuk melepaskan posisi "Buy" mereka (yang mereka gunakan saat manipulasi ke atas) tanpa kerugian. 

**Cara Menggambar Bearish Breaker:**
Cari candle *Bearish* (Merah) terakhir sebelum pergerakan impulsif naik yang menyapu *High* (membentuk *Higher High*). Tarik kotak dari puncak (*High*) hingga dasar (*Low*) candle tersebut, lalu perpanjang kotak itu ke kanan. Saat harga naik dan menyentuh area kotak ini kembali, bersiaplah untuk menekan tombol *Sell*.

Logika di baliknya selalu sama: Institusi mengorbankan sebagian modal untuk menembus *High* (Buy to Sell). Saat mereka menekan harga turun secara agresif, posisi "Buy" awal mereka mengalami *floating loss*. Mereka membiarkan harga naik sesaat untuk mencapai area Breaker agar mereka dapat keluar dari posisi "Buy" tersebut (*break-even*), sambil secara simultan menambah volume *Sell* besar-besaran.

## Contoh di Chart
Pada pair EURUSD di time frame H4, tren terlihat mulai melambat. 
1. Ada sebuah *Support* di bawah (Swing Low). 
2. Harga secara tiba-tiba melonjak naik (membuat candle biru kencang), melewati *Resistance* terdekat (sapuan atas). 
3. Anda melihat candle turun (merah) terakhir sebelum lonjakan tersebut. Ini awalnya adalah *Bullish OB*.
4. Ternyata pada sesi New York, EURUSD hancur berkeping-keping dengan candle merah raksasa, menembus lurus *Bullish OB* dan turun melampaui *Swing Low*. 
5. Anda mengubah kotak *Bullish OB* menjadi *Bearish Breaker Block*.
6. Keesokan harinya, harga menguat secara perlahan kembali ke dalam kotak tersebut. Seketika setelah masuk, harga menolak dengan ekor (*wick*) yang panjang di atas, dan harga pun lanjut terjun lebih dalam ke *Lower Low*.

## Kesalahan Umum
- **Mengambil Breaker yang sudah disentuh berulang kali (sudah termitigasi).** Breaker pertama (*first touch*) adalah yang terkuat dan paling berpeluang berhasil. Sentuhan kedua dan seterusnya semakin berisiko.
- **Mengabaikan Fair Value Gap (FVG).** Bearish Breaker yang berada sejajar atau beririsan dengan *Bearish FVG* memiliki probabilitas jauh lebih tinggi.
- **Tidak sabar menunggu *pullback*.** Membuka posisi *Sell* saat harga baru saja menembus (breakout) seringkali berujung terjebak *pullback* yang panjang.

## Latihan
Temukan skema Bearish Breaker di indeks seperti US30 atau NASDAQ. Carilah area di mana harga terlihat membuat "puncak palsu" (manipulasi atas), kemudian hancur terjun bebas, lalu kembali naik ke titik awal kejatuhan tersebut sebelum akhirnya benar-benar turun ke level terdalam. 

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada **visualisasi siklus: sapuan atas -> anjlok ke bawah -> pullback ke Breaker -> penerusan tren turun**.
"""
    },
    {
        "name": "05-konfirmasi-breaker.md",
        "title": "Konfirmasi Entry di Breaker",
        "svg": "05-konfirmasi.svg",
        "content": """# Konfirmasi Entry di Breaker

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Konfirmasi Entry di Breaker](/images/lessons/level-23/05-konfirmasi.svg)

## Mengapa Materi Ini Penting
Memiliki zona Breaker Block yang tepat hanyalah separuh dari kemenangan. Separuh lainnya adalah mengeksekusi perdagangan (entry) di saat yang paling presisi. Melakukan *entry* membabi-buta hanya karena harga menyentuh zona Breaker (sering disebut *Blind Entry* atau *Limit Order Entry*) mengandung risiko tinggi jika tren sedang sangat impulsif. Belajar cara mendapatkan "konfirmasi" akan menyaring setup yang palsu, mengurangi kerugian (Stop Loss), dan secara dramatis meningkatkan *Win Rate* Anda.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan perbedaan antara *Blind Entry* dan *Confirmation Entry* pada zona Breaker.
- Menggunakan pergeseran struktur harga di *Lower Time Frame* (LTF) sebagai konfirmasi.
- Membaca penolakan candle (Price Action) sebagai konfirmasi tambahan.

## Penjelasan
Sama seperti area *Support/Resistance* atau zona SMC lainnya, Breaker Block bisa saja tidak dihormati oleh harga. Kadang harga terus menembus Breaker seakan-akan area itu tidak pernah ada. Untuk melindungi modal, trader profesional sangat bergantung pada **Konfirmasi Entry**.

Konfirmasi entry adalah tanda-tanda atau sinyal tambahan yang muncul *tepat di dalam* zona Breaker Block untuk memastikan bahwa Smart Money memang benar-benar melakukan mitigasi (bereaksi) di sana.

Ada dua jenis konfirmasi yang paling umum dan ampuh digunakan di Breaker Block:

### 1. Konfirmasi Struktur Multi-Time Frame (LTF CHoCH)
Ini adalah metode paling andal. Logikanya: Jika Breaker Block Anda berada di Time Frame besar (misalnya H1 atau H4), Anda turun ke Time Frame kecil (misalnya M15 atau M5) untuk mencari tanda pembalikan arah begitu harga menyentuh zona Breaker H1 Anda.

**Cara kerjanya (untuk setup Bullish Breaker):**
- Harga H1 sedang turun (pullback) mendekati zona Bullish Breaker H1.
- Anda pindah ke grafik M5. Di M5, pergerakan turun ini terlihat sebagai *downtrend* dengan struktur *Lower High* (LH) dan *Lower Low* (LL).
- Ketika harga M5 masuk ke zona Breaker H1, **jangan langsung beli!** Tunggu.
- Tunggu sampai harga di M5 mematahkan *Lower High* terakhirnya dengan kuat, menciptakan *Higher High* (HH). Ini adalah *Change of Character* (CHoCH) di M5.
- Setelah CHoCH M5 terbentuk, akan ada Order Block M5 atau FVG M5 yang baru tercipta. Anda melakukan *Buy* pada *pullback* di M5 tersebut. 

Metode ini memastikan bahwa momentum turun telah resmi berakhir, dan pembeli sudah kembali memegang kendali *sebelum* Anda masuk pasar.

### 2. Konfirmasi Price Action (Candlestick Rejection)
Bagi yang tidak suka berpindah-pindah Time Frame, Anda bisa menggunakan konfirmasi *Candlestick* di Time Frame yang sama. Anda mencari bukti bahwa zona Breaker memberikan penolakan keras terhadap harga.
- Tunggu candle pertama menyentuh atau masuk ke dalam zona Breaker.
- Perhatikan bagaimana candle tersebut ditutup (*close*). 
- Jika candle membentuk pinbar panjang dengan ekor (wick) tajam menyentuh Breaker dan body kecil, itu adalah tanda rejeksi yang bagus.
- Jika candle selanjutnya membentuk pola *Engulfing* yang searah dengan Breaker, itu adalah konfirmasi Anda untuk masuk di pergantian candle (open candle) berikutnya.

### Penempatan Stop Loss dan Take Profit
- **Stop Loss (SL)**: Dengan konfirmasi LTF, SL dapat diletakkan dengan sangat presisi di bawah *Low* M5 yang baru terbentuk, bukan di bawah zona H1 yang lebar. Ini mengecilkan risiko secara drastis (Tight SL).
- **Take Profit (TP)**: Targetkan likuiditas utama berikutnya (Swing High/Low dari Time Frame besar) atau zona *Supply/Demand* yang belum tersentuh (unmitigated).

## Contoh di Chart
Misalnya Anda memiliki Bearish Breaker di M30 pada pair AUDUSD. Anda membuka chart M3 untuk mencari *entry*.
Di M3, harga merayap naik, membentuk tangga anak tangga ke atas (Higher Highs). Harga lalu masuk ke zona Breaker M30.
Tiba-tiba, di M3 muncul candle merah besar yang menjebol *Higher Low* terakhir di M3. Ini CHoCH M3!
Anda kemudian meletakkan limit *Sell* di OB M3 atau FVG M3 yang baru tercipta dari pergerakan turun tadi. SL Anda hanya 4 pips (di atas puncak baru M3), dan TP Anda adalah 20 pips ke *Low* M30 terdekat. Anda mendapatkan rasio *Risk:Reward* 1:5!

## Kesalahan Umum
- **Turun ke Time Frame yang terlalu kecil.** Jika Breaker Anda di Daily, turun ke M1 akan memberikan terlalu banyak "noise" dan *CHoCH* palsu. Aturan umumnya adalah turun 2-3 tingkat (misal H4 ke M15, atau M15 ke M1).
- **Terlalu lama menunggu konfirmasi sehingga ketinggalan kereta.** Konfirmasi kadang terjadi sangat cepat. Jika tertinggal, jangan dikejar. Tunggu peluang lain.
- **Entry saat *close* candle yang sangat panjang.** Jika konfirmasi (misal Engulfing) sangat panjang, entry langsung akan membuat SL Anda menjadi terlalu besar.

## Latihan
Cobalah teknik ini di akun demo atau simulator *backtest*. Gambar sebuah Breaker di H1. Begitu harga masuk ke kotak Anda, pindah ke M5. Perhatikan apa yang terjadi. Bisakah Anda melihat perubahan struktur (CHoCH) sebelum harga akhirnya memantul sesuai harapan H1?

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada **cara memetakan CHoCH di Lower Time Frame (LTF) untuk mendapatkan entry yang tajam**.
"""
    },
    {
        "name": "06-breaker-block-case-study.md",
        "title": "Breaker Block: Case Study",
        "svg": "06-case-study.svg",
        "content": """# Breaker Block: Case Study

Level: Level 23 — Breaker Block
XP: 10

![Ilustrasi Breaker Block Case Study](/images/lessons/level-23/06-case-study.svg)

## Mengapa Materi Ini Penting
Teori tanpa praktik adalah buta. Mempelajari Breaker Block secara terpisah (potongan-potongan teori) mungkin terasa mudah di atas kertas, tetapi menemukan dan merangkainya di kondisi pasar sebenarnya (live chart) adalah tantangan yang berbeda. Studi kasus (Case Study) ini akan menggabungkan semua pemahaman dari materi 1 hingga 5, mensimulasikan langkah demi langkah bagaimana seorang trader profesional menganalisa, menunggu, dan mengeksekusi setup Breaker Block secara nyata.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menggabungkan elemen Likuiditas, Momentum (BOS/CHoCH), dan Breaker dalam satu analisa utuh.
- Membaca "Narasi Pasar" (Market Narrative) berdasarkan jejak yang ditinggalkan harga.
- Membangun Rencana Perdagangan (Trading Plan) dari awal hingga akhir pada setup Breaker.

## Penjelasan
Mari kita bedah sebuah simulasi perdagangan komprehensif pada aset GBPJPY di Time Frame M15 (dengan konfirmasi di M3). Kita akan mencari setup *Bearish Breaker Block* yang sempurna.

### Langkah 1: Membaca Narasi dan Likuiditas (Context)
Pagi itu (Sesi London), GBPJPY berada dalam tren konsolidasi di rentang tertentu. Anda melihat ada sebuah level resistensi yang sangat rapi di atas, diuji dua kali (Equal Highs). Ini adalah kolam likuiditas (Liquidity Pool) besar; banyak trader *retail* menaruh *Stop Loss* jual mereka di atas sana.

### Langkah 2: Menunggu Manipulasi (The Sweep)
Tiba-tiba, harga bergerak naik dengan cepat dan agresif. Harga menembus rentang konsolidasi dan melewati *Equal Highs* tersebut. Anda *tidak* ikut melakukan posisi *Buy*, karena Anda curiga ini hanyalah *Stop Hunt* (sapuan likuiditas).
Anda perhatikan, tepat sebelum gerakan tajam naik itu, ada satu *candle* turun (merah) terakhir. *Candle* merah ini secara teknis adalah *Bullish Order Block*, karena dari sinilah institusi memompa harga naik untuk menyapu likuiditas.

### Langkah 3: Pergeseran Struktur (The Break)
Dugaan Anda benar. Setelah menyapu *Stop Loss* di atas, harga kehabisan bensin. Tak lama, masuklah tekanan *Sell* besar-besaran. Harga anjlok membentuk *candle* *marubozu* merah yang masif. 
Kejatuhan ini tidak hanya menelan pergerakan naik tadi, tetapi hancur menembus *Bullish Order Block* (candle merah) di bawahnya, dan sukses menciptakan *Lower Low* (BOS ke bawah).
Saat inilah narasi berubah: *Bullish OB* itu resmi gagal dan sah menjadi **Bearish Breaker Block**. Anda segera menggambar kotak pada *candle* merah awal tadi dan memperpanjangnya ke sisi kanan.

### Langkah 4: Menunggu Mitigasi (The Pullback)
Sekarang, Anda masuk ke mode menunggu. Harga sedang berada di bawah, namun mulai terlihat kehilangan momentum turun dan merangkak naik perlahan (membentuk bendera / flag pattern). Anda tenang, karena Anda tahu institusi sedang mengarahkan harga kembali ke Bearish Breaker Anda untuk *break-even* posisi Buy manipulasi mereka.

### Langkah 5: Konfirmasi Entry di LTF
Harga GBPJPY M15 akhirnya menyentuh tepi bawah kotak Bearish Breaker Anda. Anda segera memindahkan layar ke Time Frame M3. 
Di M3, tren naik *pullback* tersebut terlihat membentuk *Higher High*. Anda menunggu *Change of Character* (CHoCH). 
Setelah 15 menit, tiba-tiba harga di M3 patah ke bawah, menjebol *Higher Low* terakhir. Konfirmasi telah muncul! 
Anda memasang Pending Order (Sell Limit) di area *Fair Value Gap* (FVG) kecil di M3 yang baru saja terbentuk dari patahan tadi.

### Langkah 6: Eksekusi dan Manajemen (Trade Management)
Order Anda tersentuh (Triggered).
- **Entry**: Sell di FVG M3 (yang berada *di dalam* Breaker M15).
- **Stop Loss**: Di tempatkan sedikit di atas titik puncak tertinggi manipulasi tadi. Risikonya sangat kecil (misal 10 pips).
- **Take Profit**: Di *Swing Low* harian atau di area *Liquidity Pool* terbawah (misal 50 pips).
Harga kemudian meluncur deras ke bawah tanpa menengok ke belakang, mencapai TP dalam 2 jam. Rasio R:R yang diraih adalah 1:5.

## Kesalahan Umum dalam Eksekusi
- **Tidak ada "Cerita" yang mendahului Breaker.** Menggunakan Breaker yang muncul secara acak di tengah-tengah rentang tanpa adanya sapuan likuiditas (Sweep) sebelumnya sangat berbahaya dan probabilitasnya rendah.
- **Panik saat harga masuk sedikit lebih dalam ke zona Breaker.** Zona Breaker bisa disentuh di ujung bawah, tengah, atau hampir ujung atas. Itulah sebabnya konfirmasi LTF penting, agar tidak panik menahan posisi yang merah.

## Latihan
Ambil satu minggu data historis dari *pair* apa saja. Temukan satu setup Breaker Block (Bullish atau Bearish) yang bekerja sempurna dan satu yang gagal. Tulis di jurnal Anda *kenapa* setup yang satu berhasil (apakah ada Sweep? Apakah momentum tembusnya kuat?) dan *kenapa* setup yang lain gagal.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada **tahapan 6 langkah untuk memastikan proses analisa dilakukan secara sistematis tanpa mengandalkan tebakan**.
"""
    }
]

for item in md_files:
    file_path = os.path.join(md_dir, item["name"])
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(item["content"])

svg_files = [
    {
        "name": "01-breaker-block.svg",
        "content": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style="background-color: #1a1a2e; font-family: sans-serif;">
  <defs>
    <linearGradient id="breakerZone" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff3366" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#ff3366" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  
  <text x="400" y="40" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Apa Itu Breaker Block</text>
  <text x="400" y="65" fill="#8b8c9a" font-size="14" text-anchor="middle">Failed Order Block yang berubah peran menjadi area Reversal</text>

  <!-- Failed OB Zone -->
  <rect x="250" y="200" width="450" height="60" fill="url(#breakerZone)" stroke="#ff3366" stroke-width="2" stroke-dasharray="5,5" rx="4" />
  <text x="475" y="235" fill="#ff3366" font-size="16" font-weight="bold" text-anchor="middle">BEARISH BREAKER BLOCK</text>

  <!-- Market Structure Path -->
  <path d="M 100 350 L 200 250 L 300 300" fill="none" stroke="#8b8c9a" stroke-width="3" />
  
  <!-- OB creation (Bullish push) -->
  <circle cx="300" cy="300" r="5" fill="#00ffaa" />
  <text x="300" y="320" fill="#00ffaa" font-size="12" text-anchor="middle">Bullish OB</text>

  <!-- The Sweep and Failure -->
  <path d="M 300 300 L 400 120 L 500 350" fill="none" stroke="#ffffff" stroke-width="3" />
  <circle cx="400" cy="120" r="5" fill="#ffffff" />
  <text x="400" y="105" fill="#ffffff" font-size="12" text-anchor="middle">Liquidity Sweep / Stop Hunt</text>
  
  <text x="450" y="195" fill="#ff3366" font-size="14" font-weight="bold" transform="rotate(65 450,195)">MOMENTUM BREAK</text>

  <!-- Pullback and Rejection -->
  <path d="M 500 350 L 600 260" fill="none" stroke="#8b8c9a" stroke-width="3" stroke-dasharray="4,4" />
  <text x="560" y="320" fill="#8b8c9a" font-size="12">Pullback (Mitigasi)</text>

  <path d="M 600 260 L 700 380" fill="none" stroke="#ff3366" stroke-width="4" />
  
  <!-- Entry Point -->
  <circle cx="600" cy="260" r="8" fill="#ff3366" stroke="#ffffff" stroke-width="2" />
  <text x="600" y="245" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">SELL ENTRY</text>
</svg>'''
    },
    {
        "name": "02-failed-ob.svg",
        "content": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style="background-color: #1a1a2e; font-family: sans-serif;">
  <defs>
    <linearGradient id="obZone" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00ffaa" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#00ffaa" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="400" y="40" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Transisi: Failed OB menjadi Breaker</text>
  
  <!-- OB Zone -->
  <rect x="150" y="150" width="550" height="50" fill="url(#obZone)" stroke="#00ffaa" stroke-width="2" stroke-dasharray="5,5" rx="4" />
  <text x="300" y="140" fill="#00ffaa" font-size="14" font-weight="bold">Bearish OB (Awalnya Resistance)</text>
  <text x="550" y="140" fill="#00ffaa" font-size="14" font-weight="bold">Kini Menjadi Bullish Breaker (Support)</text>

  <!-- Initial downtrend and OB creation -->
  <path d="M 100 80 L 150 180 L 250 100" fill="none" stroke="#8b8c9a" stroke-width="3" />
  
  <!-- The Failure (Impulsive Break) -->
  <path d="M 250 100 L 350 350 L 450 80" fill="none" stroke="#ffffff" stroke-width="3" />
  
  <line x1="390" y1="200" x2="410" y2="200" stroke="#00ffaa" stroke-width="4" />
  <line x1="385" y1="180" x2="415" y2="180" stroke="#00ffaa" stroke-width="4" />
  <line x1="380" y1="160" x2="420" y2="160" stroke="#00ffaa" stroke-width="4" />
  <line x1="385" y1="140" x2="415" y2="140" stroke="#00ffaa" stroke-width="4" />
  
  <text x="440" y="180" fill="#ffffff" font-size="12" font-weight="bold">MOMENTUM BREAK (Failed OB)</text>
  
  <!-- Pullback / Mitigation -->
  <path d="M 450 80 L 550 150" fill="none" stroke="#8b8c9a" stroke-width="3" stroke-dasharray="4,4" />
  
  <!-- The Bounce -->
  <path d="M 550 150 L 700 60" fill="none" stroke="#00ffaa" stroke-width="4" />
  
  <!-- Entry icon -->
  <circle cx="550" cy="150" r="8" fill="#00ffaa" stroke="#ffffff" stroke-width="2"/>
  <text x="550" y="195" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">BUY ENTRY</text>
  <text x="550" y="215" fill="#8b8c9a" font-size="12" text-anchor="middle">(Institusi Mitigasi Posisi)</text>
</svg>'''
    },
    {
        "name": "03-breaker-bullish.svg",
        "content": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style="background-color: #1a1a2e; font-family: sans-serif;">
  <defs>
    <linearGradient id="bullBreaker" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00ffaa" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#00ffaa" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="400" y="40" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Anatomi Bullish Breaker Block</text>

  <!-- Zone -->
  <rect x="250" y="150" width="450" height="60" fill="url(#bullBreaker)" stroke="#00ffaa" stroke-width="2" rx="4" />
  <text x="475" y="185" fill="#00ffaa" font-size="18" font-weight="bold" text-anchor="middle">BULLISH BREAKER ZONE</text>

  <!-- Structure -->
  <!-- 1. Swing High -->
  <path d="M 100 250 L 200 120 L 300 180" fill="none" stroke="#8b8c9a" stroke-width="3" />
  <text x="200" y="105" fill="#ffffff" font-size="12" text-anchor="middle">Swing High</text>
  <line x1="200" y1="120" x2="450" y2="120" stroke="#8b8c9a" stroke-dasharray="4,4" />

  <!-- 2. Liquidity Sweep -->
  <path d="M 300 180 L 350 350" fill="none" stroke="#ff3366" stroke-width="3" />
  <text x="350" y="375" fill="#ff3366" font-size="14" font-weight="bold" text-anchor="middle">LIQUIDITY SWEEP (Stop Hunt Bawah)</text>

  <!-- 3. Impulsive Breakout (BOS/CHoCH) -->
  <path d="M 350 350 L 500 80" fill="none" stroke="#00ffaa" stroke-width="4" />
  <text x="450" y="100" fill="#00ffaa" font-size="14" font-weight="bold">CHoCH / BOS</text>
  
  <!-- 4. Pullback & Mitigation -->
  <path d="M 500 80 L 600 150" fill="none" stroke="#8b8c9a" stroke-width="3" stroke-dasharray="4,4" />
  
  <!-- 5. Expansion -->
  <path d="M 600 150 L 750 50" fill="none" stroke="#00ffaa" stroke-width="5" />
  
  <circle cx="600" cy="150" r="8" fill="#00ffaa" stroke="#ffffff" stroke-width="2" />
  <text x="600" y="230" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">BUY</text>
</svg>'''
    },
    {
        "name": "04-breaker-bearish.svg",
        "content": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style="background-color: #1a1a2e; font-family: sans-serif;">
  <defs>
    <linearGradient id="bearBreaker" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff3366" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#ff3366" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="400" y="40" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Anatomi Bearish Breaker Block</text>

  <!-- Zone -->
  <rect x="250" y="180" width="450" height="60" fill="url(#bearBreaker)" stroke="#ff3366" stroke-width="2" rx="4" />
  <text x="475" y="215" fill="#ff3366" font-size="18" font-weight="bold" text-anchor="middle">BEARISH BREAKER ZONE</text>

  <!-- Structure -->
  <!-- 1. Swing Low -->
  <path d="M 100 150 L 200 280 L 300 210" fill="none" stroke="#8b8c9a" stroke-width="3" />
  <text x="200" y="305" fill="#ffffff" font-size="12" text-anchor="middle">Swing Low</text>
  <line x1="200" y1="280" x2="450" y2="280" stroke="#8b8c9a" stroke-dasharray="4,4" />

  <!-- 2. Liquidity Sweep -->
  <path d="M 300 210 L 350 50" fill="none" stroke="#00ffaa" stroke-width="3" />
  <text x="350" y="35" fill="#00ffaa" font-size="14" font-weight="bold" text-anchor="middle">LIQUIDITY SWEEP (Stop Hunt Atas)</text>

  <!-- 3. Impulsive Breakout (BOS/CHoCH) -->
  <path d="M 350 50 L 500 320" fill="none" stroke="#ff3366" stroke-width="4" />
  <text x="450" y="310" fill="#ff3366" font-size="14" font-weight="bold">CHoCH / BOS</text>
  
  <!-- 4. Pullback & Mitigation -->
  <path d="M 500 320 L 600 240" fill="none" stroke="#8b8c9a" stroke-width="3" stroke-dasharray="4,4" />
  
  <!-- 5. Expansion -->
  <path d="M 600 240 L 750 350" fill="none" stroke="#ff3366" stroke-width="5" />
  
  <circle cx="600" cy="240" r="8" fill="#ff3366" stroke="#ffffff" stroke-width="2" />
  <text x="600" y="160" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">SELL</text>
</svg>'''
    },
    {
        "name": "05-konfirmasi.svg",
        "content": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style="background-color: #1a1a2e; font-family: sans-serif;">
  <defs>
    <linearGradient id="breaker" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00ffaa" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#00ffaa" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="400" y="40" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle">Konfirmasi Entry Multi-Timeframe</text>
  
  <!-- HTF Breaker Zone -->
  <rect x="50" y="200" width="700" height="150" fill="url(#breaker)" stroke="#00ffaa" stroke-width="2" stroke-dasharray="10,5"/>
  <text x="150" y="225" fill="#00ffaa" font-size="16" font-weight="bold">Bullish Breaker Block H1</text>

  <!-- LTF Price Action -->
  <!-- Downtrend into zone -->
  <path d="M 100 50 L 150 150 L 200 120 L 250 250 L 300 200 L 350 320" fill="none" stroke="#ff3366" stroke-width="3" />
  
  <text x="350" y="340" fill="#ffffff" font-size="12" text-anchor="middle">Lower Low (M5)</text>

  <!-- The CHoCH in LTF -->
  <path d="M 350 320 L 450 150" fill="none" stroke="#00ffaa" stroke-width="4" />
  <line x1="280" y1="200" x2="480" y2="200" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="485" y="205" fill="#ffffff" font-size="14" font-weight="bold">CHoCH M5</text>
  
  <!-- LTF Pullback -->
  <path d="M 450 150 L 550 280" fill="none" stroke="#8b8c9a" stroke-width="3" stroke-dasharray="4,4" />
  
  <!-- New LTF FVG/OB Zone -->
  <rect x="500" y="250" width="100" height="40" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-width="1"/>
  <text x="550" y="275" fill="#ffffff" font-size="12" text-anchor="middle">OB M5</text>

  <!-- Entry and TP -->
  <path d="M 550 280 L 750 50" fill="none" stroke="#00ffaa" stroke-width="5" />
  
  <circle cx="550" cy="280" r="8" fill="#00ffaa" stroke="#ffffff" stroke-width="2"/>
  <text x="550" y="315" fill="#00ffaa" font-size="16" font-weight="bold" text-anchor="middle">SAFE BUY ENTRY</text>
  
  <!-- Stop Loss -->
  <line x1="500" y1="340" x2="600" y2="340" stroke="#ff3366" stroke-width="3"/>
  <text x="550" y="360" fill="#ff3366" font-size="14" font-weight="bold" text-anchor="middle">Tight SL (Di bawah Low M5)</text>
</svg>'''
    },
    {
        "name": "06-case-study.svg",
        "content": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style="background-color: #1a1a2e; font-family: sans-serif;">
  <defs>
    <linearGradient id="csZone" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff3366" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#ff3366" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="400" y="30" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Case Study: Bearish Breaker Setup</text>
  
  <!-- Liquidity Pool (Equal Highs) -->
  <line x1="100" y1="150" x2="350" y2="150" stroke="#00ffaa" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="225" y="140" fill="#00ffaa" font-size="12" text-anchor="middle">$$$ Buy Stops (Retail Resistance) $$$</text>
  
  <!-- Consolidation -->
  <path d="M 50 250 L 100 150 L 150 220 L 200 150 L 250 200" fill="none" stroke="#8b8c9a" stroke-width="2"/>
  
  <!-- The Sweep (Manipulasi) -->
  <path d="M 250 200 L 320 80" fill="none" stroke="#00ffaa" stroke-width="3"/>
  <text x="330" y="70" fill="#00ffaa" font-size="12" font-weight="bold">1. Liquidity Sweep</text>
  
  <!-- The Dump (CHoCH) -->
  <path d="M 320 80 L 400 320" fill="none" stroke="#ff3366" stroke-width="4"/>
  <text x="410" y="300" fill="#ff3366" font-size="12" font-weight="bold">2. Strong BOS/CHoCH</text>
  
  <!-- Bearish Breaker Zone Formation -->
  <rect x="250" y="160" width="400" height="50" fill="url(#csZone)" stroke="#ff3366" stroke-width="2" rx="4"/>
  <text x="450" y="190" fill="#ff3366" font-size="14" font-weight="bold">3. Bearish Breaker M15</text>

  <!-- Pullback -->
  <path d="M 400 320 L 480 260 L 450 240 L 520 160" fill="none" stroke="#8b8c9a" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="530" y="145" fill="#8b8c9a" font-size="12">4. Pullback (Mitigasi)</text>

  <!-- Confirmation and Drop -->
  <circle cx="520" cy="160" r="6" fill="#ff3366" stroke="#ffffff" stroke-width="2"/>
  <path d="M 520 160 L 550 200 L 530 180 L 650 380" fill="none" stroke="#ff3366" stroke-width="5"/>
  
  <text x="590" y="240" fill="#ffffff" font-size="12" font-weight="bold">5. Entry M3 CHoCH</text>
  
  <!-- Target -->
  <line x1="600" y1="380" x2="750" y2="380" stroke="#00ffaa" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="675" y="375" fill="#00ffaa" font-size="14" font-weight="bold" text-anchor="middle">TARGET: TP (1:5 RR)</text>

</svg>'''
    }
]

for item in svg_files:
    file_path = os.path.join(svg_dir, item["name"])
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(item["content"])

print("All files created successfully!")
