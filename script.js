// Fungsi Pencarian Produk Real-time
function searchProduct() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').innerText.toLowerCase();
        const category = card.querySelector('.category').innerText.toLowerCase();
        
        // Cari berdasarkan nama ATAU kategori
        if (productName.includes(input) || category.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Tambahkan animasi sederhana di CSS untuk transisi pencarian
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// 1. Auto Slider Logic
const slider = document.getElementById('slider');
let slideIndex = 0;

function autoSlide() {
    slideIndex++;
    if (slideIndex > 1) { // 1 adalah index maksimal (karena ada 2 slide)
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 50}%)`;
}

// Geser otomatis setiap 4 detik
setInterval(autoSlide, 4000);

// Modifikasi fungsi openProduct dengan parameter link tujuan
function openProduct(name, desc, price, img, checkoutLink) {
    const detailWindow = window.open("", "_blank");
    
    detailWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${name} | VIBEWEAR Collective</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
                
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Inter', sans-serif; 
                    background-color: #ffffff; 
                    color: #1a1a1a;
                    overflow-x: hidden;
                }

                .main-container {
                    display: flex;
                    min-height: 100vh;
                    flex-wrap: wrap;
                }

                /* Visual Section (Left) */
                .visual-side {
                    flex: 1;
                    min-width: 50%;
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
                    animation: zoomIn 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* Content Section (Right) */
                .content-side {
                    flex: 1;
                    min-width: 50%;
                    padding: 80px 10%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: white;
                }

                .breadcrumb { font-size: 12px; letter-spacing: 2px; color: #888; margin-bottom: 20px; text-transform: uppercase; }
                
                h1 { 
                    font-size: clamp(2.5rem, 5vw, 4rem); 
                    font-weight: 900; 
                    line-height: 1; 
                    margin-bottom: 20px; 
                    letter-spacing: -2px;
                    animation: slideUp 0.8s ease forwards;
                }

                .price-tag { 
                    font-size: 24px; 
                    font-weight: 400; 
                    color: #e67e22; 
                    margin-bottom: 40px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .price-tag::after {
                    content: "";
                    height: 1px;
                    width: 50px;
                    background: #e67e22;
                }

                .description { 
                    font-size: 18px; 
                    line-height: 1.8; 
                    color: #444; 
                    margin-bottom: 50px;
                    max-width: 500px;
                    animation: fadeIn 1s ease 0.3s forwards;
                    opacity: 0;
                }

                /* Interactive Buttons */
                .action-area {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .btn-primary {
                    background: #1a1a1a;
                    color: white;
                    padding: 22px 40px;
                    text-decoration: none;
                    text-align: center;
                    font-weight: 700;
                    letter-spacing: 1px;
                    transition: all 0.3s;
                    border: 1px solid #1a1a1a;
                }

                .btn-primary:hover {
                    background: transparent;
                    color: #1a1a1a;
                }

                .btn-secondary {
                    background: transparent;
                    color: #1a1a1a;
                    padding: 20px 40px;
                    text-decoration: none;
                    text-align: center;
                    font-weight: 600;
                    border: 1px solid #ddd;
                    transition: 0.3s;
                }

                .btn-secondary:hover { border-color: #1a1a1a; }

                /* Animations */
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(1.1); }
                    to { opacity: 1; transform: scale(1); }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeIn {
                    to { opacity: 1; }
                }

                /* Mobile Responsive */
                @media (max-width: 900px) {
                    .visual-side { height: 60vh; position: relative; }
                    .content-side { padding: 40px 20px; }
                }
            </style>
        </head>
        <body>
            <div class="main-container">
                <div class="visual-side">
                    <img src="${img}" alt="${name}">
                </div>
                
                <div class="content-side">
                    <div class="breadcrumb">Product / Collective / New Arrival</div>
                    <h1>${name}</h1>
                    <div class="price-tag">${price}</div>
                    
                    <p class="description">
                        ${desc} <br><br>
                        Material berkualitas tinggi yang dirancang untuk daya tahan dan kenyamanan maksimal. 
                        Setiap detail diperhatikan untuk memastikan Anda mendapatkan produk terbaik dari koleksi kami.
                    </p>

                    <div class="action-area">
                        <a href="${checkoutLink}" target="_blank" class="btn-primary">CHECKOUT SEKARANG</a>
                        <a href="javascript:window.close()" class="btn-secondary">KEMBALI KE KATALOG</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
}