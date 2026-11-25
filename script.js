/**
 * ====================================================================
 * KATALOG DIGITAL TOKO BINTANG AMBON - JAVASCRIPT
 * ====================================================================
 * 
 * PANDUAN PENGATURAN CS WHATSAPP:
 * Ganti nilai "whatsapp" di bawah ini dengan nomor WhatsApp CS Toko Bintang Ambon.
 * Gunakan format kode negara (62) tanpa tanda plus (+) atau spasi.
 * Contoh: 081234567890 diubah menjadi "6281234567890"
 */

const TOKO_BINTANG_CONFIG = {
    storeName: "Toko Bintang Ambon",
    whatsapp: "6281141401975", // NOMOR RESMI CS TOKO BINTANG AMBON
    whatsappDisplay: "0811-4140-1975",
    city: "Ambon, Maluku"
};

/**
 * DATABASE PRODUK TOKO BINTANG AMBON (BAWAAN)
 */
const DEFAULT_PRODUCTS_DATA = [
    // --- 1. CASE HP ---
    {
        id: 1,
        name: "Casing Magnetic Clear MagSafe iPhone All Series",
        category: "Case HP",
        price: 45000,
        priceDisplay: "Rp 45.000",
        image: "https://images.unsplash.com/photo-1603539276536-f089694155b1?auto=format&fit=crop&w=600&q=80",
        tag: "BEST SELLER",
        status: "Ready Stock",
        desc: "Case transparan bening anti-kuning dengan ring magnet MagSafe kuat. Menampilkan warna asli iPhone Anda dengan proteksi sudut anti-benturan.",
        features: ["Support Wireless MagSafe Charger", "Bahan Acrylic hybrid TPU lentur", "Tersedia iPhone 11 sampai 16 Pro Max", "Tepi kamera lebih tinggi (Camera Protection)"]
    },
    {
        id: 2,
        name: "Softcase Silikon Macaron Matte Pelindung Kamera",
        category: "Case HP",
        price: 25000,
        priceDisplay: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        tag: "POPULER",
        status: "Ready Stock",
        desc: "Case warna pastel lembut dengan permukaan matte halus anti-sidik jari dan pelindung lensa kamera tertutup.",
        features: ["Pilihan 8 warna pastel", "Bagian dalam dilapisi kain beludru lembut", "Tersedia untuk Samsung, Oppo, Vivo, Xiaomi, Realme", "Sangat nyaman digenggam"]
    },
    {
        id: 3,
        name: "Armor Shockproof Case with Ring Stand Kickstand",
        category: "Case HP",
        price: 35000,
        priceDisplay: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
        tag: "KUAT",
        status: "Ready Stock",
        desc: "Case tangguh bergaya robotik militer dengan ring putar 360 derajat dan pelat magnet untuk holder mobil.",
        features: ["Dual layer: Hard PC + Soft TPU", "Ring holder kokoh bisa jadi standing nonton video", "Tahan benturan saat jatuh", "Tersedia banyak tipe Android"]
    },

    // --- 2. TEMPERED GLASS & SCREEN PROTECTOR ---
    {
        id: 4,
        name: "Tempered Glass Privacy Anti-Spy 9D Full Cover",
        category: "Tempered Glass",
        price: 30000,
        priceDisplay: "Rp 30.000",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        tag: "TERLARIS",
        status: "Free Pasang di Toko",
        desc: "Layar tidak bisa diintip dari samping! Menjaga privasi chat dan data Anda di tempat umum dengan kaca 9H super kuat.",
        features: ["Sudut pandang 28 derajat anti intip", "Full lem, tidak ada bintik air", "Bisa dipasangkan langsung di Toko Bintang Ambon", "Tersedia semua merk HP"]
    },
    {
        id: 5,
        name: "Ceramic Matte Film Anti-Minyak & Anti-Gores Gaming",
        category: "Tempered Glass",
        price: 20000,
        priceDisplay: "Rp 20.000",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02560?auto=format&fit=crop&w=600&q=80",
        tag: "GAMING",
        status: "Ready Stock",
        desc: "Pelindung layar bahan ceramic elastis yang tidak bisa pecah. Permukaan doff matte membuat jari sangat licin saat bermain game MLBB & PUBG.",
        features: ["Anti-pecah (lentur)", "Permukaan matte bebas minyak sidik jari", "Layar sentuh super responsif", "Mudah dibersihkan"]
    },
    {
        id: 6,
        name: "Pelindung Lensa Kamera Diamond Crystal Camera Ring",
        category: "Tempered Glass",
        price: 25000,
        priceDisplay: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
        tag: "BARU",
        status: "Ready Stock",
        desc: "Kaca pelindung lensa kamera individual dengan ring bingkai berkilau. Menjaga kaca kamera dari goresan tanpa menurunkan kualitas foto.",
        features: ["Kaca sapphire ultra-bening", "Tidak memantulkan flash kamera di malam hari", "Presisi pas per-lensa", "Pilihan warna senada HP"]
    },

    // --- 3. CHARGER & KABEL DATA ---
    {
        id: 7,
        name: "Fast Charger Adapter 20W / 33W Type-C Super Fast",
        category: "Charger & Kabel",
        price: 65000,
        priceDisplay: "Rp 65.000",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
        tag: "BEST SELLER",
        status: "Garansi Tes Toko",
        desc: "Kepala adaptor charger compact berkecepatan tinggi dengan proteksi arus pintar (Smart IC) anti-panas.",
        features: ["Support Power Delivery (PD) & Quick Charge 3.0", "Isi baterai 0-50% hanya dalam 30 menit", "Bisa untuk iPhone & Android", "Anti overcharge"]
    },
    {
        id: 8,
        name: "Kabel Data Fast Charging Braided Type-C & Lightning",
        category: "Charger & Kabel",
        price: 25000,
        priceDisplay: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        tag: "PROMO",
        status: "Ready Stock",
        desc: "Kabel data lapis benang nilon rajut tebal (braided), kuat ditarik dan anti patah di bagian leher konektor.",
        features: ["Support Fast Charging hingga 6A", "Bisa transfer data ke laptop/PC dengan cepat", "Panjang kabel 1 Meter & 2 Meter", "Konektor Type-C / iPhone Lightning / Micro USB"]
    },
    {
        id: 9,
        name: "Kabel 3-in-1 Universal (Type-C + Lightning + Micro USB)",
        category: "Charger & Kabel",
        price: 35000,
        priceDisplay: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        tag: "PRAKTIS",
        status: "Ready Stock",
        desc: "Satu kabel untuk semua jenis gadget! Sangat cocok dibawa bepergian santai atau dipakai bersama keluarga di mobil.",
        features: ["3 colokan sekaligus aktif bersamaan", "Bahan kabel nylon woven awet", "Arus stabil 3.5A total", "Kompatibel ke semua smartphone"]
    },

    // --- 4. AUDIO & TWS ---
    {
        id: 10,
        name: "TWS Bluetooth Earphone Wireless Stereo Bass Hifi",
        category: "Audio & TWS",
        price: 95000,
        priceDisplay: "Rp 95.000",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
        tag: "HOT ITEM",
        status: "Garansi Tes Toko",
        desc: "Earphone nirkabel Bluetooth 5.3 dengan suara bass menggelegar, mikrofon jernih untuk telepon, dan touch control sensitif.",
        features: ["Bluetooth 5.3 koneksi stabil tanpa delay", "Baterai tahan hingga 20 jam dengan charging case", "Case display LED indikator baterai", "Kecil, ergonomis, dan tidak mudah jatuh dari telinga"]
    },
    {
        id: 11,
        name: "Speaker Bluetooth Mini Portable Bass Booster LED",
        category: "Audio & TWS",
        price: 75000,
        priceDisplay: "Rp 75.000",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        tag: "POPULER",
        status: "Ready Stock",
        desc: "Speaker mini portabel dengan lampu RGB menyala mengikuti ritme lagu. Suara vokal jernih dan dentuman bass mantap untuk santai.",
        features: ["Support Bluetooth, Flashdisk, MicroSD, & Radio FM", "Baterai tahan 4-6 jam nonstop", "Ukuran compact mudah dibawa kemana-mana", "Bisa pairing TWS 2 speaker sekaligus"]
    },
    {
        id: 12,
        name: "Headset Earphone Kabel Type-C & Jack 3.5mm Bass Extra",
        category: "Audio & TWS",
        price: 30000,
        priceDisplay: "Rp 30.000",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        tag: "ORIGINAL",
        status: "Ready Stock",
        desc: "Headset kabel suara jernih dengan tombol pengatur volume dan mic internal peredam kebisingan untuk telepon atau meeting online.",
        features: ["Tersedia colokan Type-C (untuk HP tanpa audio jack) & Jack 3.5mm", "Suara HD Audio Hi-Res", "Kabel TPE elastis tidak mudah kusut", "Free ear-tips cadangan"]
    },

    // --- 5. POWERBANK & BATERAI ---
    {
        id: 13,
        name: "Powerbank Fast Charging 10.000 mAh Dual Output LED",
        category: "Powerbank",
        price: 115000,
        priceDisplay: "Rp 115.000",
        image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=600&q=80",
        tag: "BEST SELLER",
        status: "Aman Masuk Pesawat",
        desc: "Powerbank ramping ukuran pas di saku celana. Mampu mengisi baterai HP 2 sampai 3 kali penuh dengan tampilan persentase baterai LED akurat.",
        features: ["Kapasitas riil 10.000 mAh", "Dual Port USB + Type-C Input/Output", "Proteksi 9 tingkat perlindungan baterai", "Flight Friendly (Sesuai regulasi penerbangan)"]
    },
    {
        id: 14,
        name: "Powerbank Jumbo 20.000 mAh 22.5W Super Charge",
        category: "Powerbank",
        price: 175000,
        priceDisplay: "Rp 175.000",
        image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
        tag: "JUMBO",
        status: "Ready Stock",
        desc: "Kapasitas monster untuk Anda yang sering beraktivitas seharian di luar rumah atau perjalanan antar pulau di Maluku.",
        features: ["Daya tahan cas hingga 5-6 kali", "Fast charging 22.5W & PD 20W", "Bisa cas 3 HP sekaligus", "Material kokoh anti-gores"]
    },

    // --- 6. HOLDER & TRIPOD ---
    {
        id: 15,
        name: "Tripod Tongsis Bluetooth 3-in-1 with Remote Shutter",
        category: "Holder & Tripod",
        price: 45000,
        priceDisplay: "Rp 45.000",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
        tag: "TERLARIS",
        status: "Ready Stock",
        desc: "Tongsis selfie yang bisa dibentangkan menjadi tripod kaki 3 stabil. Dilengkapi tombol remote nirkabel Bluetooth untuk foto bersama keluarga.",
        features: ["Bisa diputar 360 derajat horisontal/vertikal", "Remote Bluetooth bisa lepas-pasang (jarak 10 meter)", "Panjang maksimal hingga 100 cm", "Bahan stainless ringan dan kokoh"]
    },
    {
        id: 16,
        name: "Car Phone Holder Dashboard & Kaca Mobil Suction Cup",
        category: "Holder & Tripod",
        price: 35000,
        priceDisplay: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
        tag: "READY",
        status: "Ready Stock",
        desc: "Dudukan smartphone di mobil dengan daya hisap vakum kuat. Menjepit otomatis saat HP diletakkan, tidak goyang di jalan bergelombang.",
        features: ["Lengan teleskopik dapat ditarik dan diputar", "Daya rekat silikon hisap super kuat", "Cocok untuk navigasi Google Maps", "Bisa di AC mobil atau dashboard"]
    },

    // --- 7. AKSESORIS LAINNYA ---
    {
        id: 17,
        name: "Pop Socket 3D Karakter / Akrilik Grip HP",
        category: "Aksesoris",
        price: 10000,
        priceDisplay: "Rp 10.000",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
        tag: "MURAH",
        status: "Ready Stock",
        desc: "Grip pegangan jari belakang HP dengan ratusan motif lucu, estetik, dan elegan. Mencegah HP tergelincir dari genggaman tangan.",
        features: ["Lem 3M super rekat tidak merusak casing", "Bisa dilipat atau ditarik 2 tingkat", "Bisa untuk melilit kabel earphone", "Ratusan motif pilihan di toko"]
    },
    {
        id: 18,
        name: "OTG Adapter Converter Type-C to USB Flashdisk",
        category: "Aksesoris",
        price: 15000,
        priceDisplay: "Rp 15.000",
        image: "https://images.unsplash.com/photo-1618410320928-25228d811631?auto=format&fit=crop&w=600&q=80",
        tag: "ESSENTIAL",
        status: "Ready Stock",
        desc: "Sambungkan Flashdisk, Mouse, atau Keyboard langsung ke HP Android Anda tanpa perlu komputer.",
        features: ["Plug and play langsung terbaca", "Bahan metal kokoh dan mini", "Transfer file musik/foto super kencang", "Kompatibel semua HP support OTG"]
    }
];

