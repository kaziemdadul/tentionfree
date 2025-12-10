// --- Data ---
function createVariants(basePrice, baseOriginal) {
    return [
        { label: "1 Month", price: basePrice, originalPrice: baseOriginal },
        { label: "3 Months", price: basePrice * 3 * 0.95, originalPrice: baseOriginal * 3 }, // 5% off
        { label: "6 Months", price: basePrice * 6 * 0.90, originalPrice: baseOriginal * 6 }, // 10% off
        { label: "12 Months", price: basePrice * 12 * 0.85, originalPrice: baseOriginal * 12 } // 15% off
    ].map(v => ({ ...v, price: Math.round(v.price), originalPrice: Math.round(v.originalPrice) }));
}

// Enriched Product Data with details
const products = [
    {
        id: 1,
        name: "Netflix Premium (4K)",
        category: "streaming",
        price: 250,
        originalPrice: 400,
        image: "images/Netflix.png",
        desc: "4K UHD | Private Profile",
        longDesc: "Enjoy unlimited movies and TV shows in Ultra HD 4K quality. This is a private profile on a shared premium account, ensuring your watch history stays personal.",
        features: [
            "4K Ultra HD Quality",
            "Private Profile with PIN",
            "Works on TV, Mobile, Laptop",
            "Download Supported",
            "Full Warranty Support"
        ],
        instructions: "After payment, you will receive the Email and Password via WhatsApp or Email along with your specific Profile PIN.",
        variants: createVariants(250, 400)
    },
    {
        id: 2,
        name: "Spotify Premium",
        category: "streaming",
        price: 100,
        originalPrice: 199,
        image: "images/spotify.png",
        desc: "Individual Plan | Ad-free",
        longDesc: "Listen to ad-free music with offline playback. Upgrade your own existing account to Premium individual plan without losing your playlists.",
        features: [
            "Ad-free listening",
            "Offline download",
            "High quality audio",
            "Works on your own account"
        ],
        instructions: "Provide your Spotify email address. We will send you a premium family invite link or login to upgrade your account.",
        variants: createVariants(100, 199)
    },
    {
        id: 3,
        name: "Canva Pro",
        category: "tools",
        price: 99,
        originalPrice: 300,
        image: "images/Canva.png",
        desc: "Student/Team | Lifetime",
        longDesc: "Unlock premium features of Canva. Access millions of photos, fonts, and templates. Remove backgrounds instantly and resize designs with ease.",
        features: [
            "Magic Resize",
            "Background Remover",
            "Premium Content Access",
            "Brand Kit"
        ],
        instructions: "Send us your Canva email address. We will send a team invitation link to activate Pro features on your account.",
        variants: [
            { label: "1 Month", price: 50, originalPrice: 150 },
            { label: "6 Months", price: 250, originalPrice: 900 },
            { label: "12 Months (Lifetime)", price: 99, originalPrice: 300 }
        ]
    },
    {
        id: 4,
        name: "YouTube Premium",
        category: "streaming",
        price: 120,
        originalPrice: 250,
        image: "images/Youtube.png",
        desc: "Ad-free | Background Play",
        longDesc: "Watch YouTube without ads and play videos in the background while using other apps. Includes YouTube Music Premium.",
        features: [
            "No Ads",
            "Background Play",
            "Offline Downloads",
            "YouTube Music Included"
        ],
        instructions: "We will need your Gmail address to send a family invitation link for activation.",
        variants: createVariants(120, 250)
    },
    {
        id: 5,
        name: "Free Fire (115 💎)",
        category: "gaming",
        price: 85,
        originalPrice: 90,
        image: "images/Freefire.png",
        desc: "UID Topup | Instant",
        longDesc: "Get 115 Diamonds topped up directly to your Free Fire account using your Player ID (UID). Safe, legit, and instant.",
        features: [
            "Official UID Topup",
            "No Login Required",
            "Instant Delivery",
            "100% Safe"
        ],
        instructions: "Provide your correct Player ID (UID) during checkout. Diamonds will be added automatically.",
        // No variants for this game item yet
    },
    {
        id: 6,
        name: "PUBG UC (60)",
        category: "gaming",
        price: 95,
        originalPrice: 100,
        image: "images/PUBG.jpeg",
        desc: "Global ID | Instant",
        longDesc: "Purchase 60 UC for PUBG Mobile Global. Top up directly via Player ID without sharing your login details.",
        features: [
            "Global Server Only",
            "UID Based Topup",
            "Fast Delivery"
        ],
        instructions: "Enter your PUBG Character ID (UID) and Nickname in the checkout form.",
        // No variants for this game item yet
    },
    {
        id: 7,
        name: "NordVPN Premium",
        category: "tools",
        price: 300,
        originalPrice: 800,
        image: "images/Nord VPN.png",
        desc: "6 Devices | Secure",
        longDesc: "Protect your privacy with NordVPN. Access geo-blocked content and browse securely on public Wi-Fi.",
        features: [
            "6 Simultaneous Devices",
            "5000+ Servers",
            "No Logs Policy",
            "High Speed"
        ],
        instructions: "You will receive a premium account email and password. Do not change the credentials.",
        variants: createVariants(300, 800)
    },
    {
        id: 8,
        name: "Amazon Prime",
        category: "streaming",
        price: 150,
        originalPrice: 300,
        image: "images/Amazon Prime.png",
        desc: "4K Support | Exclusive",
        longDesc: "Watch exclusive Amazon Originals, movies, and TV shows in 4K. Private profile support available.",
        features: [
            "Amazon Originals",
            "4K HDR Support",
            "Ad-free experience"
        ],
        instructions: "Account details (Email/Pass) will be sent to you. Login and enjoy.",
        variants: createVariants(150, 300)
    },
    {
        id: 9,
        name: "Google AI Premium",
        category: "tools",
        price: 200,
        originalPrice: 400,
        image: "images/Google Ai Pro.png",
        desc: "Gemini Advanced | 2TB",
        longDesc: "Get access to Google's most capable AI, Gemini Advanced, along with 2TB of Google One storage.",
        features: [
            "Gemini 1.5 Pro Model",
            "2TB Cloud Storage",
            "Integration with Docs, Gmail",
            "Python Coding Advanced"
        ],
        instructions: "We will provide an invite to a Google Family group which has the AI Premium plan activated.",
        variants: [
            { label: "1 Month", price: 200, originalPrice: 400 },
            { label: "3 Months", price: 600, originalPrice: 1200 },
            { label: "6 Months", price: 1200, originalPrice: 2400 },
            { label: "12 Months", price: 2400, originalPrice: 5000 }
        ]
    },
];

