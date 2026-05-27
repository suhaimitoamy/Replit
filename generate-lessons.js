import fs from 'fs';
import path from 'path';

const lessons = {
  "level-01": [
    "01-trading-itu-apa",
    "02-chart-dan-candlestick",
    "03-trend-dan-range",
    "04-support-resistance-awal",
    "05-risiko-dasar",
    "06-ringkasan-level-1"
  ],
  "level-02": [
    "01-candle-bullish-bearish",
    "02-candle-dominan-lemah",
    "03-momentum-sederhana",
    "04-latihan-candle",
    "05-ringkasan-level-2"
  ],
  "level-03": [
    "01-support-dasar",
    "02-resistance-dasar",
    "03-area-snr-valid",
    "04-kesalahan-menarik-snr",
    "05-ringkasan-level-3"
  ],
  "level-04": [
    "01-breakout-dasar",
    "02-fake-breakout",
    "03-break-and-retest",
    "04-retest-sehat-dan-lemah",
    "05-ringkasan-level-4"
  ],
  "level-05": [
    "01-market-structure",
    "02-hh-hl-lh-ll",
    "03-bos-dasar",
    "04-choch-dasar",
    "05-ringkasan-level-5"
  ],
  "level-06": [
    "01-liquidity-dasar",
    "02-liquidity-high-low",
    "03-sweep",
    "04-stop-hunt",
    "05-ringkasan-level-6"
  ],
  "level-07": [
    "01-risk-management",
    "02-sl-tp-rr",
    "03-lot-dan-risk-per-trade",
    "04-overtrade-dan-layering",
    "05-ringkasan-level-7"
  ],
  "level-08": [
    "01-entry-plan",
    "02-invalidasi",
    "03-poi-dasar",
    "04-checklist-entry",
    "05-ringkasan-level-8"
  ],
  "level-09": [
    "01-ict-dasar",
    "02-order-block",
    "03-fvg",
    "04-displacement",
    "05-session-dan-poi",
    "06-ringkasan-level-9"
  ],
  "level-10": [
    "01-full-chart-analysis",
    "02-bias-liquidity-poi",
    "03-entry-sl-tp-invalidasi",
    "04-jurnal-dan-evaluasi",
    "05-final-preparation"
  ]
};

const baseDir = path.join(process.cwd(), 'src/lessons');

for (const [level, files] of Object.entries(lessons)) {
  const dirPath = path.join(baseDir, level);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  files.forEach(file => {
    const filePath = path.join(dirPath, `${file}.md`);
    if (!fs.existsSync(filePath)) {
      const title = file.split('-').slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const content = `# ${title}

Level: ${level.replace('level-0', '').replace('level-', '')}
XP: 10

## Tujuan
Memahami konsep dasar dari ${title}.

## Penjelasan
Ini adalah materi placeholder untuk ${title}. Anda dapat mempelajari topik ini secara mendalam untuk memperkuat dasar trading Anda.

## Contoh
Contoh penerapan ${title} dalam chart sesungguhnya.

## Kesalahan Umum
- Terburu-buru mengambil keputusan.
- Mengabaikan trend utama.

## Latihan
Cobalah untuk menemukan ${title} di chart nyata.

## Checklist Pemahaman
- [ ] Saya paham konsep ${title}.
- [ ] Saya bisa menerapkannya dalam analisis.

## Materi Remedial
Jika masih bingung, baca ulang materi dan praktekkan di demo account.
`;
      fs.writeFileSync(filePath, content);
    }
  });
}

console.log("Lessons generated!");
