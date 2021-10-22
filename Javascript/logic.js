const num = document.getElementById("number");

const btnAdd = document.getElementById("increase");
const btnSubtract = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

btnAdd.addEventListener("click", function () {
  var out = Number(num.textContent) + 1;
  num.textContent = out.toString();
  colors(out);
});
btnReset.addEventListener("click", function () {
  var out = 0;
  colors(out);
  num.textContent = out.toString();
});
btnSubtract.addEventListener("click", function () {
  var out = Number(num.textContent) - 1;
  colors(out);
  num.textContent = out.toString();
});

function colors(value) {
  if (value <= -1) {
    num.style.color = "red";
  } else if (value >= 1) {
    num.style.color = "green";
  } else {
    num.style.color = "black";
  }
}
