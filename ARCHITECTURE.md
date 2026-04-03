# Goldbro Architecture Draft

## Product Positioning
Goldbro adalah aplikasi intelligence khusus **gold / XAUUSD**.
Tujuannya bukan sekadar chart viewer, tetapi menjadi satu tempat untuk:
- membaca bias market
- memahami event makro yang relevan ke gold
- melihat level penting
- menerima alert
- bertanya ke AI tentang skenario gold

## Empat Pilar Utama

### 1. Macro Engine
Input:
- DXY
- US 10Y yield
- real yield proxy
- CPI, PPI, NFP, FOMC, Powell speech
- headline safe haven / geopolitik

Output:
- macro bias untuk gold
- dampak event
- narasi utama market

### 2. Technical Engine
Input:
- XAUUSD OHLCV
- moving averages
- support / resistance
- ATR
- session high / low
- breakout / pullback context

Output:
- directional bias
- zona entry potensial
- invalidation level
- strength score

### 3. Event Radar
Input:
- kalender ekonomi
- importance score
- expected vs actual data

Output:
- daftar event penting
- before-event caution
- after-event interpretation

### 4. Ask Gold AI
Input:
- pertanyaan user
- state dari macro engine
- state dari technical engine
- state dari event radar

Output:
- jawaban natural language
- alasan bias
- level penting
- skenario bullish / bearish

## Halaman Inti Aplikasi

### Dashboard
Menampilkan ringkasan cepat:
- XAUUSD
- DXY
- US10Y
- bias harian
- event hari ini
- alert aktif

### Brief
Ringkasan otomatis:
- apa yang menggerakkan gold sekarang
- apa level penting hari ini
- apa risiko terdekat

### Event Radar
Daftar event makro dan potensi pengaruhnya ke gold.

### Setup Scanner
Scanner sederhana:
- long setup score
- short setup score
- suggested plan

### Ask Gold AI
Chat interface untuk tanya:
- bias hari ini
- dampak CPI
- area entry
- risk scenario

## Rencana Backend Production

### Backend Services
- market-data service
- macro-event service
- alert service
- ai-response service
- user service

### Database
Tabel inti yang disarankan:
- users
- user_preferences
- watchlists
- alerts
- market_snapshots
- macro_events
- daily_briefs
- ai_queries

### Scheduler / Jobs
- refresh market data tiap beberapa menit
- refresh macro calendar per jam
- generate daily brief terjadwal
- cek alert conditions secara periodik

## MVP yang Realistis
Versi MVP cukup memiliki:
- dashboard gold
- daily brief
- event radar
- Ask Gold AI sederhana
- setup score berbasis rules

## V2
- live data
- login user
- personalized alerts
- push notifications
- jurnal trading

## V3
- mobile app
- API access
- portfolio hedge guidance
- scenario engine sebelum data besar
