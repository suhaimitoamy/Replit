# Premium Discount dengan POI

Level: Level 19 — Premium Discount
XP: 10

![Premium Discount dengan POI](/images/lessons/level-19/05-premium-discount-dengan-poi.svg)

## Mengapa Materi Ini Penting
Alat Fibonacci untuk menentukan Premium dan Discount (PD) tidak bisa digunakan sendirian! Ini adalah kesalahan paling mematikan. Hanya karena harga masuk ke area "Diskon" bukan berarti kita bisa langsung menekan tombol Buy secara buta. Area Discount (0-50%) itu sangat luas! Di harga berapakah pastinya kita akan entry? Di sinilah peran penting POI (Point of Interest) seperti Order Block (OB) dan Fair Value Gap (FVG). Menggabungkan PD dengan POI adalah resep rahasia mendapatkan trade bersniper dengan akurasi tinggi.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menjadikan alat Premium & Discount sebagai "Filter", bukan trigger entry.
- Mengidentifikasi berbagai POI (Order Block, FVG) di sebuah swing.
- Membuang / mengabaikan POI yang berada di area yang salah (misalnya mengabaikan OB Buy jika posisinya ada di Premium).

## Penjelasan
Bayangkan garis Fibonacci (Premium, Equilibrium, Discount) hanyalah sebuah peta kasar. Peta ini memberitahumu "zona aman" dan "zona bahaya". Tapi peta itu tidak memberitahumu alamat pasti di mana kamu harus mengetuk pintu. 

*Alamat pasti* tersebut adalah **POI (Point of Interest)**. POI yang paling umum digunakan dalam Smart Money Concepts (SMC) adalah Order Block yang valid dan area Fair Value Gap (FVG).

**Cara Menggabungkan Keduanya (Skenario Uptrend mencari BUY):**
1. Tarik Fibonacci dari Swing Low ke Swing High.
2. Lihat keseluruhan dorongan dari bawah ke atas tadi. Di sana, kamu mungkin akan menemukan lebih dari satu *Order Block* atau *FVG*. Misalnya ada OB di area atas, dan OB di area paling bawah.
3. Gunakan filter Premium & Discount!
4. Jika ada Order Block yang letaknya **berada di area Premium** atau tepat di garis **Equilibrium (50%)**, **ABAIKAN!** Jangan entry di situ. Order Block itu kemungkinan besar hanyalah *Inducement* atau jebakan. Smart Money tidak akan membeli di harga Premium.
5. Carilah Order Block atau FVG yang secara eksklusif bersembunyi di dalam **area Discount (di bawah 50%)**. Itulah POI probabilitas tinggi (High Probability POI) yang sesungguhnya.
6. Letakkan limit order (Buy Limit) atau tunggu konfirmasi persis di area POI Discount tersebut.

**Hal yang sama berlaku untuk Downtrend mencari SELL:**
Jika tren sedang turun, kamu mungkin melihat Order Block Sell yang posisinya sangat rendah (di area Discount). Jangan terkecoh. Itu adalah Order Block palsu. Abaikan Order Block tersebut, dan carilah Order Block yang berada jauh di atas, bersembunyi di dalam **Area Premium**. Itulah tempat yang tepat untuk entry Sell.

## Contoh di Chart
Misalnya pada EURUSD, terbentuk satu dorongan naik kuat (impulse) ke atas menembus struktur (BOS). 
Kamu melihat ada 2 *Demand Order Block* yang ditinggalkan harga saat terbang:
- **Order Block A** berada di harga 1.0950.
- **Order Block B** berada di harga 1.0900.

Kamu menarik Fibonacci Premium/Discount dari awal pergerakan hingga puncaknya. Kamu menemukan bahwa garis 50% (Equilibrium) berada di harga 1.0930. 
- Karena Order Block A (1.0950) letaknya *di atas* level 50%, berarti ia ada di area **Premium**. OB ini TIDAK VALID untuk buy.
- Sedangkan Order Block B (1.0900) letaknya *di bawah* level 50%, berarti ia ada di area **Discount**. OB ini SANGAT VALID.

Jika harga turun menuju Order Block A, ia mungkin mantul sedikit lalu jebol ke bawah menuju Order Block B. Kamu yang menempatkan entry di Order Block B akan selamat dan mendulang profit!

## Kesalahan Umum
- **Menggunakan PD Tanpa POI**: Harga masuk Discount langsung Buy, ternyata harganya turun terus menembus lantai karena tidak ada Order Block/Demand di area itu yang bisa menahan harga.
- **Memilih POI Pertama yang Ditemui**: Malas menunggu dan langsung entry pada Order Block terdekat (yang seringkali ada di Premium/Equilibrium).

## Latihan
1. Buka chart dengan market yang sedang trending kuat.
2. Temukan satu Swing High ke Swing Low (atau sebaliknya).
3. Sebelum menarik Fibonacci, tandai *semua* Order Block atau FVG yang ada di rentang harga tersebut.
4. Barulah tarik Fibo 50%. Coret/hapus tanda OB yang tidak sesuai area (hapus OB Buy di Premium, hapus OB Sell di Discount).
5. Lihat bagaimana reaksi harga ketika sampai ke OB yang "Benar" tersebut.

## Checklist Pemahaman
- [ ] Saya paham fungsi utama Premium Discount adalah sebagai Filter POI.
- [ ] Saya tahu POI Buy harus berada di Discount.
- [ ] Saya tahu POI Sell harus berada di Premium.
- [ ] Saya bisa mengidentifikasi Inducement dari POI yang salah tempat.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi lagi materi tentang **Order Block** dan cara mengidentifikasi OB yang valid, lalu gabungkan kembali pemahaman tersebut dengan pelajaran area 50% ini.