// --- State ---
let cart = [];
let currentFilter = 'all';
let buyNowItem = null; // Store the single item for Buy Now
let isBuyNowMode = false; // Flag to track checkout mode

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('tentionfree_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error parsing cart from localStorage', e);
            cart = [];
        }
    }

    // Only render products if the grid exists (on Products page)
    if (document.getElementById('product-grid')) {
        renderProducts();
    }

    updateCartCount();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.style.background = 'rgba(11, 17, 32, 0.85)';
            } else {
                nav.classList.remove('shadow-lg');
                nav.style.background = 'rgba(11, 17, 32, 0.6)';
            }
        }
    });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        });
    }
});

// --- Functions ---

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = currentFilter === 'all'
        ? products
        : products.filter(p => p.category === currentFilter);

    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.style.animationDelay = `${index * 100}ms`;
        card.className = 'glass-card rounded-2xl overflow-hidden product-card flex flex-col animate-[fadeIn_0.5s_ease-out_forwards]';

        // Variant Selector HTML
        let variantSelectorHtml = '';
        if (product.variants && product.variants.length > 0) {
            variantSelectorHtml = `
                <div class="mb-3">
                    <select id="variant-select-${product.id}" onchange="updateCardPrice(${product.id})" onclick="event.stopPropagation()"
                        class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-brand-500 cursor-pointer hover:bg-white/10 transition-colors">
                        ${product.variants.map((v, i) => `<option value="${i}" class="bg-gray-900">${v.label}</option>`).join('')}
                    </select>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="h-48 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center relative overflow-hidden p-8 group">
                <img src="${product.image}" alt="${product.name}" 
                    class="h-full max-w-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition duration-500"
                    onerror="this.onerror=null;this.src='https://img.icons8.com/fluency/96/image.png';">
                <span id="badge-${product.id}" class="absolute top-3 right-3 bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide shadow-lg">
                    ${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
                
                <!-- View Details Button on Image -->
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                    <button onclick="openDetails(${product.id})" class="text-xs font-bold text-white bg-white/20 hover:bg-brand-500 backdrop-blur-sm px-4 py-2 rounded-full flex items-center transition">
                        <i class="fa-regular fa-eye mr-2"></i> View Details
                    </button>
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col relative">
                <div class="absolute top-4 right-4 bg-dark-bg/90 backdrop-blur border border-white/10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-brand-500 hover:text-white transition-all z-10" onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-plus"></i>
                </div>
                
                <div class="text-[10px] text-brand-400 font-bold uppercase tracking-widest mb-2 mt-1">${product.category}</div>
                <h3 class="text-lg font-bold text-white mb-1 leading-tight pr-12 cursor-pointer hover:text-brand-400 transition" onclick="openDetails(${product.id})">${product.name}</h3>
                <p class="text-gray-400 text-xs mb-3 flex-1">${product.desc}</p>
                
                ${variantSelectorHtml}

                <div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div class="flex flex-col">
                        <span id="price-original-${product.id}" class="text-xs text-gray-500 line-through">৳${product.originalPrice}</span>
                        <span id="price-current-${product.id}" class="text-xl font-bold text-white">৳${product.price}</span>
                    </div>
                    <button onclick="buyNow(${product.id})" class="z-10 bg-white/5 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/10 hover:border-brand-400">
                        Buy Now
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateCardPrice(id) {
    const product = products.find(p => p.id === id);
    const select = document.getElementById(`variant-select-${id}`);
    const index = select.value;
    const variant = product.variants[index];

    document.getElementById(`price-current-${id}`).innerText = `৳${variant.price}`;
    document.getElementById(`price-original-${id}`).innerText = `৳${variant.originalPrice}`;

    const discount = Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100);
    document.getElementById(`badge-${id}`).innerText = `${discount}% OFF`;
}

function filterProducts(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.innerText.toLowerCase() === category || (category === 'all' && btn.innerText === 'All')) {
            btn.className = 'filter-btn active bg-brand-500 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-brand-500/30 whitespace-nowrap';
        } else {
            btn.className = 'filter-btn bg-transparent text-gray-400 hover:text-white hover:bg-white/5 px-6 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap';
        }
    });
    renderProducts();
}

// --- Product Details Modal Logic ---

function openDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Populate Modal Data
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-category').innerText = product.category;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.longDesc || product.desc; // Fallback
    document.getElementById('modal-instructions').innerText = product.instructions || "Details will be provided after purchase.";

    // Features List
    const featureList = document.getElementById('modal-features');
    featureList.innerHTML = '';
    if (product.features) {
        product.features.forEach(f => {
            featureList.innerHTML += `<li class="flex items-start"><i class="fa-solid fa-check text-brand-500 mt-1 mr-2"></i> ${f}</li>`;
        });
    } else {
        featureList.innerHTML = '<li class="text-gray-500">No specific features listed.</li>';
    }

    // Variant Selector in Modal
    const variantContainer = document.getElementById('modal-variant-container');
    variantContainer.innerHTML = '';

    let price = product.price;
    let orgPrice = product.originalPrice;

    if (product.variants && product.variants.length > 0) {
        const select = document.createElement('select');
        select.id = 'modal-variant-select';
        select.className = 'w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500 cursor-pointer';

        product.variants.forEach((v, i) => {
            const option = document.createElement('option');
            option.value = i;
            option.className = 'bg-gray-900';
            option.text = `${v.label} - ৳${v.price}`;
            select.appendChild(option);
        });

        // Handle change inside modal
        select.onchange = function () {
            const v = product.variants[this.value];
            document.getElementById('modal-price').innerText = `৳${v.price}`;
            document.getElementById('modal-price-original').innerText = `৳${v.originalPrice}`;
        };

        variantContainer.appendChild(select);
        // Set initial values from first variant
        price = product.variants[0].price;
        orgPrice = product.variants[0].originalPrice;
    }

    document.getElementById('modal-price').innerText = `৳${price}`;
    document.getElementById('modal-price-original').innerText = `৳${orgPrice}`;

    // Button Actions
    // Note: Passing 'modal' string as source to addToCart
    document.getElementById('modal-add-btn').onclick = () => {
        addToCart(product.id, true, 'modal');
    };
    document.getElementById('modal-buy-btn').onclick = () => {
        // For Buy Now from modal, we use the modal source to get the correct variant
        buyNow(product.id, 'modal');
        closeDetails();
    };

    // Show Modal
    document.getElementById('product-details-modal').classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('product-details-modal').classList.add('hidden');
}

// --- How to Order Modal Logic ---
function openHowToModal() {
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    document.getElementById('howto-modal').classList.remove('hidden');
}

function closeHowToModal() {
    document.getElementById('howto-modal').classList.add('hidden');
}

// Helper to create a cart item object from product ID and source
function createCartItem(id, source = 'card') {
    const product = products.find(p => p.id === id);
    if (!product) return null;

    let finalPrice = product.price;
    let finalName = product.name;
    let cartId = product.id.toString();

    // Logic to find correct selector based on source (card vs modal)
    let selectorId = `variant-select-${id}`; // Default card selector
    if (source === 'modal') {
        selectorId = 'modal-variant-select'; // Unique ID in modal
    }

    const select = document.getElementById(selectorId);

    // Only use the value if the selector exists AND belongs to this product context 
    // (For modal, it is rebuilt on open, so it's always for current product)
    if (select) {
        const index = select.value;
        const variant = product.variants[index];
        if (variant) {
            finalPrice = variant.price;
            finalName = `${product.name} - ${variant.label}`;
            cartId = `${product.id}-${index}`;
        }
    }

    return {
        cartId: cartId,
        id: product.id,
        name: finalName,
        price: finalPrice,
        image: product.image,
        category: product.category,
        quantity: 1
    };
}

// Updated addToCart to use createCartItem
function addToCart(id, showToastMsg = true, source = 'card') {
    const newItem = createCartItem(id, source);
    if (!newItem) return;

    const existing = cart.find(item => item.cartId === newItem.cartId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push(newItem);
    }

    saveCart();
    updateCartCount();
    renderCartItems();

    if (showToastMsg) {
        showToast("Item Added to Cart");
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('tentionfree_cart', JSON.stringify(cart));
}

// New Buy Now Function (Separated Logic)
function buyNow(id, source = 'card') {
    const item = createCartItem(id, source);
    if (item) {
        buyNowItem = item; // Set global buy now item
        openCheckout(true); // Open in Buy Now mode
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = `<i class="fa-solid fa-check-circle mr-2"></i> ${message}`;
    toast.className = "show";
    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

function updateQuantity(cartId, change) {
    const item = cart.find(item => item.cartId === cartId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartId);
        } else {
            saveCart();
            renderCartItems();
            updateCartCount();
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (!badge) return;

    badge.innerText = count;

    if (count > 0) {
        badge.classList.remove('scale-0');
        badge.classList.add('scale-100');
    } else {
        badge.classList.remove('scale-100');
        badge.classList.add('scale-0');
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const backdrop = document.getElementById('cart-backdrop');
    const panel = document.getElementById('cart-panel');

    if (sidebar.classList.contains('pointer-events-none')) {
        sidebar.classList.remove('pointer-events-none');
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
        renderCartItems();
    } else {
        sidebar.classList.add('pointer-events-none');
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
        panel.classList.remove('translate-x-0');
        panel.classList.add('translate-x-full');
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');

    if (!container || !totalEl) return;

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <li class="text-center py-10">
                <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                    <i class="fa-solid fa-basket-shopping text-3xl"></i>
                </div>
                <p class="text-gray-400">Your cart is currently empty.</p>
                <button onclick="toggleCart()" class="mt-4 text-brand-400 hover:text-brand-300 font-medium text-sm">Start Shopping</button>
            </li>
        `;
        totalEl.innerText = '৳0.00';
        if (document.getElementById('checkout-total-amount')) {
            document.getElementById('checkout-total-amount').innerText = '৳0.00';
        }
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.className = 'flex py-4 border-b border-white/5 last:border-0 animate-[fadeIn_0.3s_ease-out]';
        // Note: passing string cartId needs quotes
        li.innerHTML = `
            <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-white/5 p-2 border border-white/10">
                <img src="${item.image}" alt="${item.name}" class="h-full w-full object-contain">
            </div>
            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-white">
                        <h3 class="line-clamp-1 text-sm">${item.name}</h3>
                        <p class="ml-4 font-bold">৳${item.price * item.quantity}</p>
                    </div>
                    <p class="mt-1 text-xs text-gray-400">${item.category}</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm mt-2">
                    <div class="flex items-center bg-white/5 rounded-lg border border-white/10">
                        <button onclick="updateQuantity('${item.cartId}', -1)" class="px-3 py-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-l-lg transition">-</button>
                        <span class="px-2 text-white font-medium text-xs">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.cartId}', 1)" class="px-3 py-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-r-lg transition">+</button>
                    </div>
                    <button type="button" onclick="removeFromCart('${item.cartId}')" class="text-xs font-medium text-red-400 hover:text-red-300 transition">
                        <i class="fa-regular fa-trash-can mr-1"></i> Remove
                    </button>
                </div>
            </div>
        `;
        container.appendChild(li);
    });

    totalEl.innerText = '৳' + total.toFixed(2);
    if (document.getElementById('checkout-total-amount')) {
        document.getElementById('checkout-total-amount').innerText = '৳' + total.toFixed(2);
    }
}

