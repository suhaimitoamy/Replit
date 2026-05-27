const a=`# Target Likuiditas

Level: Level 16 — Internal and External Liquidity
XP: 10

![Ilustrasi Target Likuiditas](/images/lessons/level-16/target-liquidity.svg)

## Mengapa Materi Ini Penting
Salah satu pertanyaan paling sulit dalam trading adalah: "Kapan saya harus keluar dari pasar?" Jika kamu masuk di area yang tepat namun salah menentukan target (Take Profit), kamu bisa kehilangan semua keuntungan yang sedang berjalan. Menggunakan konsep "Target Likuiditas" memberimu titik keluar (exit) yang presisi, logis, dan berdasarkan sifat magnetis pasar.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Menentukan area likuiditas terdekat yang akan dituju harga.
- Menetapkan level Take Profit (TP) secara logis berdasarkan likuiditas.
- Menghindari sifat serakah (greedy) dalam menahan posisi.

## Penjelasan
Harga selalu bergerak dari satu kolam likuiditas ke kolam likuiditas lainnya. Ini adalah siklus abadi market. Aturan dasar dalam menargetkan likuiditas adalah:
1. **Setelah Internal Liquidity (seperti FVG) terambil**, target harga selanjutnya adalah **External Liquidity** (Swing High atau Swing Low terbaru).
2. **Setelah External Liquidity disapu (Sweep)**, dan terjadi pergeseran struktur pasar, target harga selanjutnya adalah kembali ke **Internal Liquidity** (FVG baru di seberangnya), atau menuju External Liquidity di sisi yang berlawanan.

**Cara Praktis Menentukan Take Profit (TP):**
- **TP 1 (Konservatif):** Targetkan ke *Internal Liquidity* di depannya atau titik keseimbangan tengah. Ini aman untuk mengamankan sebagian keuntungan (Partial Profit).
- **TP 2 (Utama):** Targetkan ke level Swing High atau Swing Low yang belum tersapu (*External Liquidity*). Letakkan Take Profit kamu **Tepat di garis atau sedikit di dalamnya**, jangan berlebihan.
- **TP 3 (Agresif):** Equal Highs (EQH) atau Equal Lows (EQL) yang jelas-jelas menumpuk di sisi lain dari struktur yang lebih besar.

Algoritma diprogram untuk memburu area dengan jumlah order (Stop Loss/Pending order) terbesar. Dengan menargetkan likuiditas yang sudah jelas terpampang di chart, kamu mengubah tradingmu dari yang tadinya "harapan" menjadi probabilitas yang terukur.

## Contoh di Chart
Kamu masuk posisi *Sell* di GBPJPY setelah harga membuat pola pelemahan di area Premium. 
- Saat kamu melihat ke bawah (di arah harga akan bergerak), terdapat sebuah *Fair Value Gap* (FVG) kecil di pertengahan jalan. Ini adalah **TP 1** kamu.
- Lebih jauh di bawah lagi, ada Swing Low dari sesi Asia tadi pagi. Itu adalah External Liquidity. Ini adalah **TP Utama** kamu.
Kamu menutup 50% posisimu saat FVG tercapai, dan membiarkan sisa posisi menyentuh Swing Low. Hasilnya? Risiko terkontrol dan profit maksimal didapat tepat sebelum harga memantul naik.

## Kesalahan Umum
- Menetapkan Take Profit menggunakan rasio Risk:Reward acak (misal kaku harus 1:3) tanpa melihat di mana letak likuiditas sebenarnya di chart.
- Berharap harga menembus level tertentu karena merasa "trennya kuat", padahal likuiditas utama sudah habis diambil dan harga bersiap *reversal*.
- Tidak pernah melakukan pengamanan profit sebagian (partial closing) di level internal likuiditas.

## Latihan
Buka chart apa saja di timeframe M30. Cari sebuah pergerakan tren naik yang baru saja selesai. Di mana Swing High terakhirnya? Setelah harga mulai turun, bisakah kamu mencari letak "Target Likuiditas" di bawahnya (seperti Swing Low kecil, FVG, atau Equal Lows)? Perhatikan bagaimana harga bertindak seperti tertarik ke titik-titik tersebut.

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian **Hubungan antara selesainya pengambilan Internal menuju External (dan sebaliknya)**.
`;export{a as default};
