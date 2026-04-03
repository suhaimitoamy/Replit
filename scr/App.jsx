import { useMemo, useState } from 'react'

const snapshots = [
  {
    id: 'risk-off-bid',
    label: 'Risk-off bid',
    xau: 3358.4,
    dxy: 103.1,
    us10y: 4.12,
    realYield: 1.78,
    bias: 'Bullish',
    macroScore: 8,
    technicalScore: 7,
    newsScore: 8,
    contextScore: 7,
    support: '3342 - 3348',
    resistance: '3368 - 3375',
    catalyst: 'Ketidakpastian geopolitik dan real yield yang melunak mendorong minat safe haven.',
    dailyBrief:
      'Gold cenderung bullish selama tetap bertahan di atas support intraday. Fokus utama adalah buy on pullback saat DXY gagal melanjutkan penguatan.',
    alerts: [
      'Pantau reaksi di area 3342 - 3348 untuk buy continuation.',
      'Jika DXY menembus naik kuat, gold bisa masuk fase pullback lebih dalam.',
      'Break di atas 3368 membuka ruang ke high berikutnya.'
    ]
  },
  {
    id: 'hawkish-fed',
    label: 'Hawkish Fed pressure',
    xau: 3316.2,
    dxy: 104.4,
    us10y: 4.28,
    realYield: 1.96,
    bias: 'Bearish',
    macroScore: 3,
    technicalScore: 4,
    newsScore: 4,
    contextScore: 5,
    support: '3304 - 3308',
    resistance: '3324 - 3332',
    catalyst: 'Nada hawkish The Fed dan yield yang naik menekan emas dalam jangka pendek.',
    dailyBrief:
      'Bias intraday cenderung bearish selama harga tertahan di bawah resistance. Fokus utama adalah sell on rally kecuali ada reversal kuat dari data makro atau DXY melemah tajam.',
    alerts: [
      'Area 3324 - 3332 berpotensi jadi zona sell re-entry.',
      'Jika support 3304 gagal bertahan, momentum turun bisa berlanjut.',
      'Waspadai squeeze jika data ekonomi lebih lemah dari ekspektasi.'
    ]
  },
  {
    id: 'range-before-cpi',
    label: 'Range before CPI',
    xau: 3332.7,
    dxy: 103.6,
    us10y: 4.18,
    realYield: 1.86,
    bias: 'Neutral',
    macroScore: 5,
    technicalScore: 5,
    newsScore: 6,
    contextScore: 6,
    support: '3322 - 3326',
    resistance: '3338 - 3344',
    catalyst: 'Pasar menunggu data inflasi, sehingga gold bergerak lebih banyak dalam range dan reaktif terhadap headline.',
    dailyBrief:
      'Gold berada dalam fase wait-and-see. Strategi terbaik adalah sabar sampai data keluar atau memanfaatkan range dengan risk ketat.',
    alerts: [
      'Jangan kejar breakout palsu sebelum data besar dirilis.',
      'Perhatikan spike volatilitas saat CPI/NFP/FOMC keluar.',
      'Break bersih dari range akan memberi arah berikutnya.'
    ]
  }
]

const macroEvents = [
  { name: 'US CPI', impact: 'High', hint: 'Data inflasi rendah biasanya mendukung gold.' },
  { name: 'FOMC / Powell', impact: 'High', hint: 'Nada dovish cenderung bullish untuk gold.' },
  { name: 'NFP', impact: 'High', hint: 'Data tenaga kerja kuat bisa menekan gold via yield dan USD.' },
  { name: 'PPI', impact: 'Medium', hint: 'Konfirmasi arah inflasi dan ekspektasi rate.' },
  { name: 'US 10Y Yield Spike', impact: 'High', hint: 'Yield naik cepat biasanya menjadi headwind untuk gold.' },
  { name: 'DXY Breakdown', impact: 'High', hint: 'Dollar melemah dapat membuka ruang naik untuk gold.' }
]

const featureCards = [
  {
    title: 'Macro Analysis',
    body: 'Fed, CPI, NFP, DXY, US10Y, real yield, dan sentimen safe haven.'
  },
  {
    title: 'Technical Context',
    body: 'Trend, zone support-resistance, breakout, pullback, dan quality setup.'
  },
  {
    title: 'News & Event Radar',
    body: 'High-impact events dan narasi utama yang paling memengaruhi XAUUSD.'
  },
  {
    title: 'Ask Gold AI',
    body: 'Tanya bias, skenario, level, atau penjelasan pergerakan gold secara cepat.'
  }
]

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function getRiskOffset(profile) {
  if (profile === 'Conservative') return -1
  if (profile === 'Aggressive') return 1
  return 0
}

