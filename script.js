// Product data
const products = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.8,
        reviewCount: 1247,
        image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Electronics',
        brand: 'SoundWave',
        inStock: true,
        isNew: true,
        isFeatured: true,
        tags: ['wireless', 'noise-canceling', 'premium']
    },
    {
        id: '2',
        name: 'Minimalist Watch Collection',
        description: 'Elegant minimalist watch with premium leather strap. Timeless design that complements any outfit.',
        price: 189.99,
        rating: 4.6,
        reviewCount: 834,
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Fashion',
        brand: 'TimeClass',
        inStock: true,
        isFeatured: true,
        tags: ['minimalist', 'leather', 'elegant']
    },
    {
        id: '3',
        name: 'Smart Fitness Tracker',
        description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Perfect for active lifestyles.',
        price: 149.99,
        rating: 4.7,
        reviewCount: 2156,
        image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Electronics',
        brand: 'FitTech',
        inStock: true,
        isNew: true,
        tags: ['fitness', 'smart', 'health']
    },
    {
        id: '4',
        name: 'Professional Camera Lens',
        description: 'High-performance camera lens for professional photography. Sharp, clear images with beautiful bokeh effect.',
        price: 899.99,
        rating: 4.9,
        reviewCount: 456,
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Electronics',
        brand: 'LensMax',
        inStock: true,
        isFeatured: true,
        tags: ['photography', 'professional', 'lens']
    },
    {
        id: '5',
        name: 'Luxury Leather Handbag',
        description: 'Handcrafted luxury leather handbag with premium hardware. Perfect for business and casual occasions.',
        price: 459.99,
        originalPrice: 599.99,
        rating: 4.5,
        reviewCount: 678,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Fashion',
        brand: 'LuxeBag',
        inStock: true,
        tags: ['luxury', 'leather', 'handbag']
    },
    {
        id: '6',
        name: 'Gaming Mechanical Keyboard',
        description: 'RGB mechanical gaming keyboard with customizable keys and lightning-fast response time.',
        price: 129.99,
        rating: 4.4,
        reviewCount: 1834,
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Electronics',
        brand: 'GameTech',
        inStock: false,
        tags: ['gaming', 'mechanical', 'rgb']
    },
    {
        id: '7',
        name: 'Artisan Coffee Beans',
        description: 'Premium single-origin coffee beans, carefully roasted to perfection. Rich, complex flavor profile.',
        price: 24.99,
        rating: 4.7,
        reviewCount: 892,
        image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Food & Beverage',
        brand: 'BrewMaster',
        inStock: true,
        isNew: true,
        tags: ['coffee', 'artisan', 'premium']
    },
    {
        id: '8',
        name: 'Wireless Bluetooth Speaker',
        description: '360-degree surround sound wireless speaker with waterproof design and 24-hour battery life.',
        price: 79.99,
        rating: 4.3,
        reviewCount: 1456,
        image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Electronics',
        brand: 'SoundWave',
        inStock: true,
        tags: ['wireless', 'bluetooth', 'speaker']
    },
    {
        id: '9',
        name: 'Designer Sunglasses',
        description: 'Premium designer sunglasses with UV protection and polarized lenses. Stylish and functional.',
        price: 249.99,
        rating: 4.6,
        reviewCount: 567,
        image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Fashion',
        brand: 'StyleVision',
        inStock: true,
        isFeatured: true,
        tags: ['designer', 'sunglasses', 'uv-protection']
    },
    {
        id: '10',
        name: 'Smart Home Security Camera',
        description: 'WiFi security camera with night vision, motion detection, and mobile app control.',
        price: 199.99,
        rating: 4.5,
        reviewCount: 1023,
        image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
            'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'Electronics',
        brand: 'SecureHome',
        inStock: true,
        tags: ['security', 'smart-home', 'camera']
    }
];

