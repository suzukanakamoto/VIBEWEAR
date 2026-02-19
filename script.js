/**
 * VIBEWEAR - Script Logic (Optimized Search)
 */

// --- 1. LOGIKA AUTO SLIDER PROMO ---
const slider = document.getElementById('slider');
let slideIndex = 0;
const totalSlides = 2; 

function autoSlide() {
    if (!slider) return;
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * (100 / totalSlides)}%)`;
}
setInterval(autoSlide, 4000);


// --- 2. FUNGSI PENCARIAN PRODUK (FIXED) ---
function searchProduct() {
    // Ambil input, ubah ke lowercase, hapus spasi di awal/akhir
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Ambil Nama Produk dan Kategori
        const productName = card.querySelector('h3').innerText.toLowerCase();
        const category = card.querySelector('.category').innerText.toLowerCase();
        
        // Logika: Tampilkan jika Nama atau Kategori mengandung kata kunci
        if (productName.includes(input) || category.includes(input)) {
            card.style.display = ""; // Mengembalikan ke display awal (grid)
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
        } else {
            // Sembunyikan dengan transisi halus
            card.style.display = "none";
        }
    });
}

// --- 3. FUNGSI OPEN PRODUCT (PREMIUM DETAIL PAGE) ---
function openProduct(name, desc, price, img, checkoutLink) {
    const detailWindow = window.open("", "_blank");
    
    // Menulis konten HTML ke tab baru
    detailWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name} | VIBEWEAR Collective</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
                
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Inter', sans-serif; 
                    background: #ffffff; 
                    color: #1a1a1a;
                    line-height: 1.6;
                }

                .main-container {
                    display: flex;
                    min-height: 100vh;
                }

                /* Sisi Visual (Kiri) */
                .visual-side {
                    flex: 1;
                    background: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 40px;
                    position: sticky;
                    top: 0;
                    height: 100vh;
                }

                .visual-side img {
                    max-width: 90%;
                    max-height: 85vh;
                    object-fit: cover;
                    border-radius: 4px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
                    animation: zoomIn 1s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* Sisi Konten (Kanan) */
                .content-side {
                    flex: 1;
                    padding: 80px 8%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .breadcrumb { 
                    font-size: 12px; 
                    letter-spacing: 2px; 
                    color: #888; 
                    margin-bottom: 20px; 
                    text-transform: uppercase; 
                }
                
                h1 { 
                    font-size: clamp(2.5rem, 5vw, 3.5rem); 
                    font-weight: 900; 
                    line-height: 1.1; 
                    margin-bottom: 15px; 
                    letter-spacing: -1px;
                }

                .price-tag { 
                    font-size: 24px; 
                    color: #e67e22; 
                    margin-bottom: 35px;
                    font-weight: 500;
                }

                .description { 
                    font-size: 17px; 
                    color: #444; 
                    margin-bottom: 40px;
                    max-width: 550px;
                }

                /* Area Tombol */
                .action-area {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .btn-primary {
                    background: #1a1a1a;
                    color: white;
                    padding: 20px;
                    text-decoration: none;
                    text-align: center;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: 0.3s;
                    border: 1px solid #1a1a1a;
                }

                .btn-primary:hover {
                    background: transparent;
                    color: #1a1a1a;
                }

                .btn-secondary {
                    background: transparent;
                    color: #666;
                    padding: 15px;
                    text-decoration: none;
                    text-align: center;
                    font-size: 14px;
                    border: 1px solid #eee;
                    transition: 0.3s;
                }

                .btn-secondary:hover { border-color: #1a1a1a; color: #1a1a1a; }

                /* ANIMASI */
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }

                /* RESPONSIVE MOBILE */
                @media (max-width: 900px) {
                    .main-container { flex-direction: column; }
                    .visual-side { 
                        height: 60vh; 
                        position: relative; 
                        min-width: 100%;
                    }
                    .content-side { 
                        min-width: 100%; 
                        padding: 40px 20px;
                        text-align: center;
                    }
                    .description { margin: 0 auto 30px auto; }
                    .btn-primary { width: 100%; }
                }
            </style>
        </head>
        <body>
            <div class="main-container">
                <div class="visual-side">
                    <img src="${img}" alt="${name}">
                </div>
                
                <div class="content-side">
                    <div class="breadcrumb">Koleksi Terbatas / Clothing</div>
                    <h1>${name}</h1>
                    <div class="price-tag">${price}</div>
                    
                    <p class="description">
                        ${desc} <br><br>
                        Dibuat dengan standar kualitas tinggi, memastikan kenyamanan penggunaan sepanjang hari dengan desain yang tetap stylish dan modern.
                    </p>

                    <div class="action-area">
                        <a href="${checkoutLink}" target="_blank" class="btn-primary">Beli Sekarang</a>
                        <a href="javascript:window.close()" class="btn-secondary">Kembali Menjelajah</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
}