function buildSetup(snapshot, profile) {
  const offset = getRiskOffset(profile)
  const longScore = clamp(
    snapshot.macroScore + snapshot.technicalScore + snapshot.contextScore - (snapshot.bias === 'Bearish' ? 5 : 0) + offset,
    1,
    30
  )
  const shortScore = clamp(
    (10 - snapshot.macroScore) + (10 - snapshot.technicalScore) + snapshot.contextScore - (snapshot.bias === 'Bullish' ? 5 : 0) - offset,
    1,
    30
  )

  const preferred = longScore === shortScore ? 'Wait / Neutral' : longScore > shortScore ? 'Buy pullback' : 'Sell rally'
  const quality = Math.max(longScore, shortScore) >= 22 ? 'A' : Math.max(longScore, shortScore) >= 18 ? 'B' : 'C'

  return {
    longScore,
    shortScore,
    preferred,
    quality,
    plan:
      preferred === 'Buy pullback'
        ? `Cari reaksi bullish di support ${snapshot.support} lalu validasi momentum sebelum entry.`
        : preferred === 'Sell rally'
          ? `Cari penolakan bearish di resistance ${snapshot.resistance} dan hindari entry saat market terlalu overextended.`
          : `Market masih campuran. Prioritaskan disiplin, tunggu breakout yang jelas dari area ${snapshot.support} / ${snapshot.resistance}.`
  }
}

function answerGold(question, snapshot, profile) {
  const q = question.toLowerCase()
  const setup = buildSetup(snapshot, profile)

  if (!q.trim()) {
    return 'Tulis pertanyaan seperti: apakah gold bullish hari ini, area entry, atau dampak CPI ke XAUUSD.'
  }

  if (q.includes('bullish') || q.includes('naik') || q.includes('buy')) {
    if (setup.preferred === 'Buy pullback') {
      return `Bias saat ini cenderung bullish. Gold lebih menarik dibeli di area support ${snapshot.support} selama tidak ada lonjakan DXY atau yield yang membatalkan momentum. Kualitas setup saat ini ${setup.quality}.`
    }
    return `Bias buy belum dominan. Saat ini lebih aman menunggu reclaim yang kuat di atas resistance ${snapshot.resistance} atau konfirmasi baru dari pelemahan DXY/yield.`
  }

  if (q.includes('bearish') || q.includes('turun') || q.includes('sell') || q.includes('short')) {
    if (setup.preferred === 'Sell rally') {
      return `Bias saat ini cenderung bearish. Zona yang paling masuk akal untuk sell adalah area resistance ${snapshot.resistance}, terutama jika yield dan DXY tetap kuat. Kualitas setup saat ini ${setup.quality}.`
    }
    return `Bias sell belum dominan. Short agresif kurang ideal kecuali support ${snapshot.support} jebol dengan momentum yang jelas.`
  }

  if (q.includes('cpi') || q.includes('inflasi')) {
    return 'Untuk gold, CPI rendah biasanya bullish karena pasar bisa pricing in pelonggaran kebijakan. CPI tinggi cenderung mendorong yield dan USD naik, yang sering menekan gold.'
  }

  if (q.includes('nfp') || q.includes('payroll')) {
    return 'NFP kuat biasanya negatif untuk gold jika pasar membaca ekonomi tetap panas dan yield ikut naik. NFP lemah bisa mendukung gold, terutama bila DXY melemah setelah rilis.'
  }

  if (q.includes('fed') || q.includes('powell') || q.includes('fomc')) {
    return 'Nada dovish dari The Fed umumnya mendukung gold karena menekan yield riil dan USD. Nada hawkish biasanya memberi tekanan jangka pendek pada XAUUSD.'
  }

  if (q.includes('dxy') || q.includes('dollar')) {
    return `DXY saat ini ada di ${snapshot.dxy}. Secara umum, korelasi terbalik masih penting: jika DXY melemah, gold lebih mudah naik; jika DXY menguat tajam, gold sering tertahan.`
  }

  if (q.includes('yield') || q.includes('10y') || q.includes('obligasi')) {
    return `US10Y saat ini ada di ${snapshot.us10y}% dan real yield proxy ${snapshot.realYield}%. Yield yang naik cepat biasanya jadi headwind untuk gold, sementara yield yang turun memberi ruang bagi XAUUSD untuk menguat.`
  }

  if (q.includes('entry') || q.includes('level') || q.includes('zona')) {
    return `Level penting saat ini: support ${snapshot.support}, resistance ${snapshot.resistance}. Rencana terbaik: ${setup.plan}`
  }

  if (q.includes('risk') || q.includes('sl') || q.includes('stop')) {
    return 'Untuk gold, gunakan stop berdasarkan invalidation area, bukan angka acak. Hindari lot besar saat dekat event besar seperti CPI, NFP, atau FOMC.'
  }

  return `Ringkasnya, bias saat ini ${snapshot.bias.toLowerCase()} dengan preferensi ${setup.preferred.toLowerCase()}. Pendorong utama: ${snapshot.catalyst}`
}

