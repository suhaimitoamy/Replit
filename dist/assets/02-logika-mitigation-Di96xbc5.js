const a=`# Logika di Balik Mitigation Block

Level: Level 24 — Mitigation Block
XP: 10

![Ilustrasi Logika Mitigation Block](/images/lessons/level-24/02-logika-mitigation.svg)

## Mengapa Materi Ini Penting
Mengerti *apa* bentuk sebuah pola itu bagus, tetapi mengerti *mengapa* pola itu bekerja akan membuat keyakinan (conviction) Anda dalam trading menjadi sangat kuat. Logika Mitigation Block bertumpu pada konsep dasar likuiditas dan bagaimana institusi besar mengelola kerugian mereka (drawdown). Dengan memahami sisi psikologis dari pergerakan harga ini, Anda tidak akan sekadar menebak-nebak, melainkan mengikuti jejak *smart money*.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjelaskan arti kata "mitigasi" dalam konteks trading institusional.
- Memahami psikologi *smart money* yang terjebak di area *failure swing*.
- Menjabarkan proses perpindahan order yang menyebabkan harga memantul di Mitigation Block.

## Penjelasan

Kata **"Mitigasi"** (mitigation) secara harfiah berarti tindakan mengurangi keparahan, keseriusan, atau rasa sakit dari sesuatu. Dalam konteks trading ICT (Inner Circle Trader) dan *Smart Money Concepts* (SMC), mitigasi adalah proses di mana institusi besar mengurangi kerugian (floating loss) dari posisi mereka yang salah arah, dengan cara menutupnya di titik impas (break-even) atau dengan kerugian seminimal mungkin.

Mari kita bongkar logikanya langkah demi langkah menggunakan contoh **Bearish Mitigation Block**:

**1. Pembuatan Jebakan (The Setup)**
Harga sedang naik, membentuk sebuah **High**, lalu turun sedikit membentuk **Low**. Kemudian, *smart money* membeli dalam jumlah besar untuk mendorong harga naik kembali, berharap menembus High sebelumnya. Mereka menyuntikkan pesanan *Buy* yang masif. 

**2. Kegagalan (The Failure Swing)**
Namun, tekanan jual (supply) ternyata lebih besar dari yang diperkirakan. Harga tidak mampu menembus High sebelumnya, dan berhenti di **Lower High**. Institusi yang baru saja menyuntikkan pesanan *Buy* besar-besaran sekarang berada dalam masalah.

**3. Pembalikan Arah (The Breakdown)**
Harga jatuh tajam ke bawah menembus **Low** sebelumnya (BOS). Pergerakan jatuh yang tajam ini dikendalikan oleh tekanan jual institusional. Sekarang, perhatikan nasib pesanan *Buy* yang disuntikkan di titik *Lower High* tadi: **posisi tersebut sedang mengalami kerugian besar (floating loss atau drawdown).**

**4. Proses Mitigasi (The Mitigation)**
Karena *smart money* berdagang dengan volume yang sangat besar, mereka tidak bisa sembarangan menutup kerugian (stop loss) tanpa merusak pasar lebih parah. Mereka harus menunggu atau perlahan-lahan membawa harga kembali naik ke area **Lower High** tersebut.
Ketika harga menyentuh area Lower High (candle bullish terakhir tempat mereka buy), posisi *Buy* mereka akhirnya mencapai titik impas (break-even). 
Di titik impas ini, mereka **menutup pesanan Buy mereka**. 

**Bagaimana cara menutup pesanan Buy?**
Menutup pesanan *Buy* sama dengan melakukan aksi **Sell**. Aksi *Sell* masif yang dilakukan untuk menutup posisi inilah yang menciptakan tekanan jual baru, sehingga harga terdorong jatuh kembali. Inilah alasan mengapa harga sering kali bereaksi dan memantul kuat saat menyentuh Mitigation Block.

## Contoh di Chart
Bayangkan sebuah bank besar membeli EURUSD di harga 1.1050 (menciptakan Lower High), tetapi tiba-tiba harga anjlok ke 1.0950. Bank tersebut menahan posisi *Buy* yang sedang minus 100 pips. Beberapa waktu kemudian, harga naik kembali perlahan mendekati 1.1050. Saat harga tepat mencapai 1.1050, bank merasa lega dan menutup posisinya agar impas. Penutupan miliaran dolar posisi *Buy* ini berarti ada gelombang order *Sell* yang baru masuk ke pasar di 1.1050, menekan harga turun ke 1.0900.

## Kesalahan Umum
- **Tidak sabar menunggu harga kembali memitigasi.** Banyak trader ritel mengejar harga (FOMO) saat breakdown terjadi. Padahal trader profesional sabar menunggu institusi melakukan mitigasi di area *failure swing*.
- **Menganggap order sudah termitigasi seluruhnya jika harga hanya menyentuh sedikit.** Terkadang butuh waktu lama atau area yang lebih dalam agar seluruh volume termitigasi sempurna.

## Latihan
Cobalah pikirkan dari sudut pandang institusi: Jika Anda terjebak membeli di puncak palsu (Lower High) dan harga jatuh drastis, apa yang akan Anda lakukan ketika harga akhirnya kembali ke harga beli Anda? Jawabannya: Anda akan segera menutup pesanan itu (break-even). Ingat-ingat logika ini saat melihat chart.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Proses Mitigasi**, terutama tentang konsep bahwa "menutup posisi Buy adalah melakukan posisi Sell".
`;export{a as default};
