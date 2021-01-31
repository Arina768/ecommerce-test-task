const button = document.getElementById("filter-button");

button.addEventListener("click", function () {
  this.classList.toggle("active");
  const panel = document.getElementsByClassName('filter')[0];
  console.log(panel)
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.display = "block";
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