// PENYIMPANAN LOCALSTORAGE AGAR PERUBAHAN FOTO & TEKS TERSIMPAN PERMANEN
const STORAGE_KEY = "TOKO_BINTANG_PRODUCTS_CUSTOM_V1";

function loadProductsFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn("Gagal memuat dari localStorage, menggunakan data bawaan:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS_DATA));
}

function saveProductsToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PRODUCTS_DATA));
    } catch (e) {
        console.error("Gagal menyimpan ke localStorage:", e);
    }
}

// SISTEM KEAMANAN ADMIN TOKO BINTANG (100% BEKERJA TANPA DATABASE)
const ADMIN_CONFIG = {
    defaultPin: "bintang1975", // PIN Default Toko Bintang (bisa langsung Anda ganti di sini)
    storageKey: "TOKO_BINTANG_CUSTOM_PIN",
    sessionKey: "TOKO_BINTANG_ADMIN_ACTIVE",
    getPin: function() {
        return localStorage.getItem(this.storageKey) || this.defaultPin;
    },
    setPin: function(newPin) {
        localStorage.setItem(this.storageKey, newPin);
    }
};

function isAdminLoggedIn() {
    return sessionStorage.getItem(ADMIN_CONFIG.sessionKey) === "true";
}

function updateAdminModeUI() {
    const isLogged = isAdminLoggedIn();
    const adminBanner = document.getElementById("adminBannerBar");
    if (isLogged) {
        document.body.classList.add("admin-mode-active");
        if (adminBanner) adminBanner.style.display = "block";
    } else {
        document.body.classList.remove("admin-mode-active");
        if (adminBanner) adminBanner.style.display = "none";
    }
}

