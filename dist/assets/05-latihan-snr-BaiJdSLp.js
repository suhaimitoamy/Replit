const a=`# Latihan Menjadi SNR Hunter

Level: Level 03 — SNR Hunter
XP: 10

![Latihan Menarik SNR](/images/lessons/level-03/05-snr-practice.svg)

## Mengapa Materi Ini Penting
Mengetahui teori adalah satu hal, tetapi mempraktikkannya langsung di grafik yang dinamis adalah hal lain. Pasar Forex, Kripto, atau Saham selalu bergerak. Chart di masa lalu terlihat sangat mudah dibaca, tetapi ketika Anda dihadapkan pada pergerakan harga terkini (live market), keraguan seringkali muncul. Latihan ini dirancang untuk melatih "otot mata" Anda agar secara otomatis bisa menemukan area Support dan Resistance tanpa perlu berpikir panjang. Seperti seorang pemburu yang mengenali jejak mangsanya, Anda harus mahir mengenali jejak SNR.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Melakukan pemetaan Top-Down (dari Timeframe besar ke kecil) untuk mencari SNR.
- Menempatkan kotak area SNR dengan akurasi yang baik dan rapi.
- Membuang keraguan saat harus menentukan apakah sebuah lekukan itu layak digambar zona atau tidak.

## Penjelasan Praktik (Step-by-Step)
Mari kita lakukan simulasi berburu zona SNR. Siapkan aplikasi charting Anda (TradingView disarankan). 

**Langkah 1: Zoom Out dan Mulai dari Timeframe Besar**
Jangan langsung terjun ke grafik 15 menit (M15). Ubah grafik Anda ke **Daily (D1) atau 4 Jam (H4)**. Perkecil grafik (zoom out) hingga Anda bisa melihat pergerakan harga selama beberapa minggu atau bulan terakhir. Tujuannya adalah untuk melihat gambaran besar: Siapa yang sedang menguasai pasar?

**Langkah 2: Cari Puncak Teringgi dan Jurang Terdalam**
Lihat titik tertinggi ekstrem tempat harga pernah ditolak turun dengan keras. Itulah **Resistance Mayor**. Gunakan alat kotak (Rectangle) dan tarik dari ujung atas *body* candle ke ujung atas *sumbu/wick* candle. Tarik kotak itu ke arah kanan. 
Lakukan hal yang sama untuk titik terendah ekstrem. Itulah **Support Mayor**. Tarik kotak dari ujung bawah *body* ke ujung bawah *sumbu*.

**Langkah 3: Identifikasi SNR Internal yang Tajam**
Selain puncak ekstrem dan jurang terdalam, perhatikan lekukan-lekukan tajam di tengah pergerakan harga (di antara Support dan Resistance Mayor). Jika Anda melihat area di mana harga sempat berhenti, lalu memantul keras membentuk huruf "V" (Support) atau huruf "A" (Resistance), tandai juga area tersebut dengan kotak. Abaikan pantulan-pantulan kecil yang lambat. Fokus hanya pada pantulan yang agresif.

**Langkah 4: Periksa Reaksi Harga (Test Zona)**
Tarik kotak-kotak yang sudah Anda buat tadi ke arah kanan (masa depan). Lihat apakah harga bereaksi ketika menyentuh zona tersebut kembali? Jika di masa lalu harga menghormati area kotak itu berulang kali dengan rapi, Anda baru saja menemukan zona SNR yang sangat valid dan siap Anda "buru" ketika harga kembali ke sana kelak.

## Contoh di Chart
Dalam ilustrasi di atas, Anda bisa melihat bagaimana sebuah grafik dipetakan.
- **R1** adalah titik tertinggi (Resistance). Ditandai karena memantulkan harga turun tajam sebanyak 2 kali.
- **S2** adalah titik terendah (Support). Ditandai karena memantulkan harga naik dengan sangat kuat.
- Area tengah **(S1/R2)** sangat menarik. Awalnya area itu adalah pantulan bawah, tapi kemudian tertembus. Kita akan membahas fenomena transisi ini di materi berikutnya!

## Kesalahan Umum Saat Latihan
- **Terlalu detail (over-analyzing).** Menandai setiap lekukan kecil yang ada di grafik, membuat chart Anda seperti buku gambar anak kecil.
- **Kotak terlalu tebal.** Menarik kotak area dari pucuk sumbu paling ujung ke sumbu ujung lain yang jaraknya ratusan pips. Jika kotak SNR Anda terlalu lebar, rasio Risk-to-Reward Anda akan rusak saat Trading.
- **Takut salah.** Sering menghapus dan memindahkan area karena tidak yakin. Ingat, SNR adalah area probabilitas, bukan dinding beton sakti. 

## Latihan Mandiri
1. Buka 3 aset yang berbeda (contoh: EURUSD, Emas/XAUUSD, Bitcoin).
2. Terapkan Langkah 1 sampai Langkah 4 di masing-masing aset pada Timeframe H4.
3. Simpan gambar (screenshot) hasil pemetaan Anda. Perhatikan bagaimana harga bereaksi esok hari pada zona yang Anda buat.

## Checklist Pemahaman
- [ ] Saya telah mencoba membuka chart dan menggambar zona SNR.
- [ ] Saya sudah terbiasa memulai analisis dari Timeframe besar (H4 / D1).
- [ ] Saya memahami cara membuat kotak yang menutupi body dan sumbu candle (tidak terlalu tipis, tidak terlalu lebar).
- [ ] Saya siap lanjut ke materi terakhir di level ini.

## Materi Remedial
Jika Anda merasa kesulitan melihat "huruf V atau A" di chart, ubah tipe chart Anda dari **Candlestick menjadi Line Chart (Grafik Garis)**. Di Line Chart, puncak dan lembah akan terlihat sangat jelas tanpa gangguan dari sumbu-sumbu candle. Tandai area tajamnya, lalu kembalikan ke Candlestick untuk menyesuaikan kotaknya.
`;export{a as default};
