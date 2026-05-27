import json
import os

data = [
  {
    "id": "quiz-11",
    "levelId": "level-11",
    "title": "Quiz: Advanced SNR",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-11/01-zone-refinement",
      "level-11/02-reaction-quality",
      "level-11/03-clean-vs-dirty-level",
      "level-11/04-snr-dalam-trend",
      "level-11/05-snr-dalam-range",
      "level-11/06-advanced-snr-case-study"
    ],
    "questions": [
      {
        "text": "Dalam zone refinement, mengapa kita perlu mempersempit area Support atau Resistance?",
        "options": [
          "Agar tidak ada trader lain yang ikut masuk",
          "Untuk menemukan risk-to-reward yang lebih baik",
          "Karena harga pasti akan menyentuh titik yang sangat sempit",
          "Untuk memperbesar peluang terkena stop loss"
        ],
        "correctAnswer": 1,
        "explanation": "Mempersempit zona membantu mengecilkan area stop loss, sehingga rasio risk-to-reward (RR) dari sebuah posisi menjadi lebih optimal."
      },
      {
        "text": "Apa yang menjadi tanda bahwa reaksi di area SNR memiliki 'reaction quality' yang baik?",
        "options": [
          "Harga bergerak lambat dan membuat banyak doji",
          "Harga menembus area lalu kembali dengan sangat pelan",
          "Harga merespon dengan cepat dan membentuk pola candlestick kuat searah tren",
          "Harga berhenti bergerak sama sekali setelah menyentuh area"
        ],
        "correctAnswer": 2,
        "explanation": "Reaction quality yang baik ditandai dengan pergerakan impulsif yang menjauhi area SNR, menunjukkan adanya pesanan institusi besar yang merespon area tersebut."
      },
      {
        "text": "Apa perbedaan utama antara 'clean level' dan 'dirty level' dalam SNR?",
        "options": [
          "Clean level belum pernah dites sebelumnya, sedangkan dirty level sudah diuji berkali-kali",
          "Clean level berada di timeframe besar, dirty level di timeframe kecil",
          "Clean level adalah resistance, dirty level adalah support",
          "Clean level lebih sering ditembus daripada dirty level"
        ],
        "correctAnswer": 0,
        "explanation": "Clean level (atau fresh level) belum disentuh harga sejak terbentuk sehingga biasanya memiliki pesanan tertunda (pending order) yang kuat, berbeda dengan dirty level yang pesanannya sudah mulai terserap."
      },
      {
        "text": "Bagaimana cara terbaik mengidentifikasi SNR yang valid di dalam kondisi trending?",
        "options": [
          "Mencari level SNR yang berlawanan dengan arah tren utama",
          "Fokus pada level yang selaras dengan arah tren utama (misal: support pada uptrend)",
          "Mengabaikan tren dan hanya melihat timeframe 1 menit",
          "Mencari resistance terkuat saat uptrend untuk melakukan counter-trend"
        ],
        "correctAnswer": 1,
        "explanation": "Level SNR yang valid dan berisiko lebih rendah adalah yang searah dengan tren utama, karena mengikuti dominasi pergerakan pasar saat itu."
      },
      {
        "text": "Saat harga berada dalam fase range, mengapa trading di tengah area SNR (middle range) berisiko tinggi?",
        "options": [
          "Karena arah tidak jelas dan likuiditas mudah tersapu ke kedua sisi",
          "Karena pergerakan harga terlalu cepat di area tersebut",
          "Karena broker melarang trading di area middle",
          "Karena area middle range pasti menghasilkan keuntungan"
        ],
        "correctAnswer": 0,
        "explanation": "Middle range atau titik keseimbangan (equilibrium) biasanya memiliki arah pergerakan yang tidak stabil (choppy), sehingga trader rentan terkena jebakan harga di area ini."
      },
      {
        "text": "Dalam studi kasus Advanced SNR, ketika harga menembus resistance kuat tetapi kemudian kembali turun dengan cepat, apa yang terjadi?",
        "options": [
          "Tren sudah berbalik menjadi sangat bullish",
          "Terjadi false breakout yang mengumpulkan likuiditas sebelum turun",
          "Itu adalah setup retest yang tertunda",
          "Pasar akan bergerak sideways dalam jangka panjang"
        ],
        "correctAnswer": 1,
        "explanation": "Penembusan palsu (false breakout/fakeout) sering terjadi pada resistance kuat guna menyapu limit order/stop loss trader breakout sebelum bergerak ke arah yang sebenarnya (turun)."
      }
    ]
  },
  {
    "id": "quiz-12",
    "levelId": "level-12",
    "title": "Quiz: Multi Timeframe Structure",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-12/01-htf-structure",
      "level-12/02-ltf-structure",
      "level-12/03-alignment",
      "level-12/04-conflict-antar-timeframe",
      "level-12/05-mapping-dari-htf-ke-ltf",
      "level-12/06-mtf-structure-case-study"
    ],
    "questions": [
      {
        "text": "Apa fungsi utama menggunakan Higher Timeframe (HTF) structure sebelum melakukan entry di Lower Timeframe (LTF)?",
        "options": [
          "Agar grafik terlihat lebih rapi dan kosong",
          "Menentukan arah tren utama dan menemukan area Point of Interest yang valid",
          "Untuk melakukan entry posisi dengan lot yang lebih besar",
          "Menghilangkan kebutuhan akan indikator teknikal"
        ],
        "correctAnswer": 1,
        "explanation": "HTF berfungsi sebagai peta besar atau kompas yang memberikan gambaran arah tren struktural yang dominan serta mendeteksi area-area kunci yang penting."
      },
      {
        "text": "Bagaimana cara mengkonfirmasi bahwa Lower Timeframe (LTF) structure sudah selaras (aligned) dengan HTF?",
        "options": [
          "Ketika harga di LTF sedang sideways",
          "Ketika warna candlestick HTF dan LTF sama persis",
          "Terjadi Change of Character atau Break of Structure di LTF yang searah dengan HTF",
          "Saat terjadi pergerakan impulsif LTF ke arah yang berlawanan dengan HTF"
        ],
        "correctAnswer": 2,
        "explanation": "Alignment antara LTF dan HTF dikonfirmasi apabila struktur harga di LTF mulai menunjukkan pembalikan/lanjutan (ChoCh/BOS) yang bergerak searah dengan tren dari HTF."
      },
      {
        "text": "Apa yang dimaksud dengan kondisi 'alignment' dalam Multi Timeframe Analysis?",
        "options": [
          "Ketika kedua timeframe memiliki indikator RSI di atas 70",
          "Ketika struktur tren di berbagai timeframe bergerak ke arah yang sama",
          "Ketika trader menyinkronkan jam trading dengan pembukaan pasar London",
          "Ketika timeframe besar dan kecil bergerak berlawanan"
        ],
        "correctAnswer": 1,
        "explanation": "Alignment adalah keselarasan tren. Contohnya HTF sedang tren naik (bullish), dan LTF juga membentuk struktur tren naik (bullish)."
      },
      {
        "text": "Ketika terjadi konflik tren, misalnya HTF sedang Bullish namun LTF sedang Bearish, tindakan apa yang paling bijak?",
        "options": [
          "Menunggu LTF berbalik menjadi Bullish untuk menyelaraskan dengan HTF sebelum entry",
          "Langsung entry Sell mengikuti LTF karena itu pergerakan terbaru",
          "Membuka posisi Buy dan Sell secara bersamaan",
          "Mengabaikan HTF karena sudah kadaluarsa"
        ],
        "correctAnswer": 0,
        "explanation": "Kondisi konflik biasanya menandakan bahwa harga sedang mengalami pullback di HTF. Sebaiknya tunggu hingga LTF menunjukkan konfirmasi pembalikan searah dengan HTF agar probabilitas sukses lebih tinggi."
      },
      {
        "text": "Dalam proses mapping dari HTF ke LTF, langkah apa yang dilakukan di LTF setelah POI (Point of Interest) di HTF teridentifikasi?",
        "options": [
          "Langsung membuka posisi dengan pending order besar",
          "Mencari konfirmasi seperti pergeseran struktur (ChoCh) sebelum entry",
          "Menghapus zona HTF tersebut dari chart",
          "Berpindah ke timeframe 1 minggu (Weekly)"
        ],
        "correctAnswer": 1,
        "explanation": "Setelah area kunci (POI) ditentukan pada HTF, trader akan memperbesar chart (zoom in) ke LTF dan menunggu pola pembalikan atau structure shift sebagai konfirmasi."
      },
      {
        "text": "Berdasarkan studi kasus MTF, mengapa entry yang hanya mengandalkan LTF sering kali gagal?",
        "options": [
          "Karena indikator berjalan lebih lambat di LTF",
          "Karena tidak memperhitungkan tren besar dan area kunci pada HTF",
          "Karena spread di LTF lebih besar",
          "Karena LTF tidak bisa digunakan untuk mengambil profit"
        ],
        "correctAnswer": 1,
        "explanation": "Pergerakan yang terjadi di LTF bisa jadi hanyalah riak-riak kecil dari tren utama di HTF. Jika tidak memperhitungkan tren HTF, trader mudah terjebak dan melawan arah arus pasar secara keseluruhan."
      }
    ]
  },
  {
    "id": "quiz-13",
    "levelId": "level-13",
    "title": "Quiz: Advanced Break and Retest",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-13/01-shallow-retest",
      "level-13/02-deep-retest",
      "level-13/03-failed-retest",
      "level-13/04-retest-dengan-liquidity",
      "level-13/05-retest-dengan-structure-shift",
      "level-13/06-advanced-break-retest-case-study"
    ],
    "questions": [
      {
        "text": "Apa ciri khas dari 'shallow retest' pada area yang baru saja ditembus?",
        "options": [
          "Harga masuk sangat dalam ke zona sebelum breakout",
          "Harga melakukan konsolidasi lama sebelum breakout",
          "Harga hanya memantul tipis di batas luar tanpa masuk dalam ke area breakout",
          "Harga tidak pernah kembali sama sekali"
        ],
        "correctAnswer": 2,
        "explanation": "Shallow retest terjadi saat harga menyentuh sedikit batas awal area breakout dan langsung melanjutkan arah, sering didorong momentum tren yang sangat kuat."
      },
      {
        "text": "Mengapa 'deep retest' sering kali memberikan setup dengan risk-to-reward yang lebih optimal?",
        "options": [
          "Karena stop loss bisa diletakkan sangat jauh dari entry",
          "Karena harga kembali jauh ke area asal breakout, memberikan area stop loss yang lebih sempit",
          "Karena harga pasti tidak akan pernah tembus area tersebut lagi",
          "Karena deep retest terjadi lebih cepat"
        ],
        "correctAnswer": 1,
        "explanation": "Deep retest menekan harga mundur hingga ke awal zona di mana pergerakan dimulai. Ini memberikan entry point yang lebih ideal dan stop loss yang lebih dekat dan aman di bawah zona asli."
      },
      {
        "text": "Apa yang biasanya terjadi ketika setup retest dianggap gagal (failed retest)?",
        "options": [
          "Harga kembali menembus ke dalam struktur sebelumnya dengan momentum kuat",
          "Harga melambat dan memantul di titik entry",
          "Harga langsung menuju Take Profit",
          "Harga membentuk pola doji tanpa arah yang jelas"
        ],
        "correctAnswer": 0,
        "explanation": "Failed retest terjadi saat momentum gagal dipertahankan dan harga malah kembali masuk lebih dalam melewati area yang seharusnya menjadi pijakan baru (support becomes resistance/sebaliknya)."
      },
      {
        "text": "Bagaimana peran liquidity dalam setup retest yang ideal?",
        "options": [
          "Liquidity tidak penting dalam retest",
          "Retest ideal seringkali menyapu/mengambil liquidity di area terdekat (inducement) sebelum melanjutkan tren",
          "Retest ideal selalu menghindari area likuiditas sama sekali",
          "Retest menciptakan likuiditas untuk menjebak semua trader"
        ],
        "correctAnswer": 1,
        "explanation": "Banyak setup retest yang bagus justru berawal dari gerakan palsu mengambil (sweeping) likuiditas dari trader yang terburu-buru, lalu baru bergerak sesuai breakout yang sesungguhnya."
      },
      {
        "text": "Mengapa structure shift di timeframe yang lebih kecil diperlukan saat terjadi retest?",
        "options": [
          "Untuk memprediksi kapan pasar tutup",
          "Hanya sebagai kebiasaan visual",
          "Untuk memastikan bahwa pembeli atau penjual kembali mendominasi area retest tersebut",
          "Agar lebih banyak indikator bisa dipasang"
        ],
        "correctAnswer": 2,
        "explanation": "Structure shift atau Change of Character saat harga menyentuh area retest bertindak sebagai konfirmasi bahwa ada reaksi penolakan dan order block baru sedang diaktifkan."
      },
      {
        "text": "Dalam studi kasus Advanced Break and Retest, apa kesalahan paling umum yang dilakukan trader saat melihat harga kembali ke area breakout?",
        "options": [
          "Menunggu terlalu lama sampai harga mencapai target profit",
          "Entry terlalu cepat menggunakan limit order tanpa menunggu konfirmasi formasi harga atau structure shift",
          "Memasang Take Profit terlalu dekat",
          "Mengganti broker saat harga retest"
        ],
        "correctAnswer": 1,
        "explanation": "Entry buta (blind entry) pada area retest tanpa melihat reaksi harga sangat berisiko karena retest tersebut bisa saja berubah menjadi fakeout atau penembusan palsu."
      }
    ]
  },
  {
    "id": "quiz-14",
    "levelId": "level-14",
    "title": "Quiz: Compression and Expansion",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-14/01-compression-dasar",
      "level-14/02-ciri-price-compression",
      "level-14/03-expansion-candle",
      "level-14/04-trap-sebelum-expansion",
      "level-14/05-compression-di-poi",
      "level-14/06-compression-expansion-case-study"
    ],
    "questions": [
      {
        "text": "Apa yang dimaksud dengan konsep 'compression' dalam pergerakan harga?",
        "options": [
          "Harga yang bergerak sangat cepat tanpa henti",
          "Pergerakan harga yang lambat dan rapat (choppy) yang bertujuan mengumpulkan likuiditas sebelum penembusan",
          "Harga yang hanya bergerak turun",
          "Harga yang membeku akibat penutupan pasar"
        ],
        "correctAnswer": 1,
        "explanation": "Compression adalah area harga yang terkompresi dengan pergerakan zigzag sempit. Proses ini membangun pesanan dan 'menekan pegas' sebelum terjadi pelepasan yang kuat (expansion)."
      },
      {
        "text": "Apa ciri utama dari price compression yang sedang berlangsung di grafik?",
        "options": [
          "Munculnya candlestick marubozu besar secara berurutan",
          "Terdapat celah harga (gap) yang sangat besar di grafik",
          "Munculnya banyak candlestick kecil dengan rentang (range) harga yang saling tumpang tindih (overlapping)",
          "Grafik tidak menunjukkan pergerakan sama sekali"
        ],
        "correctAnswer": 2,
        "explanation": "Ciri khas dari price compression adalah susunan candle yang rapat, kecil-kecil, dan tidak ada momentum yang dominan ke satu arah yang jelas, membentuk semacam wedge/channel sempit."
      },
      {
        "text": "Apa yang biasanya terjadi setelah fase compression (expansion candle)?",
        "options": [
          "Muncul pergerakan harga yang lambat dan tanpa arah",
          "Muncul pergerakan harga yang cepat dan impulsif dengan candlestick besar meninggalkan area",
          "Harga akan tetap berkonsolidasi selamanya",
          "Harga selalu berbalik arah 180 derajat ke zona compression lagi"
        ],
        "correctAnswer": 1,
        "explanation": "Expansion adalah pelepasan energi yang telah dikumpulkan selama fase compression, biasanya ditandai oleh candle berbadan besar dan pergerakan agresif."
      },
      {
        "text": "Bagaimana trader terjebak (trap) sesaat sebelum fase expansion terjadi?",
        "options": [
          "Harga tiba-tiba berhenti bergerak sama sekali",
          "Harga tidak menunjukkan pergerakan yang mencurigakan",
          "Harga membuat pergerakan palsu searah compression untuk memancing trader breakout masuk sebelum berbalik dengan keras",
          "Broker memberikan spread yang sangat kecil"
        ],
        "correctAnswer": 2,
        "explanation": "Sering kali, sebelum expansion yang sesungguhnya terjadi, harga akan membuat 'fakeout' kecil (manipulasi) menembus batas compression guna memicu pesanan trader ritel, lalu bergerak sebaliknya."
      },
      {
        "text": "Apa makna dari terjadinya compression tepat saat harga mendekati Point of Interest (POI)?",
        "options": [
          "POI tersebut pasti tidak akan bekerja dan akan ditembus",
          "Menunjukkan bahwa institusi sedang secara perlahan mengakumulasi pesanan sebelum memicu perbalikan dari POI tersebut",
          "Menandakan bahwa trader ritel sedang mendominasi pergerakan",
          "Bermakna harga akan menembus POI tanpa ada reaksi apapun"
        ],
        "correctAnswer": 1,
        "explanation": "Compression menuju ke sebuah POI sangatlah menguntungkan secara teknikal karena ini menunjukkan bahwa tren yang mendekati POI melemah dan pesanan sedang diatur untuk reversal yang solid."
      },
      {
        "text": "Dalam studi kasus Compression and Expansion, ke mana target harga biasanya diarahkan setelah expansion dimulai?",
        "options": [
          "Ke level fibonacci 0.236 yang acak",
          "Menuju titik tertinggi yang pernah tercapai dalam sejarah pasar",
          "Menuju awal dari zona compression di mana area tersebut merupakan sumber likuiditas yang paling kosong",
          "Hanya bergerak 10 pips lalu berhenti"
        ],
        "correctAnswer": 2,
        "explanation": "Karena compression membersihkan pesanan selama pergerakannya, rute saat expansion berbalik arah sangat bersih dari hambatan sehingga harga dengan mudah memotong ke awal mula jalur compression (origin)."
      }
    ]
  },
  {
    "id": "quiz-15",
    "levelId": "level-15",
    "title": "Quiz: Advanced Fakeout",
    "passingScore": 80,
    "xpReward": 50,
    "remedialLessons": [
      "level-15/01-failed-breakout",
      "level-15/02-liquidity-grab",
      "level-15/03-fakeout-dengan-reversal",
      "level-15/04-fakeout-dengan-continuation",
      "level-15/05-konfirmasi-setelah-fakeout",
      "level-15/06-advanced-fakeout-case-study"
    ],
    "questions": [
      {
        "text": "Apa indikasi utama dari terjadinya 'failed breakout' pada suatu area resistance?",
        "options": [
          "Harga menembus resistance dan melanjutkan kenaikan bertahap",
          "Harga ditutup di atas resistance namun segera ditarik kembali turun dengan cepat ke bawah resistance",
          "Harga tidak pernah menyentuh area resistance sama sekali",
          "Harga berkonsolidasi lama tepat di atas resistance"
        ],
        "correctAnswer": 1,
        "explanation": "Failed breakout, atau penembusan palsu, ditandai oleh pergerakan cepat yang melewati area penting untuk mengambil likuiditas, namun gagal mempertahankan posisinya dan segera ditarik balik."
      },
      {
        "text": "Dalam konteks fakeout, apa yang dimaksud dengan peristiwa 'liquidity grab'?",
        "options": [
          "Institusi memicu stop loss trader ritel di atas resistance/support untuk mengisi pesanan besar mereka sendiri",
          "Proses trader ritel mengambil uang dari institusi",
          "Penyuntikan likuiditas oleh bank sentral ke dalam mata uang",
          "Trader menarik semua dana dari akun broker mereka"
        ],
        "correctAnswer": 0,
        "explanation": "Liquidity grab terjadi saat harga diarahkan untuk melewati support/resistance klasik guna menyentuh stop loss (yang merupakan pesanan pasar) agar institusi besar dapat mengakumulasi posisinya."
      },
      {
        "text": "Bagaimana cara mengenali setup 'fakeout dengan reversal'?",
        "options": [
          "Harga menembus batas lalu melanjutkan perjalanannya",
          "Setelah menyapu likuiditas di batas luar range yang lebar, harga berbalik arah secara agresif mengubah tren",
          "Harga membentuk pola doji berturut-turut",
          "Harga menembus support namun hanya bergerak turun dengan pelan"
        ],
        "correctAnswer": 1,
        "explanation": "Fakeout dengan pembalikan arah (reversal) adalah pergerakan manipulatif pada ujung ekstrem tren. Setelah satu titik penting diburu (sweep), tren secara tajam berganti arah secara berkelanjutan."
      },
      {
        "text": "Apa yang terjadi pada struktur 'fakeout dengan continuation'?",
        "options": [
          "Harga berhenti bergerak setelah fakeout",
          "Harga berbalik arah secara permanen menembus batas tren",
          "Harga melakukan false break berlawanan dengan arah tren (misal saat uptrend harga menembus support sementara) untuk mengumpulkan likuiditas sebelum melanjutkan tren utama",
          "Harga menembus banyak resistance tanpa kembali"
        ],
        "correctAnswer": 2,
        "explanation": "Pada setup ini, fakeout digunakan untuk menggoyangkan trader lemah (shakeout) dalam tren yang ada, menembus sedikit area swing low pada uptrend (misalnya) untuk menjebak penjual, lalu melanjutkan uptrend."
      },
      {
        "text": "Apa konfirmasi terbaik untuk masuk ke pasar setelah terjadi indikasi fakeout?",
        "options": [
          "Masuk seketika saat harga menembus resistance",
          "Menunggu harga menutup kembali ke dalam zona sebelumnya dan memecah struktur internal (BOS/ChoCh) di timeframe lebih kecil",
          "Menggunakan indikator moving average secara acak",
          "Menunggu setidaknya 1 bulan sebelum mengambil tindakan"
        ],
        "correctAnswer": 1,
        "explanation": "Daripada langsung mengambil risiko pada candle sweep, trader profesional menunggu harga kembali masuk (re-enter the range) dan menunjukkan shift struktur untuk mengonfirmasi bahwa fakeout telah terjadi."
      },
      {
        "text": "Berdasarkan studi kasus, mengapa area Support/Resistance yang sangat jelas (terlihat oleh semua orang) sering kali menjadi target fakeout?",
        "options": [
          "Karena tidak ada orang yang memperhatikan area tersebut",
          "Karena area itu jarang disentuh oleh pergerakan harga",
          "Karena area tersebut dijamin tidak akan pernah tertembus",
          "Karena banyak trader menempatkan stop loss mereka persis di area tersebut, sehingga terkumpul likuiditas yang melimpah"
        ],
        "correctAnswer": 3,
        "explanation": "Semakin jelas sebuah level support atau resistance bagi trader eceran, semakin besar pula kumpulan stop loss yang berada tepat di luarnya. Kumpulan pesanan inilah yang menjadi magnet bagi pergerakan fakeout institusional."
      }
    ]
  }
]

with open('/storage/emulated/0/Download/Amy-Trading-Quest/src/data/quiz-parts/part-2.json', 'w') as f:
    json.dump(data, f, indent=2)

