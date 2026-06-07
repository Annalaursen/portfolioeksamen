// projektsiden

function visTema(temaId, knap) {
  const alleTemaer = document.querySelectorAll(".tema");
  const alleKnapper = document.querySelectorAll(".tema-btn");

  alleTemaer.forEach((tema) => {
    tema.classList.remove("active-tema");
  });

  alleKnapper.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(temaId).classList.add("active-tema");
  knap.classList.add("active");
}