// STATE APLIKASI
let PRODUCTS_DATA = loadProductsFromStorage();
let currentCategory = "Semua";
let currentSearchQuery = "";
let currentEditImageBase64 = "";

// INISIALISASI HALAMAN
document.addEventListener("DOMContentLoaded", () => {
    initStoreInfo();
    updateAdminModeUI();
    renderCategories();
    renderProducts();
    initEventListeners();
    initDraggableWidget();
});

/**
 * Update Nomor WA di Header & Floating Button
 */
function initStoreInfo() {
    const waDisplay = document.getElementById("topbar-wa-display");
    if (waDisplay) waDisplay.textContent = TOKO_BINTANG_CONFIG.whatsappDisplay;

    const topbarLink = document.getElementById("topbar-wa-link");
    const generalMsg = encodeURIComponent(`Halo CS ${TOKO_BINTANG_CONFIG.storeName}, saya ingin bertanya mengenai ketersediaan aksesoris di toko.`);
    const waUrlGeneral = `https://wa.me/${TOKO_BINTANG_CONFIG.whatsapp}?text=${generalMsg}`;

    if (topbarLink) topbarLink.href = waUrlGeneral;

    const headerCsBtn = document.getElementById("header-hubungi-cs");
    if (headerCsBtn) headerCsBtn.href = waUrlGeneral;

    const floatingWa = document.getElementById("floatingWaBtn");
    if (floatingWa) floatingWa.href = waUrlGeneral;

    const floatingBubble = document.getElementById("floatingWaBubble");
    if (floatingBubble) floatingBubble.href = waUrlGeneral;
}

