const heroSection = document.querySelector(".hero");
const dropdownToggles = document.querySelectorAll("a[data-toggle='dropdown']");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdownToggles.forEach((node) => {
  node.addEventListener("click", (e) => {
    console.log("Dropdown clicked");
    e.target.parentNode.childNodes[3].setAttribute("data-open", true);
  });
});

heroSection.addEventListener("click", (e) => {
  dropdownMenus.forEach((node) => {
    node.removeAttribute("data-open");
  });
});