function openCheckout(buyNowMode = false) {
    isBuyNowMode = buyNowMode;
    const itemsToCheckout = isBuyNowMode ? [buyNowItem] : cart;

    if (itemsToCheckout.length === 0 || (isBuyNowMode && !buyNowItem)) return;

    // If opening from Cart Sidebar, close it first
    const sidebar = document.getElementById('cart-sidebar');
    if (!sidebar.classList.contains('pointer-events-none')) {
        toggleCart();
    }

    document.getElementById('checkout-modal').classList.remove('hidden');

    // Reset Payment Type to "Pay Now" on open
    document.querySelector('input[name="paymentType"][value="now"]').checked = true;
    togglePaymentSection();

    // Game UID Logic Check
    const hasGamingItem = itemsToCheckout.some(item => item.category === 'gaming');
    const uidField = document.getElementById('game-uid-field');
    const uidInput = document.getElementById('game_uid');

    if (hasGamingItem) {
        uidField.classList.remove('hidden');
        uidInput.required = true;
    } else {
        uidField.classList.add('hidden');
        uidInput.required = false;
        uidInput.value = '';
    }

    // Populate Order Summary Items
    const summaryContainer = document.getElementById('checkout-items-summary');
    summaryContainer.innerHTML = '';

    let total = 0;

    itemsToCheckout.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'flex justify-between text-xs text-gray-300 border-b border-white/5 pb-1 last:border-0 last:pb-0';
        div.innerHTML = `
            <div class="flex items-center">
                <img src="${item.image}" class="w-6 h-6 object-contain mr-2 rounded bg-white/5">
                <span>${item.name} <span class="text-brand-400 font-bold">x${item.quantity}</span></span>
            </div>
            <span class="font-mono">৳${item.price * item.quantity}</span>
        `;
        summaryContainer.appendChild(div);
    });

    // Update Total in Checkout
    if (document.getElementById('checkout-total-amount')) {
        document.getElementById('checkout-total-amount').innerText = '৳' + total.toFixed(2);
    }

    updatePaymentInfo();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.add('hidden');
    // Reset mode
    isBuyNowMode = false;
    buyNowItem = null;
}

