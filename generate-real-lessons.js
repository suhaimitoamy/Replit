import fs from 'fs';
import path from 'path';

const contentData = {
  "level-01": {
    "01-trading-itu-apa": { title: "Trading Itu Apa?", tujuan: "Memahami esensi trading.", penjelasan: "Trading adalah kegiatan beli dan jual aset untuk mendapat untung dari selisih harga. Ini bukan judi atau tebak-tebakan, melainkan probabilitas dan risiko.", contoh: "Beli BTC di $60k, jual di $65k dengan alasan teknikal.", kesalahan: ["Menganggap trading jalan cepat kaya", "Asal tebak tanpa analisa"], latihan: "Cari tahu bedanya investasi dan trading." },
    "02-chart-dan-candlestick": { title: "Chart dan Candlestick", tujuan: "Mengenal bentuk chart.", penjelasan: "Chart adalah grafik harga. Candlestick adalah jenis chart yang paling banyak digunakan karena menunjukkan Open, High, Low, dan Close (OHLC).", contoh: "Candle hijau berarti harga naik (Close > Open).", kesalahan: ["Bingung membaca sumbu (wick) candle"], latihan: "Buka chart dan tunjuk mana body mana wick." },
    "03-trend-dan-range": { title: "Trend dan Range", tujuan: "Mengenali arah pasar.", penjelasan: "Uptrend (naik), Downtrend (turun), dan Sideways/Range (datar).", contoh: "Harga terus membuat puncak lebih tinggi = Uptrend.", kesalahan: ["Melawan trend yang sedang kuat"], latihan: "Identifikasi apakah gold saat ini uptrend atau downtrend." },
    "04-support-resistance-awal": { title: "Support & Resistance Awal", tujuan: "Mengenal batas harga.", penjelasan: "Support adalah lantai (batas bawah), Resistance adalah atap (batas atas).", contoh: "Harga sering memantul naik saat menyentuh harga 1000 (Support).", kesalahan: ["Menarik terlalu banyak garis"], latihan: "Tandai 1 lantai dan 1 atap di chart." },
    "05-risiko-dasar": { title: "Risiko Dasar", tujuan: "Memahami batas kerugian.", penjelasan: "Jangan pertaruhkan semua uang dalam satu trade. Gunakan Stop Loss.", contoh: "Risk 1% dari modal $1000 = $10 per trade.", kesalahan: ["Tidak pasang Stop Loss", "All in 1 trade"], latihan: "Hitung 1% dari modalmu." },
    "06-ringkasan-level-1": { title: "Ringkasan Level 1", tujuan: "Mereview pemahaman awal.", penjelasan: "Trading butuh chart (candle), paham trend, SNR dasar, dan selalu batasi risiko.", contoh: "Trading plan: Ikuti trend, beli di support, pasang SL.", kesalahan: ["Lupa basic saat melihat chart bergerak"], latihan: "Tarik nafas, kamu sudah siap lanjut ke Level 2!" }
  },
  "level-02": {
    "01-candle-bullish-bearish": { title: "Candle Bullish & Bearish", tujuan: "Membaca arah satu candle.", penjelasan: "Bullish (hijau) harga dikuasai pembeli. Bearish (merah) harga dikuasai penjual.", contoh: "Candle ditutup hijau tebal berarti pembeli sangat kuat.", kesalahan: ["Menghafal nama candle tanpa paham artinya"], latihan: "Cari 5 candle bullish di chart." },
    "02-candle-dominan-lemah": { title: "Candle Dominan & Lemah", tujuan: "Membaca kekuatan (momentum).", penjelasan: "Body besar = dominan (kuat). Body kecil banyak sumbu = lemah (ragu-ragu).", contoh: "Doji (body tipis) tanda keraguan pasar.", kesalahan: ["Mengira semua candle hijau itu pasti kuat naik terus"], latihan: "Cari candle body besar yang memecah area keraguan." },
    "03-momentum-sederhana": { title: "Momentum Sederhana", tujuan: "Melihat kecepatan harga.", penjelasan: "Deretan candle besar berurutan menunjukkan momentum tinggi. Candle kecil-kecil = momentum melambat.", contoh: "3 candle bearish besar = momentum turun kuat.", kesalahan: ["Entry buy saat momentum turun sedang deras (tangkap pisau jatuh)"], latihan: "Amati pergerakan yang cepat vs lambat di chart." },
    "04-latihan-candle": { title: "Latihan Membaca Candle", tujuan: "Praktek membaca bahasa harga.", penjelasan: "Gabungkan pemahaman body, sumbu, dan rentetan candle untuk menebak siapa yang menang (buyer/seller).", contoh: "Candle turun kuat tapi tiba-tiba ada candle hijau besar menelan candle merah (engulfing).", kesalahan: ["Terlalu zoom in ke time frame 1 menit"], latihan: "Baca cerita dari 10 candle terakhir di Timeframe H1." },
    "05-ringkasan-level-2": { title: "Ringkasan Level 2", tujuan: "Pemantapan Candlestick.", penjelasan: "Candle menceritakan pertarungan buyer dan seller. Lihat body dan shadow.", contoh: "Shadow panjang di bawah = tekanan beli dari bawah.", kesalahan: ["Trading hanya berdasarkan 1 candle saja tanpa melihat tren besar"], latihan: "Siapkan mental untuk belajar struktur yang lebih luas di level 3." }
  },
  "level-03": {
    "01-support-dasar": { title: "Support Dasar", tujuan: "Menemukan lantai harga.", penjelasan: "Area dimana harga berhenti turun dan berbalik naik berkali-kali.", contoh: "Harga mantul di 1900 sebanyak 3 kali.", kesalahan: ["Support dianggap sebagai satu titik harga pasti, padahal itu area/zona"], latihan: "Tandai area support berbentuk kotak (rectangle)." },
    "02-resistance-dasar": { title: "Resistance Dasar", tujuan: "Menemukan atap harga.", penjelasan: "Area dimana harga berhenti naik dan berbalik turun.", contoh: "Harga selalu gagal menembus 2000.", kesalahan: ["Sell membabi buta hanya karena menyentuh resistance"], latihan: "Tandai area resistance di timeframe H4." },
    "03-area-snr-valid": { title: "Area SNR Valid", tujuan: "Menyaring area penting.", penjelasan: "SNR yang valid adalah yang sering di-test (disentuh lalu mantul kuat).", contoh: "Area yang sebelumnya resistance, kini jadi support.", kesalahan: ["Menandai setiap lekukan kecil di chart sebagai SNR"], latihan: "Hapus garis SNR yang jarang disentuh harga." },
    "04-kesalahan-menarik-snr": { title: "Kesalahan Menarik SNR", tujuan: "Membersihkan chart dari noise.", penjelasan: "Chart yang terlalu banyak garis SNR akan membuat bingung. Pilih area major saja.", contoh: "Hanya tandai swing high dan swing low utama.", kesalahan: ["Chart penuh garis seperti buku strimin"], latihan: "Sisakan maksimal 3 garis SNR terpenting di chartmu saat ini." },
    "05-ringkasan-level-3": { title: "Ringkasan Level 3", tujuan: "Memahami batas pasar.", penjelasan: "Support = demand (pembeli), Resistance = supply (penjual).", contoh: "Beli di support, jual di resistance (Buy low, Sell high).", kesalahan: ["Mengharap harga selalu mantul tanpa batas"], latihan: "Pahami bahwa support dan resistance pada akhirnya bisa tembus." }
  },
  "level-04": {
    "01-breakout-dasar": { title: "Breakout Dasar", tujuan: "Melihat harga menembus batas.", penjelasan: "Breakout terjadi saat harga berhasil melewati Support atau Resistance dan ditutup (close) di luarnya.", contoh: "Resistance 2000 ditembus oleh candle bullish besar.", kesalahan: ["Entry terlalu cepat sebelum candle benar-benar close (ditutup)"], latihan: "Cari contoh breakout di masa lalu." },
    "02-fake-breakout": { title: "Fake Breakout (False Break)", tujuan: "Mengenali jebakan breakout.", penjelasan: "Harga menembus batas, tapi tiba-tiba berbalik arah dengan cepat (hanya meninggalkan sumbu/wick).", contoh: "Harga naik melewati resistance, tapi ditutup sebagai jarum panjang di atas.", kesalahan: ["FOMO buy saat harga sedang break, lalu tersangkut"], latihan: "Identifikasi wick panjang yang gagal breakout." },
    "03-break-and-retest": { title: "Break and Retest", tujuan: "Strategi entry teraman.", penjelasan: "Setelah breakout, harga biasanya kembali (retest) ke area yang ditembus sebelum lanjut.", contoh: "Break resistance -> turun retest jadi support -> lanjut naik.", kesalahan: ["Panik saat harga retest, mengira itu pembalikan arah"], latihan: "Gambarkan pola break-retest di kertas." },
    "04-retest-sehat-dan-lemah": { title: "Retest Sehat vs Lemah", tujuan: "Membedakan kualitas retest.", penjelasan: "Retest sehat: harga kembali dengan candle kecil/momentum lambat. Retest lemah/bahaya: harga kembali dengan candle besar merusak area.", contoh: "Retest dengan banyak doji = bagus.", kesalahan: ["Memaksa buy saat retest berupa candle merah dominan tanpa rem"], latihan: "Cari contoh retest yang gagal (tembus kembali ke bawah)." },
    "05-ringkasan-level-4": { title: "Ringkasan Level 4", tujuan: "Review Breakout.", penjelasan: "Lebih baik menunggu candle close atau menunggu retest daripada FOMO saat breakout.", contoh: "Kesabaran menunggu retest = peluang win rate lebih tinggi.", kesalahan: ["Takut ketinggalan kereta (FOMO)"], latihan: "Janji pada diri sendiri: Tunggu candle close!" }
  },
  "level-05": {
    "01-market-structure": { title: "Market Structure", tujuan: "Membaca denyut nadi pasar.", penjelasan: "Pasar bergerak dalam gelombang yang membentuk struktur (puncak dan lembah).", contoh: "Uptrend = Higher High (HH) & Higher Low (HL).", kesalahan: ["Hanya melihat struktur di TF kecil, mengabaikan TF besar"], latihan: "Tandai puncak (High) dan lembah (Low) di chart." },
    "02-hh-hl-lh-ll": { title: "HH, HL, LH, LL", tujuan: "Bahasa struktur pasar.", penjelasan: "HH (Higher High), HL (Higher Low) untuk Uptrend. LH (Lower High), LL (Lower Low) untuk Downtrend.", contoh: "Selama HL tidak ditembus, Uptrend masih valid.", kesalahan: ["Bingung menentukan mana High dan Low yang valid"], latihan: "Gunakan alat path di TradingView untuk menggambar HH HL." },
    "03-bos-dasar": { title: "Break of Structure (BOS)", tujuan: "Konfirmasi penerusan tren.", penjelasan: "BOS terjadi saat harga menembus HH (saat uptrend) atau menembus LL (saat downtrend), menandakan tren berlanjut.", contoh: "Harga menembus HH sebelumnya = BOS (Uptrend lanjut).", kesalahan: ["Mengira semua breakout adalah BOS (harus searah tren utama)"], latihan: "Tandai titik BOS di chart uptrend." },
    "04-choch-dasar": { title: "Change of Character (CHoCH)", tujuan: "Mendeteksi pembalikan awal.", penjelasan: "CHoCH terjadi saat HL ditembus (Uptrend jadi Downtrend), atau LH ditembus (Downtrend jadi Uptrend). Sinyal awal pembalikan arah.", contoh: "Harga gagal buat HH, malah turun tembus HL terakhir = CHoCH.", kesalahan: ["Mengira setiap koreksi kecil adalah CHoCH"], latihan: "Cari pola pembalikan dan tandai letak CHoCH nya." },
    "05-ringkasan-level-5": { title: "Ringkasan Level 5", tujuan: "Review Market Structure.", penjelasan: "Struktur pasar adalah peta utama trader. BOS = lanjut, CHoCH = tanda-tanda putar balik.", contoh: "Jika tren naik, fokus cari buy di area HL (jangan sell).", kesalahan: ["Melawan struktur utama"], latihan: "Selalu petakan HH HL / LH LL sebelum entry." }
  },
  "level-06": {
    "01-liquidity-dasar": { title: "Liquidity Dasar", tujuan: "Paham bahan bakar pasar.", penjelasan: "Liquidity (likuiditas) adalah area di mana terdapat banyak kumpulan Stop Loss dari trader ritel. Market maker butuh ini untuk menggerakkan harga.", contoh: "Banyak SL di bawah area support yang jelas.", kesalahan: ["Mengira support selalu memantulkan harga tanpa pernah dijebol"], latihan: "Cari area support yang sangat rapi, itu biasanya area likuiditas." },
    "02-liquidity-high-low": { title: "Liquidity High & Low", tujuan: "Mendeteksi target institusi.", penjelasan: "Swing High dan Swing Low yang jelas adalah tempat berkumpulnya uang (liquidity). Harga cenderung magnet ke arah sana.", contoh: "Equal Highs (puncak kembar) sangat menarik untuk 'disapu'.", kesalahan: ["Menempatkan SL terlalu ngepas di swing low yang rapi"], latihan: "Tandai puncak kembar sebagai Equal Highs (EQH)." },
    "03-sweep": { title: "Sweep (Sapuan Likuiditas)", tujuan: "Melihat eksekusi jebakan.", penjelasan: "Harga menembus area likuiditas sesaat hanya untuk menyentuh SL orang-orang, lalu cepat berbalik arah.", contoh: "Wick panjang menembus support lalu close di atas support.", kesalahan: ["Mengira sweep adalah breakout valid (karena kurang sabar nunggu close)"], latihan: "Bedakan mana breakout body, mana sweep wick." },
    "04-stop-hunt": { title: "Stop Hunt", tujuan: "Menghindari perburuan SL.", penjelasan: "Institusi sengaja menekan harga melewati batas support/resistance untuk mengeksekusi SL trader ritel sebelum membalikkan arah sesuai tren asli.", contoh: "Manipulasi pasar sesaat sebelum berita rilis.", kesalahan: ["Menjadi korban karena SL ditaruh terlalu ketat di batas SNR"], latihan: "Berikan ruang (buffer) saat menaruh SL." },
    "05-ringkasan-level-6": { title: "Ringkasan Level 6", tujuan: "Paham likuiditas.", penjelasan: "Uang berpindah dari trader yang tidak sabar ke institusi. Sweep adalah bukti perburuan likuiditas.", contoh: "Tunggu harga sweep (mengambil likuiditas), baru kita masuk mengikuti reversalnya.", kesalahan: ["Menjadi bagian dari likuiditas itu sendiri"], latihan: "Jangan terlalu percaya pada support yang bentuknya terlalu sempurna." }
  },
  "level-07": {
    "01-risk-management": { title: "Risk Management", tujuan: "Perisai pelindung akun.", penjelasan: "Pengelolaan risiko agar tidak bangkrut. Inilah rahasia trader bisa bertahan bertahun-tahun.", contoh: "Hanya merisikokan 1-2% modal per trade.", kesalahan: ["Trading full margin (lot gajah) demi cepat kaya"], latihan: "Janji untuk tidak merisikokan lebih dari 2% per posisi." },
    "02-sl-tp-rr": { title: "SL, TP, dan RR", tujuan: "Rasio kemenangan (Risk to Reward).", penjelasan: "Stop Loss (batasan rugi), Take Profit (target untung). RR (Risk to Reward) minimal 1:2.", contoh: "Risiko rugi $10, target untung $20 (RR 1:2).", kesalahan: ["Rugi dibiarkan membesar, untung kecil cepat-cepat diclose"], latihan: "Ukur RR di chart menggunakan tool Long/Short Position." },
    "03-lot-dan-risk-per-trade": { title: "Lot dan Risk Per Trade", tujuan: "Menghitung ukuran posisi.", penjelasan: "Lot harus disesuaikan dengan jarak SL, bukan asal tembak. SL lebar = lot dikecilkan.", contoh: "SL 50 pips risk $10 = Lot 0.02.", kesalahan: ["Memakai lot yang sama (misal 0.1) untuk jarak SL yang berbeda-beda"], latihan: "Gunakan kalkulator lot sebelum entry." },
    "04-overtrade-dan-layering": { title: "Overtrade dan Layering", tujuan: "Mengontrol emosi.", penjelasan: "Membuka terlalu banyak posisi (overtrade) atau menambah posisi saat sedang rugi (martingale/layering) adalah jalan cepat menuju MC (Margin Call).", contoh: "Buka 10 posisi bersamaan = risiko 10x lipat.", kesalahan: ["Balas dendam setelah kalah (Revenge trading)"], latihan: "Batasi maksimal open posisi 2-3 per hari." },
    "05-ringkasan-level-7": { title: "Ringkasan Level 7", tujuan: "Mental juara bertahan.", penjelasan: "Trader profesional peduli pada seberapa besar dia bisa rugi, amatir peduli pada seberapa cepat dia kaya.", contoh: "RR 1:2 berarti menang 4 dari 10 trade saja sudah untung bersih.", kesalahan: ["Menggeser SL saat harga mendekat"], latihan: "Disiplin pada SL yang sudah dipasang sejak awal." }
  },
  "level-08": {
    "01-entry-plan": { title: "Entry Plan", tujuan: "Punya rencana sebelum perang.", penjelasan: "Tidak ada entry tanpa plan. Harus tahu di mana masuk, di mana salah, dan di mana targetnya.", contoh: "Saya akan buy jika harga turun ke area X, dan ada konfirmasi Y.", kesalahan: ["Tiba-tiba klik Buy karena melihat harga lari kencang"], latihan: "Tulis 1 rencana trading hari ini." },
    "02-invalidasi": { title: "Invalidasi (Kapan Plan Gagal?)", tujuan: "Tahu kapan harus menyerah.", penjelasan: "Level harga di mana alasan entry kita menjadi tidak valid lagi (tempat menaruh SL).", contoh: "Jika tren naik (HL) berhasil ditembus ke bawah, plan buy saya invalid.", kesalahan: ["Berharap harga berbalik walau level invalidasi sudah jebol"], latihan: "Selalu cari tahu dimana letak invalidasi sebelum memikirkan TP." },
    "03-poi-dasar": { title: "Point of Interest (POI)", tujuan: "Menemukan zona tunggu.", penjelasan: "Area khusus di chart tempat kita akan 'menunggu' harga datang (seperti area demand, supply, order block).", contoh: "Tandai area demand, lalu pasang alarm. Jangan lihat chart terus.", kesalahan: ["Entry di tengah-tengah jalan, bukan di zona POI"], latihan: "Tandai 1 POI Buy dan 1 POI Sell." },
    "04-checklist-entry": { title: "Checklist Entry", tujuan: "Konfirmasi lapis ganda.", penjelasan: "Daftar syarat yang harus terpenuhi sebelum klik Buy/Sell.", contoh: "1. Tren Naik? Ya. 2. Masuk POI? Ya. 3. Ada candle konfirmasi? Ya -> Baru klik Buy.", kesalahan: ["Entry padahal baru 1 syarat yang terpenuhi"], latihan: "Buat minimal 3 syarat checklist entry-mu sendiri." },
    "05-ringkasan-level-8": { title: "Ringkasan Level 8", tujuan: "Review Perencanaan.", penjelasan: "Plan your trade, and trade your plan. Jangan ubah rencana di tengah jalan hanya karena emosi.", contoh: "Tunggu konfirmasi, disiplin lot, siapkan mental.", kesalahan: ["Rencana bagus, eksekusi hancur karena ragu-ragu"], latihan: "Praktekkan disiplin entry." }
  },
  "level-09": {
    "01-ict-dasar": { title: "ICT & Smart Money Dasar", tujuan: "Memahami konsep institusi.", penjelasan: "Menganalisa pergerakan 'Smart Money' (bank/institusi) daripada hanya menggunakan indikator ritel konvensional.", contoh: "Fokus pada likuiditas dan ketidakseimbangan (imbalance).", kesalahan: ["Menghafal istilah tanpa paham esensinya"], latihan: "Kenali bahwa pasar bergerak mencari likuiditas." },
    "02-order-block": { title: "Order Block (OB)", tujuan: "Mencari jejak institusi.", penjelasan: "Candle terakhir sebelum pergerakan impulsif (kencang) yang memecahkan struktur (BOS). Institusi sering kembali ke sini untuk mengambil order yang tertinggal.", contoh: "Candle turun terakhir sebelum lonjakan harga naik yang menembus resistance.", kesalahan: ["Semua candle berlawanan dianggap OB. OB valid harus menghasilkan BOS"], latihan: "Tandai OB yang memecahkan struktur." },
    "03-fvg": { title: "Fair Value Gap (FVG)", tujuan: "Mencari celah kosong.", penjelasan: "Imbalance (ketidakseimbangan) harga yang terjadi karena pergerakan terlalu cepat, menyisakan celah (gap) antara sumbu candle 1 dan candle 3.", contoh: "Candle besar di tengah tanpa tertutup sumbu candle sebelum dan sesudahnya.", kesalahan: ["Trading FVG di tengah konsolidasi"], latihan: "Cari celah (FVG) di pergerakan impulsif." },
    "04-displacement": { title: "Displacement", tujuan: "Konfirmasi kekuatan penuh.", penjelasan: "Pergerakan kencang dan tegas yang memecahkan struktur (seringkali meninggalkan FVG). Menandakan Smart Money benar-benar masuk.", contoh: "Candle Marubozu (full body) menembus support.", kesalahan: ["Menganggap gerakan pelan sebagai indikasi Smart Money"], latihan: "Cari ciri-ciri displacement di chart." },
    "05-session-dan-poi": { title: "Trading Session & POI", tujuan: "Waktu adalah kunci.", penjelasan: "Market bergerak beda di tiap sesi (Asia = range/akumulasi, London = manipulasi, New York = ekspansi/distribusi).", contoh: "Banyak sweep likuiditas terjadi di pembukaan sesi London.", kesalahan: ["Trading 24 jam tanpa henti"], latihan: "Tandai jam pembukaan sesi London dan New York di waktu lokalmu." },
    "06-ringkasan-level-9": { title: "Ringkasan Level 9", tujuan: "Review konsep lanjutan.", penjelasan: "Smart money mencari likuiditas (sweep), membuat displacement (meninggalkan FVG & OB), mengubah struktur (CHoCH), lalu kembali (retest) ke OB/FVG.", contoh: "Sweep -> CHoCH -> Retest FVG/OB -> Entry.", kesalahan: ["Menerapkan konsep ICT tapi melupakan Risk Management Level 7"], latihan: "Gabungkan pemahaman struktur dan likuiditas." }
  },
  "level-10": {
    "01-full-chart-analysis": { title: "Top-Down Analysis", tujuan: "Menganalisa dari TF besar ke kecil.", penjelasan: "Melihat gambaran besar di Daily (D1) / H4, mencari zona di H1, dan mencari konfirmasi entry di M15/M5.", contoh: "Daily Uptrend -> H4 koreksi ke Support -> H1 muncul CHoCH naik -> M15 Entry Buy.", kesalahan: ["Hanya melihat TF M5 dan tidak tahu Daily sedang nyungsep"], latihan: "Buka chart Daily terlebih dahulu sebelum TF kecil." },
    "02-bias-liquidity-poi": { title: "Bias, Liquidity, POI", tujuan: "Menyusun skenario arah harian.", penjelasan: "Tentukan Bias (hari ini mau Buy atau Sell?). Cari letak Likuiditas target. Tunggu harga di POI yang searah dengan Bias.", contoh: "Bias Bullish. Tunggu harga ambil likuiditas bawah, lalu masuk Buy di POI H1.", kesalahan: ["Bingung menentukan bias karena terpengaruh berita sesaat"], latihan: "Tulis skenario bias-mu hari ini sebelum sesi London buka." },
    "03-entry-sl-tp-invalidasi": { title: "Eksekusi: Entry, SL, TP", tujuan: "Kombinasi pamungkas.", penjelasan: "Terapkan semua ilmu. Plan di POI + Konfirmasi (CHoCH/Sweep) + SL di luar invalidasi + TP di area likuiditas terdekat.", contoh: "RR 1:3 dengan sabar menunggu setup.", kesalahan: ["Ragu-ragu saat setup sudah terbentuk rapi"], latihan: "Lakukan 1 trade dengan setup terlengkap yang kamu pelajari." },
    "04-jurnal-dan-evaluasi": { title: "Jurnal & Evaluasi", tujuan: "Cermin diri sang trader.", penjelasan: "Tanpa evaluasi, kesalahan akan berulang. Catat setiap trade: alasan masuk, hasil, dan emosi saat itu.", contoh: "Menulis: 'Hari ini loss karena FOMO saat retest belum selesai'.", kesalahan: ["Malas menjurnal karena sedang loss beruntun"], latihan: "Isi Jurnal di menu aplikasi Amy Quest ini." },
    "05-final-preparation": { title: "Menjadi Trader Mandiri", tujuan: "Lulus menjadi kandidat God Level.", penjelasan: "Kamu sudah mempelajari dari candle, tren, likuiditas, risk management, hingga eksekusi. Sisanya adalah psikologi dan jam terbang.", contoh: "Konsistensi menjaga modal > Konsistensi profit.", kesalahan: ["Mencari strategi 'Holy Grail' (100% win rate) yang sebenarnya tidak ada"], latihan: "Gunakan AI Evaluator untuk terus mengecek setup trading-mu setiap hari. Selamat!" }
  }
};

