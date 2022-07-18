(() => {
  const refs = {
    openMenuBtn: document.querySelector(".btm-menu-open"),
    closeMenuBtn: document.querySelector(".btm-menu-close"),
      menu: document.querySelector(".mobi-menu"),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();