/**
 * Render Tombol Filter Kategori
 */
function renderCategories() {
    const categoryContainer = document.getElementById("categoryContainer");
    if (!categoryContainer) return;

    // Ambil semua kategori unik
    const categories = ["Semua", ...new Set(PRODUCTS_DATA.map(p => p.category))];

    categoryContainer.innerHTML = categories.map(cat => {
        const isActive = cat === currentCategory ? "active" : "";
        let icon = "fa-tag";
        if (cat === "Semua") icon = "fa-border-all";
        else if (cat === "Case HP") icon = "fa-mobile-screen";
        else if (cat === "Tempered Glass") icon = "fa-shield-halved";
        else if (cat === "Charger & Kabel") icon = "fa-bolt";
        else if (cat === "Audio & TWS") icon = "fa-headphones";
        else if (cat === "Powerbank") icon = "fa-battery-three-quarters";
        else if (cat === "Holder & Tripod") icon = "fa-camera";
        else if (cat === "Aksesoris") icon = "fa-gem";

        return `
            <button class="cat-btn ${isActive}" onclick="filterByCategory('${cat}')">
                <i class="fa-solid ${icon}"></i> ${cat}
            </button>
        `;
    }).join("");
}

/**
 * Filter berdasarkan Kategori
 */
function filterByCategory(category) {
    currentCategory = category;
    renderCategories();
    renderProducts();
}

/**
 * Generate Link WhatsApp dengan Pesan Otomatis untuk Produk Tertentu
 */
