// document.addEventListener("keydown", (event) => {
//   event.preventDefault()
//   console.log("KeydownCode:", event.code);
//   console.log("KeydownKey:", event.key);
//   console.log(event.currentTarget);
// })
// document.addEventListener("keyup", (event) => {
//   event.preventDefault()
//   console.log("KeyupCode:", event.code);
//   console.log("KeyupKey:", event.key);
// })

const openBtn = document.querySelector("button[data-action = 'open-modal']")
const closeBtn = document.querySelector("button[data-action = 'close-modal']")
const backdrop = document.querySelector(".js-backdrop")

const onOpenModal = (event) => {
  document.body.classList.add("show-modal")
  document.addEventListener("keydown", onEscapeCloseModal)
}

const onCloseModal = (event) => {
  document.body.classList.remove("show-modal")
  document.removeEventListener("keydown", onEscapeCloseModal)
}

const onBackdropClick = (event) => {
  if(event.target === event.currentTarget) {
    onCloseModal();
  }
}
// escape
const onEscapeCloseModal = (event) => {
  if(event.code === "Escape") {
    onCloseModal();
  }
}

openBtn.addEventListener("click", onOpenModal)
closeBtn.addEventListener("click", onCloseModal)
backdrop.addEventListener("click", onBackdropClick)

// mouse 
const box = document.querySelector(".box")

const onWindowClick = (event) => {
  console.log("View Port:", event.clientX, event.clientY);
  console.log("Documnet:", event.pageX, event.pageY);
  console.log("Offset:", event.offsetX, event.offsetY);
}


box.addEventListener("click", onWindowClick)

// Завдання:

const circle = document.querySelector('.circle')
const currentColor = "lightblue";
let intervalId = null;

const colors = ["red", "green", "yellow", "orange", "purple", "pink"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const onCircleMove = () => {
  if (intervalId !== null) return; 
  intervalId = setInterval(setBackgroundColor, 1000);
};

const onCircleLeave = (event) => {
  circle.style.backgroundColor = currentColor;
}

function setBackgroundColor() {
  circle.style.backgroundColor = getRandomColor();
} //function declaration 
circle.addEventListener("mousemove", onCircleMove)
circle.addEventListener("mouseout", onCircleLeave)
// Створіть на екрані кружечок.
// -Коли клієнт наводить мишку на кружечок,
// він повинен змінювати свій колір на якийсь інший випадковий колір.
// -Коли мишка йде з кружечка,
// він повинен повертатися до свого початкового кольору.
// -Додатково, зробіть так, щоб під час руху мишки над кружечком
// (без клікання), колір кружечка плавно змінювався
// від початкового до нового випадкового кольору.
// 1)Знайдіть елемент - document.querySelectorAll('.circle').
// 2)запам'ятайте його початковий колір у змінній
// 3)створіть функцію для генерації випадкового RGB кольору
// 4)Для кружечка додайте слухачі подій:
// mouseover: мишка наводиться на el змініть його на випадковий колір
// mouseout: мишка йде з кружечка, поверніть до початкового кольору.
// mousemove: Коли мишка рухається над кружечком,
// змінюйте його колір(setInterval)

