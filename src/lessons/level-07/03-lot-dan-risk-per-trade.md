# Lot Size dan Risk per Trade

Level: Level 07 — Risk Guardian
XP: 10

![Ilustrasi Lot dan Risk](/images/lessons/level-07/lot-risk.svg)

## Mengapa Materi Ini Penting
Lot size adalah "volume" transaksi Anda. Menggunakan Lot yang salah adalah resep pasti menuju bencana. Jika Lot terlalu besar (overlot), sedikit saja pergerakan harga yang berlawanan bisa langsung menghabiskan modal Anda (Margin Call). Memahami hubungan antara Risk per Trade (persentase risiko), jarak Stop Loss (dalam Pips), dan Lot Size adalah keahlian mutlak yang wajib dikuasai sebelum Anda memasukkan satu sen pun ke dalam akun live.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menghitung persentase risiko (Risk per Trade) dari total modal.
- Memahami bahwa Lot Size tidak boleh ditebak, melainkan dihitung berdasarkan jarak Stop Loss.
- Menggunakan pendekatan Lot dinamis (dynamic lot size) sehingga kerugian dalam bentuk uang tetap sama di setiap trade, tidak peduli seberapa lebar Stop Loss-nya.

## Penjelasan
Salah satu kesalahan terbesar trader pemula adalah menggunakan Lot tetap (Fixed Lot) di semua situasi. Misalnya, selalu menggunakan 0.10 Lot di setiap posisi. Masalahnya, jarak Stop Loss (SL) dari titik Entry akan selalu berbeda di setiap trade karena kondisi struktur pasar yang juga berubah-ubah. 

Jika Anda selalu menggunakan Lot 0.10, dan pada trade pertama SL Anda berjarak 10 Pips, kerugian Anda adalah $10. Tapi di trade kedua, pasar lebih bergejolak (volatile), sehingga Anda harus meletakkan SL pada jarak 30 Pips. Dengan Lot 0.10, kerugian Anda akan membengkak menjadi $30. Kerugian yang tidak terukur ini akan sangat merusak kondisi psikologis Anda dan menghancurkan prinsip "bertahan hidup" yang sudah kita pelajari.

Lalu, bagaimana cara yang benar? Gunakan **Lot Dinamis (Dynamic Lot Sizing)**.
Inti dari Lot Dinamis adalah: *"Sesuaikan Lot-mu dengan lebar SL-mu, sehingga jika terkena SL, nominal dolar yang hilang selalu sama (misalnya selalu rugi $10)."*

Langkah-langkah menghitungnya:
1. **Tentukan Modal (Balance)**: Misalnya $1,000.
2. **Tentukan Risk per Trade**: Standar trader profesional adalah merisikokan maksimal 1% hingga 2% dari modal setiap kali trading. Katakanlah Anda memilih 1%. Maka, risiko uang Anda (Risk Amount) adalah 1% x $1,000 = $10.
3. **Ukur Jarak SL dalam Pips**: Buka chart, temukan letak logis SL Anda berdasarkan struktur (misalnya di bawah Support), dan ukur jaraknya dari harga Entry. Katakanlah jaraknya 20 Pips.
4. **Hitung Lot Size**: Rumus sederhananya adalah `(Risk Amount) / (Jarak Pips x Nilai per Pip per Lot Standar)`. Jika di Pair Mayor EURUSD (di mana 1 Lot Standar nilainya sekitar $10 per Pips), maka perhitungannya: `$10 / (20 pips x $10) = 0.05 Lot`.

Jadi, Anda harus menggunakan 0.05 Lot untuk posisi tersebut. Jika harga mengenai SL sejauh 20 pips, kerugian Anda akan tepat $10 (1% dari modal).
Bagaimana jika di trade berikutnya SL Anda harus diletakkan sejauh 50 Pips? Gunakan hitungan yang sama: `$10 / (50 pips x $10) = 0.02 Lot`.

Perhatikan: Semakin lebar jarak SL Anda, maka Lot yang Anda gunakan harus semakin kecil, sehingga kerugian dolar tetap bertahan di angka $10.

## Contoh di Chart
Misal Anda melihat setup Buy yang sangat menjanjikan di pasangan mata uang GBPUSD. Modal Anda $500. Anda sepakat merisikokan 2% per trade (yakni $10).
- Jarak antara titik Buy ke titik SL yang logis (di bawah *Swing Low* terakhir) adalah 40 pips.
- Jika Anda memaksa masuk dengan 0.10 Lot, maka jika terkena SL, kerugiannya: 0.10 Lot x 40 Pips x $10 = $40. Ini adalah 8% dari modal Anda! Risiko yang terlalu besar.
- Anda lalu menghitung dengan benar: $10 (Risk) / (40 Pips x $10) = 0.025 Lot. Anda bulatkan menjadi 0.02 Lot (atau 0.03 Lot tergantung preferensi pembulatan).
- Dengan 0.02 Lot, jika setup itu gagal, kerugian Anda hanya sekitar $8. Anda masih memiliki sisa modal $492 yang bisa digunakan untuk bertarung lagi. Pikiran Anda pun jauh lebih tenang saat posisi sedang berjalan.

## Kesalahan Umum
- Asal tebak Lot Size berdasarkan insting ("Kayaknya pakai lot 0.50 bagus nih, biar cepet kaya").
- Menggunakan persentase risiko yang terlalu besar, misalnya 10% atau 20% per trade. Ini ibarat bunuh diri secara perlahan.
- Tidak mengukur jarak Pips Stop Loss terlebih dahulu sebelum menghitung Lot.

## Latihan
1. Modal Anda adalah $2,000. Risk per trade adalah 1%. Berapa dolar uang yang Anda relakan untuk setiap kali loss?
2. Dari jawaban di atas, jika Anda harus menempatkan SL dengan jarak 25 pips pada EURUSD, berapa Lot Size yang harus Anda gunakan? (Gunakan rumus: Risk / (Pips x 10). Jawaban akan diulas di bagian materi Latihan).

## Checklist Pemahaman
- [ ] Saya paham apa itu Risk per Trade.
- [ ] Saya mengerti mengapa Lot Size harus dihitung sesuai jarak SL, bukan asal tebak.
- [ ] Saya tahu bahwa semakin lebar Pips SL, semakin kecil Lot yang harus saya gunakan.

## Materi Remedial
Jika masih bingung dengan hitungan matematikanya, tidak masalah! Pada era modern ini, kita jarang menghitung manual. Anda bisa menggunakan "Position Size Calculator" atau "Risk Calculator" yang banyak tersedia di internet dan aplikasi smartphone (seperti MyFxBook atau FXCalculators) untuk menghitung lot secara otomatis. Yang paling penting adalah Anda *paham logika di baliknya*.
