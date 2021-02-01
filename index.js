const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", function () {
  this.classList.toggle("active");
  const panel = document.getElementsByClassName('catalog__filter')[0];

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.display = "block";
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
