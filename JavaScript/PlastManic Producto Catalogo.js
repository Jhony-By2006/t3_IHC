// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Filter interactions
document.querySelectorAll('.filter-option').forEach(option => {
  option.addEventListener('click', function() {
    document.querySelectorAll('.filter-option').forEach(opt => opt.classList.remove('active'));
    this.classList.add('active');
  });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
    this.style.transition = 'transform 0.3s ease';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Product card click navigation
const productLinks = {
  'Leche Gloria': 'PlastManic Detalle producto 1.html',
  'Shake de Gloria': 'PlastManic Detalle producto 2.html',
  'Queso Fresco': 'PlastManic Detalle producto 3.html',
  'Queso Laive Andino': 'PlastManic Detalle producto 4.html',
  'Mantequilla Gloria': 'PlastManic Detalle producto 5.html',
  'Alpeña Manjar Blanco': 'PlastManic Detalle producto 6.html'
};

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function() {
    const productName = this.querySelector('.product-name').textContent;
    const productLink = productLinks[productName];
    
    if (productLink) {
      window.location.href = productLink;
    }
  });
  
  // Cambiar cursor a pointer para indicar que es clickeable
  card.style.cursor = 'pointer';
});