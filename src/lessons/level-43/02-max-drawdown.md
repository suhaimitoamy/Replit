# Maximum Drawdown

Level: Level 43 — Handling Drawdown
XP: 10

![Ilustrasi Maximum Drawdown](/images/lessons/level-43/max-drawdown.svg)

## Mengapa Materi Ini Penting
Mengetahui batas maksimal penurunan saldo yang pernah atau bisa dialami oleh sistem Anda adalah kunci agar dapat bertahan lama di market (longevity). Maximum Drawdown (Max DD) membantu menetapkan ekspektasi yang realistis, menentukan besar risiko tiap trade (risk per trade), serta menjaga akun Anda dari kebangkrutan atau Margin Call (MC).

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Memahami konsep Maximum Drawdown.
- Menggunakan Max Drawdown dari data backtest untuk menentukan ekspektasi masa depan.
- Menghindari risiko terlalu besar yang dapat menyebabkan Margin Call.

## Penjelasan
Maximum Drawdown (Max DD) adalah penurunan terbesar dari titik tertinggi ke titik terendah selama periode trading tertentu. Jika pada materi sebelumnya kita belajar bahwa drawdown adalah "penurunan", maka Maximum Drawdown adalah "penurunan paling parah" yang pernah atau mungkin terjadi. 

Contohnya, selama setahun trading, akun Anda mungkin mengalami beberapa kali drawdown sebesar 5%, 8%, dan 12%. Jika 12% adalah penurunan terbesar sebelum akhirnya akun membuat rekor saldo baru, maka 12% adalah Maximum Drawdown Anda untuk periode tersebut.

Mengapa Max DD sangat penting? Karena dari angka ini, Anda dapat merancang manajemen risiko (risk management) yang tepat. Jika dari hasil pengujian strategi (backtest) selama lima tahun terakhir strategi Anda memiliki Max Drawdown historis sebesar 15%, Anda harus bersiap secara mental bahwa dalam praktiknya, penurunan sebesar 15% bahkan 20% (menyediakan ruang buffer) sangat mungkin terjadi kapan saja di masa depan. 

Kesalahan mematikan yang sering dilakukan trader adalah tidak pernah memperhitungkan kemungkinan terjadinya losing streak berturut-turut. Misal, jika Anda merisikokan 5% per posisi trading, Anda hanya membutuhkan 10 kali loss berturut-turut agar separuh (50%) saldo akun Anda ludes. Namun, jika Anda hanya merisikokan 1% per posisi trading, 10 kali loss berturut-turut hanya akan menyebabkan drawdown sebesar 10% (secara linear), angka yang jauh lebih masuk akal dan mudah untuk dipulihkan.

Dalam kompetisi pendanaan trading (prop firm), aturan Max Drawdown ini sangat ketat. Anda biasanya diberi batas Daily Drawdown (misalnya 5%) dan Maximum Drawdown keseluruhan (misalnya 10%). Jika Anda melanggar batas ini, akun Anda akan ditutup. Oleh karena itu, kemampuan mengontrol agar akun Anda tidak pernah mendekati batas Max DD adalah skill wajib yang memisahkan amatir dengan profesional.

## Contoh di Chart
Anggaplah Anda memulai dengan $10.000. 
- Saldo naik ke $11.000 (Puncak A).
- Kemudian jatuh ke $9.900 (Turun 10%).
- Lalu naik lagi membentuk rekor baru di $12.000 (Puncak B).
- Kemudian jatuh parah ke $10.200 (Turun dari 12.000 ke 10.200 = $1.800 atau 15%).
- Setelah itu saldo naik dan tak pernah jatuh sedalam itu lagi.
Dalam skenario ini, Maximum Drawdown Anda adalah 15%, yang terjadi setelah Puncak B.

## Kesalahan Umum
- Merisikokan persentase modal yang terlalu besar di setiap trade karena tidak percaya akan adanya losing streak yang panjang.
- Mengabaikan hasil Max DD dari backtest dan terkejut ketika sistem mengalami loss beruntun yang wajar di pasar nyata.
- Tidak menyiapkan "ruang napas" tambahan (buffer). Jika backtest menunjukkan Max DD 10%, di pasar langsung (live) bisa saja terjadi 15%.

## Latihan
Jika strategi Anda dalam sejarahnya pernah mengalami 15 kali loss berturut-turut. Hitung berapa sisa saldo Anda jika Anda merisikokan 2% per trade. Berapa persen total drawdown yang akan Anda alami? Apakah Anda merasa nyaman dengan angka tersebut?

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada bagian simulasi perhitungan persentase penurunan modal berdasarkan risiko per trade.
