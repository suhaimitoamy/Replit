const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, 'src', 'data');
const srcLessonsDir = path.join(__dirname, 'src', 'lessons');
const publicImagesDir = path.join(__dirname, 'public', 'images', 'lessons');

// Helper to pad numbers
const pad = (num) => num.toString().padStart(2, '0');

const levelsData = [];
const quizData = [];

const levelNames = [
  "Newbie Trader", "Candle Reader", "SNR Hunter", "Break Retest Scout", "Structure Learner",
  "Liquidity Seeker", "Risk Guardian", "Entry Planner", "ICT Apprentice", "God Level Candidate",
  "Advanced SNR", "Multi Timeframe Structure", "Advanced Break and Retest", "Compression and Expansion", "Advanced Fakeout",
  "Internal and External Liquidity", "Inducement", "Dealing Range", "Premium Discount", "Liquidity Narrative",
  "Order Block Refinement", "FVG Refinement", "Breaker Block", "Mitigation Block", "Inversion FVG",
  "Displacement Model", "Session Timing Advanced", "HTF to LTF Entry Model", "Trade Management Advanced", "God Technical Boss",
  "FOMO Control", "Fear of Loss", "Revenge Trading", "Overconfidence After Win", "Mental Reset After Loss",
  "Daily Trading Plan", "Pre Entry Checklist", "No Trade Rules", "Weekly Evaluation", "Trader Routine System",
  "HTF Bias to LTF Execution", "Entry Confirmation Model", "Floating Trade Management", "Scale Out vs Hold Full", "Disciplined Exit",
  "Trending Market Case Study", "Sideways Market Case Study", "Sweep Reversal Case Study", "Fake Breakout Case Study", "Final Boss Consistent Trader Test"
];

// Predefined lessons for levels 11-30 from user prompt
const specializedLessons = {
  11: ["01-zone-refinement", "02-reaction-quality", "03-clean-vs-dirty-level", "04-snr-dalam-trend", "05-snr-dalam-range", "06-advanced-snr-case-study"],
  12: ["01-htf-structure", "02-ltf-structure", "03-alignment", "04-conflict-antar-timeframe", "05-mapping-dari-htf-ke-ltf", "06-mtf-structure-case-study"],
  13: ["01-shallow-retest", "02-deep-retest", "03-failed-retest", "04-retest-dengan-liquidity", "05-retest-dengan-structure-shift", "06-advanced-break-retest-case-study"],
  14: ["01-compression-dasar", "02-ciri-price-compression", "03-expansion-candle", "04-trap-sebelum-expansion", "05-compression-di-poi", "06-compression-expansion-case-study"],
  15: ["01-failed-breakout", "02-liquidity-grab", "03-fakeout-dengan-reversal", "04-fakeout-dengan-continuation", "05-konfirmasi-setelah-fakeout", "06-advanced-fakeout-case-study"],
  16: ["01-internal-liquidity", "02-external-liquidity", "03-equal-highs-equal-lows", "04-liquidity-di-dalam-range", "05-target-likuiditas", "06-internal-external-case-study"],
  17: ["01-apa-itu-inducement", "02-inducement-sebelum-poi", "03-inducement-vs-entry-valid", "04-retail-trap", "05-menunggu-inducement-selesai", "06-inducement-case-study"],
  18: ["01-range-high-low", "02-equilibrium", "03-discount-area", "04-premium-area", "05-menghindari-middle-range", "06-dealing-range-case-study"],
  19: ["01-konsep-premium-discount", "02-buy-di-discount", "03-sell-di-premium", "04-kesalahan-entry-di-equilibrium", "05-premium-discount-dengan-poi", "06-premium-discount-case-study"],
  20: ["01-narasi-likuiditas", "02-where-price-wants-to-go", "03-liquidity-objective", "04-sweep-to-delivery", "05-narasi-bullish-bearish", "06-liquidity-narrative-case-study"],
  21: ["01-valid-order-block", "02-invalid-order-block", "03-ob-refinement", "04-mitigation-ob", "05-ob-dengan-displacement", "06-ob-refinement-case-study"],
  22: ["01-valid-fvg", "02-filled-fvg", "03-partial-fill", "04-fvg-dengan-displacement", "05-fvg-sebagai-entry-zone", "06-fvg-refinement-case-study"],
  23: ["01-apa-itu-breaker-block", "02-failed-ob-menjadi-breaker", "03-breaker-bullish", "04-breaker-bearish", "05-konfirmasi-breaker", "06-breaker-block-case-study"],
  24: ["01-apa-itu-mitigation-block", "02-logika-mitigation", "03-mitigation-vs-order-block", "04-reaction-zone", "05-invalidasi-mitigation", "06-mitigation-block-case-study"],
  25: ["01-apa-itu-inversion-fvg", "02-fvg-gagal", "03-inversion-sebagai-support", "04-inversion-sebagai-resistance", "05-inversion-dengan-structure-shift", "06-inversion-fvg-case-study"],
  26: ["01-displacement-dasar", "02-ciri-candle-displacement", "03-displacement-dan-imbalance", "04-displacement-setelah-sweep", "05-displacement-sebagai-konfirmasi", "06-displacement-model-case-study"],
  27: ["01-asia-session", "02-london-session", "03-new-york-session", "04-killzone-behavior", "05-session-manipulation", "06-session-timing-case-study"],
  28: ["01-htf-bias", "02-htf-poi", "03-ltf-trigger", "04-m15-ke-m5-entry", "05-entry-model-lengkap", "06-htf-ltf-case-study"],
  29: ["01-manage-floating-position", "02-memindahkan-sl", "03-break-even", "04-partial-close", "05-hold-vs-exit", "06-trade-management-case-study"],
  30: ["01-full-technical-framework", "02-htf-bias-liquidity", "03-poi-entry-invalidation", "04-sl-tp-risk-management", "05-execution-review", "06-god-technical-boss-test"]
};

