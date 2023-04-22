let counter = 0;
let elementos = [
  "Terra",
  "Ar",
  "Agua",
  "Fogo",
  "Terra",
  "Ar",
  "Agua",
  "Fogo",
  "Terra",
  "Ar",
  "Agua",
  "Fogo",
];
function count() {
  if (counter == 12) {
    counter = 0;
  }
  counter++;
  const countText = document.querySelector("h2");
  countText.innerHTML = `Mês: ${counter}, Elemento: ${elementos[counter - 1]} `;
}

function sol() {
  const heading = document.querySelector("h1");
  if (heading.innerHTML === "Sol!") {
    heading.innerHTML = "Lua!";
  } else {
    heading.innerHTML = "Sol!";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});