const categories = ['Electronics', 'Fashion', 'Food & Beverage'];
const brands = ['SoundWave', 'TimeClass', 'FitTech', 'LensMax', 'LuxeBag', 'GameTech', 'BrewMaster', 'StyleVision', 'SecureHome'];

// State management
let filteredProducts = [...products];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilters = {
    search: '',
    categories: [],
    priceRange: [0, 1000],
    minRating: 0,
    brands: [],
    inStockOnly: false,
    sortBy: 'featured'
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const productsGrid = document.getElementById('productsGrid');
const loadingGrid = document.getElementById('loadingGrid');
const noResults = document.getElementById('noResults');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const cartCount = document.getElementById('cartCount');
const filterSidebar = document.getElementById('filterSidebar');
const filterOverlay = document.getElementById('filterOverlay');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    showLoadingState();
    
    // Simulate loading delay
    setTimeout(() => {
        hideLoadingState();
        renderProducts();
        updateCartCount();
    }, 1500);
    
    setupEventListeners();
});

// Initialize filter sections
function initializeFilters() {
    // Populate categories
    const categoryFilters = document.getElementById('categoryFilters');
    categories.forEach(category => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" value="${category}" data-filter="category">
            <span class="checkbox-text">${category}</span>
        `;
        categoryFilters.appendChild(label);
    });
    
    // Populate brands
    const brandFilters = document.getElementById('brandFilters');
    brands.forEach(brand => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" value="${brand}" data-filter="brand">
            <span class="checkbox-text">${brand}</span>
        `;
        brandFilters.appendChild(label);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    mobileSearchInput.addEventListener('input', handleSearch);
    
    // Filter sidebar toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleFilterSidebar);
    document.getElementById('filterToggle').addEventListener('click', toggleFilterSidebar);
    document.getElementById('closeSidebar').addEventListener('click', closeFilterSidebar);
    filterOverlay.addEventListener('click', closeFilterSidebar);
    
    // Filter section toggles
    document.querySelectorAll('.filter-section-header').forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            section.classList.toggle('collapsed');
        });
    });
    
    // Filter inputs
    document.addEventListener('change', handleFilterChange);
    document.addEventListener('input', handleFilterInput);
    
    // Price presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const min = parseInt(this.dataset.min);
            const max = parseInt(this.dataset.max);
            document.getElementById('minPrice').value = min;
            document.getElementById('maxPrice').value = max;
            currentFilters.priceRange = [min, max];
            applyFilters();
        });
    });
    
    // Reset filters
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('clearAllFilters').addEventListener('click', resetFilters);
    
    // Modal functionality
    document.getElementById('modalClose').addEventListener('click', closeModal);
    productModal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Escape key to close modal/sidebar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeFilterSidebar();
        }
    });
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    currentFilters.search = query;
    
    // Sync search inputs
    if (e.target.id === 'searchInput') {
        mobileSearchInput.value = e.target.value;
    } else {
        searchInput.value = e.target.value;
    }
    
    applyFilters();
    updateResultsTitle();
}

// Filter change handlers
function handleFilterChange(e) {
    const input = e.target;
    
    if (input.name === 'sort') {
        currentFilters.sortBy = input.value;
        applyFilters();
    } else if (input.name === 'rating') {
        currentFilters.minRating = parseInt(input.value);
        applyFilters();
    } else if (input.id === 'inStockOnly') {
        currentFilters.inStockOnly = input.checked;
        applyFilters();
    } else if (input.dataset.filter === 'category') {
        if (input.checked) {
            currentFilters.categories.push(input.value);
        } else {
            currentFilters.categories = currentFilters.categories.filter(c => c !== input.value);
        }
        applyFilters();
    } else if (input.dataset.filter === 'brand') {
        if (input.checked) {
            currentFilters.brands.push(input.value);
        } else {
            currentFilters.brands = currentFilters.brands.filter(b => b !== input.value);
        }
        applyFilters();
    }
}

