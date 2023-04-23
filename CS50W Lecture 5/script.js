let counter = 0;
let elementos = {
  1: "Primeiro tempo da Terra",
  2: "Primeiro tempo do Ar",
  3: "Primeiro tempo da Agua",
  4: "Primeiro tempo do Fogo",
  5: "Segundo tempo da Terra",
  6: "Segundo tempo do Ar",
  7: "Segundo tempo da Agua",
  8: "Segundo tempo do Fogo",
  9: "Terceito tempo da Terra",
  10: "Terceito tempo do Ar",
  11: "Terceito tempo da Agua",
  12: "Terceito tempo do Fogo",
};

function count() {
  if (counter == 12) {
    counter = 0;
  }
  counter++;
  const countText = document.querySelector("#monthText");
  countText.innerHTML = `Mês: ${counter}, Elemento: ${elementos[counter]} `;
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonCount = document.querySelector("#monthButton");
  buttonCount.onclick = count;
});

function switchSolLua() {
  const heading = document.querySelector("#solluaText");
  if (heading.innerHTML === "Sol!") {
    heading.innerHTML = "Lua!";
  } else {
    heading.innerHTML = "Sol!";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("#nameButton").value;
    alert(`Hello, ${name}!`);
  };
});
