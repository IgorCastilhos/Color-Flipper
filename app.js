const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// O projeto funciona com cores nomeadas, rgba ou hex;

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Event listener para eventuais cliques no botão
// Sempre que eu for clicar em um botão, eu vou trocar a cor do body-background

btn.addEventListener("click", function () {
  // pegar um número entre 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
