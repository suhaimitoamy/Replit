import fs from 'fs';
import path from 'path';

const baseLessonsDir = path.join(process.cwd(), 'src/lessons');
const baseImagesDir = path.join(process.cwd(), 'public/images/lessons');

// Helper to generate a complete SVG wrapper
const createSVG = (content) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="200" style="background-color: #1a1a2e; border-radius: 8px; border: 1px solid #2a2a4a; margin-top: 10px; margin-bottom: 20px;">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  ${content}
</svg>`;

// Basic visual elements
const candleUp = (x, y, w, h, wickY1, wickY2) => `
  <line x1="${x+w/2}" y1="${wickY1}" x2="${x+w/2}" y2="${wickY2}" stroke="#00ffaa" stroke-width="2"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#00ffaa" rx="2"/>
`;
const candleDown = (x, y, w, h, wickY1, wickY2) => `
  <line x1="${x+w/2}" y1="${wickY1}" x2="${x+w/2}" y2="${wickY2}" stroke="#ff4444" stroke-width="2"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#ff4444" rx="2"/>
`;
const textNode = (x, y, text, color="#ffffff", size="14") => `<text x="${x}" y="${y}" fill="${color}" font-family="monospace" font-size="${size}" text-anchor="middle">${text}</text>`;
const lineNode = (x1, y1, x2, y2, color="#4444ff", width="2", dash="") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-dasharray="${dash}" filter="url(#glow)"/>`;
const pathNode = (d, color="#00ffaa") => `<path d="${d}" stroke="${color}" fill="none" stroke-width="3" filter="url(#glow)"/>`;

