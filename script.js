// Products Data
const products = [
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
           {
            id: 1,
            name: "مثقاب كهربائي احترافي",
            category: "electrical",
            price: 299, // السعر الحالي (بعد الخصم)
            originalPrice: 500, // السعر الأصلي (قبل الخصم)
            description: "مثقاب قوي مع 3 سرعات مختلفة",
            image: "photos/Screenshot 2025-11-04 001336.png",
           } , 
        
        
        ];

// Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeModal = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const checkoutBtn = document.getElementById('checkoutBtn');
const backToCartBtn = document.getElementById('backToCartBtn');
const cartView = document.getElementById('cartView');
const checkoutView = document.getElementById('checkoutView');
const checkoutForm = document.getElementById('checkoutForm');

let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
    loadCartFromStorage();
    updateCartDisplay();
    // Initialize contact form logic
    setupContactForm();
});

// Setup Event Listeners
function setupEventListeners() {
    cartIcon.addEventListener('click', openCart);
    closeModal.addEventListener('click', closeCart);
    searchInput.addEventListener('input', handleSearch);
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    checkoutBtn.addEventListener('click', showCheckoutForm);
    backToCartBtn.addEventListener('click', showCartView);
    checkoutForm.addEventListener('submit', handleOrderSubmit);

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCart();
        }
    });
}

// Display Products
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">لم يتم العثور على منتجات</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${getCategoryName(product.category)}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="sale-price">${product.price} ج م</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice} ج م</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    أضف إلى السلة
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Get Category Name
function getCategoryName(category) {
    const categories = {
        'all': 'الكل',
        'electrical': 'أدوات كهربية',
        'kitchen': 'أدوات مطبخ',
        'power': 'أدوات كهرباء'
    };
    return categories[category] || category;
}

// Handle Search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
        return matchesSearch && matchesFilter;
    });
    displayProducts(filtered);
}

// Handle Filter
function handleFilter(e) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;

    const searchTerm = searchInput.value.toLowerCase();
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
        return matchesSearch && matchesFilter;
    });
    displayProducts(filtered);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartToStorage();
    updateCartDisplay();
    
    // Visual feedback
    const btn = event.target;
    btn.textContent = '✓ تمت الإضافة';
    btn.classList.add('added');
    setTimeout(() => {
        btn.textContent = 'أضف إلى السلة';
        btn.classList.remove('added');
    }, 1500);

    // Show toast notification
    showToast(`تم إضافة ${product.name} إلى السلة`);
}

// Show Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideUp 0.3s ease;
        z-index: 2000;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Open Cart
function openCart() {
    cartModal.style.display = 'block';
    displayCartItems();
}

// Close Cart
function closeCart() {
    cartModal.style.display = 'none';
    showCartView(); // Reset to cart view when closing
}

// Display Cart Items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart"><p>السلة فارغة</p></div>';
        return;
    }

    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <p class="cart-item-name">${item.name}</p>
                <p style="font-size: 12px; color: #999;">الكمية: ${item.quantity}</p>
            </div>
            <div style="text-align: right;">
                <p class="cart-item-price">${item.price * item.quantity} ج م </p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    حذف
                </button>
            </div>
        </div>
    `).join('');

    updateCartTotal();
}

// Remove From Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    displayCartItems();
    showToast('تم حذف المنتج من السلة');
}

// Update Cart Display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update Cart Total
function updateCartTotal() {
    const totalPrice = document.getElementById('totalPrice');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total;
}

// Local Storage Functions
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// --- Checkout Logic ---

function showCheckoutForm() {
    if (cart.length === 0) {
        alert('سلة التسوق فارغة! يرجى إضافة منتجات أولاً.');
        return;
    }
    
    // Prepare order details for the form
    const orderDetailsInput = checkoutForm.querySelector('input[name="orderDetails"]');
    const orderTotalInput = checkoutForm.querySelector('input[name="orderTotal"]');
    
    const orderDetailsText = cart.map(item => 
        `${item.name} (الكمية: ${item.quantity})`
    ).join(' | '); // Using a separator for better readability in the sheet
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    orderDetailsInput.value = orderDetailsText;
    orderTotalInput.value = total;

    cartView.style.display = 'none';
    checkoutView.style.display = 'block';
}

function showCartView() {
    checkoutView.style.display = 'none';
    cartView.style.display = 'block';
}

function handleOrderSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = 'جار إرسال الطلب...';

    // !!! هام جداً: هذا رابط جديد خاص بملف طلبات الشراء
    const orderScriptURL = 'https://script.google.com/macros/s/AKfycbxb_YsSPz3qMlcVPDK2pXbbuSMoQWtoh3QbFqS26AoI8FdOTSaQOoGDKGljwtcVUdITqg/exec'; 

    fetch(orderScriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert('تم استلام طلبك بنجاح! سنتواصل معك قريباً للتأكيد.');
            cart = []; // Clear the cart
            saveCartToStorage();
            updateCartDisplay();
            closeCart();
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add keyboard shortcut for search
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Lazy load images effect on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0.5';
    observer.observe(card);
});

// --- Contact Form Logic ---
function setupContactForm() {
    // يمكنك وضع أي كود JavaScript آخر خاص بالموقع هنا

    // --- كود خاص بربط فورم التواصل ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault(); // منع الفورم من إعادة تحميل الصفحة
            const form = e.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // تغيير شكل الزر ليبدو أن هناك عملية جارية
            submitButton.disabled = true;
            submitButton.textContent = 'جار الإرسال...';

            // !!! هام جداً: استبدل الرابط التالي بالرابط الذي نسخته من Google Apps Script
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxJKtb4jKPmv1xBWUK1jva62e4oDOo5NQk7dhP0IRCKeZik7JNHLF8oHhSSgGYVmHAcnA/exec'; // ضع رابط الـ Web App الذي ينتهي بـ /exec هنا

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert('تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.');
                    form.reset(); // إفراغ حقول الفورم بعد الإرسال
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('حدث خطأ ما. يرجى المحاولة مرة أخرى.');
                })
                .finally(() => {
                    // إعادة الزر إلى حالته الطبيعية
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                });
        });
    }
}
