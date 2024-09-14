(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.querySelector("#menuBtn");
    const mobileMenu = document.querySelector("#mobileMenu");

    mobileMenuButton.addEventListener("click", function () {
      this.classList.toggle("open");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  });
})();
