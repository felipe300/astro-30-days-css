let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch-circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let containerA = document.querySelector("#container-a");
let containerB = document.querySelector("#container-b");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault();
let changeForm = () => {
  switchCtn.classList.add("is-gx");
  setTimeout(() => {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  containerA.classList.toggle("is-txl");
  containerB.classList.toggle("is-txl");

  containerB.classList.toggle("is-z200");
};

let mainFunction = () => {
  allButtons.forEach((button) => {
    button.addEventListener("click", getButtons);
  });

  switchBtn.forEach((button) => {
    button.addEventListener("click", changeForm);
  });
};

window.addEventListener("load", mainFunction);