function ScoreBar({ label, value, tone }) {
  return (
    <div className="score-wrap">
      <div className="score-label-row">
        <span>{label}</span>
        <strong>{value}/30</strong>
      </div>
      <div className="score-bar">
        <div className={`score-fill ${tone}`} style={{ width: `${(value / 30) * 100}%` }} />
      </div>
    </div>
  )
}

export default function App() {
  const [snapshotId, setSnapshotId] = useState(snapshots[0].id)
  const [riskProfile, setRiskProfile] = useState('Balanced')
  const [question, setQuestion] = useState('Apakah gold bullish hari ini?')
  const [history, setHistory] = useState([])

  const snapshot = useMemo(
    () => snapshots.find((item) => item.id === snapshotId) ?? snapshots[0],
    [snapshotId]
  )

  const setup = useMemo(() => buildSetup(snapshot, riskProfile), [snapshot, riskProfile])
  const generatedBrief = useMemo(() => {
    const macroTone = snapshot.macroScore >= 7 ? 'mendukung' : snapshot.macroScore <= 4 ? 'menekan' : 'campuran'
    const technicalTone = snapshot.technicalScore >= 7 ? 'trend dan momentum rapi' : snapshot.technicalScore <= 4 ? 'tekanan teknikal masih berat' : 'struktur masih menunggu pemicu'

    return `Bias ${snapshot.bias.toLowerCase()} dengan konteks makro yang ${macroTone}. Secara teknikal, ${technicalTone}. Strategi utama: ${setup.plan}`
  }, [snapshot, setup])

  const handleAsk = () => {
    const answer = answerGold(question, snapshot, riskProfile)
    setHistory((current) => [{ q: question, a: answer }, ...current].slice(0, 5))
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand">Goldbro</div>
          <p className="muted">
            Neurobro-style intelligence app yang disederhanakan khusus untuk XAUUSD.
          </p>
        </div>

        <div className="side-card">
          <label>Market scenario</label>
          <select value={snapshotId} onChange={(e) => setSnapshotId(e.target.value)}>
            {snapshots.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="side-card">
          <label>Risk profile</label>
          <select value={riskProfile} onChange={(e) => setRiskProfile(e.target.value)}>
            <option>Conservative</option>
            <option>Balanced</option>
            <option>Aggressive</option>
          </select>
        </div>

        <div className="side-card">
          <span className="chip">Focus asset: Gold only</span>
          <span className="chip">Main pair: XAUUSD</span>
          <span className="chip">Use case: intraday + swing</span>
        </div>
      </aside>

      <main className="main-content">
        <section className="hero">
          <div>
            <p className="eyebrow">Gold intelligence prototype</p>
            <h1>Aplikasi mirip Neurobro, tapi fokus penuh ke gold</h1>
            <p className="hero-copy">
              Dashboard ini menggabungkan empat pilar: macro, technical, event radar, dan Ask Gold AI.
              Saat ini masih menggunakan mock data supaya fondasinya jelas dulu.
            </p>
          </div>
          <div className="hero-badge">
            <span className="badge-title">Current bias</span>
            <strong>{snapshot.bias}</strong>
            <span>{setup.preferred}</span>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>XAUUSD</span>
            <strong>{snapshot.xau.toFixed(2)}</strong>
            <small>Mock live price</small>
          </div>
          <div className="stat-card">
            <span>DXY</span>
            <strong>{snapshot.dxy.toFixed(2)}</strong>
            <small>Dollar index context</small>
          </div>
          <div className="stat-card">
            <span>US 10Y</span>
            <strong>{snapshot.us10y.toFixed(2)}%</strong>
            <small>Yield pressure</small>
          </div>
          <div className="stat-card">
            <span>Real yield</span>
            <strong>{snapshot.realYield.toFixed(2)}%</strong>
            <small>Proxy for gold headwind/tailwind</small>
          </div>
        </section>

        <section className="feature-grid">
          {featureCards.map((card) => (
            <article className="panel feature-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </section>

        <section className="panel two-column">
          <div>
            <div className="section-title-row">
              <h2>Daily Gold Brief</h2>
              <span className="badge">{snapshot.label}</span>
            </div>
            <p>{snapshot.dailyBrief}</p>
            <p className="soft-box">{generatedBrief}</p>
            <p className="muted">Catalyst: {snapshot.catalyst}</p>
          </div>
          <div>
            <h3>Critical levels</h3>
            <ul className="clean-list">
              <li>
                <strong>Support:</strong> {snapshot.support}
              </li>
              <li>
                <strong>Resistance:</strong> {snapshot.resistance}
              </li>
              <li>
                <strong>Preferred plan:</strong> {setup.plan}
              </li>
              <li>
                <strong>Setup quality:</strong> {setup.quality}
              </li>
            </ul>
          </div>
        </section>

        <section className="grid-2">
          <article className="panel">
            <div className="section-title-row">
              <h2>Setup Scanner</h2>
              <span className="badge">{riskProfile}</span>
            </div>
            <ScoreBar label="Long setup" value={setup.longScore} tone="bull" />
            <ScoreBar label="Short setup" value={setup.shortScore} tone="bear" />
            <div className="scan-summary">
              <div>
                <span className="mini-title">Preferred</span>
                <strong>{setup.preferred}</strong>
              </div>
              <div>
                <span className="mini-title">Grade</span>
                <strong>{setup.quality}</strong>
              </div>
            </div>
          </article>

          <article className="panel">
            <div className="section-title-row">
              <h2>Event Radar</h2>
              <span className="badge">Macro watch</span>
            </div>
            <div className="event-list">
              {macroEvents.map((event) => (
                <div className="event-item" key={event.name}>
                  <div>
                    <strong>{event.name}</strong>
                    <p>{event.hint}</p>
                  </div>
                  <span className={`impact ${event.impact.toLowerCase()}`}>{event.impact}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid-2">
          <article className="panel">
            <div className="section-title-row">
              <h2>Ask Gold AI</h2>
              <span className="badge">Local demo brain</span>
            </div>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Contoh: apakah gold bullish hari ini?"
              rows={4}
            />
            <div className="button-row">
              <button type="button" onClick={handleAsk}>
                Analisis sekarang
              </button>
              <button
                type="button"
                className="ghost"
                onClick={() => setQuestion('Area entry gold hari ini di mana?')}
              >
                Contoh pertanyaan
              </button>
            </div>
            <div className="history-list">
              {history.length === 0 ? (
                <p className="muted">Belum ada pertanyaan. Tekan tombol analisis untuk melihat jawaban.</p>
              ) : (
                history.map((item, index) => (
                  <div className="history-item" key={`${item.q}-${index}`}>
                    <strong>Q:</strong> {item.q}
                    <p>
                      <strong>A:</strong> {item.a}
                    </p>
                  </div>
                ))
              )}
            </div>
          </article>

          <article className="panel">
            <div className="section-title-row">
              <h2>Alert Ideas</h2>
              <span className="badge">Action list</span>
            </div>
            <ul className="alerts-list">
              {snapshot.alerts.map((alert) => (
                <li key={alert}>{alert}</li>
              ))}
            </ul>
            <div className="soft-box compact">
              Versi production nanti bisa menambahkan push alert untuk breakout, data ekonomi besar, perubahan DXY,
              dan invalidasi setup.
            </div>
          </article>
        </section>

        <section className="panel">
          <div className="section-title-row">
            <h2>Roadmap produk</h2>
            <span className="badge">MVP → Pro</span>
          </div>
          <div className="roadmap-grid">
            <div className="roadmap-card">
              <h3>MVP</h3>
              <ul>
                <li>Daily brief untuk gold</li>
                <li>Event radar</li>
                <li>Ask Gold AI</li>
                <li>Setup scoring</li>
              </ul>
            </div>
            <div className="roadmap-card">
              <h3>V2</h3>
              <ul>
                <li>Real market data</li>
                <li>Alert engine</li>
                <li>User watchlist</li>
                <li>Session intelligence</li>
              </ul>
            </div>
            <div className="roadmap-card">
              <h3>V3</h3>
              <ul>
                <li>Trade journal review</li>
                <li>API access</li>
                <li>Mobile-first alerts</li>
                <li>Personalized bias model</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
