const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// getElementById: Retorna uma referência para o primeiro objeto com o valor especificado pelo atributo ID.
const btn = document.getElementById("btn");
// querySelector: Retorna o primeiro elemento que é descendente do nó que corresponde os seletores.
const color = document.querySelector(".color");
// addEventListener: Anexa um ouvinte de eventos para eventos cujo valor de atributo type é type.
// O argumento de callback define o retorno de chamada que será invocado quando o evento for despachado.
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
