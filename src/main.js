import "./style.css";

const btn = document.querySelector("#submit-btn > button");
const inp = document.querySelector(`input[type="number"`);
const res = document.querySelector("#result-sec");

let attempts = 3; // attempts to guess the correct number
let gv = 1;
let fl = 0;

// random number generation
const rand = Math.floor(Math.random() * 100 + 1);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (fl) {
    return;
  }
  let val = inp.value;
  val = Number(val);

  res.classList.remove("hidden");
  res.classList.add("block");
  if (gv) {
    const guess_heading = document.createElement("h3");
    guess_heading.innerHTML = "Guess Values";
    guess_heading.classList.add("text-center");
    guess_heading.classList.add("mb-5");
    guess_heading.classList.add("font-bold");
    res.appendChild(guess_heading);
    let attempts_msg = document.createElement("p");
    attempts_msg.innerHTML = `Total Ammenpts: ${attempts}`;
    res.appendChild(attempts_msg);
    gv = 0;
  }

  if (val === rand) {
    let elem = document.createElement("p");
    elem.innerHTML = "Successfull guess";
    btn.disabled = true;
    inp.disabled = true;
    res.appendChild(elem);
    fl = 1;
  } else if (val > rand) {
    let elem = document.createElement("p");
    attempts -= 1;
    elem.innerHTML = `Too large ${val} <br> Remaining attempts: ${attempts}`;
    res.appendChild(elem);
  } else {
    let elem = document.createElement("p");
    attempts -= 1;
    elem.innerHTML = `Too small ${val} <br> Remaining attempts: ${attempts}`;
    res.appendChild(elem);
  }
  if (attempts === 0) {
    let elem = document.createElement("p");
    elem.innerHTML = `You Loose`;
    btn.disabled = true;
    inp.disabled = true;
    res.appendChild(elem);
    fl = 1;
  }
});
