const button1 = document.querySelector("#first-btn")

const handleClick = () => alert('CLICK!');

button1.addEventListener("click", handleClick);

const btn = document.querySelector("#btn");

const handleBtnClick = (event) => {

btn.style.backgroundColor = "red";

console.log("target: ", event.target);
console.log("currentTarget: ", event.currentTarget);
console.log("target: ", event.target.classList.add("new"));

}

btn.addEventListener("click", handleBtnClick);
