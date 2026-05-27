# Konsistensi Profit dan Lot Size

Level: Level 46 — Prop Firm Evaluation
XP: 10

![Ilustrasi Konsistensi Profit](/images/lessons/level-46/konsistensi-profit.svg)

## Mengapa Materi Ini Penting
Prop firm bukanlah kasino. Banyak trader yang sukses menebak arah pasar dan memenangkan jackpot raksasa dalam sekali *trade*, namun ditolak saat meminta pencairan dana atau kelulusan evaluasi. Mengapa? Karena prop firm mencari profil trader yang stabil secara jangka panjang, bukan pejudi beruntung. Memahami aturan konsistensi profit dan volume lot akan mencegah akun Anda dianulir secara sepihak oleh sistem *risk management* perusahaan.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengenali dan memahami aturan *Profit Consistency* dan dampaknya terhadap kelulusan akun.
- Mengatur ukuran lot secara konsisten (*Lot Consistency*) untuk menghindari deteksi perjudian.
- Memahami strategi pertumbuhan probabilitas yang disukai oleh lembaga prop firm.

## Penjelasan
Di balik layar industri prop firm, model bisnisnya bergantung pada stabilitas. Perusahaan yang sukses akan menyalin (copy) sinyal eksekusi dari trader *funded* terbaik mereka ke pasar nyata atau ke kolam pendanaan internal mereka. Perusahaan tidak dapat menyalin strategi dari seseorang yang mempertaruhkan semua saldo dalam satu kali berita fundamental secara acak. Risiko kehancurannya terlalu besar. Oleh karena itu, muncullah dua aturan emas yang sering tersembunyi dalam syarat dan ketentuan (*Terms and Conditions*): Aturan Konsistensi Profit dan Aturan Konsistensi Lot.

**1. Aturan Konsistensi Profit (Profit Consistency Rule)**
Prop firm biasanya menetapkan batas yang berbunyi: "Tidak boleh ada satu hari pun yang menyumbang lebih dari 30% atau 40% dari total keuntungan keseluruhan Anda."

Mari bedah contoh berikut. Target evaluasi Anda adalah $8,000. Selama seminggu Anda trading konsisten dan profit harian di angka $300, $500, dan seterusnya. Tiba-tiba hari Jumat ada rilis berita *Non-Farm Payroll* (NFP). Anda memasang posisi besar dan hoki, profit seketika sebesar $5,000. Total keuntungan Anda kini menjadi $8,000 (Target Tercapai!). Anda dengan gembira menekan tombol "Submit for Review".
Apa yang terjadi? Akun Anda **ditolak** kelulusannya. Mengapa? Keuntungan di hari Jumat ($5,000) mencakup 62.5% dari total seluruh keuntungan Anda ($8,000). Ini melampaui batas wajar 30%. Anda tidak dinyatakan gagal, namun Anda diwajibkan untuk trading lagi selama berminggu-minggu demi mengumpulkan profit kecil-kecil hingga angka $5,000 tadi porsinya secara matematis turun di bawah 30% dari *total profit akumulasi*. Ini akan sangat melelahkan dan menguras emosi.

**2. Aturan Konsistensi Lot Size (Lot Consistency Rule)**
Aturan ini bertugas mendeteksi perubahan volume lot yang drastis. Prop firm seringkali menetapkan parameter bahwa rentang lot size yang Anda gunakan tidak boleh melenceng terlalu jauh (biasanya tidak boleh lebih dari 2.5 kali dari rata-rata atau kurang dari 0.25 kali dari rata-rata).

Contoh: Sepanjang Fase 1, rata-rata Anda menggunakan ukuran 2 lot. Menjelang akhir, Anda merasa target hampir sampai, dan mulai malas mikir lalu membuka lot gajah 10 lot untuk cepat selesai. Sistem akan otomatis menandai hal ini sebagai aksi "berjudi" (*gambling behavior*). Aturan ini juga otomatis mematikan kemampuan Anda untuk menggunakan teknik *Martingale* atau melipatgandakan lot setiap kali Anda rugi. Jika riwayat transaksi Anda berbunyi 1 lot, 2 lot, 4 lot, 8 lot—Anda hampir pasti dibanned.

Bagaimana cara menaklukkan kedua aturan ini? Solusinya ternyata sangat elegan dan simpel: **Risiko per trade yang Statis (Tetap)**.
Jika Anda secara agamis dan konsisten selalu merisikokan persentase yang sama—katakanlah 1% per perdagangan—maka lot Anda secara alami akan bergerak dinamis dalam rentang yang konsisten pula (hanya menyesuaikan lebar *Stop Loss*). Lebih lanjut, karena risikonya selalu 1% dan RR Anda berkisar antara 1:2 atau 1:3, maka tidak akan ada satu pun *trade* yang tiba-tiba melesat menyumbang 60% profit. Semua kurva pertumbuhan Anda akan mendaki secara bertahap, mulus bak tangga, yang merupakan kurva ideal dambaan setiap prop firm dunia.

## Contoh di Chart
Anggap Anda trading di Gold (**XAUUSD**). Selama satu bulan Anda memiliki statistik berikut:
- Hari 1-10: Trading santai, akumulasi profit +$2,500. Rata-rata lot 0.5.
- Hari 11: Ada *crash market*, Anda "all in" memakai lot 5. Harga turun deras, Anda panen +$6,000.
Meskipun target $8,000 Anda telah terlewati, prop firm akan menyoroti Hari 11. Lot-nya melonjak 10 kali lipat dari rata-rata, dan profitnya mendominasi 70% dari portofolio. Status: Pelanggaran Konsistensi. Solusi paling sehat adalah mengabaikan setup menggiurkan jika mengharuskan Anda memanipulasi *risk management* standar Anda.

## Kesalahan Umum
- **Memakai strategi all-in** atau menggunakan persentase *risk* super besar pada momen *news trading* agar cepat berlalu.
- **Teknik Martingale** ketika terkurung dalam posisi minus.
- Membuka akun prop firm hanya untuk berjudi arah (*gambling direction*) tanpa pemahaman probabilitas sama sekali.

## Latihan
Evaluasi hasil riwayat trading di akun Anda (MT4/MT5). Ambil total keseluruhan profit Anda dalam sebulan. Kemudian cari hari di mana Anda menghasilkan profit paling besar. Bagi *profit hari terbesar* tersebut dengan *total profit*, lalu kalikan 100%. Apakah persentasenya di bawah 30%? Jika ya, Anda sudah memiliki pola yang sehat!

## Checklist Pemahaman
- [ ] Saya memahami mengapa prop firm tidak menyukai trader dengan satu keberuntungan besar.
- [ ] Saya bisa menghitung persentase kontribusi profit satu hari terhadap total profit.
- [ ] Saya mengerti bahaya memanipulasi rentang ukuran lot dengan ekstrem.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika masih bingung, baca kembali bagian **Risiko per trade yang Statis**. Ini adalah kunci *Holy Grail* di prop firm. Disiplin menggunakan persentase tetap akan secara ajaib membereskan seluruh urusan aturan konsistensi Anda.