function handleFilterInput(e) {
    const input = e.target;
    
    if (input.id === 'minPrice' || input.id === 'maxPrice') {
        const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
        const maxPrice = parseInt(document.getElementById('maxPrice').value) || 1000;
        currentFilters.priceRange = [minPrice, maxPrice];
        
        // Debounce the filter application
        clearTimeout(window.priceFilterTimeout);
        window.priceFilterTimeout = setTimeout(() => {
            applyFilters();
        }, 500);
    }
}

// Apply filters and sorting
function applyFilters() {
    let filtered = products.filter(product => {
        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            const matchesSearch = 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            if (!matchesSearch) return false;
        }
        
        // Category filter
        if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(product.category)) {
            return false;
        }
        
        // Price filter
        if (product.price < currentFilters.priceRange[0] || product.price > currentFilters.priceRange[1]) {
            return false;
        }
        
        // Rating filter
        if (currentFilters.minRating > 0 && product.rating < currentFilters.minRating) {
            return false;
        }
        
        // Brand filter
        if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(product.brand)) {
            return false;
        }
        
        // Stock filter
        if (currentFilters.inStockOnly && !product.inStock) {
            return false;
        }
        
        return true;
    });
    
    // Apply sorting
    switch (currentFilters.sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
        case 'featured':
        default:
            filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
            break;
    }
    
    filteredProducts = filtered;
    renderProducts();
    updateResultsCount();
}

// Reset all filters
function resetFilters() {
    currentFilters = {
        search: '',
        categories: [],
        priceRange: [0, 1000],
        minRating: 0,
        brands: [],
        inStockOnly: false,
        sortBy: 'featured'
    };
    
    // Reset form inputs
    searchInput.value = '';
    mobileSearchInput.value = '';
    document.getElementById('minPrice').value = 0;
    document.getElementById('maxPrice').value = 1000;
    document.getElementById('inStockOnly').checked = false;
    
    // Reset radio buttons
    document.querySelector('input[name="sort"][value="featured"]').checked = true;
    document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
    
    // Reset checkboxes
    document.querySelectorAll('input[data-filter="category"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[data-filter="brand"]').forEach(input => input.checked = false);
    
    applyFilters();
    updateResultsTitle();
}

// Show/hide loading state
function showLoadingState() {
    loadingGrid.style.display = 'grid';
    productsGrid.style.display = 'none';
    noResults.style.display = 'none';
    
    // Generate loading skeletons
    loadingGrid.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'loading-card';
        skeleton.innerHTML = `
            <div class="loading-image"></div>
            <div class="loading-content">
                <div class="loading-line short"></div>
                <div class="loading-line medium"></div>
                <div class="loading-line"></div>
                <div class="loading-line short"></div>
            </div>
        `;
        loadingGrid.appendChild(skeleton);
    }
}

function hideLoadingState() {
    loadingGrid.style.display = 'none';
}

// Render products
function renderProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = card.dataset.productId;
        const product = products.find(p => p.id === productId);
        
        // Quick view
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.quick-add-btn') && !e.target.closest('.action-btn-small')) {
                openProductModal(product);
            }
        });
        
        // Quick add to cart
        const quickAddBtn = card.querySelector('.quick-add-btn');
        if (quickAddBtn) {
            quickAddBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                addToCart(product);
            });
        }
    });
}

