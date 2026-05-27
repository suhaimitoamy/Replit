import json
import os

levels_metadata = [
  { "id": 31, "title": "FOMO Control", "lessons": ["level-31/01-konsep-utama", "level-31/02-gejala-di-chart-atau-diri-sendiri", "level-31/03-kesalahan-umum", "level-31/04-latihan-kontrol", "level-31/05-studi-kasus", "level-31/06-ringkasan-dan-remedial"] },
  { "id": 32, "title": "Fear of Loss", "lessons": ["level-32/01-konsep-utama", "level-32/02-gejala-di-chart-atau-diri-sendiri", "level-32/03-kesalahan-umum", "level-32/04-latihan-kontrol", "level-32/05-studi-kasus", "level-32/06-ringkasan-dan-remedial"] },
  { "id": 33, "title": "Revenge Trading", "lessons": ["level-33/01-konsep-utama", "level-33/02-gejala-di-chart-atau-diri-sendiri", "level-33/03-kesalahan-umum", "level-33/04-latihan-kontrol", "level-33/05-studi-kasus", "level-33/06-ringkasan-dan-remedial"] },
  { "id": 34, "title": "Overconfidence After Win", "lessons": ["level-34/01-konsep-utama", "level-34/02-gejala-di-chart-atau-diri-sendiri", "level-34/03-kesalahan-umum", "level-34/04-latihan-kontrol", "level-34/05-studi-kasus", "level-34/06-ringkasan-dan-remedial"] },
  { "id": 35, "title": "Mental Reset After Loss", "lessons": ["level-35/01-konsep-utama", "level-35/02-gejala-di-chart-atau-diri-sendiri", "level-35/03-kesalahan-umum", "level-35/04-latihan-kontrol", "level-35/05-studi-kasus", "level-35/06-ringkasan-dan-remedial"] },
  { "id": 36, "title": "Daily Trading Plan", "lessons": ["level-36/01-konsep-utama", "level-36/02-gejala-di-chart-atau-diri-sendiri", "level-36/03-kesalahan-umum", "level-36/04-latihan-kontrol", "level-36/05-studi-kasus", "level-36/06-ringkasan-dan-remedial"] },
  { "id": 37, "title": "Pre Entry Checklist", "lessons": ["level-37/01-konsep-utama", "level-37/02-gejala-di-chart-atau-diri-sendiri", "level-37/03-kesalahan-umum", "level-37/04-latihan-kontrol", "level-37/05-studi-kasus", "level-37/06-ringkasan-dan-remedial"] },
  { "id": 38, "title": "No Trade Rules", "lessons": ["level-38/01-konsep-utama", "level-38/02-gejala-di-chart-atau-diri-sendiri", "level-38/03-kesalahan-umum", "level-38/04-latihan-kontrol", "level-38/05-studi-kasus", "level-38/06-ringkasan-dan-remedial"] },
  { "id": 39, "title": "Weekly Evaluation", "lessons": ["level-39/01-konsep-utama", "level-39/02-gejala-di-chart-atau-diri-sendiri", "level-39/03-kesalahan-umum", "level-39/04-latihan-kontrol", "level-39/05-studi-kasus", "level-39/06-ringkasan-dan-remedial"] },
  { "id": 40, "title": "Trader Routine System", "lessons": ["level-40/01-konsep-utama", "level-40/02-gejala-di-chart-atau-diri-sendiri", "level-40/03-kesalahan-umum", "level-40/04-latihan-kontrol", "level-40/05-studi-kasus", "level-40/06-ringkasan-dan-remedial"] }
]

