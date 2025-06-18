import "./style.css";

const btn = document.querySelector("#submit-btn > button");
const inp = document.querySelector(`input[type="number"`);
console.log(btn);
console.log(inp);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let val = inp.value;
  console.log(val);
});
