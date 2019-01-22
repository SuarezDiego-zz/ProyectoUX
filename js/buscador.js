var input_buscador = document.getElementById("buscador");

input_buscador.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    location.href = "lugar_info.html";
  }
});