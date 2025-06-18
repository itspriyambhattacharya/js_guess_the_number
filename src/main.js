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
  val = Number(val);
  console.log(typeof val); // to check the datatype of val

  res.classList.remove("hidden");
  res.classList.add("block");

  if (val === rand) {
    let elem = document.createElement("p");
    elem.innerHTML = "Successfull guess";
    res.appendChild(elem);
  } else if (val > rand) {
    let elem = document.createElement("p");
    elem.innerHTML = `Too large ${val}`;
    res.appendChild(elem);
  } else {
    let elem = document.createElement("p");
    elem.innerHTML = `Too small ${val}`;
    res.appendChild(elem);
  }
  console.log(val);
});
