
     
            // Script para el menú desplegable
            const dropdownToggle = document.getElementById('dropdownToggle');
            const dropdownContent = document.getElementById('dropdownContent');

            // Abrir/cerrar el menú al hacer click
            dropdownToggle.addEventListener('click', function(event) {
                event.stopPropagation();
                dropdownContent.classList.toggle('show');
            });

            // Cerrar el menú cuando se hace click en cualquier otro lugar
            document.addEventListener('click', function(event) {
                if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
                    dropdownContent.classList.remove('show');
                }
            });

            // Cerrar el menú cuando se hace click en "Cerrar sesión"
            const logoutLink = dropdownContent.querySelector('.dropdown-item');
            logoutLink.addEventListener('click', function() {
                dropdownContent.classList.remove('show');
            });
      