// SVGs for each specific lesson
const svgMap = {
  // Level 1
  "level-01/01-trading-itu-apa": createSVG(`
    ${textNode(200, 40, "TRADING = BUY LOW, SELL HIGH", "#00ffaa", 18)}
    ${candleDown(100, 80, 20, 60, 70, 150)}
    ${candleUp(140, 100, 20, 40, 80, 160)}
    ${candleUp(180, 60, 20, 50, 50, 120)}
    ${candleUp(220, 30, 20, 40, 20, 80)}
    ${textNode(110, 170, "Beli di sini ($60k)", "#8888ff", 12)}
    ${textNode(230, 100, "Jual di sini ($65k)", "#00ffaa", 12)}
    ${lineNode(120, 150, 210, 80, "#4444ff", 2, "5,5")}
  `),
  "level-01/02-chart-dan-candlestick": createSVG(`
    ${textNode(100, 30, "BULLISH (Naik)")}
    ${textNode(300, 30, "BEARISH (Turun)")}
    ${candleUp(90, 70, 20, 80, 50, 170)}
    ${candleDown(290, 70, 20, 80, 50, 170)}
    ${textNode(50, 50, "High", "#aaaaaa", 12)}
    ${lineNode(70, 50, 100, 50, "#aaaaaa", 1, "2,2")}
    ${textNode(50, 75, "Close", "#00ffaa", 12)}
    ${lineNode(70, 70, 90, 70, "#00ffaa", 1, "2,2")}
    ${textNode(50, 145, "Open", "#00ffaa", 12)}
    ${lineNode(70, 150, 90, 150, "#00ffaa", 1, "2,2")}
    ${textNode(50, 175, "Low", "#aaaaaa", 12)}
    ${lineNode(70, 170, 100, 170, "#aaaaaa", 1, "2,2")}

    ${textNode(350, 50, "High", "#aaaaaa", 12)}
    ${textNode(350, 75, "Open", "#ff4444", 12)}
    ${textNode(350, 145, "Close", "#ff4444", 12)}
    ${textNode(350, 175, "Low", "#aaaaaa", 12)}
  `),
  "level-01/03-trend-dan-range": createSVG(`
    ${textNode(80, 30, "Uptrend")}
    ${pathNode("M20,150 L60,110 L80,130 L120,70 L140,90 L180,40", "#00ffaa")}
    ${textNode(320, 30, "Downtrend")}
    ${pathNode("M220,40 L260,90 L280,70 L320,130 L340,110 L380,160", "#ff4444")}
    ${textNode(200, 120, "Sideways (Range)")}
    ${pathNode("M150,160 L180,140 L210,160 L240,140 L270,160 L300,140", "#8888ff")}
  `),
  "level-01/04-support-resistance-awal": createSVG(`
    ${textNode(200, 30, "Resistance (Atap)", "#ff4444")}
    ${lineNode(50, 50, 350, 50, "#ff4444", 3)}
    ${pathNode("M50,150 L100,50 L150,150 L200,50 L250,150 L300,50 L350,150", "#00ffaa")}
    ${lineNode(50, 150, 350, 150, "#00ffaa", 3)}
    ${textNode(200, 180, "Support (Lantai)", "#00ffaa")}
  `),
  "level-01/05-risiko-dasar": createSVG(`
    ${textNode(200, 30, "Risk Management", "#ffffaa")}
    ${candleUp(180, 80, 40, 60, 60, 160)}
    ${lineNode(150, 80, 250, 80, "#00ffaa", 2, "4,4")}
    ${textNode(120, 85, "Entry")}
    ${lineNode(150, 140, 250, 140, "#ff4444", 2, "4,4")}
    ${textNode(120, 145, "Stop Loss")}
    ${textNode(320, 110, "Risk Maks: 1%", "#ff4444")}
    ${textNode(320, 130, "(Rugi Terukur)", "#ff4444", 10)}
  `),
  "level-01/06-ringkasan-level-1": createSVG(`
    ${textNode(200, 100, "LEVEL 1: DASAR SELESAI!", "#00ffaa", 24)}
    ${textNode(200, 130, "Chart, Trend, SNR, Risk", "#aaaaaa", 14)}
  `),

  // Level 2
  "level-02/01-candle-bullish-bearish": createSVG(`
    ${textNode(200, 30, "Pertarungan Buyer vs Seller")}
    ${candleUp(120, 60, 30, 100, 40, 180)}
    ${candleDown(250, 60, 30, 100, 40, 180)}
    ${textNode(135, 120, "B", "#111", 20)}
    ${textNode(265, 120, "S", "#111", 20)}
  `),
  "level-02/02-candle-dominan-lemah": createSVG(`
    ${textNode(100, 30, "Dominan")}
    ${candleUp(90, 50, 20, 120, 40, 180)}
    ${textNode(300, 30, "Lemah (Doji)")}
    ${candleUp(290, 100, 20, 5, 40, 180)}
    ${textNode(100, 190, "Kekuatan Penuh", "#aaaaaa", 12)}
    ${textNode(300, 190, "Keraguan", "#aaaaaa", 12)}
  `),
  "level-02/03-momentum-sederhana": createSVG(`
    ${textNode(200, 20, "Momentum (Kecepatan)")}
    ${candleDown(80, 50, 20, 60, 40, 120)}
    ${candleDown(120, 110, 20, 50, 100, 170)}
    ${candleDown(160, 160, 20, 20, 150, 190)}
    ${textNode(120, 190, "Melemah", "#ff4444", 12)}
    
    ${candleUp(260, 140, 20, 20, 130, 170)}
    ${candleUp(300, 90, 20, 50, 80, 150)}
    ${candleUp(340, 30, 20, 60, 20, 100)}
    ${textNode(300, 190, "Menguat", "#00ffaa", 12)}
  `),
  "level-02/04-latihan-candle": createSVG(`
    ${textNode(200, 30, "Engulfing (Menelan)")}
    ${candleDown(150, 100, 20, 40, 80, 150)}
    ${candleUp(200, 70, 25, 80, 50, 170)}
    ${textNode(200, 190, "Buyer mengalahkan Seller", "#00ffaa", 12)}
  `),
  "level-02/05-ringkasan-level-2": createSVG(`
    ${textNode(200, 100, "LEVEL 2: CANDLESTICK SELESAI!", "#00ffaa", 20)}
  `),

  // Level 3
  "level-03/01-support-dasar": createSVG(`
    ${textNode(200, 30, "Support = Lantai/Demand")}
    ${pathNode("M50,50 L100,150 L150,80 L200,150 L250,60 L300,150 L350,40", "#00ffaa")}
    ${lineNode(80, 150, 320, 150, "#00ffaa", 4)}
    ${textNode(200, 175, "Harga memantul naik", "#00ffaa", 12)}
  `),
  "level-03/02-resistance-dasar": createSVG(`
    ${textNode(200, 180, "Resistance = Atap/Supply")}
    ${pathNode("M50,150 L100,50 L150,120 L200,50 L250,140 L300,50 L350,160", "#ff4444")}
    ${lineNode(80, 50, 320, 50, "#ff4444", 4)}
    ${textNode(200, 35, "Harga ditolak turun", "#ff4444", 12)}
  `),
  "level-03/03-area-snr-valid": createSVG(`
    ${textNode(200, 20, "Support Become Resistance (SBR)")}
    ${pathNode("M50,50 L100,100 L150,50 L200,150 L250,100 L300,180", "#00ffaa")}
    ${lineNode(80, 100, 320, 100, "#ffff00", 3)}
    ${textNode(125, 120, "Support", "#00ffaa", 12)}
    ${textNode(250, 85, "Resistance", "#ff4444", 12)}
  `),
  "level-03/04-kesalahan-menarik-snr": createSVG(`
    ${textNode(200, 30, "Jangan tarik terlalu banyak garis!")}
    ${lineNode(50, 60, 350, 60, "#555", 1)}
    ${lineNode(50, 80, 350, 80, "#555", 1)}
    ${lineNode(50, 100, 350, 100, "#555", 1)}
    ${lineNode(50, 120, 350, 120, "#555", 1)}
    ${pathNode("M50,150 L100,50 L200,180 L300,40", "#00ffaa")}
    ${textNode(200, 180, "Fokus ke swing utama saja", "#00ffaa", 14)}
  `),
  "level-03/05-ringkasan-level-3": createSVG(`
    ${textNode(200, 100, "LEVEL 3: SNR SELESAI!", "#00ffaa", 20)}
  `),

  // Level 4
  "level-04/01-breakout-dasar": createSVG(`
    ${textNode(200, 20, "Breakout Valid (Close Body)")}
    ${lineNode(50, 100, 350, 100, "#ff4444", 2)}
    ${candleUp(180, 120, 20, 40, 110, 170)}
    ${candleUp(220, 60, 20, 50, 50, 120)}
    ${textNode(230, 40, "Close di luar batas", "#00ffaa", 12)}
  `),
  "level-04/02-fake-breakout": createSVG(`
    ${textNode(200, 20, "Fake Breakout (Wick saja)")}
    ${lineNode(50, 100, 350, 100, "#ff4444", 2)}
    ${candleUp(180, 120, 20, 40, 110, 170)}
    ${candleDown(220, 110, 20, 40, 40, 160)}
    ${textNode(230, 30, "Jarum (Wick)", "#ff4444", 12)}
    ${textNode(230, 165, "Close kembali di dalam", "#ff4444", 12)}
  `),
  "level-04/03-break-and-retest": createSVG(`
    ${textNode(200, 20, "Break & Retest")}
    ${lineNode(50, 120, 350, 120, "#ff4444", 2)}
    ${pathNode("M50,180 L150,140 L180,180 L220,80 L260,120 L320,40", "#00ffaa")}
    ${textNode(220, 60, "Break", "#00ffaa", 12)}
    ${textNode(260, 140, "Retest", "#ffffaa", 12)}
  `),
  "level-04/04-retest-sehat-dan-lemah": createSVG(`
    ${textNode(200, 20, "Retest Sehat vs Lemah")}
    ${lineNode(50, 100, 350, 100, "#aaaaaa", 2)}
    ${candleUp(100, 40, 15, 50, 30, 100)}
    ${candleDown(120, 50, 10, 15, 40, 70)}
    ${candleDown(135, 65, 10, 15, 55, 85)}
    ${candleDown(150, 80, 10, 15, 70, 100)}
    ${textNode(135, 120, "Sehat (Pelan)", "#00ffaa", 12)}
    
    ${candleUp(250, 40, 15, 50, 30, 100)}
    ${candleDown(280, 40, 15, 80, 30, 140)}
    ${textNode(285, 150, "Lemah (Deras)", "#ff4444", 12)}
  `),
  "level-04/05-ringkasan-level-4": createSVG(`
    ${textNode(200, 100, "LEVEL 4: BREAKOUT SELESAI!", "#00ffaa", 20)}
  `),

  // Level 5
  "level-05/01-market-structure": createSVG(`
    ${textNode(200, 20, "Market Structure")}
    ${pathNode("M30,160 L100,60 L150,110 L220,30 L270,80 L350,20", "#00ffaa")}
    ${textNode(100, 45, "High")}
    ${textNode(150, 130, "Low")}
  `),
  "level-05/02-hh-hl-lh-ll": createSVG(`
    ${textNode(200, 20, "HH, HL, LH, LL")}
    ${pathNode("M30,160 L100,60 L150,110 L220,30", "#00ffaa")}
    ${textNode(100, 45, "HH")}
    ${textNode(150, 130, "HL")}
    ${textNode(220, 15, "HH")}
    
    ${pathNode("M250,80 L300,160 L330,120 L380,180", "#ff4444")}
    ${textNode(250, 65, "LH")}
    ${textNode(300, 180, "LL")}
    ${textNode(330, 105, "LH")}
  `),
  "level-05/03-bos-dasar": createSVG(`
    ${textNode(200, 20, "Break of Structure (BOS)")}
    ${pathNode("M50,150 L150,70 L200,120 L300,40", "#00ffaa")}
    ${lineNode(150, 70, 300, 70, "#aaaaaa", 2, "4,4")}
    ${textNode(250, 60, "BOS", "#00ffaa", 12)}
  `),
  "level-05/04-choch-dasar": createSVG(`
    ${textNode(200, 20, "Change of Character (CHoCH)")}
    ${pathNode("M50,150 L120,60 L180,100 L230,40 L280,140", "#ffaa00")}
    ${lineNode(180, 100, 300, 100, "#aaaaaa", 2, "4,4")}
    ${textNode(290, 90, "CHoCH", "#ff4444", 12)}
    ${textNode(180, 120, "HL Terakhir", "#aaaaaa", 10)}
  `),
  "level-05/05-ringkasan-level-5": createSVG(`
    ${textNode(200, 100, "LEVEL 5: STRUCTURE SELESAI!", "#00ffaa", 20)}
  `),

  // Level 6
  "level-06/01-liquidity-dasar": createSVG(`
    ${textNode(200, 20, "Liquidity (Kumpulan Uang/SL)")}
    ${pathNode("M50,50 L100,130 L150,60 L200,130 L250,50 L300,130 L350,40", "#00ffaa")}
    ${lineNode(80, 130, 320, 130, "#ffff00", 2, "4,4")}
    ${textNode(200, 150, "$$$ Likuiditas (Stop Loss Retail) $$$", "#00ffaa", 14)}
  `),
  "level-06/02-liquidity-high-low": createSVG(`
    ${textNode(200, 20, "Equal Highs (Target)")}
    ${pathNode("M50,150 L150,60 L200,120 L250,60 L350,160", "#ff4444")}
    ${lineNode(100, 60, 300, 60, "#ffff00", 2, "4,4")}
    ${textNode(200, 45, "$$$ Likuiditas atas $$$", "#00ffaa", 14)}
  `),
  "level-06/03-sweep": createSVG(`
    ${textNode(200, 20, "Sweep (Sapuan Likuiditas)")}
    ${lineNode(50, 140, 350, 140, "#ffff00", 2, "4,4")}
    ${candleDown(180, 80, 20, 60, 60, 180)}
    ${candleUp(220, 90, 20, 50, 70, 160)}
    ${textNode(200, 190, "Hanya Wick yang tembus = Sweep", "#00ffaa", 12)}
  `),
  "level-06/04-stop-hunt": createSVG(`
    ${textNode(200, 20, "Stop Hunt")}
    ${pathNode("M50,100 L150,100 L200,160 L250,50", "#ff4444")}
    ${lineNode(50, 100, 200, 100, "#ffff00", 2, "4,4")}
    ${textNode(200, 180, "Harga dijatuhkan sengaja untuk ambil SL", "#ff4444", 12)}
  `),
  "level-06/05-ringkasan-level-6": createSVG(`
    ${textNode(200, 100, "LEVEL 6: LIQUIDITY SELESAI!", "#00ffaa", 20)}
  `),

  // Level 7
  "level-07/01-risk-management": createSVG(`
    ${textNode(200, 20, "Risk Management")}
    ${textNode(200, 80, "Modal: $1000", "#00ffaa", 18)}
    ${textNode(200, 110, "Risk 1%: $10 per trade", "#ffff00", 16)}
    ${textNode(200, 140, "Bisa menahan 100x kalah beruntun!", "#aaaaaa", 14)}
  `),
  "level-07/02-sl-tp-rr": createSVG(`
    ${textNode(200, 20, "Risk to Reward (RR) 1:2")}
    ${lineNode(150, 50, 250, 50, "#00ffaa", 2)}
    ${textNode(200, 45, "TP (+$20)")}
    ${lineNode(150, 100, 250, 100, "#aaaaaa", 2)}
    ${textNode(200, 95, "Entry")}
    ${lineNode(150, 125, 250, 125, "#ff4444", 2)}
    ${textNode(200, 140, "SL (-$10)")}
    <rect x="180,100" width="40" height="25" fill="#ff4444" opacity="0.3"/>
    <rect x="180,50" width="40" height="50" fill="#00ffaa" opacity="0.3"/>
  `),
  "level-07/03-lot-dan-risk-per-trade": createSVG(`
    ${textNode(200, 20, "Hitung Lot")}
    ${textNode(200, 80, "Lot = Risk ($) / Jarak SL", "#ffff00", 16)}
    ${textNode(200, 120, "SL Makin Lebar = Lot Makin Kecil", "#00ffaa", 14)}
  `),
  "level-07/04-overtrade-dan-layering": createSVG(`
    ${textNode(200, 20, "Jauhi Layering/Overtrade")}
    ${candleDown(100, 50, 20, 30, 40, 90)}
    ${textNode(160, 65, "Buy 0.1", "#ff4444")}
    ${candleDown(130, 90, 20, 30, 80, 130)}
    ${textNode(190, 105, "Buy 0.2", "#ff4444")}
    ${candleDown(160, 130, 20, 40, 120, 180)}
    ${textNode(220, 150, "Buy 0.4 (MARGIN CALL)", "#ff4444")}
  `),
  "level-07/05-ringkasan-level-7": createSVG(`
    ${textNode(200, 100, "LEVEL 7: RISK MGT SELESAI!", "#00ffaa", 20)}
  `),

  // Level 8
  "level-08/01-entry-plan": createSVG(`
    ${textNode(200, 20, "Entry Plan")}
    ${pathNode("M50,150 L150,60 L200,100", "#00ffaa")}
    ${lineNode(200, 100, 250, 40, "#00ffaa", 2, "4,4")}
    ${textNode(250, 30, "Plan TP", "#00ffaa")}
    ${lineNode(200, 100, 220, 140, "#ff4444", 2, "4,4")}
    ${textNode(220, 155, "Plan SL", "#ff4444")}
  `),
  "level-08/02-invalidasi": createSVG(`
    ${textNode(200, 20, "Invalidasi (Plan Gagal)")}
    ${pathNode("M50,150 L100,50 L150,120 L200,30 L250,180", "#ff4444")}
    ${lineNode(100, 120, 300, 120, "#ffff00", 2, "4,4")}
    ${textNode(300, 110, "HL Tertembus = Invalidasi Buy", "#ff4444", 12)}
  `),
  "level-08/03-poi-dasar": createSVG(`
    ${textNode(200, 20, "Point of Interest (POI)")}
    <rect x="150" y="110" width="60" height="30" fill="#00ffaa" opacity="0.2"/>
    ${textNode(180, 130, "POI", "#00ffaa", 12)}
    ${pathNode("M50,150 L100,50 L180,120 L250,30", "#00ffaa")}
  `),
  "level-08/04-checklist-entry": createSVG(`
    ${textNode(200, 20, "Checklist Entry")}
    ${textNode(150, 60, "✅ Tren Sesuai", "#00ffaa", 16)}
    ${textNode(150, 100, "✅ Masuk POI", "#00ffaa", 16)}
    ${textNode(150, 140, "✅ Ada Konfirmasi", "#00ffaa", 16)}
    ${textNode(300, 100, "➜ KLIK BUY", "#ffff00", 16)}
  `),
  "level-08/05-ringkasan-level-8": createSVG(`
    ${textNode(200, 100, "LEVEL 8: ENTRY PLAN SELESAI!", "#00ffaa", 20)}
  `),

  // Level 9
  "level-09/01-ict-dasar": createSVG(`
    ${textNode(200, 20, "ICT: Smart Money")}
    ${pathNode("M50,100 L150,100 L180,140 L220,40", "#00ffaa")}
    ${textNode(180, 160, "Ambil Liquidity Retail", "#ff4444", 12)}
    ${textNode(250, 60, "Ekspansi", "#00ffaa", 12)}
  `),
  "level-09/02-order-block": createSVG(`
    ${textNode(200, 20, "Order Block (OB)")}
    ${candleDown(100, 100, 20, 30, 90, 140)}
    ${candleUp(130, 50, 20, 80, 40, 140)}
    ${candleUp(160, 20, 20, 40, 10, 70)}
    <rect x="90" y="90" width="40" height="50" fill="#00ffaa" opacity="0.3" stroke="#00ffaa"/>
    ${textNode(110, 160, "OB Valid", "#00ffaa", 12)}
  `),
  "level-09/03-fvg": createSVG(`
    ${textNode(200, 20, "Fair Value Gap (FVG)")}
    ${candleUp(100, 100, 20, 30, 90, 140)}
    ${candleUp(130, 40, 20, 50, 30, 100)}
    ${candleUp(160, 10, 20, 20, 5, 40)}
    <rect x="120" y="40" width="40" height="50" fill="#ffff00" opacity="0.3"/>
    ${textNode(220, 65, "Celah Kosong (FVG)", "#ffff00", 12)}
  `),
  "level-09/04-displacement": createSVG(`
    ${textNode(200, 20, "Displacement")}
    ${lineNode(50, 80, 350, 80, "#aaaaaa", 2, "4,4")}
    ${candleUp(180, 20, 30, 70, 10, 100)}
    ${textNode(250, 50, "BOS Kuat", "#00ffaa", 12)}
    ${textNode(195, 120, "Institusi Masuk", "#00ffaa", 12)}
  `),
  "level-09/05-session-dan-poi": createSVG(`
    ${textNode(200, 20, "Trading Sessions")}
    <rect x="50" y="60" width="80" height="80" fill="#555" opacity="0.3"/>
    ${textNode(90, 100, "Asia")}
    ${pathNode("M50,100 L130,100", "#aaaaaa")}
    <rect x="130" y="40" width="80" height="120" fill="#ff4444" opacity="0.3"/>
    ${textNode(170, 100, "London")}
    ${pathNode("M130,100 L170,150 L210,50", "#ff4444")}
    <rect x="210" y="20" width="100" height="160" fill="#00ffaa" opacity="0.3"/>
    ${textNode(260, 100, "NY")}
    ${pathNode("M210,50 L310,20", "#00ffaa")}
  `),
  "level-09/06-ringkasan-level-9": createSVG(`
    ${textNode(200, 100, "LEVEL 9: ICT SELESAI!", "#00ffaa", 20)}
  `),

  // Level 10
  "level-10/01-full-chart-analysis": createSVG(`
    ${textNode(200, 20, "Top-Down Analysis")}
    ${textNode(200, 60, "1. Daily (Trend Utama)", "#00ffaa")}
    ${textNode(200, 100, "2. H1 (POI / Zona Sabar)", "#ffff00")}
    ${textNode(200, 140, "3. M15 (Konfirmasi Entry)", "#ff4444")}
  `),
  "level-10/02-bias-liquidity-poi": createSVG(`
    ${textNode(200, 20, "Bias, Liquidity, POI")}
    ${textNode(200, 80, "Bias: BULLISH", "#00ffaa", 18)}
    ${textNode(200, 120, "Tunggu harga di bawah, lalu Buy", "#aaaaaa", 14)}
  `),
  "level-10/03-entry-sl-tp-invalidasi": createSVG(`
    ${textNode(200, 20, "Eksekusi Akhir")}
    ${candleUp(180, 80, 20, 40, 70, 130)}
    ${textNode(160, 100, "Buy")}
    ${lineNode(180, 140, 280, 140, "#ff4444", 2, "4,4")}
    ${textNode(230, 130, "SL Valid", "#ff4444")}
    ${lineNode(180, 40, 280, 40, "#00ffaa", 2, "4,4")}
    ${textNode(230, 30, "TP Logis", "#00ffaa")}
  `),
  "level-10/04-jurnal-dan-evaluasi": createSVG(`
    ${textNode(200, 20, "Jurnal Trading")}
    <rect x="120" y="50" width="160" height="120" fill="none" stroke="#00ffaa" stroke-width="2"/>
    ${lineNode(130, 70, 270, 70, "#aaaaaa", 1)}
    ${lineNode(130, 90, 270, 90, "#aaaaaa", 1)}
    ${lineNode(130, 110, 270, 110, "#aaaaaa", 1)}
    ${textNode(200, 150, "Cermin dirimu", "#00ffaa")}
  `),
  "level-10/05-final-preparation": createSVG(`
    ${textNode(200, 80, "🎉 SELAMAT! 🎉", "#00ffaa", 30)}
    ${textNode(200, 130, "Jadilah God Level Trader", "#ffff00", 18)}
  `)
};

