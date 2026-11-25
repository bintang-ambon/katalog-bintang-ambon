# 🌟 Katalog Digital Toko Bintang Ambon

Projek website katalog digital interaktif untuk **Toko Bintang Ambon** (Pusat Aksesoris HP & Gadget Terlengkap di Ambon). Dibuat murni menggunakan **HTML5, CSS3, dan JavaScript murni (Vanilla JS)** sehingga ringan, cepat dibuka di HP pelanggan, dan bisa **di-online-kan 100% gratis 24 jam nonstop**.

---

## 📱 Fitur Utama

1. **Integrasi WhatsApp CS Otomatis:**
   * Setiap produk memiliki tombol **"Chat CS / Pesan"**.
   * Ketika pelanggan mengklik tombol tersebut, otomatis membuka WhatsApp CS dengan pesan yang sudah terisi otomatis (nama produk, harga, kategori, dan salam pembuka).
   * Tersedia tombol WhatsApp mengambang (*floating button*) di pojok kanan bawah dan tombol CS di header.
2. **Kategori Produk Lengkap:**
   * Case HP (iPhone, Samsung, Oppo, Vivo, Xiaomi)
   * Tempered Glass & Pelindung Layar (Anti-Spy, Ceramic Matte Gaming, Pelindung Kamera)
   * Charger & Kabel Data (Fast Charging 20W/33W/65W, Braided Cable)
   * Audio & TWS (Bluetooth Earphone, Speaker Portable, Headset)
   * Powerbank & Baterai (10.000 mAh & 20.000 mAh)
   * Holder & Tripod (Tripod Tongsis Bluetooth, Car Holder)
   * Aksesoris Lainnya (Pop Socket, Converter OTG)
3. **Pencarian Real-Time (Live Search):** Pelanggan bisa langsung mengetikkan nama barang yang dicari.
4. **Modal Pop-up Detail Produk:** Klik gambar atau judul untuk melihat detail lengkap dan daftar keunggulan barang sebelum menghubungi CS.
5. **Responsif & Mobile-Friendly:** Tampilan sangat nyaman dibuka dari HP layar kecil maupun laptop/komputer.

---

## 🛠️ Cara Mengubah Nomor WhatsApp CS

Buka file `script.js` pada baris 13-18:

```javascript
const TOKO_BINTANG_CONFIG = {
    storeName: "Toko Bintang Ambon",
    whatsapp: "6281141401975", // Nomor CS WhatsApp Toko Bintang Ambon
    whatsappDisplay: "0811-4140-1975",
    city: "Ambon, Maluku"
};
```
* Ganti `"6281234567890"` dengan nomor WhatsApp toko Anda (gunakan kode negara `62` tanpa tanda `+`).
* Ganti `"0812-3456-7890"` untuk tampilan nomor yang enak dibaca pengunjung di bagian atas website.

---

## 🔒 Sistem Keamanan Mode Admin (Khusus Pengelola Toko)

Secara bawaan, **seluruh tombol "Edit", "+ Tambah Produk", dan "Reset" DISEMBUNYIKAN SEPENUHNYA** dari pelanggan umum yang mengakses website.

### Cara Masuk ke Mode Admin:
1. Buka website katalog Anda.
2. Gulir ke bagian paling bawah (footer), klik tombol **`🔒 Akses Admin Toko`**.
3. Masukkan PIN Admin:
   * **PIN Default:** `bintang1975` (dapat diubah di `script.js` pada bagian `ADMIN_CONFIG.pin`).
4. Klik **"Buka Mode Edit"**.
5. Banner Admin berwarna gelap akan muncul di bagian paling atas, dan tombol **"✏️ Edit"** di setiap produk serta tombol **"+ Tambah Produk"** kini aktif!
6. Setelah selesai mengedit, cukup klik tombol merah **"🔒 Kunci / Keluar Admin"** di banner atas untuk mengembalikan tampilan ke mode pelanggan umum yang bersih.

### Cara Menyimpan Data Produk untuk Di-online-kan:
Jika Anda menambahkan produk baru atau mengubah banyak foto & nama barang di laptop Anda, klik tombol biru **`📥 Unduh Data Baru`** di banner admin. Anda akan mendapatkan file data produk yang siap dipakai untuk update online!

---

## 🚀 Cara Meng-online-kannya ke Internet (Gratis & Cepat)

Ada 2 cara termudah yang bisa langsung Anda coba:

### Cara 1: Menggunakan Netlify (Paling Mudah, Tanpa Coding)
1. Buka situs [Netlify Drop](https://app.netlify.com/drop).
2. Buat akun gratis (bisa login dengan email Google/GitHub).
3. Seret (*drag and drop*) folder `Katalog-digital-tokobintang` ke area upload di halaman Netlify Drop.
4. Dalam beberapa detik, website Anda langsung online dan Anda akan mendapatkan link website (misal: `katalog-bintang-ambon.netlify.app`) yang bisa langsung dibagikan ke pelanggan di Instagram, Facebook, atau status WhatsApp!

### Cara 2: Menggunakan Vercel
1. Buka [Vercel](https://vercel.com/) dan daftar gratis.
2. Upload folder proyek Anda.
3. Anda akan mendapatkan URL gratis seperti `katalog-bintang-ambon.vercel.app`.
