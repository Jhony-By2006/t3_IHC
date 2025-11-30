
  
    // Limpiar botón buscador y funcionalidad
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    function toggleClearBtn() {
      if (searchInput.value.trim() !== "") {
        clearSearchBtn.classList.add("active");
      } else {
        clearSearchBtn.classList.remove("active");
      }
    }

    searchInput.addEventListener("input", () => {
      toggleClearBtn();
    });

    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      toggleClearBtn();
      searchInput.focus();
    });

    // Acciones de botones actualizar/reordenar
    document.querySelectorAll(".action-btn.actualizar").forEach(btn => {
      btn.addEventListener("click", () =>
        alert(`Actualizar proveedor con RUC: ${btn.dataset.ruc}`)
      );
    });
    document.querySelectorAll(".action-btn.reordenar").forEach(btn => {
      btn.addEventListener("click", () =>
        alert(`Reordenar proveedor con RUC: ${btn.dataset.ruc}`)
      );
    });

    // Botones Nuevo Proveedor, Eliminar, Exportar
    document.getElementById("btnNuevoProveedor").addEventListener("click", () => {
      alert("Nuevo Proveedor - acción simulada");
    });
    document.getElementById("btnEliminar").addEventListener("click", () => {
      alert("Eliminar - acción simulada");
    });
    document.getElementById("btnExportarCSV").addEventListener("click", () => {
      alert("Exportar CSV - acción simulada");
    });

    // Botón actualizar tabla
    document.getElementById("btnActualizarTabla").addEventListener("click", () => {
      alert("Tabla actualizada (acción simulada)");
    });

    // Paginación simulada
    const pageNumber = document.getElementById("pageNumber");
    const btnPrev = document.getElementById("pagePrev");
    const btnNext = document.getElementById("pageNext");
    let currentPage = 1;
    const totalPages = 1;

    function updatePagination() {
      pageNumber.textContent = currentPage.toString().padStart(2, "0");
      btnPrev.disabled = currentPage <= 1;
      btnNext.disabled = currentPage >= totalPages;
    }
    btnPrev.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });
    btnNext.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });

    updatePagination();
    toggleClearBtn();

    // Toggle menú desplegable solo los links en mobil
    const menuToggle = document.getElementById("menuToggle");
    const navDropdown = document.getElementById("navDropdown");

    menuToggle.addEventListener("click", () => {
      navDropdown.classList.toggle("show");
    });

    // Cerrar menu con click fuera
    document.addEventListener("click", e => {
      if (!menuToggle.contains(e.target) && !navDropdown.contains(e.target)) {
        navDropdown.classList.remove("show");
      }
    });