questions_data = {
  31: [
    {
      "id": "q1",
      "prompt": "Jelaskan bagaimana Anda membedakan antara peluang trading yang solid berdasarkan sistem Anda dibandingkan dengan impuls masuk karena melihat harga bergerak cepat (FOMO).",
      "expectedConcepts": ["sistem trading", "impuls", "analisis rasional", "emosi", "disiplin"]
    },
    {
      "id": "q2",
      "prompt": "Saat Anda menyadari diri Anda sedang mengalami FOMO karena ketinggalan momen bullish tajam, langkah konkret apa yang harus Anda lakukan untuk meredakan dorongan emosional tersebut sebelum membuka posisi?",
      "expectedConcepts": ["jeda", "menjauh dari layar", "observasi diri", "tidak masuk pasar", "mengontrol pernapasan"]
    },
    {
      "id": "q3",
      "prompt": "Evaluasi dampak jangka panjang dari kebiasaan menyerah pada FOMO meskipun sesekali memberikan profit, dan mengapa kontrol emosi lebih berharga daripada profit acak.",
      "expectedConcepts": ["kebiasaan buruk", "profit acak", "jangka panjang", "konsistensi", "risiko hancur"]
    }
  ],
  32: [
    {
      "id": "q1",
      "prompt": "Fear of loss sering kali membuat trader ragu-ragu untuk masuk meskipun setup sudah sempurna. Analisis bagaimana pemahaman probabilitas dapat membantu mengatasi ketakutan ini.",
      "expectedConcepts": ["probabilitas", "keraguan", "sistem", "eksekusi", "statistik"]
    },
    {
      "id": "q2",
      "prompt": "Saat posisi Anda mulai mendekati level cut loss, bagaimana Anda menjaga kedisiplinan agar tidak membatalkan stop loss karena ketakutan untuk merealisasikan kerugian?",
      "expectedConcepts": ["disiplin stop loss", "rasional", "mengendalikan takut", "menerima kerugian", "risk management"]
    },
    {
      "id": "q3",
      "prompt": "Jelaskan proses kognitif untuk menerima bahwa kerugian (loss) adalah biaya operasional dalam bisnis trading, dan bagaimana cara memisahkan ego dari hasil setiap trade tunggal.",
      "expectedConcepts": ["biaya operasional", "ego", "trade tunggal", "bisnis", "mindset"]
    }
  ],
  33: [
    {
      "id": "q1",
      "prompt": "Setelah mengalami kekalahan beruntun (losing streak), dorongan untuk membalas dendam pada market sangat kuat. Apa tanda-tanda psikologis awal bahwa Anda berisiko melakukan revenge trading?",
      "expectedConcepts": ["marah", "membalas dendam", "losing streak", "emosi tidak stabil", "frustrasi"]
    },
    {
      "id": "q2",
      "prompt": "Bagaimana peran jeda waktu atau \"time-out\" dapat memutus siklus emosi destruktif dari revenge trading? Rancang protokol jeda pribadi Anda.",
      "expectedConcepts": ["time-out", "jeda", "memutus siklus", "menenangkan diri", "protokol"]
    },
    {
      "id": "q3",
      "prompt": "Evaluasi bagaimana revenge trading seringkali merusak aturan risk management yang sudah ditetapkan, dan jelaskan langkah-langkah untuk kembali rasional setelah menyadari kesalahan ini.",
      "expectedConcepts": ["overleveraging", "risk management hancur", "kembali rasional", "evaluasi", "kesadaran diri"]
    }
  ],
  34: [
    {
      "id": "q1",
      "prompt": "Kemenangan berturut-turut dapat menimbulkan ilusi kontrol. Mengapa overconfidence sangat berbahaya dan bagaimana ia mengubah persepsi Anda terhadap risiko?",
      "expectedConcepts": ["ilusi kontrol", "overconfidence", "meremehkan risiko", "euforia", "bias"]
    },
    {
      "id": "q2",
      "prompt": "Jelaskan rutinitas atau kebiasaan mental yang dapat Anda terapkan untuk tetap rendah hati dan objektif meskipun baru saja mencetak profit besar.",
      "expectedConcepts": ["rendah hati", "objektif", "rutinitas evaluasi", "bersyukur", "tidak sombong"]
    },
    {
      "id": "q3",
      "prompt": "Jika Anda mendapati diri Anda meningkatkan ukuran lot secara tidak rasional setelah winning streak, bagaimana cara Anda mengevaluasi kembali keputusan tersebut dengan sudut pandang sistem trading Anda?",
      "expectedConcepts": ["evaluasi lot", "sistem", "rasionalitas", "aturan ukuran posisi", "keserakahan"]
    }
  ],
  35: [
    {
      "id": "q1",
      "prompt": "Sebuah kerugian besar bisa merusak keseimbangan mental. Jelaskan secara rinci proses mental reset yang efektif sebelum Anda diizinkan untuk melihat chart kembali.",
      "expectedConcepts": ["mental reset", "istirahat", "detoks chart", "pemulihan", "keseimbangan"]
    },
    {
      "id": "q2",
      "prompt": "Bandingkan antara bereaksi secara reaktif terhadap loss versus merespon dengan analitis. Apa peran jurnal trading dalam transisi menuju sikap analitis ini?",
      "expectedConcepts": ["reaktif vs analitis", "jurnal trading", "data objektif", "emosi", "pembelajaran"]
    },
    {
      "id": "q3",
      "prompt": "Bagaimana Anda menggunakan teknik mindfulness atau reframing untuk mengubah kerugian menyakitkan menjadi data objektif yang berguna untuk pengembangan diri?",
      "expectedConcepts": ["mindfulness", "reframing", "data objektif", "pengembangan", "menerima realitas"]
    }
  ],
  36: [
    {
      "id": "q1",
      "prompt": "Mengapa memiliki Daily Trading Plan sebelum market buka sangat krusial dalam mengurangi kelelahan pengambilan keputusan (decision fatigue) saat jam trading?",
      "expectedConcepts": ["decision fatigue", "persiapan", "rencana harian", "jam trading", "kelelahan mental"]
    },
    {
      "id": "q2",
      "prompt": "Uraikan komponen-komponen emosional dan psikologis yang wajib Anda periksa dalam diri Anda sendiri ketika menyusun Daily Trading Plan.",
      "expectedConcepts": ["cek emosi", "tingkat stres", "kesiapan mental", "mood", "psikologis"]
    },
    {
      "id": "q3",
      "prompt": "Jika di tengah hari trading market bergerak di luar skenario yang ada di Daily Plan Anda, jelaskan bagaimana Anda sebaiknya bereaksi untuk menjaga konsistensi dan kontrol emosi.",
      "expectedConcepts": ["tidak memaksakan", "tetap sesuai rencana", "kontrol emosi", "fleksibel tapi disiplin", "observasi"]
    }
  ],
  37: [
    {
      "id": "q1",
      "prompt": "Apa peran dari Pre Entry Checklist dalam menjembatani antara analisis yang rasional dan eksekusi yang kadang dipengaruhi emosi sesaat?",
      "expectedConcepts": ["checklist", "rasionalitas", "eksekusi", "mencegah impuls", "disiplin"]
    },
    {
      "id": "q2",
      "prompt": "Susun sebuah argumen mengapa mengabaikan satu poin saja dalam checklist demi 'feeling' dapat mengancam integritas sistem trading Anda dalam jangka panjang.",
      "expectedConcepts": ["integritas sistem", "mengabaikan aturan", "feeling", "konsistensi", "jangka panjang"]
    },
    {
      "id": "q3",
      "prompt": "Saat Anda menemukan setup yang hampir sempurna namun gagal memenuhi satu kriteria checklist utama, jelaskan dialog internal yang sehat untuk meyakinkan diri agar tidak memaksakan entry.",
      "expectedConcepts": ["dialog internal", "menahan diri", "kriteria", "kesabaran", "tidak memaksakan"]
    }
  ],
  38: [
    {
      "id": "q1",
      "prompt": "Mengapa memiliki aturan kapan TIDAK boleh trading (No Trade Rules) sama pentingnya dengan mengetahui kapan harus masuk pasar?",
      "expectedConcepts": ["melindungi modal", "kondisi tidak ideal", "no trade rules", "filter", "disiplin"]
    },
    {
      "id": "q2",
      "prompt": "Analisis bagaimana kondisi mental seperti stres dari luar trading, kurang tidur, atau euforia, harus menjadi pemicu otomatis untuk mengaktifkan \"No Trade Rules\".",
      "expectedConcepts": ["stres luar", "kurang tidur", "euforia", "pemicu", "kesadaran diri"]
    },
    {
      "id": "q3",
      "prompt": "Jelaskan cara Anda mengelola rasa bosan ketika pasar sedang sideways dan No Trade Rules mengharuskan Anda untuk tetap berada di luar pasar.",
      "expectedConcepts": ["rasa bosan", "sideways", "bersabar", "tidak gatal klik", "mengalihkan fokus"]
    }
  ],
  39: [
    {
      "id": "q1",
      "prompt": "Evaluasi mingguan lebih dari sekadar menghitung profit atau loss. Jelaskan bagaimana Anda mengevaluasi kualitas eksekusi dan tingkat kedisiplinan mental selama minggu tersebut.",
      "expectedConcepts": ["kualitas eksekusi", "kedisiplinan", "bukan sekadar PnL", "evaluasi", "proses"]
    },
    {
      "id": "q2",
      "prompt": "Ketika Anda menemukan bahwa sebagian besar kerugian minggu ini disebabkan oleh pelanggaran emosional, langkah konkret apa yang akan Anda rancang untuk minggu depan guna memperbaikinya?",
      "expectedConcepts": ["perbaikan", "pelanggaran emosi", "langkah konkret", "minggu depan", "komitmen"]
    },
    {
      "id": "q3",
      "prompt": "Bagaimana Anda memisahkan antara sistem yang perlu diperbaiki dengan psikologi trading yang perlu dikendalikan saat menganalisis jurnal mingguan?",
      "expectedConcepts": ["sistem vs psikologi", "analisis jurnal", "kesalahan eksekusi", "kesalahan sistem", "objektivitas"]
    }
  ],
  40: [
    {
      "id": "q1",
      "prompt": "Sistem rutinitas harian mencakup kebiasaan sebelum, saat, dan sesudah trading. Mengapa konsistensi dalam rutinitas ini berperan vital dalam membangun identitas Anda sebagai trader profesional?",
      "expectedConcepts": ["rutinitas harian", "konsistensi", "identitas trader", "profesionalisme", "kebiasaan"]
    },
    {
      "id": "q2",
      "prompt": "Jelaskan bagaimana Trader Routine System melindungi Anda dari fluktuasi emosi harian dan menjaga agar keputusan trading tetap berlandaskan pada probabilitas rasional.",
      "expectedConcepts": ["perlindungan emosi", "rutinitas", "keputusan rasional", "probabilitas", "stabilitas"]
    },
    {
      "id": "q3",
      "prompt": "Bagaimana Anda mengevaluasi dan menyesuaikan rutinitas trading Anda seiring dengan berkembangnya modal, jam terbang, dan kondisi psikologis Anda?",
      "expectedConcepts": ["adaptasi", "evaluasi rutinitas", "perkembangan diri", "penyesuaian", "jam terbang"]
    }
  ]
}