function createWhatsAppOrderUrl(product) {
    const message = 
`Halo Admin CS ${TOKO_BINTANG_CONFIG.storeName} 👋

Saya tertarik untuk menanyakan produk ini:
*Nama:* ${product.name}
*Kategori:* ${product.category}

Bisa tolong info harga dan ketersediaan stok untuk tipe HP saya?
Terima kasih!`;

    return `https://wa.me/${TOKO_BINTANG_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Render Daftar Produk
 */
function renderProducts() {
    const productGrid = document.getElementById("productGrid");
    const emptyState = document.getElementById("noProductsFound");
    const countBadge = document.getElementById("productCountBadge");

    if (!productGrid) return;

    // Filter berdasarkan Kategori & Kata Kunci Pencarian
    const filtered = PRODUCTS_DATA.filter(item => {
        const matchCategory = currentCategory === "Semua" || item.category === currentCategory;
        const q = currentSearchQuery.toLowerCase();
        const matchSearch = item.name.toLowerCase().includes(q) || 
                            item.desc.toLowerCase().includes(q) || 
                            item.category.toLowerCase().includes(q);
        return matchCategory && matchSearch;
    });

    // Update Counter
    if (countBadge) {
        countBadge.textContent = `Menampilkan ${filtered.length} produk`;
    }

    // Tampilkan pesan kosong jika tidak ada
    if (filtered.length === 0) {
        productGrid.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        return;
    } else {
        if (emptyState) emptyState.style.display = "none";
    }

    // Render kartu produk
    productGrid.innerHTML = filtered.map(item => {
        const waLink = createWhatsAppOrderUrl(item);

        return `
            <article class="product-card">
                <div class="product-img-wrapper" onclick="openProductModal(${item.id})">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" id="prod-img-${item.id}">
                    <span class="badge-tag">${item.tag}</span>
                    <span class="badge-status">${item.status}</span>
                    <button class="btn-card-edit" onclick="event.stopPropagation(); openEditProductModal(${item.id})" title="Edit Foto & Teks Produk Ini">
                        <i class="fa-solid fa-pen-to-square"></i> Edit
                    </button>
                </div>
                <div class="product-info">
                    <span class="product-category">${item.category}</span>
                    <h3 class="product-title" onclick="openProductModal(${item.id})">${item.name}</h3>
                    <p class="product-desc">${item.desc}</p>
                    <div class="product-action-row">
                        <span class="stock-info"><i class="fa-solid fa-circle-check"></i> Siap Cek Tipe HP</span>
                    </div>
                    <a href="${waLink}" class="btn-order-wa" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i> Tanya Harga & Stok
                    </a>
                </div>
            </article>
        `;
    }).join("");
}

/**
 * Event Listeners untuk Input Search
 */
function initEventListeners() {
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.trim();
            if (clearBtn) {
                clearBtn.style.display = currentSearchQuery ? "block" : "none";
            }
            renderProducts();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                currentSearchQuery = "";
                clearBtn.style.display = "none";
                renderProducts();
            }
        });
    }
}

/**
 * Reset Filter & Search
 */
function resetFilter() {
    currentCategory = "Semua";
    currentSearchQuery = "";
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");
    if (searchInput) searchInput.value = "";
    if (clearBtn) clearBtn.style.display = "none";

    renderCategories();
    renderProducts();
}

/**
 * Buka Modal Popup Detail Produk
 */
function openProductModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("productModal");
    const modalBody = document.getElementById("modalBody");
    const waLink = createWhatsAppOrderUrl(product);

    const featureListHtml = product.features.map(f => `
        <li><i class="fa-solid fa-circle-check"></i> ${f}</li>
    `).join("");

    modalBody.innerHTML = `
        <div class="modal-body-content">
            <img src="${product.image}" alt="${product.name}" class="modal-image">
            <div class="modal-details">
                <span class="badge-tag">${product.category} • ${product.tag}</span>
                <h2 class="modal-title">${product.name}</h2>
                <div class="modal-status-info">
                    <i class="fa-solid fa-store"></i> Produk Ready di Toko Bintang Ambon
                </div>
                <p class="modal-desc">${product.desc}</p>

                <h4 style="font-size: 0.95rem; font-weight:700; margin-bottom: 8px; color: #1E293B;">
                    Keunggulan Produk:
                </h4>
                <ul class="modal-features">
                    ${featureListHtml}
                </ul>

                <div class="modal-cs-card">
                    <div class="cs-avatar-mini-wrap">
                        <img src="cs-bintang.jpg" alt="CS Toko Bintang Ambon" class="cs-avatar-mini">
                        <span class="status-dot-mini"></span>
                    </div>
                    <div class="modal-cs-text">
                        <strong>Kak Anastasya (CS Toko Bintang Ambon)</strong>
                        <span>Online • Siap cek harga & ketersediaan tipe HP Anda</span>
                    </div>
                </div>

                <div class="modal-action-buttons">
                    <a href="${waLink}" class="btn btn-primary" style="flex: 1; padding: 12px 18px;" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i> Chat Kak Anastasya via WhatsApp
                    </a>
                    <button type="button" class="btn btn-secondary btn-modal-edit" onclick="openEditProductModal(${product.id})" title="Ganti foto atau edit teks produk ini">
                        <i class="fa-solid fa-pen-to-square"></i> Edit Produk
                    </button>
                </div>
                <p style="font-size: 0.78rem; color: #94A3B8; text-align: center; margin-top: 8px;">
                    <i class="fa-solid fa-bolt"></i> Respon Cepat • WhatsApp: 0811-4140-1975
                </p>
            </div>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Kunci scroll background
}

/**
 * Tutup Modal Detail Produk
 */