const baseDir = path.join(process.cwd(), 'src/lessons');

for (const [level, filesObj] of Object.entries(contentData)) {
  const dirPath = path.join(baseDir, level);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  for (const [file, data] of Object.entries(filesObj)) {
    const filePath = path.join(dirPath, `${file}.md`);
    const content = `# ${data.title}

Level: ${level.replace('level-0', '').replace('level-', '')}
XP: 10

## Tujuan
> 🎯 **Tujuan:** ${data.tujuan}

## Penjelasan
> 📖 **Penjelasan:** ${data.penjelasan}

## Contoh
> 💡 **Contoh:** ${data.contoh}

## Kesalahan Umum
> ❌ **Kesalahan Umum:**
${data.kesalahan.map(k => `> - ${k}`).join('\n')}

## Latihan
> ✍️ **Latihan:** ${data.latihan}

## Checklist Pemahaman
> 📝 **Checklist:**
> - [ ] Saya paham inti materi ini.
> - [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
> - [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
> 🔄 **Remedial:** Jika masih bingung atau gagal di kuis terkait topik ini, harap ulangi membaca materi ini dengan seksama dan praktikkan di demo account sebelum lanjut.
`;
    fs.writeFileSync(filePath, content);
  }
}

console.log("Real Lessons generated!");
