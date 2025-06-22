// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.

// const { createElement } = require("react");

// 2. Напиши скрипт реалізації додавання 
// класу до заголовка при кліку на кнопку ‘Додати стилі’.

const buttonClick = document.querySelector(".js-btn")


const onBtnClickChangeColor = (event) => {a
  // event.target.style.backgroundColor = "green";
  console.log("click");
} 

buttonClick.addEventListener("click", onBtnClickChangeColor)


const buttonBg = document.querySelector(".js-add-style-btn")
const colorsArr = ["red", "green", "blue", "yellow", "orange", "pink"]


// const onBtnClickChangeBackground = (event) => {
//   if(event.target.style.backgroundColor === "blue") {
//     event.target.style.backgroundColor = ""
//     // event.target.textContent = "I am neutral"
//   } else {
//     event.target.style.backgroundColor = "blue"
//     // event.target.textContent = "I am blue"
//   }
//   // event.target.style.backgroundColor = Math.round(Math.random() * (colorsArr.length - 1) + 1);
// }

// buttonBg.addEventListener("click", onBtnClickChangeBackground)


const button = document.querySelector(".js-add-style-btn")
const text = document.querySelector(".text")

const onBtnClickAddClass = (event) => {
  console.log("click!");
  // if(text.classList.contains("text-update")) {
  //   text.classList.remove("text-update")
  // } else {
  //   text.classList.add("text-update")
  // }
  // console.log(text.classList);
  text.classList.toggle("text-update")
  console.log(event.type);
  console.log(event.target);
}

button.addEventListener("click", onBtnClickAddClass)

// form 

const formElement = document.querySelector(".form")
const messageEl = document.querySelector(".greating");

const formHandler = (event) => {
  event.preventDefault()

  const { name , surname } = event.currentTarget.elements 
  messageEl.textContent = `${name.value} ${surname.value},Ви зареєструвалися успішно! Дякую!`
  console.log(name.value , surname.value);
  console.log("U are logged in!");
    setTimeout(() => (messageEl.style.display = "block"), 500);
    setTimeout(() => (messageEl.style.display = "none"), 2500);
    event.currentTarget.reset()
}

formElement.addEventListener("submit", formHandler)

// перемикач теми

const ChangeTopicBtn = document.querySelector("#changeBtn")

const ChangeTopicHandler = (event) => {
  document.body.classList.toggle("blackTopic")
}

ChangeTopicBtn.addEventListener("click", ChangeTopicHandler)

//choose fonts

const fontsForm = document.querySelector(".fonts-form")
const textToChange = document.querySelector(".paragraph")

const onChangeTextStyle = (event) => {
  const value = event.target.value;

  if (value === "bold") {
    textToChange.style.fontWeight = "bold";
  } else if (value === "italic") {
    textToChange.style.fontStyle = "italic";
  } else if (value === "underline") {
    textToChange.style.textDecoration = "underline";
  }
}

fontsForm.addEventListener("change", onChangeTextStyle)

// start timer

const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
const counterWindow = document.querySelector("#counter-window")
let counter = 0;
let timeId = null;

const onClickStartTimer = (event) => {
    if(timeId !== null) { return }

    timeId = setInterval(() => {
    counter += 1;
    counterWindow.textContent = counter;
  }, 1000);
  
}

startBtn.addEventListener("click", onClickStartTimer)
stopBtn.addEventListener("click", () => {
  clearInterval(timeId);
  timeId = null;
})

// генерація рандомного кольору 


const randomColorBtn = document.querySelector("#randomColorBtn");

const getRandomRGBColor = function() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const onClickChangeColor = (event) => {
  event.target.style.backgroundColor = getRandomRGBColor();
  console.log(event.target);
};

randomColorBtn.addEventListener("click", onClickChangeColor);

// Список справ
const todoForm = document.querySelector(".todo-form")
const todoList = document.querySelector(".todo-list") 
const todoInput = document.querySelector("#todo-input")
const deleteBtn = document.querySelector(".delete-done-btn")

const onSubmitAddTask = (event) => {
  const li = document.createElement("li")
  li.textContent = todoInput.value
  event.preventDefault()
  todoList.appendChild(li)
  li.classList.add("item")
  todoInput.value = ""
}
todoForm.addEventListener("submit",onSubmitAddTask)

const todoListItem = document.querySelector(".todo-list li")

todoList.addEventListener("click", (event) => {
  if(event.target.tagName === "LI") {
    event.target.classList.toggle("done")
  }
})

deleteBtn.addEventListener("click", (event) => {
  const allLi = document.querySelectorAll(".todo-list li.done") 

  allLi.forEach((item) => {
    item.remove() // видалити з DOM
  })
})


// data 

const items = document.querySelectorAll(".product-list li")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const filter = button.dataset.filter;
    
    items.forEach((item) =>{
      const category = item.dataset.category;

      if(filter === "all" || category === filter) {
        item.style.display = "list-item"; 
      } else {
        item.style.display = "none"; 
      }
    })
  })
})

