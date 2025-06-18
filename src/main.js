import "./style.css";

const btn = document.querySelector("#submit-btn > button");
const inp = document.querySelector(`input[type="number"`);

console.log(btn);
console.log(inp);

// random number generation
const rand = Math.floor(Math.random() * 100 + 1);
console.log(`The random number generated is: ${rand}`);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let val = inp.value;
  console.log(val);
});