// Existing lessons for Level 1-10 to retain keys if possible
const legacyLessons1to10 = [
  ["01-trading-itu-apa", "02-chart-dan-candlestick", "03-trend-dan-range", "04-support-resistance-awal", "05-risiko-dasar", "06-ringkasan-level-1"],
  ["01-candle-bullish-bearish", "02-candle-dominan-lemah", "03-momentum-sederhana", "04-latihan-candle", "05-kesalahan-umum-candle", "06-ringkasan-level-2"],
  ["01-support-dasar", "02-resistance-dasar", "03-area-snr-valid", "04-kesalahan-menarik-snr", "05-latihan-snr", "06-ringkasan-level-3"],
  ["01-breakout-dasar", "02-fake-breakout", "03-break-and-retest", "04-retest-sehat-dan-lemah", "05-kapan-breakout-tidak-layak", "06-ringkasan-level-4"],
  ["01-market-structure", "02-hh-hl-lh-ll", "03-bos-dasar", "04-choch-dasar", "05-bullish-bearish-structure", "06-ringkasan-level-5"],
  ["01-liquidity-dasar", "02-liquidity-high-low", "03-sweep", "04-stop-hunt", "05-inducement-dasar", "06-ringkasan-level-6"],
  ["01-risk-management", "02-sl-tp-rr", "03-lot-dan-risk-per-trade", "04-overtrade-dan-layering", "05-latihan-hitung-risk", "06-ringkasan-level-7"],
  ["01-entry-plan", "02-invalidasi", "03-poi-dasar", "04-checklist-entry", "05-entry-valid-vs-emosional", "06-ringkasan-level-8"],
  ["01-ict-dasar", "02-order-block", "03-fvg", "04-displacement", "05-session-dan-poi", "06-ringkasan-level-9"],
  ["01-full-chart-analysis", "02-bias-liquidity-poi", "03-entry-sl-tp-invalidasi", "04-jurnal-dan-evaluasi", "05-final-preparation", "06-ringkasan-level-10"]
];

let currentXP = 100;
let unlockReq = 0;

for (let i = 1; i <= 50; i++) {
  const levelId = `level-${i}`;
  const paddedLevel = pad(i);
  const folderId = `level-${paddedLevel}`;
  const title = levelNames[i - 1] || `Level ${i}`;
  
  let lessonsList = [];
  if (i <= 10) {
    lessonsList = legacyLessons1to10[i - 1].map(l => `${folderId}/${l}`);
  } else if (i <= 30) {
    lessonsList = specializedLessons[i].map(l => `${folderId}/${l}`);
  } else {
    lessonsList = [
      `${folderId}/01-konsep-utama`,
      `${folderId}/02-gejala-di-chart-atau-diri-sendiri`,
      `${folderId}/03-kesalahan-umum`,
      `${folderId}/04-latihan-kontrol`,
      `${folderId}/05-studi-kasus`,
      `${folderId}/06-ringkasan-dan-remedial`
    ];
  }

  // Create directories
  fs.mkdirSync(path.join(srcLessonsDir, folderId), { recursive: true });
  fs.mkdirSync(path.join(publicImagesDir, folderId), { recursive: true });

  levelsData.push({
    id: levelId,
    number: i,
    title: title,
    theme: `Tema mendalam tentang ${title}.`,
    description: `Materi level ${i} untuk perjalanan menjadi konsisten.`,
    targetXP: currentXP,
    unlockRequirement: unlockReq,
    lessons: lessonsList,
    missions: [],
    quizId: `quiz-${i}`,
    bossBattleId: i % 10 === 0 ? `boss-${i}` : null,
    aiRubricId: `Level ${i} - ${title}`,
    badgeReward: `badge-${i}`,
    nextLevel: i < 50 ? `level-${i + 1}` : null
  });

  // Calculate next XP
  unlockReq = currentXP;
  if (i < 10) currentXP += 150;
  else if (i < 30) currentXP += 500;
  else currentXP += 1000;
  
  // Dummy Quiz Data
  quizData.push({
    id: `quiz-${i}`,
    levelId: levelId,
    title: `Quiz: ${title}`,
    passingScore: 80,
    xpReward: 50,
    questions: Array.from({ length: 6 }).map((_, qIdx) => ({
      id: `q${i}_${qIdx+1}`,
      text: `Pertanyaan terkait ${title} nomor ${qIdx+1}. Manakah yang benar?`,
      options: [
        "Pilihan A yang benar",
        "Pilihan B yang salah",
        "Pilihan C yang salah",
        "Pilihan D yang sangat salah"
      ],
      correctAnswer: 0,
      explanation: "Penjelasan: Karena Pilihan A adalah konsep yang tepat sesuai materi.",
      remedialLesson: lessonsList[qIdx] || lessonsList[0]
    }))
  });
}

fs.writeFileSync(path.join(srcDataDir, 'levels.json'), JSON.stringify(levelsData, null, 2));
fs.writeFileSync(path.join(srcDataDir, 'quiz.json'), JSON.stringify(quizData, null, 2));
console.log('JSON files generated and directories created.');
