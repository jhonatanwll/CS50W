if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}
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

// MONTHS BUTTON
function count() {
  let counter = localStorage.getItem("counter");
  if (counter == 12) {
    counter = 0;
  }
  counter++;
  const countText = document.querySelector("#monthText");
  countText.innerHTML = `Mês: ${counter}, Elemento: ${elementos[counter]} `;
  localStorage.setItem("counter", counter);
}

document.addEventListener("DOMContentLoaded", () => {
  let counter = localStorage.getItem("counter");
  document.querySelector(
    "#monthText"
  ).innerHTML = `Mês: ${counter}, Elemento: ${elementos[counter]} `;
  document.querySelector("#monthButton").onclick = count;
});

// SWITCH
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#solluaButton").onclick = switchSolLua;
});
function switchSolLua() {
  const heading = document.querySelector("#solluaText");
  if (heading.innerHTML === "Sol!") {
    heading.innerHTML = "Lua!";
  } else {
    heading.innerHTML = "Sol!";
  }
}

//HELLO BUTTON
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#formHi").onsubmit = () => {
    const name = document.querySelector("#nameButton").value;
    alert(`Hello, ${name}`);

    // Stop form from submitting
    return false;
  };
});

// COLORS SELECTOR
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#colorSelector").onchange = function () {
    document.querySelector("#colorsText").style.color = this.value;
  };
});

//TASKS LIST
document.addEventListener("DOMContentLoaded", function () {
  // By default, submit button is disabled
  document.querySelector("#submitTask").disabled = true;

  document.querySelector("#task").onkeyup = () => {
    if (document.querySelector("#task").value.length > 0) {
      document.querySelector("#submitTask").disabled = false;
    } else {
      document.querySelector("#submitTask").disabled = true;
    }
  };

  document.querySelector("#formTasks").onsubmit = () => {
    const task = document.querySelector("#task").value;
    console.log(task);

    let li = document.createElement("li");
    li.innerHTML = task;

    document.querySelector("#tasks").append(li);

    document.querySelector("#task").value = "";
    document.querySelector("#submitTask").disabled = true;

    // Stop form from submitting
    return false;
  };
});
