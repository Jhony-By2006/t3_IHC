
    // Toggle menú desplegable
    const menuToggle = document.getElementById("menuToggle");
    const navDropdown = document.getElementById("navDropdown");

    menuToggle.addEventListener("click", () => {
      navDropdown.classList.toggle("show");
    });

    document.addEventListener("click", e => {
      if (!menuToggle.contains(e.target) && !navDropdown.contains(e.target)) {
        navDropdown.classList.remove("show");
      }
    });

    // Tabs del heatmap
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    // Paginación
    const pagePrev = document.getElementById("pagePrev");
    const pageNext = document.getElementById("pageNext");
    
    pagePrev.addEventListener("click", () => {
      alert("Página anterior");
    });
    
    pageNext.addEventListener("click", () => {
      alert("Página siguiente");
    });
 