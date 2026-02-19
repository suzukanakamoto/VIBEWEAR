* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }

/* Promo Slider */
.promo-slider {
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
}

.slider-wrapper {
    display: flex;
    width: 200%; /* Sesuai jumlah slide */
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide {
    width: 50%;
    height: 100%;
    background-size: cover !important;
    background-position: center !important;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

/* Header Tab*/
/* Header Styling */
.main-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo { font-size: 24px; font-weight: 800; letter-spacing: 1px; }
.logo span { color: #e67e22; }

/* Search Bar Styling */
.search-container {
    flex: 0 1 400px;
    display: flex;
    background: #f1f1f1;
    border-radius: 25px;
    padding: 5px 15px;
    transition: 0.3s;
}

.search-container:focus-within {
    background: #fff;
    box-shadow: 0 0 0 2px #e67e22;
}

#searchInput {
    width: 100%;
    border: none;
    background: transparent;
    padding: 8px;
    outline: none;
    font-size: 14px;
}

.search-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 18px;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    margin-left: 20px;
    font-weight: 500;
    transition: 0.3s;
}

.nav-links a:hover { color: #e67e22; }

/* Responsive Adjustments */
@media (max-width: 768px) {
    .main-header { flex-direction: column; gap: 15px; }
    .nav-links { display: none; } /* Sembunyikan nav di mobile untuk ringkas */
}

/* Product Grid */
.container { padding: 40px 5%; }
.section-title { margin-bottom: 30px; text-transform: uppercase; letter-spacing: 2px; }

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.product-card {
    background: #fff;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.product-card:hover {
    transform: translateY(-10px);
}

.product-img {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.product-img img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-img img {
    transform: scale(1.1);
}

.overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.3);
    color: white; display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: 0.3s; font-weight: bold;
}

.product-card:hover .overlay { opacity: 1; }

.product-info { padding: 15px; }
.price { color: #e67e22; font-weight: bold; margin-top: 5px; }

/* Styling Kategori di atas Nama Produk */
.category {
    font-size: 12px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 5px;
}

/* Animasi Entry untuk Grid Produk */
.product-card {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

/* Staggered Delay (Produk muncul bergantian) */
.product-card:nth-child(1) { animation-delay: 0.1s; }
.product-card:nth-child(2) { animation-delay: 0.2s; }
.product-card:nth-child(3) { animation-delay: 0.3s; }
.product-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Membuat grid lebih fleksibel */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    padding-top: 20px;
}

/* --- RESPONSIVE MOBILE OPTIMIZATION --- */

@media (max-width: 768px) {
    /* Header: Susun vertikal agar search bar punya ruang */
    .main-header {
        flex-direction: column;
        padding: 15px;
        gap: 15px;
    }

    .search-container {
    flex: 0 1 40px;
    display: flex;
    background: #f1f1f1;
    border-radius: 25px;
    padding: 5px 15px;
    transition: 0.3s;
}


    .nav-links {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 15px;
    }

    .nav-links a {
        margin: 0;
        font-size: 14px;
    }

    /* Slider: Kurangi tinggi agar tidak memenuhi layar HP */
    .promo-slider {
        height: 250px;
    }

    .promo-content h1 {
        font-size: 1.8rem;
    }

    /* Grid Produk: Tampilkan 2 kolom (standar e-commerce mobile) */
    .product-grid {
        grid-template-columns: repeat(2, 1fr); 
        gap: 15px;
        padding: 10px;
    }

    .product-img {
        height: 200px; /* Sesuaikan tinggi gambar di HP */
    }

    .product-info h3 {
        font-size: 14px; /* Kecilkan teks agar tidak pecah */
    }
}

/* Optimasi untuk HP yang sangat kecil (layar di bawah 480px) */
@media (max-width: 480px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr); /* Tetap 2 kolom agar efisien */
        gap: 10px;
    }
    
    .promo-content h1 {
        font-size: 1.4rem;
    }
}
