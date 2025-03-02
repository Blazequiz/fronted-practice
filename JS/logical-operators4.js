// 1
// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2

// const x1 = 10;
// const x2 = 30;
// const number = 45;
// const isLie = number < x1;
// console.log(isLie);
// const isTrue = number > x1
// console.log(isTrue);
// const lieOrNot = number > x1 && number < x2;
// console.log(lieOrNot);
// const lieOrNot2 = number < x1 || number > x2;
// console.log(lieOrNot2);

// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. 
// Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log(canOpenChat);

// 3
// Напиши скрипт перевірки підписки користувача під час доступу до контенту. 
// Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.

// const sub = 'free';
// const sub = 'vip';


// const canAccessContent = sub === "vip" || sub === "pro";
// console.log(canAccessContent);

// 1. зробити дві змінні: 
// ПЕРШУ - <myFavoriteGameName> зі значенням вашої улюбленої гри(наприклад "minecraft")
// та ДРУГУ - <myFavoriteGameText> зі значенням рядка = "my favorite game's name" 
// 2.
// За доромогою властивості або метода рядка 
// отримати ОСТАННІЙ символ змінної <myFavoriteGameName>
// та записати це значення у ТРЕТЮ змінну <lastCharacter>.
// 3.
// Зробити перетворення значення змінної <lastCharacter> 
// на ВЕЛИКУ(заглавну літеру).
// 4.
// Вивести в консоль повідомлення
// 4.
// Вивести в консоль повідомлення, використовуючи 
// значення ВСІХ ТРЬОХ змінних у такому форматі:
// "The last letter in <myFavoriteGameText> "<myFavoriteGameName>" is "<lastCharacter>" !" 
// Використовуйте шаблонний рядок!!
// приклад рядка, що має вийти
// The last letter in my favorite game's name "minecraft" is "T" !

// const myFavoriteGameName = prompt("what is your favorite game");
// const myFavoriteGameTextToLowwerCase = myFavoriteGameName.toLowerCase();
// const isLetterOfRow = myFavoriteGameName[myFavoriteGameName.length - 1];
// const lastChar = `${isLetterOfRow.toUpperCase()}!`

// console.log(lastChar);

// 


// Subscription  if ()
// let cost = 0;
// const subsccription = "free";
// const subsccription = "vip";


// console.log(cost);
// if (subsccription === "pro"  ||  subsccription === "vip") {
//   cost = 100;
// }
// console.log(cost)

// if else

// const grade1 = 60;

// if (grade1 > 60) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// if 
// else if 
// else

// const Grade1 = 100;

// if (Grade1 >= 90) {
//   console.log("Perfect");
// } else if (Grade1 >= 80) {
//   console.log("Good");
// } else if (Grade1 >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Задача в залежності від підписки виводити вартість
// "free" 0;
// "pro"100;
// "premium" 500;
//  погане значення "Invalid subscription type"

let cost2;
const subscription2 = "premium";

if (subscription2 === "free") {
  cost2 = 0;
  console.log(cost2);
} else if (subscription2 === "pro") {
  cost2 = 100;
  console.log(cost2);
} else if (subscription2 === "premium") {
  cost2 = 500;
  console.log(cost2)
} else {
  console.log("Ivalid valaue");
}


// console.log(cost2);


//1  Що буде в консолі
if ("0") {
  //  console.log( 'Привіт' );
  }
// 2
  // Використовуючи if..else, напишіть код, що отримує число  
// і потім виводить повідомлення на екран:

// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.
const userNumber = 0;


if (userNumber > 0) {
  console.log(1);
} else if (userNumber < 0) {
  console.log(-1);
} else if (userNumber === 0){
  console.log(0);
} else {
  console.log("Invalid value");
}

//   Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, 
//   в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
const userInput = "jnoik";
// const userInput = "EcMAScriPt";

if (userInput.toLowerCase === "ECMASCRIPT") {
  console.log("Правильно!");
} else {
  console.log("Ви не знаєте? ECMAScript!");
}

if (userInput.toLowerCase() === "ECMAScript".toLowerCase()) {
	console.log('Правильно!')
}
else {
	console.log('Ви не знаєте? ECMAScript!')
};

// task 1

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
    biggerNumber = num1;
    console.log(num1);
}  else if (num2 > num1) {
    biggerNumber = num2;
    console.log(num2);
}  else {
    console.log("draw, equal");
}

// task 2

let type;
const age = 20;

if (age > 18) {
  type = "adult"
} else { type = "child" } 


// 

const a = 4;
const b = 5;
let result;
// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }

result = a + b < 4 ? 'Нижче' : 'Вище';

console.log(result);

// console.log(result)

// Використовуючи тернарний оператор, напишіть код, що запитує:
//  ‘Яка “офіційна” назва JavaScript?’
//   Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, 
//   в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

console.log(`Яка “офіційна” назва JavaScript?`);
const userInput1 = "EcMAScriPt"; 
const correctAnswer = "ECMAScript";

console.log(
  correctAnswer.toLowerCase() === correctAnswer.toLowerCase() 
  ? "Правильно!" 
  : "Ви не знаєте? ECMAScript!"
);


