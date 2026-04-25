export default function toggleMobilemenu() {
  const mobileMenu = document.querySelector("#mainnav-mobi .menu");
  const toggler = document.querySelector(".btn-menu");

  if (mobileMenu && toggler) {
    const computedStyle = window.getComputedStyle(mobileMenu);
    if (computedStyle.height == "0px") {
      mobileMenu.style.height = mobileMenu.scrollHeight + "px";
      toggler.classList.add("active");
    } else {
      mobileMenu.style.height = "0px";
      toggler.classList.remove("active");
    }
  }
}
