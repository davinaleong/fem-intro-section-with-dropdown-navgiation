const primaryHeader = document.querySelector(".primary-header");
const primaryToggle = document.querySelector(".primary-header .toggle");

const heroSection = document.querySelector(".hero");
const dropdownToggles = document.querySelectorAll("a[data-toggle='dropdown']");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

primaryToggle.addEventListener("click", () => {
  primaryHeader.toggleAttribute("data-open");
});

dropdownToggles.forEach((node) => {
  node.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Dropdown clicked");
    e.target.toggleAttribute("data-open");
    e.target.parentNode.childNodes[3].toggleAttribute("data-open");
  });
});

heroSection.addEventListener("click", (e) => {
  dropdownMenus.forEach((node) => {
    node.removeAttribute("data-open");
  });
});
