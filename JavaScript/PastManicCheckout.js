// Obtener elementos del DOM
const payBtn = document.getElementById('payBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const promoInput = document.getElementById('promoInput');
const discountMessage = document.getElementById('discountMessage');
const totalPrice = document.getElementById('totalPrice');

// Porcentaje de descuento (cualquier código activa este descuento)
const defaultDiscount = 0.20;  // 20% de descuento por defecto

// Calcular total
function calculateTotal() {
    const prices = document.querySelectorAll('.product-price');
    let total = 0;
    prices.forEach(price => {
        const priceValue = parseFloat(price.textContent.replace('S/', ''));
        total += priceValue;
    });
    return total;
}

// Actualizar el total en pantalla
function updateTotalDisplay() {
    const total = calculateTotal();
    totalPrice.textContent = 'S/' + total.toFixed(2);
}

// Aplicar cupón de descuento
applyPromoBtn.addEventListener('click', function() {
    const couponCode = promoInput.value.trim();
    
    if (!couponCode) {
        showMessage('Por favor ingresa un código de descuento', 'error');
        resetPrices();
        updateTotalDisplay();
        return;
    }
    
    // Cualquier código activa el descuento
    const discountPercent = defaultDiscount;
    const prices = document.querySelectorAll('.product-price');
    
    prices.forEach(price => {
        const originalPrice = parseFloat(price.getAttribute('data-price'));
        const discountedPrice = originalPrice * (1 - discountPercent);
        price.textContent = 'S/' + discountedPrice.toFixed(2);
    });
    
    updateTotalDisplay();
    const discountPercentage = (discountPercent * 100).toFixed(0);
    showMessage(`✓ Cupón "${couponCode}" aplicado: ${discountPercentage}% de descuento`, 'success');
});

// Mostrar mensaje de éxito o error
function showMessage(message, type) {
    discountMessage.textContent = message;
    discountMessage.className = 'discount-message ' + type;
}

// Restablecer precios originales
function resetPrices() {
    const prices = document.querySelectorAll('.product-price');
    prices.forEach(price => {
        const originalPrice = price.getAttribute('data-price');
        price.textContent = 'S/' + originalPrice;
    });
}

// Event listener para abrir el modal al presionar "Pagar ahora"
payBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalOverlay.classList.add('active');
});

// Event listener para cerrar el modal al presionar el botón "Aceptar"
closeModalBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
});

// Event listener para cerrar el modal si se hace click fuera del contenido (en el overlay)
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});