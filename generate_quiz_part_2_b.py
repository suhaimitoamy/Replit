import json

data = [
  {
    "id": "quiz-16",
    "levelId": "level-16",
    "title": "Quiz: Internal and External Liquidity",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-16/01-internal-liquidity",
      "level-16/02-external-liquidity",
      "level-16/03-equal-highs-equal-lows",
      "level-16/04-liquidity-di-dalam-range",
      "level-16/05-target-likuiditas",
      "level-16/06-internal-external-case-study"
    ],
    "questions": [
      {
        "text": "Di mana biasanya 'internal liquidity' dapat ditemukan pada sebuah rentang harga (range)?",
        "options": [
          "Di titik swing high dan swing low utama grafik bulanan",
          "Di swing-swing minor atau pullback (order block) di dalam suatu rentang pergerakan harga besar",
          "Hanya pada penutupan harga pasar Amerika",
          "Di area yang tidak pernah disentuh harga sebelumnya"
        ],
        "correctAnswer": 1,
        "explanation": "Internal liquidity terletak di antara dua titik ekstrem range. Ini meliputi likuiditas di titik-titik retest, inducement minor, atau fair value gap (FVG) yang ada di dalam struktur harga."
      },
      {
        "text": "Apa yang menjadi fokus utama dari 'external liquidity'?",
        "options": [
          "Area konsolidasi kecil di timeframe 1 menit",
          "Level harga ekstrem seperti titik tertinggi utama (major high) dan terendah utama (major low)",
          "Pergerakan harga saat pasar libur",
          "Indikator teknikal RSI pada level 50"
        ],
        "correctAnswer": 1,
        "explanation": "External liquidity berada di luar batas dealing range, yaitu di atas swing high terakhir (Buy Side Liquidity) atau di bawah swing low terakhir (Sell Side Liquidity)."
      },
      {
        "text": "Mengapa area 'equal highs' atau 'equal lows' sangat menarik bagi pergerakan harga?",
        "options": [
          "Karena area tersebut sangat sulit untuk dilewati",
          "Karena mengindikasikan bahwa tidak ada likuiditas sama sekali di sana",
          "Karena area tersebut menyimpan tumpukan stop loss yang sangat padat dari trader ritel (liquidity pool)",
          "Karena menjamin keuntungan 100% jika membuka posisi berlawanan"
        ],
        "correctAnswer": 2,
        "explanation": "Equal highs (double top) atau equal lows (double bottom) sering kali dilihat oleh ritel sebagai batas solid, sehingga menumpuk stop loss. Bagi institusi besar, hal ini adalah ladang likuiditas empuk untuk disapu."
      },
      {
        "text": "Bagaimana harga biasanya berinteraksi dengan liquidity di dalam sebuah range sebelum terjadi penembusan tren besar?",
        "options": [
          "Harga sering menyapu likuiditas dari kedua sisi range, mengambil internal dan kadang mengincar external, sebelum bergerak kuat ke satu arah",
          "Harga akan sepenuhnya mengabaikan likuiditas dan hanya bergerak berdasar volume acak",
          "Harga hanya bergerak di tengah range dan tidak menyentuh liquidity manapun",
          "Harga membentuk pola cup and handle yang sempurna setiap saat"
        ],
        "correctAnswer": 0,
        "explanation": "Dalam masa konsolidasi, pergerakan 'sweep' internal liquidity ke sisi support maupun resistance (liquidity engineering) sering terjadi guna menjebak ritel dan membangun pesanan untuk arah tren sebenarnya."
      },
      {
        "text": "Bagaimana cara menentukan 'target likuiditas' yang paling rasional untuk Take Profit?",
        "options": [
          "Menargetkan harga hingga ke 0",
          "Menebak tingkat harga berdasarkan berita sentimen belaka",
          "Menargetkan area likuiditas eksternal atau swing yang belum tersapu searah dengan narasi tren",
          "Menunggu sampai broker mengirim sinyal penutupan"
        ],
        "correctAnswer": 2,
        "explanation": "Target paling objektif dalam Smart Money Concept adalah level di mana letak uang berada, yakni di Buy Side/Sell Side liquidity (swing high/low terdekat) yang masih bersih belum disentuh."
      },
      {
        "text": "Dalam studi kasus, apa yang biasanya terjadi setelah harga berhasil menyapu external liquidity (misalnya menembus Major High)?",
        "options": [
          "Harga akan selamanya terus naik tanpa batas",
          "Harga kehilangan tujuan sementaranya, dan sering kali berbalik (pullback) mencari internal liquidity untuk mengambil diskon baru",
          "Tren menjadi terhenti total dan tidak ada transaksi",
          "Harga langsung turun seketika ke 0"
        ],
        "correctAnswer": 1,
        "explanation": "Pola umum setelah pembersihan external liquidity adalah reaksi pembalikan (retrace). Harga kembali masuk ke dalam rentang lamanya (re-enter range) dan memburu internal liquidity yang ada."
      }
    ]
  },
  {
    "id": "quiz-17",
    "levelId": "level-17",
    "title": "Quiz: Inducement",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-17/01-apa-itu-inducement",
      "level-17/02-inducement-sebelum-poi",
      "level-17/03-inducement-vs-entry-valid",
      "level-17/04-retail-trap",
      "level-17/05-menunggu-inducement-selesai",
      "level-17/06-inducement-case-study"
    ],
    "questions": [
      {
        "text": "Dalam trading teknikal institusional, apa yang dimaksud dengan 'inducement'?",
        "options": [
          "Konfirmasi entry dengan risiko nol persen",
          "Area jebakan awal yang sengaja dibuat untuk memancing trader ritel masuk pasar terlalu cepat sebelum pergerakan asli terjadi",
          "Indikator moving average yang memberi sinyal buy",
          "Penurunan harga karena krisis global ekonomi"
        ],
        "correctAnswer": 1,
        "explanation": "Inducement bertindak sebagai umpan yang memberikan ilusi bahwa tren sudah berbalik atau zona support/resistance sedang bertahan, padahal fungsinya hanya mengumpulkan stop loss."
      },
      {
        "text": "Mengapa harga sering kali menciptakan pola inducement tepat sebelum menyentuh Point of Interest (POI) sejati?",
        "options": [
          "Karena pembeli sudah kehabisan uang",
          "Karena market maker salah menempatkan harga",
          "Untuk menjebak trader agar memasang stop loss di dekat POI, yang kemudian disapu sebagai bahan bakar likuiditas untuk memantul dari POI utama",
          "Agar harga tidak usah bergerak terlalu jauh ke POI"
        ],
        "correctAnswer": 2,
        "explanation": "Inducement di depan sebuah area supply/demand yang kuat akan membuat ritel masuk order lebih awal. Saat stop loss mereka disapu, institusi menggunakannya untuk memenuhi limit order raksasa mereka di POI sesungguhnya."
      },
      {
        "text": "Apa perbedaan utama antara pergerakan inducement dan entri (entry) yang valid?",
        "options": [
          "Inducement adalah pola valid 100%, entry valid hanya keberuntungan",
          "Inducement terjadi di timeframe harian, entry valid di timeframe 1 menit",
          "Inducement terjadi secara menggantung (tanpa pijakan POI yang solid), sedangkan entry valid bereaksi dari dalam POI setelah jebakan (sweep) itu terjadi",
          "Tidak ada perbedaan sama sekali"
        ],
        "correctAnswer": 2,
        "explanation": "Titik struktural minor yang tidak menyentuh Order Block yang valid (unmitigated) merupakan kandidat kuat sebagai inducement. Entri valid harus berada pada level yang punya struktur asal."
      },
      {
        "text": "Apa yang menyebabkan area inducement sering dijuluki sebagai 'retail trap' (jebakan ritel)?",
        "options": [
          "Hanya broker yang bisa membelinya",
          "Karena secara visual polanya sangat meyakinkan seperti bentuk support/resistance biasa yang diajarkan pada banyak buku dasar teknikal",
          "Karena harganya terlalu mahal bagi investor kecil",
          "Karena ini merupakan zona bebas risiko"
        ],
        "correctAnswer": 1,
        "explanation": "Pola inducement sangat menarik secara psikologis karena terlihat persis seperti sinyal klasik yang menggiurkan bagi trader yang tidak memahami konsep likuiditas."
      },
      {
        "text": "Mengapa seorang trader SMC (Smart Money Concept) yang disiplin akan menunggu hingga inducement 'tersapu' (swept)?",
        "options": [
          "Untuk mendapatkan level harga entri yang lebih optimal dan menghindari terkena sapuan (sweep) stop loss yang tidak perlu",
          "Agar target Take Profit menjadi lebih kecil",
          "Untuk memberi waktu agar bisa pergi minum kopi",
          "Karena mereka takut akan pergerakan agresif"
        ],
        "correctAnswer": 0,
        "explanation": "Menunggu sampai pola jebakan itu 'pecah' (inducement taken) akan menghindarkan trader dari kerugian tak perlu dan meningkatkan drastis peluang reaksi dari zona asal."
      },
      {
        "text": "Dari studi kasus inducement, apa sinyal kuat bahwa sebuah reaksi dari swing hanyalah inducement dan bukan pembalikan sejati?",
        "options": [
          "Muncul banyak berita positif",
          "Swing tersebut terbentuk secara mengambang dan tidak dilandasi oleh zona unmitigated (supply/demand) utama di belakangnya",
          "Reaksi harganya terlalu lama sekitar satu bulan",
          "Terjadi di luar jam bursa Eropa"
        ],
        "correctAnswer": 1,
        "explanation": "Reaksi harga yang melayang sebelum mengenai titik POI utama biasanya ditujukan sekadar untuk mencetak zona likuiditas sementara. Ini bukan landasan bagi pergerakan jangka panjang."
      }
    ]
  },
  {
    "id": "quiz-18",
    "levelId": "level-18",
    "title": "Quiz: Dealing Range",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-18/01-range-high-low",
      "level-18/02-equilibrium",
      "level-18/03-discount-area",
      "level-18/04-premium-area",
      "level-18/05-menghindari-middle-range",
      "level-18/06-dealing-range-case-study"
    ],
    "questions": [
      {
        "text": "Bagaimana cara paling objektif untuk menentukan 'range high' dan 'range low' pada suatu pergerakan (dealing range)?",
        "options": [
          "Mencari titik acak pada grafik",
          "Menarik garis Fibonacci dari titik swing high utama yang memvalidasi struktur ke swing low utama terdekat yang terkonfirmasi (atau sebaliknya)",
          "Menandai setiap sumbu candle tanpa melihat struktur tren",
          "Mengambil angka tertinggi dalam 10 tahun terakhir"
        ],
        "correctAnswer": 1,
        "explanation": "Dealing range ditentukan oleh dorongan harga impulsif terakhir, diukur dari ujung awal dimulainya dorongan ke titik akhir sebelum mulai fase pullback."
      },
      {
        "text": "Apa yang direpresentasikan oleh titik 'equilibrium' dalam sebuah dealing range?",
        "options": [
          "Titik harga termahal dari grafik itu",
          "Area likuiditas kosong tanpa pergerakan",
          "Titik tengah atau level persis 50% yang memisahkan area premium dan area discount",
          "Area di mana harga dijamin tidak akan pernah menyentuhnya"
        ],
        "correctAnswer": 2,
        "explanation": "Equilibrium (EQ) adalah garis keseimbangan, di mana harga tidak dianggap 'mahal' maupun 'murah'. Ini merupakan pembatas tengah rentang."
      },
      {
        "text": "Di mana letak 'discount area' dalam sebuah dealing range dan apa fungsinya secara logika pasar?",
        "options": [
          "Berada di atas level 50%, area ideal untuk melakukan sell",
          "Berada tepat di level 50%, untuk melakukan order beli",
          "Berada di bawah level 50%, merupakan area ideal dan 'murah' bagi institusi untuk mengakumulasi posisi buy",
          "Area di luar dari jangkauan range fibonacci"
        ],
        "correctAnswer": 2,
        "explanation": "Discount adalah area harga miring/diskon. Secara logika logistik, pihak besar akan mencari pembelian (long) sedalam mungkin di zona di bawah ekuilibrium ini."
      },
      {
        "text": "Di mana letak 'premium area' dalam sebuah dealing range dan apa fungsinya secara logika pasar?",
        "options": [
          "Berada di atas level 50%, merupakan area ideal dan 'mahal' untuk mulai mendistribusikan atau mengambil posisi jual (sell)",
          "Berada di area 20% ke bawah untuk melakukan averaging down",
          "Area khusus trader institusi yang berlangganan",
          "Berada persis di 50% dan tidak boleh diperdagangkan"
        ],
        "correctAnswer": 0,
        "explanation": "Premium adalah area harga tinggi. Untuk meraup keuntungan maksimal, penjual (seller) selalu mencari entri short setinggi mungkin pada zona premium."
      },
      {
        "text": "Mengapa trader sering disarankan untuk menghindari open posisi (entry) di 'middle range' atau area equilibrium?",
        "options": [
          "Karena di area ini probabilitas tidak seimbang dan harga dapat sewaktu-waktu tersapu fluktuasi secara acak (choppy)",
          "Karena terlalu cepat mendatangkan untung",
          "Karena middle range biasanya di-blacklist broker",
          "Karena tren selalu berhenti di area tersebut"
        ],
        "correctAnswer": 0,
        "explanation": "Equilibrium adalah medan perang harga di mana probabilitas pembalikan tidak cukup tinggi. Risk-to-reward-nya pun tidak maksimal jika entry tepat di tengah."
      },
      {
        "text": "Dalam studi kasus Dealing Range, apa syarat utama agar setup buy di area discount memiliki akurasi atau probabilitas yang tinggi?",
        "options": [
          "Hanya jika discount area merupakan level terendah harian",
          "Ketika harga tidak membentuk indikator RSI overbought",
          "Terdapat area Order Block atau Point of Interest yang belum termitigasi (unmitigated) dan sejalan dengan area discount tersebut",
          "Jika semua institusi sepakat menjual pada saat bersamaan"
        ],
        "correctAnswer": 2,
        "explanation": "Memadukan alat pengukur Premium/Discount (misal Fib) dengan blok struktur (seperti FVG atau OB) memberikan pertemuan (confluence) sinyal bahwa level tersebut sangat valid."
      }
    ]
  },
  {
    "id": "quiz-19",
    "levelId": "level-19",
    "title": "Quiz: Premium Discount",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-19/01-konsep-premium-discount",
      "level-19/02-buy-di-discount",
      "level-19/03-sell-di-premium",
      "level-19/04-kesalahan-entry-di-equilibrium",
      "level-19/05-premium-discount-dengan-poi",
      "level-19/06-premium-discount-case-study"
    ],
    "questions": [
      {
        "text": "Apa inti pokok dari penggunaan konsep Premium dan Discount dalam strategi trading institusional?",
        "options": [
          "Mengurangi biaya swap",
          "Membeli aset pada nilai yang lebih murah (di bawah nilai tengah) dan menjualnya pada nilai yang lebih mahal (di atas nilai tengah)",
          "Menjual dan membeli aset secara bersamaan di harga berapapun",
          "Menghindari analisa candlestick sepenuhnya"
        ],
        "correctAnswer": 1,
        "explanation": "Inti konsep ini persis layaknya bisnis komersial konvensional. Pedagang pintar selalu mencari barang kulakan semurah mungkin (discount) dan menjualnya semahal mungkin (premium)."
      },
      {
        "text": "Mengapa melakukan eksekusi 'buy di discount' secara matematis dan teknikal lebih menguntungkan?",
        "options": [
          "Karena harga sudah mundur cukup dalam (pullback), sehingga jarak stop loss lebih kecil dan jarak potensi keuntungan jauh lebih luas",
          "Karena harganya tidak pernah naik lagi",
          "Karena broker memberikan komisi tambahan",
          "Karena order buy tidak pernah salah di discount"
        ],
        "correctAnswer": 0,
        "explanation": "Membeli di harga diskon memberikan ruang yang sangat luas menuju area premium, sehingga Risk to Reward dari posisi itu sangat optimal."
      },
      {
        "text": "Mengapa strategi 'sell di premium' sangat disarankan dalam kondisi tren turun (downtrend)?",
        "options": [
          "Memberikan titik jual dengan posisi tertinggi sebelum impuls turun yang sebenarnya berlanjut",
          "Membuat trader merasa senang",
          "Supaya arah tren segera berbalik arah ke atas",
          "Agar stop loss dapat diletakkan di bawah titik terendah"
        ],
        "correctAnswer": 0,
        "explanation": "Pada downtrend yang sehat, pullback akan naik memburu area premium sebelum meneruskan keruntuhannya, memberikan entri ideal bagi para short-seller."
      },
      {
        "text": "Apa kesalahan terbesar yang sering dilakukan trader pemula terkait level equilibrium?",
        "options": [
          "Tidak mengerti cara menghitungnya",
          "Menarik garis Fib dengan warna gelap",
          "Mengeksekusi order buy atau sell tepat di garis tengah (50%) membabi-buta tanpa melihat konfirmasi lanjutan atau titik POI",
          "Hanya trading di area 50% untuk menang banyak"
        ],
        "correctAnswer": 2,
        "explanation": "Garis tengah 50% (EQ) sering kali bukanlah batas padat untuk pembalikan. Harga bisa dengan mudah tembus hingga masuk area premium/discount murni."
      },
      {
        "text": "Bagaimana cara terbaik memadukan indikasi area Premium/Discount dengan Point of Interest (POI) seperti Order Block?",
        "options": [
          "Mengambil order block mana saja asal di dalam range",
          "Memilih secara ketat: POI Sell harus berada di zona Premium, dan POI Buy harus berada di zona Discount",
          "Melakukan sell saat menyentuh POI di discount",
          "Mengabaikan POI ketika area premium/discount terlihat jelas"
        ],
        "correctAnswer": 1,
        "explanation": "Jika Anda sedang mencari setup Buy, abaikan saja Order Block yang terletak di Premium karena rawan menjadi jebakan (inducement), dan pilihlah yang berada jauh di dalam Discount."
      },
      {
        "text": "Berdasarkan studi kasus, jika harga menembus POI di area discount tanpa menunjukkan reaksi apalagi rejection, apa yang sebaiknya diwaspadai?",
        "options": [
          "Harga pasti akan melonjak tajam kapanpun juga",
          "Trader harus melipatgandakan ukuran posisi (martingale)",
          "Tren mungkin akan berlanjut ke bawah dan menyapu likuiditas di bawah titik range low (Change of Character besar)",
          "Itu menandakan pasar akan tutup esok hari"
        ],
        "correctAnswer": 2,
        "explanation": "Kegagalan menahan harga di area Discount terendah menandakan bahwa pesanan beli institusional (demand) telah kosong dan tekanan jual terlalu mendominasi tren."
      }
    ]
  },
  {
    "id": "quiz-20",
    "levelId": "level-20",
    "title": "Quiz: Liquidity Narrative",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-20/01-narasi-likuiditas",
      "level-20/02-where-price-wants-to-go",
      "level-20/03-liquidity-objective",
      "level-20/04-sweep-to-delivery",
      "level-20/05-narasi-bullish-bearish",
      "level-20/06-liquidity-narrative-case-study"
    ],
    "questions": [
      {
        "text": "Apa esensi dari memahami 'narasi likuiditas' (liquidity narrative) dalam menganalisis pergerakan pasar?",
        "options": [
          "Kemampuan untuk melihat indikator teknis bekerja dengan presisi",
          "Keahlian membaca ke arah mana algoritme besar kemungkinan akan membawa harga berikutnya demi memburu kumpulan likuiditas",
          "Narasi cerita berita ekonomi di TV",
          "Pemahaman tentang pola head and shoulders"
        ],
        "correctAnswer": 1,
        "explanation": "Pasar didorong oleh pencarian akan likuiditas. Narasi likuiditas adalah kemampuan trader memahami di mana 'target uang' itu berada (objektif pasar) secara keseluruhan."
      },
      {
        "text": "Dalam konsep 'where price wants to go' (ke mana harga akan menuju), ke arah mana algoritme harga secara alami akan ditarik layaknya magnet?",
        "options": [
          "Ke area harga tengah (equilibrium) lalu diam",
          "Ke area dengan volatilitas nol",
          "Ke area-area tak terlindungi yang menyimpan tumpukan likuiditas masif, seperti old highs (tertinggi masa lalu) atau old lows (terendah masa lalu)",
          "Menuju indikator bollinger bands bagian bawah saja"
        ],
        "correctAnswer": 2,
        "explanation": "Old highs dan old lows adalah kumpulan order Stop Loss dan Buy/Sell Stop skala raksasa. Market maker harus menuju level-level tersebut untuk menyelesaikan pesanan mereka."
      },
      {
        "text": "Apa fungsi paling krusial dari menentukan 'liquidity objective' pada grafik dengan timeframe lebih besar?",
        "options": [
          "Sebagai panduan objektif dalam menentukan arah tren mingguan dan memastikan arah target Take Profit yang logis",
          "Sebagai area untuk meletakkan stop loss sesempit mungkin",
          "Supaya layar terlihat penuh corat-coret analisis",
          "Untuk menentukan lot trading"
        ],
        "correctAnswer": 0,
        "explanation": "Mengetahui objektif likuiditas besar (HTF Liquidity Target) ibarat memiliki kompas. Trader tidak akan kehilangan arah walau di timeframe kecil harga bergerak acak (noise)."
      },
      {
        "text": "Apa makna operasional dari siklus institusional 'sweep to delivery' (menyapu lalu mengirim)?",
        "options": [
          "Pihak ritel mengambil uang institusi dengan cepat",
          "Harga diam di satu rentang kecil selama berhari-hari",
          "Harga terlebih dulu menyapu (sweep) likuiditas manipulatif di satu sisi untuk mendapat bahan bakar bergerak kuat (delivery) menuju target likuiditas sejatinya di sisi seberang",
          "Menyapu bersih modal trader dalam satu klik"
        ],
        "correctAnswer": 2,
        "explanation": "Ini adalah inti mesin pergerakan pasar (Delivery Engine). Pasar menyapu sisi palsu terlebih dahulu untuk memancing orang salah masuk, lalu meledak mendeliver harga ke target utama (Draw on Liquidity)."
      },
      {
        "text": "Bagaimana narasi likuiditas membantu mengonfirmasi bahwa kondisi makro pasar sedang sangat Bullish (naik)?",
        "options": [
          "Harga tidak pernah menyentuh support",
          "Harga secara konsisten terus menghargai/merespons area discount (bullish POI) tanpa menjebol low utama, lalu selalu memburu dan memecah tumpukan premium liquidity (highs)",
          "Harga selalu mengambil sell side liquidity dan tidak berbalik",
          "Ketika semua indikator teknikal menunjuk ke atas"
        ],
        "correctAnswer": 1,
        "explanation": "Ciri khas tren yang dikendalikan oleh institusi secara bullish adalah menghargai area discount (sebagai tempat akumuasi) dan dengan rakus menargetkan level tinggi lama (buy stop liquidity)."
      },
      {
        "text": "Dalam studi kasus Liquidity Narrative, apa langkah krusial setelah harga akhirnya mencapai titik tujuan atau target liquidity objective utamanya?",
        "options": [
          "Tetap menahan posisi buy meskipun target tercapai",
          "Berpindah broker seketika",
          "Menghentikan open posisi searah dan menunggu struktur baru, karena saat likuiditas utama tercapai, harga sangat rentan berbalik tajam (major reversal)",
          "Menambah posisi searah lebih banyak"
        ],
        "correctAnswer": 2,
        "explanation": "Ketika Draw on Liquidity akhirnya dieksekusi, bahan bakar narasi tersebut tuntas. Ini sering menjadi momentum perubahan tren (reversal) signifikan sehingga trader pantang rakus melanjutkannya."
      }
    ]
  }
]

# Read existing data
with open('/storage/emulated/0/Download/Amy-Trading-Quest/src/data/quiz-parts/part-2.json', 'r') as f:
    existing_data = json.load(f)

# Extend
existing_data.extend(data)

# Write back
with open('/storage/emulated/0/Download/Amy-Trading-Quest/src/data/quiz-parts/part-2.json', 'w') as f:
    json.dump(existing_data, f, indent=2)