function closeModal() {
    const modal = document.getElementById("productModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

/**
 * ====================================================================
 * FITUR EDIT TEKS & GANTI FOTO PRODUK SECARA OTOMATIS
 * ====================================================================
 */

/**
 * Buka Modal Edit Produk Tertentu (Hanya Admin yang berhak)
 */
function openEditProductModal(productId) {
    if (!isAdminLoggedIn()) {
        openAdminLoginModal();
        return;
    }

    closeModal(); // Tutup modal detail jika sedang terbuka
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("editModalHeading").innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Foto & Teks Produk';
    document.getElementById("editProductId").value = product.id;
    document.getElementById("editProductName").value = product.name;
    document.getElementById("editProductCategory").value = product.category;
    document.getElementById("editProductTag").value = product.tag || "";
    document.getElementById("editProductStatus").value = product.status || "Ready Stock";
    document.getElementById("editProductDesc").value = product.desc;
    
    // Set preview foto saat ini
    const preview = document.getElementById("editImagePreview");
    preview.src = product.image;
    currentEditImageBase64 = product.image;

    // Reset input
    document.getElementById("editImageUrlInput").value = product.image.startsWith("data:") ? "" : product.image;
    document.getElementById("editImageFileInput").value = "";

    const editModal = document.getElementById("editProductModal");
    if (editModal) {
        editModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

/**
 * Buka Modal Tambah Produk Baru (Hanya Admin yang berhak)
 */
function openAddProductModal() {
    if (!isAdminLoggedIn()) {
        openAdminLoginModal();
        return;
    }

    closeModal();
    document.getElementById("editModalHeading").innerHTML = '<i class="fa-solid fa-plus-circle"></i> Tambah Produk Baru ke Katalog';
    document.getElementById("editProductId").value = "NEW";
    document.getElementById("editProductName").value = "";
    document.getElementById("editProductCategory").value = "Case HP";
    document.getElementById("editProductTag").value = "BARU";
    document.getElementById("editProductStatus").value = "Ready Stock";
    document.getElementById("editProductDesc").value = "";

    const defaultImg = "https://images.unsplash.com/photo-1603539276536-f089694155b1?auto=format&fit=crop&w=600&q=80";
    document.getElementById("editImagePreview").src = defaultImg;
    document.getElementById("editImageUrlInput").value = "";
    document.getElementById("editImageFileInput").value = "";
    currentEditImageBase64 = defaultImg;

    const editModal = document.getElementById("editProductModal");
    if (editModal) {
        editModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

/**
 * Tutup Modal Edit
 */
function closeEditModal() {
    const editModal = document.getElementById("editProductModal");
    if (editModal) {
        editModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

/**
 * Handle ketika User Memilih File Foto dari Laptop / HP
 */
function handleProductImageFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Harap pilih file gambar (JPG, PNG, WEBP, dll).");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        currentEditImageBase64 = e.target.result;
        const preview = document.getElementById("editImagePreview");
        if (preview) {
            preview.src = currentEditImageBase64;
        }
        showToast("Foto baru berhasil dimuat! Klik 'Simpan' untuk menerapkan.");
    };
    reader.readAsDataURL(file);
}

/**
 * Handle ketika User Mengetikkan Link URL Foto
 */
function handleProductImageUrl(event) {
    const url = event.target.value.trim();
    if (url) {
        currentEditImageBase64 = url;
        const preview = document.getElementById("editImagePreview");
        if (preview) {
            preview.src = url;
        }
    }
}

/**
 * Simpan Perubahan Foto & Teks (Otomatis Terganti)
 */
function saveProductChanges(event) {
    event.preventDefault();
    const idVal = document.getElementById("editProductId").value;
    const name = document.getElementById("editProductName").value.trim();
    const category = document.getElementById("editProductCategory").value;
    const tag = document.getElementById("editProductTag").value.trim() || "POPULER";
    const status = document.getElementById("editProductStatus").value.trim() || "Ready Stock";
    const desc = document.getElementById("editProductDesc").value.trim();
    const image = currentEditImageBase64 || document.getElementById("editImagePreview").src;

    if (!name || !desc) {
        alert("Harap isi nama dan deskripsi produk!");
        return;
    }

    if (idVal === "NEW") {
        // Tambah produk baru
        const newProduct = {
            id: Date.now(),
            name,
            category,
            image,
            tag,
            status,
            desc,
            features: [
                "Produk ready di Toko Bintang Ambon",
                "Kualitas terjamin & harga bersahabat",
                "Bisa cek ketersediaan tipe HP ke CS"
            ]
        };
        PRODUCTS_DATA.unshift(newProduct);
        showToast(`Produk "${name}" berhasil ditambahkan ke katalog!`);
    } else {
        // Update produk yang ada
        const id = parseInt(idVal, 10);
        const index = PRODUCTS_DATA.findIndex(p => p.id === id);
        if (index !== -1) {
            PRODUCTS_DATA[index].name = name;
            PRODUCTS_DATA[index].category = category;
            PRODUCTS_DATA[index].tag = tag;
            PRODUCTS_DATA[index].status = status;
            PRODUCTS_DATA[index].desc = desc;
            PRODUCTS_DATA[index].image = image;
            showToast(`Foto & teks "${name}" otomatis terganti!`);
        }
    }

    // Simpan ke localStorage agar tidak hilang saat refresh
    saveProductsToStorage();
    closeEditModal();

    // Re-render katalog secara instan
    renderCategories();
    renderProducts();
}

/**
 * Kembalikan ke Produk Bawaan Awal
 */
function resetToDefaultProducts() {
    if (confirm("Apakah Anda ingin mengembalikan seluruh produk ke data bawaan awal Toko Bintang Ambon?")) {
        localStorage.removeItem(STORAGE_KEY);
        PRODUCTS_DATA = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS_DATA));
        saveProductsToStorage();
        renderCategories();
        renderProducts();
        showToast("Katalog berhasil dikembalikan ke data awal bawaan.");
    }
}

/**
 * Tampilkan Notifikasi Toast
 */
function showToast(message) {
    const toast = document.getElementById("toastNotification");
    const msgEl = document.getElementById("toastMessage");
    if (toast && msgEl) {
        msgEl.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    }
}

/**
 * ====================================================================
 * MANAJEMEN OTENTIKASI & KEAMANAN ADMIN TOKO BINTANG
 * ====================================================================
 */

/**
 * Buka Modal Login Admin
 */
function openAdminLoginModal() {
    if (isAdminLoggedIn()) {
        showToast("🔓 Anda sudah berada dalam Mode Admin Toko Bintang.");
        return;
    }
    const modal = document.getElementById("adminLoginModal");
    const pinInput = document.getElementById("adminPinInput");
    if (pinInput) pinInput.value = "";
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
        setTimeout(() => pinInput && pinInput.focus(), 150);
    }
}

/**
 * Tutup Modal Login Admin
 */
function closeAdminLoginModal() {
    const modal = document.getElementById("adminLoginModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

/**
 * Proses Validasi PIN Admin
 */
function submitAdminLogin(event) {
    event.preventDefault();
    const pinInput = document.getElementById("adminPinInput");
    const entered = pinInput ? pinInput.value.trim() : "";

    if (entered === ADMIN_CONFIG.getPin()) {
        sessionStorage.setItem(ADMIN_CONFIG.sessionKey, "true");
        updateAdminModeUI();
        closeAdminLoginModal();
        showToast("🔓 Sukses! Mode Admin aktif. Tombol edit produk sekarang dapat digunakan.");
    } else {
        alert("PIN Keamanan salah! Akses ditolak. Hanya staf Toko Bintang yang dapat mengedit.");
        if (pinInput) {
            pinInput.value = "";
            pinInput.focus();
        }
    }
}

/**
 * Buka Modal Ganti PIN Admin
 */
function openChangePinModal() {
    const modal = document.getElementById("changePinModal");
    if (modal) {
        document.getElementById("oldPinInput").value = "";
        document.getElementById("newPinInput").value = "";
        document.getElementById("confirmPinInput").value = "";
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            const oldInput = document.getElementById("oldPinInput");
            if (oldInput) oldInput.focus();
        }, 150);
    }
}

/**
 * Tutup Modal Ganti PIN Admin
 */
function closeChangePinModal() {
    const modal = document.getElementById("changePinModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

/**
 * Proses Ganti PIN Admin Baru
 */
function submitChangePin(event) {
    event.preventDefault();
    const oldPin = document.getElementById("oldPinInput").value.trim();
    const newPin = document.getElementById("newPinInput").value.trim();
    const confirmPin = document.getElementById("confirmPinInput").value.trim();

    if (oldPin !== ADMIN_CONFIG.getPin()) {
        alert("PIN lama yang Anda masukkan salah!");
        return;
    }

    if (newPin.length < 4) {
        alert("PIN baru minimal harus 4 karakter!");
        return;
    }

    if (newPin !== confirmPin) {
        alert("Konfirmasi PIN baru tidak cocok dengan PIN baru!");
        return;
    }

    // Simpan PIN baru
    ADMIN_CONFIG.setPin(newPin);
    closeChangePinModal();
    showToast("🔑 PIN Admin berhasil diubah! Gunakan PIN baru ini untuk login berikutnya.");
}

/**
 * Logout / Kunci Kembali Mode Admin
 */
function logoutAdmin() {
    sessionStorage.removeItem(ADMIN_CONFIG.sessionKey);
    updateAdminModeUI();
    showToast("🔒 Mode Admin dinonaktifkan. Katalog kembali ke tampilan pelanggan umum.");
}

/**
 * Ekspor / Unduh File Data Produk Terbaru untuk Kebutuhan Hosting Online
 */
function exportProductsJsFile() {
    const jsonStr = JSON.stringify(PRODUCTS_DATA, null, 4);
    const content = `/**
 * DATA PRODUK RESMI TOKO BINTANG AMBON
 * Diekspor oleh Admin pada: ${new Date().toLocaleString("id-ID")}
 */
const DEFAULT_PRODUCTS_DATA = ${jsonStr};
`;
    const blob = new Blob([content], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data-produk-bintang.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("📥 File data produk berhasil diunduh!");
}

/**
 * ====================================================================
 * FITUR DRAGGABLE / GESER BEBAS WIDGET CS DENGAN KURSOR ATAU SENTUHAN
 * ====================================================================
 */
function initDraggableWidget() {
    const widget = document.getElementById("draggableCsWidget");
    if (!widget) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;
    let dragThresholdPassed = false;

    // Pulihkan posisi terakhir jika pernah digeser oleh user
    const savedPos = localStorage.getItem("TOKO_BINTANG_FLOATING_POS");
    if (savedPos) {
        try {
            const { left, top } = JSON.parse(savedPos);
            const pad = 10;
            const maxL = window.innerWidth - widget.offsetWidth - pad;
            const maxT = window.innerHeight - widget.offsetHeight - pad;
            const validLeft = Math.max(pad, Math.min(maxL, left));
            const validTop = Math.max(pad, Math.min(maxT, top));

            widget.style.left = `${validLeft}px`;
            widget.style.top = `${validTop}px`;
            widget.style.bottom = "auto";
            widget.style.right = "auto";
        } catch (e) {
            console.warn("Gagal memulihkan posisi widget:", e);
        }
    }

    function onPointerDown(e) {
        // Hanya klik kiri pada mouse
        if (e.type === "mousedown" && e.button !== 0) return;

        isDragging = true;
        dragThresholdPassed = false;

        const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

        startX = clientX;
        startY = clientY;

        const rect = widget.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        widget.classList.add("is-dragging");

        document.addEventListener("mousemove", onPointerMove, { passive: false });
        document.addEventListener("mouseup", onPointerUp);
        document.addEventListener("touchmove", onPointerMove, { passive: false });
        document.addEventListener("touchend", onPointerUp);
    }

    function onPointerMove(e) {
        if (!isDragging) return;

        const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.startsWith("touch") ? e.touches[0].clientY : e.clientY;

        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        // Cek threshold agar klik WhatsApp biasa tidak macet
        if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
            dragThresholdPassed = true;
            if (e.cancelable) e.preventDefault();
        }

        if (dragThresholdPassed) {
            let newLeft = initialLeft + deltaX;
            let newTop = initialTop + deltaY;

            // Batasi agar widget tidak keluar layar
            const pad = 10;
            const maxLeft = window.innerWidth - widget.offsetWidth - pad;
            const maxTop = window.innerHeight - widget.offsetHeight - pad;

            newLeft = Math.max(pad, Math.min(maxLeft, newLeft));
            newTop = Math.max(pad, Math.min(maxTop, newTop));

            widget.style.left = `${newLeft}px`;
            widget.style.top = `${newTop}px`;
            widget.style.bottom = "auto";
            widget.style.right = "auto";
        }
    }

    function onPointerUp(e) {
        if (!isDragging) return;
        isDragging = false;
        widget.classList.remove("is-dragging");

        document.removeEventListener("mousemove", onPointerMove);
        document.removeEventListener("mouseup", onPointerUp);
        document.removeEventListener("touchmove", onPointerMove);
        document.removeEventListener("touchend", onPointerUp);

        // Jika benar-benar dipindahkan, simpan posisi koordinatnya
        if (dragThresholdPassed) {
            const rect = widget.getBoundingClientRect();
            localStorage.setItem("TOKO_BINTANG_FLOATING_POS", JSON.stringify({
                left: Math.round(rect.left),
                top: Math.round(rect.top)
            }));
        }
    }

    // Cegah link terbuka jika user sedang menggeser widget
    widget.addEventListener("click", (e) => {
        if (dragThresholdPassed) {
            e.preventDefault();
            e.stopPropagation();
            dragThresholdPassed = false;
        }
    }, true);

    widget.addEventListener("mousedown", onPointerDown);
    widget.addEventListener("touchstart", onPointerDown, { passive: true });
}

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
        closeEditModal();
        closeAdminLoginModal();
        closeChangePinModal();
    }
});