// Create product card HTML
function createProductCard(product) {
    const discountPercentage = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    const ratingStars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                
                ${product.isNew || discountPercentage > 0 || product.isFeatured ? `
                    <div class="product-badges">
                        ${product.isNew ? '<span class="badge new">New</span>' : ''}
                        ${discountPercentage > 0 ? `<span class="badge discount">-${discountPercentage}%</span>` : ''}
                        ${product.isFeatured ? '<span class="badge featured">Featured</span>' : ''}
                    </div>
                ` : ''}
                
                ${!product.inStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
                
                <div class="product-actions">
                    <button class="action-btn-small">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="action-btn-small">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
                
                ${product.inStock ? `
                    <button class="quick-add-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                        </svg>
                        Add to Cart
                    </button>
                ` : ''}
            </div>
            
            <div class="product-info">
                <p class="product-brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="rating-stars">${ratingStars}</span>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Modal functionality
function openProductModal(product) {
    const discountPercentage = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    const ratingStars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    modalContent.innerHTML = `
        <div class="modal-gallery">
            <div class="modal-main-image">
                <img src="${product.images[0] || product.image}" alt="${product.name}" id="modalMainImage">
            </div>
            ${product.images.length > 1 ? `
                <div class="modal-thumbnails">
                    ${product.images.map((image, index) => `
                        <div class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}">
                            <img src="${image}" alt="${product.name} ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        
        <div class="modal-details">
            ${product.isNew || discountPercentage > 0 || product.isFeatured ? `
                <div class="modal-badges">
                    ${product.isNew ? '<span class="badge new">New</span>' : ''}
                    ${discountPercentage > 0 ? `<span class="badge discount">-${discountPercentage}% OFF</span>` : ''}
                    ${product.isFeatured ? '<span class="badge featured">Featured</span>' : ''}
                </div>
            ` : ''}
            
            <p class="modal-brand">${product.brand}</p>
            <h1 class="modal-title">${product.name}</h1>
            
            <div class="modal-rating">
                <span class="modal-rating-stars">${ratingStars}</span>
                <span class="modal-rating-value">${product.rating}</span>
                <span class="modal-rating-count">(${product.reviewCount} reviews)</span>
            </div>
            
            <div class="modal-price">
                <span class="modal-current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="modal-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            
            <p class="modal-description">${product.description}</p>
            
            <div class="modal-stock">
                <div class="stock-indicator ${product.inStock ? 'in-stock' : 'out-of-stock'}"></div>
                <span class="stock-text ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>
            
            ${product.inStock ? `
                <div class="modal-quantity">
                    <span class="quantity-label">Quantity:</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" id="decreaseQty">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <span class="quantity-value" id="modalQuantity">1</span>
                        <button class="quantity-btn" id="increaseQty">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="add-to-cart-btn" id="modalAddToCart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                        </svg>
                        Add to Cart
                    </button>
                    <button class="wishlist-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            ` : ''}
            
            ${product.tags.length > 0 ? `
                <div class="modal-tags">
                    <p class="modal-tags-label">Tags:</p>
                    <div class="tags-list">
                        ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup modal event listeners
    setupModalEventListeners(product);
}

function setupModalEventListeners(product) {
    // Image gallery
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    const mainImage = document.getElementById('modalMainImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.dataset.image;
        });
    });
    
    // Quantity controls
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityValue = document.getElementById('modalQuantity');
    
    if (decreaseBtn && increaseBtn && quantityValue) {
        let quantity = 1;
        
        decreaseBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            quantity++;
            quantityValue.textContent = quantity;
        });
        
        // Add to cart from modal
        const addToCartBtn = document.getElementById('modalAddToCart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                addToCart(product, quantity);
                closeModal();
            });
        }
    }
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Sidebar functionality
function toggleFilterSidebar() {
    filterSidebar.classList.add('active');
    filterOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFilterSidebar() {
    filterSidebar.classList.remove('active');
    filterOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Cart functionality
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success feedback (you can enhance this with a toast notification)
    console.log(`Added ${quantity} x ${product.name} to cart`);
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Update UI text
function updateResultsTitle() {
    const title = currentFilters.search 
        ? `Search results for "${currentFilters.search}"`
        : 'All Products';
    resultsTitle.textContent = title;
}

function updateResultsCount() {
    const count = filteredProducts.length;
    const text = `${count} product${count !== 1 ? 's' : ''} found`;
    resultsCount.textContent = text;
}