// New Function to Toggle Payment Section
function togglePaymentSection() {
    const type = document.querySelector('input[name="paymentType"]:checked').value;
    const section = document.getElementById('payment-details-section');

    if (type === 'later') {
        section.classList.add('hidden');
    } else {
        section.classList.remove('hidden');
    }
}

function updatePaymentInfo() {
    const method = document.getElementById('payment').value;
    const instructionBox = document.getElementById('payment-instruction');

    const instructions = {
        bkash: `
            <div class="space-y-2">
                <p class="text-brand-400 font-bold border-b border-white/10 pb-1 mb-2">📱 1. bKash Payment (USSD Method)</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                    <li>Dial <span class="text-white font-mono">*247#</span></li>
                    <li>Select <span class="text-white font-bold">Send Money</span></li>
                    <li class="flex items-center flex-wrap gap-2">
                        Enter Number: <span class="text-white font-mono font-bold">01869895549</span>
                        <button type="button" onclick="copyToClipboard('01869895549')" class="text-[10px] bg-white/10 hover:bg-brand-500 text-white px-2 py-0.5 rounded transition">Copy</button>
                    </li>
                    <li>Enter Amount</li>
                    <li>Enter Reference (optional)</li>
                    <li>Confirm with PIN</li>
                </ul>
            </div>`,
        nagad: `
            <div class="space-y-2">
                <p class="text-orange-400 font-bold border-b border-white/10 pb-1 mb-2">📱 2. Nagad Payment (USSD Method)</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                    <li>Dial <span class="text-white font-mono">*167#</span></li>
                    <li>Select <span class="text-white font-bold">Send Money</span></li>
                    <li class="flex items-center flex-wrap gap-2">
                        Enter Number: <span class="text-white font-mono font-bold">01869895549</span>
                        <button type="button" onclick="copyToClipboard('01869895549')" class="text-[10px] bg-white/10 hover:bg-brand-500 text-white px-2 py-0.5 rounded transition">Copy</button>
                    </li>
                    <li>Enter Amount</li>
                    <li>Enter Reference</li>
                    <li>Confirm with PIN</li>
                </ul>
            </div>`,
        rocket: `
            <div class="space-y-2">
                <p class="text-purple-400 font-bold border-b border-white/10 pb-1 mb-2">📱 3. Rocket Payment (DBBL)</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                    <li>Dial <span class="text-white font-mono">*322#</span></li>
                    <li>Select <span class="text-white font-bold">Send Money</span></li>
                    <li class="flex items-center flex-wrap gap-2">
                        Enter Number: <span class="text-white font-mono font-bold">01869895549</span>
                        <button type="button" onclick="copyToClipboard('01869895549')" class="text-[10px] bg-white/10 hover:bg-brand-500 text-white px-2 py-0.5 rounded transition">Copy</button>
                    </li>
                    <li>Enter Amount</li>
                    <li>Enter Reference</li>
                    <li>Confirm with PIN</li>
                </ul>
            </div>`,
        upay: `
            <div class="space-y-2">
                <p class="text-blue-400 font-bold border-b border-white/10 pb-1 mb-2">📱 4. Upay Payment</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                    <li>Dial <span class="text-white font-mono">*268#</span></li>
                    <li>Select <span class="text-white font-bold">Send Money</span></li>
                    <li class="flex items-center flex-wrap gap-2">
                        Enter Number: <span class="text-white font-mono font-bold">01869895549</span>
                        <button type="button" onclick="copyToClipboard('01869895549')" class="text-[10px] bg-white/10 hover:bg-brand-500 text-white px-2 py-0.5 rounded transition">Copy</button>
                    </li>
                    <li>Enter Amount</li>
                    <li>Confirm with PIN</li>
                </ul>
            </div>`,
        binance: `
            <div class="space-y-2">
                <p class="text-yellow-400 font-bold border-b border-white/10 pb-1 mb-2">💰 5. Binance USDT (Crypto)</p>
                <p class="text-gray-300 mb-2">You can send USDT directly using Binance.</p>
                <div class="flex items-center flex-wrap gap-2 mb-2">
                    <span class="text-gray-300">Binance UID:</span>
                    <span class="text-white font-mono font-bold">577126624</span>
                    <button type="button" onclick="copyToClipboard('577126624')" class="text-[10px] bg-white/10 hover:bg-brand-500 text-white px-2 py-0.5 rounded transition">Copy</button>
                </div>
                <p class="text-gray-400 text-xs font-bold mb-1">Steps:</p>
                <ul class="list-decimal list-inside text-gray-300 space-y-1 text-xs">
                    <li>Open Binance</li>
                    <li>Go to Send / Transfer</li>
                    <li>Choose USDT</li>
                    <li>Enter UID: <span class="text-white">577126624</span></li>
                    <li>Enter Amount</li>
                    <li>Confirm transfer</li>
                </ul>
            </div>`
    };

    instructionBox.innerHTML = instructions[method] || '<p class="text-gray-400">Select a payment method to see instructions.</p>';
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("Copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers or non-secure contexts if needed, 
        // but modern browsers support this well.
        // Simple fallback:
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        showToast("Copied to clipboard!");
    });
}

