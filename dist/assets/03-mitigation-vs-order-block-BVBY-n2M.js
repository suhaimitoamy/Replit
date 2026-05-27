const a=`# Mitigation Block vs Order Block (dan Breaker)

Level: Level 24 — Mitigation Block
XP: 10

![Ilustrasi Perbandingan Block](/images/lessons/level-24/03-mitigation-vs-order-block.svg)

## Mengapa Materi Ini Penting
Dalam metodologi *Smart Money Concepts* (SMC), Anda akan berhadapan dengan berbagai macam blok, seperti **Order Block (OB)**, **Breaker Block (BB)**, dan **Mitigation Block (MB)**. Jika Anda tidak bisa membedakan ketiganya, Anda berisiko masuk (entry) di tempat yang salah, atau salah membaca niat sebenarnya dari institusi. Memahami perbedaannya adalah kunci untuk memfilter sinyal "sampah" dari sinyal "berkualitas".

## Tujuan Pembelajaran
Setelah mempelajari materi ini, murid diharapkan mampu:
- Mengidentifikasi karakteristik unik dari Order Block biasa.
- Membedakan antara Breaker Block dan Mitigation Block secara mekanis.
- Memilih jenis blok mana yang paling probabilitasnya tinggi dalam kondisi pasar tertentu.

## Penjelasan

Mari kita bedah perbedaan dari ketiga blok penting ini agar Anda tidak tertukar lagi saat melakukan analisis di chart.

### 1. Order Block (OB) Standar
**Posisi:** Berada di ujung ekstrim dari sebuah tren atau ayunan harga (swing).
**Karakteristik:** 
- Merupakan candle terakhir yang berlawanan arah sebelum terjadinya dorongan harga kuat yang menembus struktur (BOS / Change of Character).
- Harga **belum pernah** menembus area ini sejak blok ini terbentuk. Ini adalah titik awal dari sebuah pergerakan besar.
- **Contoh Bearish:** Candle naik terakhir di ujung tren naik, sebelum harga jatuh dan mengubah tren menjadi turun. Harga lalu kembali ke atas (ke ekstrim) untuk retest OB ini.

### 2. Breaker Block (BB)
**Posisi:** Biasanya berada di area *support* atau *resistance* historis yang telah berhasil dijebol.
**Karakteristik:**
- Breaker Block berawal dari sebuah *Order Block* biasa yang kemudian tertembus.
- **KUNCI UTAMA:** Sebelum tertembus, blok ini **telah melakukan sapuan likuiditas (Liquidity Sweep)**. Artinya, ia membuat *Higher High* (menembus titik tertinggi sebelumnya) untuk menjebak trader, sebelum berbalik arah tajam dan menembus ke bawah.
- Struktur: High -> Low -> **Higher High (Sweep)** -> Lower Low (Break).
- Candle turun terakhir sebelum Higher High adalah Breaker Block. Harga kembali ke blok ini sebagai area *support-turned-resistance*.

### 3. Mitigation Block (MB)
**Posisi:** Mirip dengan Breaker Block, berada di area tengah struktur yang baru saja tertembus.
**Karakteristik:**
- Ini juga merupakan *Order Block* yang tertembus arahnya berbalik.
- **KUNCI UTAMA:** Berbeda dengan Breaker, Mitigation Block **TIDAK melakukan sapuan likuiditas**. Ia mengalami **Failure Swing**. Artinya, harga mencoba membuat level ekstrim baru namun gagal (mencetak *Lower High* atau *Higher Low*).
- Struktur: High -> Low -> **Lower High (Gagal tembus High)** -> Lower Low (Break).
- Candle naik terakhir sebelum Lower High adalah Mitigation Block.

### Ringkasan Perbandingan
| Fitur | Order Block (OB) | Breaker Block (BB) | Mitigation Block (MB) |
| :--- | :--- | :--- | :--- |
| **Lokasi** | Ekstrim / Puncak / Lembah | Tertembus di area tengah | Tertembus di area tengah |
| **Sapuan Likuiditas** | Bervariasi, tapi biasanya Ya | **YA** (Wajib sweep ekstrim) | **TIDAK** (Wajib *Failure Swing*) |
| **Struktur Puncak** | Awal mula pembalikan | Mencetak Higher High (Fakeout) | Mencetak Lower High (Kelemahan) |

## Contoh di Chart
Misal Anda melihat tren naik. Harga membuat Puncak A, lalu turun. 
- Skenario 1: Harga naik lagi, menembus Puncak A (buat Puncak B yang lebih tinggi), lalu harga dibanting turun tembus *support*. Candle yang memulai Puncak B adalah **Breaker Block**.
- Skenario 2: Harga naik lagi, tapi **gagal** menembus Puncak A (buat Puncak B yang lebih rendah), lalu harga dibanting turun tembus *support*. Candle yang memulai Puncak B (yang lebih rendah) adalah **Mitigation Block**.

## Kesalahan Umum
- **Menyebut Mitigation Block sebagai Breaker Block.** Meskipun cara tradingnya mirip (tunggu harga kembali ke blok tersebut setelah struktur tertembus), strukturnya berbeda. Breaker Block biasanya sedikit lebih probabel karena ada unsur jebakan likuiditas (*stop hunt*) sebelumnya.
- **Mencari Mitigation Block tanpa ada penembusan *support/resistance* yang valid.**

## Latihan
Buka chart Anda, cari pola "Head and Shoulders". Bahu kanan dari pola Head and Shoulders (jika tidak menembus kepala) sering kali merupakan tempat di mana *Mitigation Block* berada ketika harga menembus *neckline*. Coba tandai di chart Anda!

## Checklist Pemahaman
- [ ] Saya paham inti materi ini.
- [ ] Saya bisa menjelaskan ulang dengan bahasa sendiri.
- [ ] Saya bisa melihat contoh konsep ini di chart.
- [ ] Saya siap lanjut ke materi berikutnya.

## Materi Remedial
Jika gagal quiz atau belum paham, ulangi materi ini dan fokus pada **tabel Ringkasan Perbandingan**, pastikan Anda sangat memahami perbedaan antara *Liquidity Sweep* (Breaker) dan *Failure Swing* (Mitigation).
`;export{a as default};
