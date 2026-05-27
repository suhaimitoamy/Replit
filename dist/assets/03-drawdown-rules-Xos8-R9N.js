const a=`# Aturan Drawdown: Sang Pencabut Nyawa Akun

Level: Level 45 — Prop Firm Preparation
XP: 10

![Ilustrasi Aturan Drawdown](/images/lessons/level-45/03-drawdown-rules.svg)

## Mengapa Materi Ini Penting
*Drawdown* (penurunan modal) adalah alasan nomor satu mengapa 90% trader gagal lulus ujian Prop Firm. Memahami bagaimana Prop Firm menghitung drawdown akan menyelamatkan Anda dari kehilangan akun karena kesalahan konyol, seperti tidak tahu bedanya *Equity* dan *Balance*. 

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan perbedaan *Daily Drawdown* dan *Maximum Drawdown*.
- Memahami konsep *Balance-based* versus *Equity-based* drawdown.
- Mengetahui apa itu *Trailing Drawdown* dan mengapa ini sangat berbahaya.

## Penjelasan
Di dunia Prop Firm, kerugian dibatasi dengan sangat ketat untuk melindungi modal perusahaan. Ada dua batas kerugian utama yang harus Anda perhatikan:

**1. Maximum Daily Drawdown (Batas Kerugian Harian)**
Ini adalah jumlah maksimal uang yang boleh Anda hilangkan dalam satu hari perdagangan (biasanya dihitung berdasarkan waktu server, misal jam 00:00 CE(S)T). Angkanya biasa berada di kisaran **4% hingga 5%** dari modal awal atau modal harian Anda.

*Perhatian*: Banyak trader tersandung karena tidak tahu bahwa Daily Drawdown sering kali dihitung berdasarkan **Equity**, bukan hanya *Balance* (saldo tertutup). 
Misal: Saldo awal hari ini $100,000. Batas harian 5% ($5,000). Jika Anda sedang profit mengambang (*floating profit*) +$3,000, lalu harga berbalik arah dan menjadi *floating loss* -$2,100... boom! Akun Anda hangus. Kenapa? Karena dari puncak *floating* ($103,000) ke bawah ($97,900), pergerakannya adalah -$5,100. Meskipun *loss* bersih Anda hanya -$2,100, Anda telah melanggar batas pergerakan harian 5%. (Catatan: Ini tergantung Prop Firm, pastikan membaca aturannya!).

**2. Maximum Overall Drawdown (Batas Kerugian Total)**
Ini adalah batas mutlak seberapa banyak akun Anda boleh turun dari saldo awal. Biasanya ditetapkan di angka **8% hingga 10%**. Jika akun $100,000, maka Equity atau Balance Anda tidak boleh menyentuh $90,000 (jika batas 10%).

**3. Trailing Drawdown vs Static Drawdown**
- **Static Drawdown**: Batas bawah selalu tetap. Akun $100k, Max DD 10%. Batas bawahnya SELALU $90,000. Ini yang paling bersahabat untuk trader.
- **Trailing Drawdown**: Batas bawah akan *mengikuti* (naik) setiap kali Anda mencapai rekor saldo tertinggi (High Water Mark). Jika Anda profit menjadi $105,000, batas bawah 10% akan ikut naik dari $90,000 menjadi $95,000. Jika setelah itu Anda rugi $10,000, akun Anda hangus, meskipun saldo masih $95,000! Ini sangat menjebak dan butuh manajemen risiko super ketat.

## Contoh di Chart
Anggaplah Anda *buy* EURUSD di Support (Order Block).
- Harga naik, Anda *floating profit* $3,000, tetapi Anda belum *Take Profit* (menutup posisi).
- Tiba-tiba ada berita fundamental buruk, harga anjlok menembus Support.
- Posisi Anda terkena *Stop Loss* di -$2,500.
Jika Prop Firm Anda menggunakan aturan *Equity-based Daily Drawdown* sebesar 5% ($5,000), akun Anda akan GAGAL. Penurunan dari puncak $3,000 ke -$2,500 adalah $5,500 (> $5,000 batas harian).

Pelajaran: Jangan biarkan *floating profit* besar berubah menjadi kerugian. Gunakan *Trailing Stop* atau pasang *Break Even* jika harga sudah berjalan jauh sesuai analisa.

## Kesalahan Umum
- **Martingale / Averaging saat Rugi**: Menambah posisi saat *floating loss* berharap harga berbalik. Ini adalah resep instan untuk menembus Daily Drawdown.
- **Lupa Jam Reset Server**: Trading melewati tengah malam jam server dengan *floating loss*, sehingga kerugian hari sebelumnya dihitung ke hari yang baru.
- **Menahan Posisi Terlalu Lama Tanpa TP**: Terkena jebakan *Equity drawdown* karena *floating profit* yang menguap.

## Latihan
Akun Prop Firm Anda bernilai $100,000. Daily Drawdown adalah 5% *Balance-based* (saldo awal hari). Di pagi hari saldo Anda $102,000. 
Berapa batas saldo terendah (*Equity* atau *Balance*) yang tidak boleh Anda sentuh hari itu?
*(Jawaban: 5% dari $102,000 = $5,100. $102,000 - $5,100 = $96,900).*

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Trailing Drawdown vs Static Drawdown**. Pahami mengapa *Trailing Drawdown* jauh lebih sulit.
`;export{a as default};
