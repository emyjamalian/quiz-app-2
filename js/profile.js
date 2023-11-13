const mode = document.getElementById("dark-mode");
const body = document.getElementsByTagName("body");

mode.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