function openPaymentModal() {
    document.getElementById('payment-modal').classList.remove('hidden');
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const customerEmail = document.getElementById('customer_email').value;

    // Get Payment Type
    const paymentType = document.querySelector('input[name="paymentType"]:checked').value;

    let payment = "Pay Later";
    let trxid = "Pending";

    // Logic based on Payment Type
    if (paymentType === 'now') {
        payment = document.getElementById('payment').value;
        trxid = document.getElementById('trxid').value;

        // Strict Validation for Pay Now
        if (!trxid) {
            alert("Please enter Transaction ID or switch to 'Pay Later'.");
            return;
        }
    }

    const gameUid = document.getElementById('game_uid').value;
    const platform = document.querySelector('input[name="orderMethod"]:checked').value;

    // Basic Validation
    if (!name || !phone || !customerEmail) {
        alert("Please fill in Name, Phone, and Email to continue.");
        return;
    }

    // Determine items based on mode
    const itemsToOrder = isBuyNowMode ? [buyNowItem] : cart;

    // Check Game UID if required
    const hasGamingItem = itemsToOrder.some(item => item.category === 'gaming');
    if (hasGamingItem && !gameUid) {
        alert("Please enter your Player ID / Game UID for the gaming items.");
        return;
    }

    let message = `*🔥 New Order - Tention Free*\n\n`;
    message += `👤 *Customer:* ${name}\n`;
    message += `📱 *Phone:* ${phone}\n`;
    message += `📧 *Email:* ${customerEmail}\n`;
    if (hasGamingItem && gameUid) {
        message += `🎮 *Game UID:* ${gameUid}\n`;
    }

    // Message format depending on payment
    if (paymentType === 'later') {
        message += `💳 *Payment Status:* Pay Later (Discussion Pending)\n`;
    } else {
        message += `💳 *Payment:* ${payment.toUpperCase()}\n`;
        message += `🧾 *TrxID:* ${trxid}\n`;
    }

    message += `\n🛒 *Items:*\n`;

    let total = 0;
    itemsToOrder.forEach(item => {
        message += `• ${item.name} x${item.quantity} = ৳${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });

    message += `\n💰 *Total Bill:* ৳${total}`;
    message += `\n\n_Please confirm this order._`;

    if (platform === 'whatsapp') {
        const waNumber = "8801869895549";
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else if (platform === 'email') {
        const adminEmail = "kaziemdadul4@gmail.com";
        const subject = `New Order from ${name}`;
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${adminEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    // Clear cart after successful order ONLY if it was a cart order
    if (!isBuyNowMode) {
        cart = [];
        saveCart();
        updateCartCount();
        renderCartItems();
    }

    closeCheckout();
}
