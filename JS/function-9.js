// 1. 
// Створити функцію hello1(), 
// яка при визові буде вертати текст “Привіт JavaScript”.

const hello = function() {
  return console.log("Hello, Javascript !");
}
hello();


// 2. 
// Напишіть функцію hello2(),
//  яка при виклику буде приймати змінну name (наприклад, «Василь») 
//  і виводити рядок (в нашому випадку «Привіт, Василь»).

const hello2 = function(name) {
  console.log(`Hello, ${name}!`);
  return 
}

hello2("Oleks");

/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */


const calculateTotalPrice = function(orderedQuantity, pricePerItem) {


  return console.log(`Total price: ${orderedQuantity * pricePerItem}`);;
}


calculateTotalPrice(5, 100)

// 4. 
// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів. 
//  Перевірте її роботу.


const mul = function(n, m) {
  
  const solution = [n + m , n - m , n * m] 

  return solution;
}

console.log(mul(10 , 5));

//     Задачка
/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

const calculateTax = function(amount , taxRate = 0.2) {

  return amount * taxRate
}

console.log(calculateTax(100, 0.2));

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20


// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення 
// `${item} is available to order!`
// якщо немає  "Sorry! We are out of stock!";

const checkStorage = function(storage, item) {
  if (storage.includes(item.toLowerCase()) === true) {
    console.log(`${item.toLowerCase()} is available to order!`);
  } else {
    console.log("Sorry! We are out of stock!");
  }
  return
}

checkStorage(["apple", "plum", "pear"], "pLuM")

// 3. Напиши функцію myAverageScore , яка у якості аргументу
//  отримує масив з оцінками, і виводить користувачу його 
//  середній результат у наступному форматі:
// Average score: A (якщо середня оцінка від 91 до 100)
// Average score: B (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)

const myAverageScore = function(scores) {
  let total = scores.length;
  let allScores = 0;
  for(let i = 0; i < scores.length; i+=1) {
    allScores += scores[i];
  }
  let average = allScores / total;
  let grade;
  if (average >= 91) 
  {
    grade = "A";
  } 
  else if (average >= 81 && average <= 90) 
  {
    grade = "B";
  } 
  else if (average >= 71 && average <= 80) 
  {
    grade = "C";
  } 
  else 
  {
    grade = "D";
  }
  return console.log(`Average score: ${grade}`);
};


myAverageScore([90, 95, 87, 92]);

// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// 1
// Напиши функцію logItems(items) для перебора і логування масива
const logItems = function(arr) {
  for (const items of arr) {
    console.log(items);
  }
}

logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);


//   2
// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення
//  'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення
//  'Користувач [логін] знайдено.'

const findLogin = function(loginsArray, logintofind) {
  for (const login of loginsArray) {
    if (login === logintofind) {
      return 'Користувач [логін] знайдено.'
    }
  }
  return 'Користувач [логін] не знайдено.'
}
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];



// console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scut



// Напиши функцию slugify(string) яка отримує рядок
// і повертає URL-slug. Заголовок статті складається
// тільки з букв та пропусків
const slugify = function(string){
  const formatedString = string.toLowerCase();
  const arr = formatedString.split(" "); //
  return arr.join("-");  //
}
console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));
// console.log(slugify("Azure Static Web Apps are Awesome"));
// console.log(slugify("Technical writing tips for non-native English speakers"));




//  Напиши функцію яка повертає середнє значення з масиву чисел:
//  У цій функції ми передаємо масив чисел в якості параметру,
//  обчислюємо їхню суму та повертаємо середнє значення.
const calculateAverage = function(arr) {
  let total = 0;
  for (const item of arr) {
    total += item;
    console.log(total);
  }
  return total / arr.length;
}

const array = [1, 3, 2, 5, 4];


console.log(calculateAverage(array));