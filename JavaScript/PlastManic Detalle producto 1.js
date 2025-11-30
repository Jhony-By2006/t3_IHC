

    let quantity = 1;

    function increaseQuantity() {
      quantity++;
      document.getElementById('quantity').textContent = quantity;
    }

    function decreaseQuantity() {
      if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
      }
    }

    // Mobile menu toggle
    document.querySelector('.hamburger').addEventListener('click', function() {
      const navSection = document.querySelector('.nav-section');
      if (navSection.style.display === 'flex') {
        navSection.style.display = 'none';
      } else {
        navSection.style.display = 'flex';
        navSection.style.flexDirection = 'column';
        navSection.style.position = 'absolute';
        navSection.style.top = '100%';
        navSection.style.left = '0';
        navSection.style.width = '100%';
        navSection.style.backgroundColor = '#ffffff';
        navSection.style.padding = '16px';
        navSection.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }
    });

    // Add to cart functionality
    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
      alert(`Agregado al carrito: ${quantity} unidad(es) de Leche Gloria`);
    });


