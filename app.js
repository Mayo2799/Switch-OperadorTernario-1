const contenedor = document.querySelector("#contenedor");
const crearImagenFeliz = () => {
  let imagen = `<div>
                    <p><b>Usted ha ganado el curso</b></p>
                    <img class="imagen" src="img/Aprobado.png" alt="Aprobado">
                 </div>`;
  contenedor.innerHTML = imagen;
};
const crearImagenTriste = () => {
  let imagen = `<div>
                    <p><b>Usted ha perdido el curso</b></p>
                    <img class="imagen" src="img/Reprobado.png" alt="Reprobado">
                 </div>`;
  contenedor.innerHTML = imagen;
};
const notaAleatoria = () => {
  let nota = Math.round(Math.random() * 10);
  console.log(nota);
  switch (nota) {
    case 1:
      document.body.style.backgroundColor = "red";
      break;
    case 2:
      document.body.style.backgroundColor = "red";
      break;
    case 3:
      document.body.style.backgroundColor = "red";
      break;
    case 4:
      document.body.style.backgroundColor = "red";
      break;
    case 5:
      document.body.style.backgroundColor = "red";
      break;
    case 6:
      document.body.style.backgroundColor = "red";
      break;
    case 7:
      document.body.style.backgroundColor = "green";
      break;
    case 8:
      document.body.style.backgroundColor = "green";
      break;
    case 9:
      document.body.style.backgroundColor = "green";
      break;
    case 10:
      document.body.style.backgroundColor = "green";
      break;
    default:
      alert("La nota debe ser mayor que 0");
      break;
  }
  nota === 0
    ? (document.body.style.backgroundColor = "white")
    : nota > 0 && nota <= 6
    ? crearImagenTriste()
    : crearImagenFeliz();
};
notaAleatoria();
