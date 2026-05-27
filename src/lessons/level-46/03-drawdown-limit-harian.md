# Drawdown Limit Harian

Level: Level 46 — Prop Firm Evaluation
XP: 10

![Ilustrasi Drawdown Harian](/images/lessons/level-46/drawdown-limit-harian.svg)

## Mengapa Materi Ini Penting
Batas kerugian harian atau *Daily Drawdown* adalah "pembunuh berdarah dingin" di dunia prop firm. Lebih dari 70% trader yang gagal dalam tahap evaluasi dilaporkan melanggar aturan spesifik ini, bukan karena gagal mencapai target profit. Memahami bagaimana prop firm menghitung batas harian ini adalah perlindungan terpenting yang wajib dikuasai sebelum Anda melakukan eksekusi trade pertama.

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Memahami konsep dasar *Daily Drawdown* 5%.
- Membedakan perhitungan *drawdown* berbasis Balance versus Equity.
- Menghindari jebakan *floating profit* yang merusak batas kerugian harian saat pergantian hari server.

## Penjelasan
Di setiap aturan prop firm, Anda akan selalu menemukan istilah *Daily Drawdown* atau *Maximum Daily Loss*, yang biasanya dipatok di angka 5%. Artinya secara sederhana: dalam kurun waktu satu hari perdagangan (24 jam sesuai waktu server broker), ekuitas akun Anda tidak boleh turun melebihi 5% dari titik referensi awalnya. 

Mari kita ambil contoh sederhana. Jika pada awal hari Anda memiliki saldo (balance) murni sebesar $100,000, maka batas kerugian harian 5% Anda adalah $5,000. Ini berarti di titik mana pun pada hari tersebut, angka ekuitas (saldo dijumlah dengan semua keuntungan/kerugian posisi yang sedang terbuka alias *floating*) tidak boleh menyentuh angka $95,000. Jika menyentuh $95,000.01 Anda aman. Jika menyentuh $94,999.99, akun Anda langsung dinyatakan gagal (breached) hari itu juga.

Namun, kompleksitas sesungguhnya datang dari dua cara prop firm menghitung titik awal harian tersebut: **Balance-Based** dan **Equity-Based**. 

**1. Balance-Based Daily Drawdown**
Perhitungan ini lebih ramah untuk trader. Batas 5% dihitung murni dari *balance* awal di awal hari. 
Contoh: Awal hari *balance* $100,000. Anda open posisi dan profit sementara (*floating profit*) mencapai $3,000 (Equity = $103,000). Kemudian market berbalik arah secara drastis dan posisi Anda berbalik jadi merugi -$2,000 (Equity = $98,000). Dalam skenario ini, Anda tidak melanggar karena angka $98,000 masih berada di atas batas bawah $95,000 ($100k - 5%).

**2. Equity-Based Daily Drawdown**
Ini adalah mode tersulit dan menjebak! Beberapa firm menghitung batas 5% dari puncak nilai *Equity* tertinggi Anda pada hari itu. 
Menganut skenario yang sama di atas: Saat *floating profit* Anda mencapai puncak $103,000, batas harian 5% Anda ikut naik. Perhitungannya menjadi 5% x $103,000 = $5,150. Batas bawah baru Anda sekarang adalah $97,850 ($103k - $5.15k). Ketika market berbalik dan Anda menyentuh ekuitas $98,000, Anda berada dalam bahaya kritis. Bahkan sedikit saja pelebaran spread bisa menjatuhkan ekuitas Anda di bawah $97,850 dan akun Anda gugur.

**Jebakan Pergantian Waktu (Midnight Reset Trap)**
Setiap prop firm memiliki waktu "Reset" harian (biasanya tengah malam server, sekitar 5 PM EST). Ini adalah momen krusial jika Anda adalah trader yang suka menahan posisi menginap (*swing trader/overnight holding*).
Misalkan Anda punya posisi biru (profit) sebesar $4,000 menjelang jam reset. Saldo asal Anda $100,000. Setelah jam reset, sistem akan mencatat ekuitas awal hari baru Anda sebesar $104,000. Batas 5% harian Anda hari itu adalah $5,200 dari puncak tersebut (batas bawah $98,800). Jika di pagi harinya rilis berita membuat market terkoreksi dan profit Anda menyusut menjadi $0 (kembali ke *break-even* alias ekuitas $100,000), apa yang terjadi? Akun Anda **HANGUS**. Mengapa? Karena ekuitas jatuh dari titik acuan hari baru ($104,000) menuju $100,000, yang merupakan penurunan sebesar $4,000 (sedikit lagi mendekati $5,200), namun jika spread sesaat melebar atau turun sedikit lagi melampaui $98,800, Anda sudah dianggap rugi 5% pada *hari itu* meskipun posisi dari awal Anda tidak minus sama sekali!

Oleh karena itu, cara termudah dan paling aman menghadapi limit harian ini adalah: Jangan pernah merisikokan total *floating minus* semua posisi terbuka Anda lebih dari 2.5% dalam waktu yang bersamaan. Jika Anda punya 2 posisi jalan, pastikan total risiko maksimal gabungannya adalah 2.5%. Jika terkena Stop Loss ganda, Anda baru rugi 2.5%. Anda punya pilihan mematikan laptop dan mencoba keesokan harinya dengan mental yang baru.

## Contoh di Chart
Anda membuka 3 pasang posisi beruntun: **EURUSD**, **GBPUSD**, dan **AUDUSD** karena melihat pola konfirmasi yang searah (misal dollar melemah). Masing-masing posisi diberi risiko 2%. Total risiko yang sedang mengambang di pasar adalah 6%. Tiba-tiba pidato gubernur bank sentral (The Fed) mengubah arah tren total, ketiga pair bergerak berlawanan arah menembus semua Stop Loss secara bersamaan. Total *loss* Anda hari itu adalah 6%. Sebelum mencapai target Max DD -10%, akun Anda sudah terlebih dahulu dihentikan secara permanen karena melewati batas kerugian **harian** -5%.

## Kesalahan Umum
- **Mengabaikan perhitungan batas harian** ketika membuka banyak posisi (*martingale/grid*) secara membabi buta.
- **Menahan *floating profit* yang besar melewati jam reset server** tanpa mengunci sebagian keuntungan, yang dapat menjebak batas ekuitas di hari berikutnya.
- **Tidak tahu pasti jam berapa server prop firm melakukan reset harian**, yang bisa membuat salah perhitungan target harian.

## Latihan
Buka *dashboard* atau FAQ dari prop firm yang ingin Anda lamar. Cari tahu secara spesifik kalimat ini: "Apakah *Daily Drawdown* dihitung berdasarkan Balance atau Equity?". Lalu cari tahu pukul berapa waktu server mereka mengalami *End of Day* (EOD) reset dalam zona waktu WIB (Waktu Indonesia Barat).

## Checklist Pemahaman
- [ ] Saya paham perbedaan Equity-based dan Balance-based drawdown.
- [ ] Saya mengerti bahaya membiarkan floating profit terbuka melewati jam reset harian.
- [ ] Saya tahu cara menjaga gabungan risiko agar selalu aman dari batas 5%.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika Anda gagal memahami jebakan *Midnight Reset*, baca ulang dan bayangkan kembali skenario di mana Anda profit malam ini, lalu besok profit tersebut menghilang dan membuat Anda dinyatakan gagal prop firm meski saldo Anda belum sentuh modal awal!