rubric = {
  "excellent": "Jawaban sangat komprehensif, logis, dan menyentuh konsep utama secara mendalam. Menunjukkan pemahaman psikologi trading yang sangat baik dan kesadaran diri.",
  "pass": "Jawaban memahami poin penting walaupun kurang lengkap atau agak dangkal. Menunjukkan pemahaman dasar tentang bahaya emosi dalam trading.",
  "fail": "Jawaban dangkal, tidak relevan, atau tidak memahami konsep sama sekali. Gagal mengidentifikasi masalah psikologis atau memberikan solusi yang rasional."
}

quizzes = []

for idx, level in enumerate(levels_metadata):
    quiz = {
        "id": f"essay-quiz-{level['id']}",
        "quizId": f"quiz-{level['id']}",
        "levelId": f"level-{level['id']}",
        "title": f"{level['title']} AI Essay Exam",
        "type": "ai_essay",
        "passingScore": 75,
        "questions": questions_data[level['id']],
        "rubric": rubric,
        "remedialLessons": level['lessons']
    }
    quizzes.append(quiz)

os.makedirs("/storage/emulated/0/Download/Amy-Trading-Quest/src/data/ai-essay-parts", exist_ok=True)
output_file = "/storage/emulated/0/Download/Amy-Trading-Quest/src/data/ai-essay-parts/part-4.json"

with open(output_file, "w") as f:
    json.dump(quizzes, f, indent=2)

print(f"Successfully generated {len(quizzes)} quizzes to {output_file}")
