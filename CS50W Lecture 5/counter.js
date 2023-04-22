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
  const countText = document.querySelector("#monthText");
  countText.innerHTML = `Mês: ${counter}, Elemento: ${elementos[counter - 1]} `;
  alert("Month OK!");
}

function switchSolLua() {
  const heading = document.querySelector("#solluaText");
  if (heading.innerHTML === "Sol!") {
    heading.innerHTML = "Lua!";
  } else {
    heading.innerHTML = "Sol!";
  }
  alert("Switch OK!");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#solluaButton").onclick = switchSolLua;
  document.querySelector("#monthButton").onclick = count;
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("#nameButton").value;
    alert(`Hello, ${name}!`);
  };
});
