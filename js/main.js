const btnOpen = document.querySelector(".btn-open-js");
const btnClos = document.querySelector(".btn-cose-js");

btnOpen.onclick = function () {
  document.querySelector(".open-js").style.width = "233px";
};

btnClos.onclick = function () {
  document.querySelector(".open-js").style.width = "0";
};
