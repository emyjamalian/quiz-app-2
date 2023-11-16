const mode = document.getElementById("dark-mode");

mode.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