let generatedCount = 0;
let modifiedCount = 0;
const foldersSet = new Set();

Object.keys(svgMap).forEach(key => {
  const [levelDir, filename] = key.split('/');
  
  // Create images dir
  const targetImgDir = path.join(baseImagesDir, levelDir);
  if (!fs.existsSync(targetImgDir)) {
    fs.mkdirSync(targetImgDir, { recursive: true });
  }
  foldersSet.add(targetImgDir);
  
  // Write SVG
  const svgPath = path.join(targetImgDir, `${filename}.svg`);
  fs.writeFileSync(svgPath, svgMap[key]);
  generatedCount++;
  
  // Read Markdown
  const mdPath = path.join(baseLessonsDir, levelDir, `${filename}.md`);
  if (fs.existsSync(mdPath)) {
    let mdContent = fs.readFileSync(mdPath, 'utf-8');
    
    // Inject image after ## Penjelasan if exists, else after Title
    const imageLink = `\n![Ilustrasi ${filename}](/images/lessons/${levelDir}/${filename}.svg)\n`;
    
    if (mdContent.includes('## Penjelasan')) {
      mdContent = mdContent.replace('## Penjelasan', '## Penjelasan' + imageLink);
      fs.writeFileSync(mdPath, mdContent);
      modifiedCount++;
    } else if (mdContent.includes('## Tujuan')) {
      mdContent = mdContent.replace('## Tujuan', '## Tujuan' + imageLink);
      fs.writeFileSync(mdPath, mdContent);
      modifiedCount++;
    } else {
      mdContent += imageLink;
      fs.writeFileSync(mdPath, mdContent);
      modifiedCount++;
    }
  }
});

console.log(`✅ ${generatedCount} gambar SVG berhasil dibuat.`);
console.log(`✅ ${foldersSet.size} folder gambar telah disiapkan.`);
console.log(`✅ ${modifiedCount} file .md berhasil diperbarui dengan link gambar.`);
