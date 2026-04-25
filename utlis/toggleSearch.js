export default function toggleSearch() {
  const toggler = document.querySelector(".show-search");
  const searchElement = document.querySelector(".top-search");

  toggler.classList.toggle("active");
  searchElement.classList.toggle("show");
}
