import fs from 'fs';
import path from 'path';

const quizData = [
  {
    id: "quiz-1",
    levelId: "level-1",
    title: "Quiz Level 1 - Dasar Trading",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-01/01-trading-itu-apa", "level-01/05-risiko-dasar"],
    questions: [
      { type: "multiple_choice", question: "Apa tujuan utama dari trading?", options: ["Tebak-tebakan harga", "Cepat kaya dalam semalam", "Mendapat untung dari selisih harga dengan probabilitas dan risiko", "Investasi jangka panjang untuk masa pensiun"], correctAnswer: 2, explanation: "Trading adalah probabilitas dan manajemen risiko, bukan tebak-tebakan." },
      { type: "multiple_choice", question: "Candle hijau menunjukkan...", options: ["Harga penutupan lebih rendah dari pembukaan", "Harga penutupan lebih tinggi dari pembukaan", "Pasar sedang sideways", "Banyak berita buruk"], correctAnswer: 1, explanation: "Candle hijau (bullish) berarti harga penutupan (close) di atas harga pembukaan (open)." },
      { type: "multiple_choice", question: "Di mana sebaiknya kita mencari peluang Buy?", options: ["Di atas Resistance", "Di area Support", "Di tengah-tengah tren turun", "Saat harga sedang diam"], correctAnswer: 1, explanation: "Support berfungsi sebagai lantai, sering menjadi area pantulan naik (demand)." },
      { type: "true_false", question: "Stop Loss tidak perlu digunakan jika kita sudah yakin arah pasar.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Stop Loss WAJIB digunakan karena tidak ada kepastian 100% di market." }
    ]
  },
  {
    id: "quiz-2",
    levelId: "level-2",
    title: "Quiz Level 2 - Candlestick",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-02/01-candle-bullish-bearish", "level-02/02-candle-dominan-lemah"],
    questions: [
      { type: "multiple_choice", question: "Candle dengan body besar tanpa sumbu menunjukkan...", options: ["Keraguan", "Momentum yang sangat kuat", "Pembalikan arah", "Kelemahan tren"], correctAnswer: 1, explanation: "Body besar menunjukkan satu pihak (buyer/seller) mendominasi sepenuhnya." },
      { type: "multiple_choice", question: "Doji (candle dengan body sangat tipis) biasanya mengindikasikan...", options: ["Penerusan tren kuat", "Momentum tinggi", "Keraguan atau keseimbangan buyer dan seller", "Waktunya full margin"], correctAnswer: 2, explanation: "Doji berarti harga open dan close hampir sama, tanda keraguan pasar." },
      { type: "true_false", question: "Kita boleh langsung Sell jika melihat 1 candle merah besar saat Uptrend kuat.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Satu candle merah tidak cukup mengubah struktur Uptrend besar." },
      { type: "multiple_choice", question: "Rombongan candle kecil-kecil setelah candle besar menunjukkan...", options: ["Momentum melemah / perlambatan", "Momentum semakin kuat", "Akan terjadi breakout besar besok", "Pasar sedang error"], correctAnswer: 0, explanation: "Candle kecil-kecil menandakan hilangnya momentum atau masuk fase istirahat." }
    ]
  },
  {
    id: "quiz-3",
    levelId: "level-3",
    title: "Quiz Level 3 - Support & Resistance",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-03/01-support-dasar", "level-03/03-area-snr-valid"],
    questions: [
      { type: "multiple_choice", question: "Apa definisi Resistance yang tepat?", options: ["Batas harga yang sulit ditembus ke bawah", "Batas harga yang sering gagal ditembus ke atas", "Harga rata-rata harian", "Garis tren yang miring"], correctAnswer: 1, explanation: "Resistance adalah 'atap' (Supply) di mana harga sering berbalik turun." },
      { type: "true_false", question: "Support dan Resistance adalah satu titik harga yang pasti (misal tepat di 2000.00).", options: ["Benar", "Salah"], correctAnswer: false, explanation: "SNR adalah ZONA/AREA, bukan satu titik harga pasti." },
      { type: "multiple_choice", question: "Apa itu Support Become Resistance (SBR)?", options: ["Support yang memantulkan harga naik", "Resistance yang menjebol harga atas", "Area Support yang sudah ditembus ke bawah dan kini menjadi batas atap", "Garis support yang salah tarik"], correctAnswer: 2, explanation: "Saat lantai (support) jebol, biasanya ia berubah fungsi menjadi atap (resistance)." },
      { type: "multiple_choice", question: "Kesalahan paling umum dalam menarik SNR adalah...", options: ["Terlalu fokus pada H4", "Hanya menandai swing yang jelas", "Menarik garis di setiap lekukan harga membuat chart pusing", "Mewarnai kotak area SNR"], correctAnswer: 2, explanation: "Hanya tandai area mayor yang penting agar chart tetap bersih." }
    ]
  },
  {
    id: "quiz-4",
    levelId: "level-4",
    title: "Quiz Level 4 - Breakout",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-04/01-breakout-dasar", "level-04/03-break-and-retest"],
    questions: [
      { type: "multiple_choice", question: "Breakout dianggap valid ketika...", options: ["Sumbu (wick) melewati resistance", "Candle ditutup (close) melewati garis SNR", "Harga bergerak sedikit melewati garis", "Terdapat banyak candle doji"], correctAnswer: 1, explanation: "Breakout valid dinilai dari posisi candle close, bukan sekadar sumbu (wick)." },
      { type: "multiple_choice", question: "Apa itu Fake Breakout?", options: ["Breakout yang sukses naik tinggi", "Harga turun lalu naik lagi", "Harga menembus SNR namun dengan cepat berbalik dan close di dalam zona", "Kesalahan broker"], correctAnswer: 2, explanation: "Fake breakout (jebakan) terjadi saat harga hanya lewat sebentar (meninggalkan wick) lalu putar balik." },
      { type: "multiple_choice", question: "Mengapa strategi Break & Retest lebih aman?", options: ["Pasti 100% win", "Memberikan konfirmasi bahwa batas yang ditembus kini menjadi tumpuan baru", "Bisa menggunakan lot lebih besar", "Karena tidak butuh Stop Loss"], correctAnswer: 1, explanation: "Retest menguji ulang area yang ditembus. Jika memantul sehat, probabilitas lanjut lebih tinggi." },
      { type: "true_false", question: "Retest dengan candle besar dan cepat (momentum kuat) adalah ciri retest yang sehat.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Retest sehat ditandai dengan candle kecil/momentum melemah. Candle besar menandakan breakout berpeluang palsu (kembali jebol)." }
    ]
  },
  {
    id: "quiz-5",
    levelId: "level-5",
    title: "Quiz Level 5 - Market Structure",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-05/01-market-structure", "level-05/03-bos-dasar", "level-05/04-choch-dasar"],
    questions: [
      { type: "multiple_choice", question: "Syarat utama Uptrend yang valid adalah terbentuknya...", options: ["Equal High", "Lower High dan Lower Low", "Higher High dan Higher Low", "Breakout terus menerus"], correctAnswer: 2, explanation: "Uptrend sehat selalu menciptakan puncak (HH) dan lembah (HL) yang makin tinggi." },
      { type: "multiple_choice", question: "Break of Structure (BOS) dalam kondisi Uptrend terjadi saat...", options: ["Harga menembus Higher Low", "Harga bergerak sideways", "Harga menembus Higher High sebelumnya", "Harga menyentuh Resistance"], correctAnswer: 2, explanation: "BOS mengonfirmasi bahwa tren masih kuat berlanjut dengan menembus puncak terakhir." },
      { type: "multiple_choice", question: "Change of Character (CHoCH) adalah pertanda...", options: ["Penerusan arah", "Pembalikan arah awal (Reversal)", "Pasar sideways panjang", "Konsolidasi harga"], correctAnswer: 1, explanation: "CHoCH (misal HL ditembus turun) adalah peringatan pertama bahwa tren mungkin berubah." },
      { type: "true_false", question: "Selama Higher Low (HL) belum tertembus, kita sebaiknya fokus mencari peluang Buy.", options: ["Benar", "Salah"], correctAnswer: true, explanation: "Betul! Jangan melawan trend (trend is your friend) sampai struktur rusak." }
    ]
  },
  {
    id: "quiz-6",
    levelId: "level-6",
    title: "Quiz Level 6 - Liquidity",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-06/01-liquidity-dasar", "level-06/03-sweep"],
    questions: [
      { type: "multiple_choice", question: "Apa itu Liquidity (likuiditas) dalam konsep Smart Money?", options: ["Uang tunai di bank", "Area berkumpulnya order Stop Loss retail trader", "Kecepatan internet trading", "Spread dari broker"], correctAnswer: 1, explanation: "Likuiditas adalah pool (kumpulan) uang, terutama Stop Loss, yang dimanfaatkan institusi untuk memicu order besar." },
      { type: "multiple_choice", question: "Equal Highs (EQH) atau dua puncak yang sama rata, bagi institusi berfungsi sebagai...", options: ["Tembok besi tak tertembus", "Target likuiditas untuk disapu", "Area Entry Buy", "Tanda Uptrend kuat"], correctAnswer: 1, explanation: "Puncak kembar sangat menggiurkan untuk dijebol sesaat (sweep) karena banyak Stop Loss seller di atasnya." },
      { type: "multiple_choice", question: "Apa beda Breakout asli dengan Sweep Likuiditas?", options: ["Breakout butuh waktu lama", "Sweep dilakukan oleh retail", "Sweep biasanya hanya menembus dengan wick lalu close berbalik arah", "Breakout selalu untung"], correctAnswer: 2, explanation: "Sweep adalah sapuan kilat untuk menjemput SL sebelum harga berbalik ke arah sebaliknya." },
      { type: "true_false", question: "Sebaiknya kita meletakkan Stop Loss pas persis di garis support yang rapi.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Support yang terlalu rapi adalah incaran utama Stop Hunt. Berikan ruang (buffer) untuk SL Anda." }
    ]
  },
  {
    id: "quiz-7",
    levelId: "level-7",
    title: "Quiz Level 7 - Risk Management",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-07/01-risk-management", "level-07/02-sl-tp-rr", "level-07/04-overtrade-dan-layering"],
    questions: [
      { type: "multiple_choice", question: "Berapa risiko maksimal ideal per trade untuk menjaga psikologi?", options: ["10-20% dari modal", "1-2% dari modal", "50% dari modal", "100% all in"], correctAnswer: 1, explanation: "Risk 1-2% memastikan Anda bisa bertahan meski mengalami kekalahan beruntun (losing streak)." },
      { type: "multiple_choice", question: "Apa makna dari Risk to Reward (RR) 1:2?", options: ["Risiko rugi $2, untung $1", "Risiko rugi $1, untung $2", "Win rate 50%", "Menang 1 kali, kalah 2 kali"], correctAnswer: 1, explanation: "RR 1:2 berarti target keuntungan Anda dua kali lipat lebih besar dari risiko kerugian." },
      { type: "true_false", question: "Lot size (ukuran posisi) harus diperbesar jika jarak Stop Loss kita semakin lebar.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Jika SL lebar, Lot harus DIPERKECIL agar nominal risiko ($) tetap sama (misal $10)." },
      { type: "multiple_choice", question: "Membuka banyak posisi saat sedang rugi besar berharap harga berbalik disebut...", options: ["Averaging / Layering", "Diversifikasi", "Hedging pintar", "Smart Money"], correctAnswer: 0, explanation: "Averaging/layering posisi saat rugi adalah jalan tercepat menuju Margin Call (kebangkrutan)." }
    ]
  },
  {
    id: "quiz-8",
    levelId: "level-8",
    title: "Quiz Level 8 - Entry Plan",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-08/01-entry-plan", "level-08/02-invalidasi"],
    questions: [
      { type: "multiple_choice", question: "Hal pertama yang harus ditentukan sebelum mencari target Profit (TP) adalah...", options: ["Membeli indikator baru", "Menghitung berapa banyak uang yang bisa didapat", "Menentukan level Invalidasi (Stop Loss)", "Menambah saldo akun"], correctAnswer: 2, explanation: "Perencanaan yang benar dimulai dari memikirkan risiko (kapan plan ini gagal), bukan keuntungan." },
      { type: "multiple_choice", question: "Point of Interest (POI) berfungsi untuk...", options: ["Tempat open posisi acak", "Zona spesifik untuk menunggu harga datang", "Titik stop loss pasti", "Alat ukur indikator RSI"], correctAnswer: 1, explanation: "POI (seperti OB atau Demand) adalah zona sabar tempat kita menunggu setup yang ideal." },
      { type: "multiple_choice", question: "Mengapa kita butuh Checklist Entry?", options: ["Agar terlihat keren", "Mencegah entry impulsif karena emosi dan memastikan plan berjalan objektif", "Untuk memprediksi masa depan 100%", "Disuruh mentor"], correctAnswer: 1, explanation: "Checklist menyaring entry buruk dan memaksa kita disiplin pada SOP trading." },
      { type: "true_false", question: "Jika harga lari sangat kencang meninggalkan POI kita, kita harus segera mengejar (Buy/Sell) agar tidak ketinggalan.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Mengejar harga (FOMO) merusak Risk to Reward dan menaruh Anda di posisi terburuk." }
    ]
  },
  {
    id: "quiz-9",
    levelId: "level-9",
    title: "Quiz Level 9 - Smart Money Concepts",
    passingScore: 80,
    xpReward: 50,
    remedialLessons: ["level-09/02-order-block", "level-09/03-fvg", "level-09/04-displacement"],
    questions: [
      { type: "multiple_choice", question: "Order Block (OB) yang valid biasanya menyebabkan...", options: ["Pasar sideways berjam-jam", "Candle doji", "Break of Structure (BOS) dengan momentum kuat", "Indikator RSI menunjuk 50"], correctAnswer: 2, explanation: "OB yang bagus (memiliki order institusi besar) akan langsung mendisplace harga dan menjebol struktur (BOS)." },
      { type: "multiple_choice", question: "Fair Value Gap (FVG) atau Imbalance adalah...", options: ["Kesenjangan harga karena kurang likuiditas institusi", "Celah antara sumbu candle 1 dan candle 3 yang belum terisi", "Spread tinggi dari broker", "Perbedaan sesi trading"], correctAnswer: 1, explanation: "FVG adalah ketidakseimbangan cepat dimana hanya ada 1 pihak (misal buyer murni) di area tersebut." },
      { type: "multiple_choice", question: "Mengapa sesi trading (Asia/London/NY) penting dalam ICT?", options: ["Karena beda jam tayang berita", "Karena setiap sesi punya karakteristik likuiditas dan tren yang berbeda", "Karena broker buka tutup", "Tidak penting, semua sama"], correctAnswer: 1, explanation: "Institusi bergerak di jam tertentu. Asia sering konsolidasi, London sering manipulasi/sweep." },
      { type: "true_false", question: "Displacement adalah ciri utama dari masuknya Smart Money ke dalam market.", options: ["Benar", "Salah"], correctAnswer: true, explanation: "Displacement (pergerakan masif dan meyakinkan) membuktikan jejak institusi, biasanya meninggalkan FVG." }
    ]
  },
  {
    id: "quiz-10",
    levelId: "level-10",
    title: "Quiz Level 10 - Master Execution",
    passingScore: 80,
    xpReward: 100,
    remedialLessons: ["level-10/01-full-chart-analysis", "level-10/02-bias-liquidity-poi", "level-10/04-jurnal-dan-evaluasi"],
    questions: [
      { type: "multiple_choice", question: "Top-Down Analysis berarti menganalisa dimulai dari...", options: ["Timeframe terkecil (M1) ke terbesar (D1)", "Timeframe terbesar (D1) ke terkecil (M5/M15)", "Timeframe berapapun acak", "Hanya menggunakan H1"], correctAnswer: 1, explanation: "Selalu lihat gambaran besar (Daily/H4) untuk menentukan bias arah, lalu cari konfirmasi di TF kecil." },
      { type: "multiple_choice", question: "Apa fungsi utama dari Jurnal Trading?", options: ["Untuk dipamerkan di media sosial", "Menghitung kerugian harian", "Mengevaluasi eksekusi, emosi, dan memperbaiki kesalahan sistem", "Mencatat nomor resi"], correctAnswer: 2, explanation: "Jurnal adalah feedback loop terbaik. Tanpa jurnal, Anda akan mengulangi kesalahan yang sama terus menerus." },
      { type: "multiple_choice", question: "Jika Bias Harian kita adalah Bullish (Naik), apa yang kita lakukan?", options: ["Mencari setup Sell karena harga sudah terlalu tinggi", "Menunggu setup Buy di POI dan mengincar likuiditas (resistance) atas", "Buy sekarang juga tanpa peduli POI", "Trading dua arah sekaligus (Hedging)"], correctAnswer: 1, explanation: "Bias searah (alignment) menaikkan probabilitas menang. Tunggu retracement ke discount POI, lalu Buy." },
      { type: "true_false", question: "Tujuan akhir trading adalah mencari sistem 'Holy Grail' yang tidak pernah Loss.", options: ["Benar", "Salah"], correctAnswer: false, explanation: "Loss adalah biaya bisnis dalam trading. Fokus pada RR yang bagus dan konsistensi, bukan winrate 100%." }
    ]
  }
];

fs.writeFileSync(path.join(process.cwd(), 'src/data/quiz.json'), JSON.stringify(quizData, null, 2));
console.log("Quiz Data generated!");
