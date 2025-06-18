import "./style.css";

const btn = document.querySelector("#submit-btn > button");
const inp = document.querySelector(`input[type="number"`);
const res = document.querySelector("#result-sec");

console.log(btn);
console.log(inp);
console.log(res);

// random number generation
const rand = Math.floor(Math.random() * 100 + 1);
console.log(`The random number generated is: ${rand}`);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let val = inp.value;
  res.classList.remove("hidden");
  res.classList.add("block");

  if (val === rand) {
    let elem = document.createElement("p");
    elem.innerHTML = "Successfull guess";
  }
  console.log(val);
});
