const output = document.querySelector(".results-window");
const btns = document.querySelectorAll(".btn");
let calculation = "";

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const value = e.target.innerText;
    if (!isNaN(value)) {
      calculation += value;
    } else if (value === "C") {
      calculation = "";
    } else if (value === "=") {
      calculation = eval(calculation.replace(/x/g, '*').replace(/÷/g, '/')).toString();
    } else {
      calculation += ` ${value} `;
    }
      output.innerText = calculation;
  });
});