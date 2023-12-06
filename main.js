const pageLoader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    pageLoader.classList.add("remove");
  }, 4000);
});
