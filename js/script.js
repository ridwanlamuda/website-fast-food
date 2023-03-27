// inisialisasi variable
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// dengarkan jika menu-icon di-"click", maka navbar menambahkan kelas "active"
menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// jika di-scroll, maka classlist "active" di navbar dihapus
window.onscroll = () => {
  navbar.classList.remove("active");
};
