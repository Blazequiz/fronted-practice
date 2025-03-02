// example 1 

const subscription = "pro";
let cost;

switch (subscription) {
  case "free":
    cost = 0;
    break;
  case "premium":
    cost = 500;
    break;
  case "pro":
    cost = 100;
    break;
    default: 
      console.log("invalid value");
}
console.log(cost);

// example 2

const emotion = "love";

switch (emotion) {
  case "anger":
  case "fear":
  case "sadness":
    console.log("This is a Negative emotion");
    break;
  case "hope":
  case "love":
  case "calmness":
    console.log("It is a Positive emotion");
    break;
  default:
    console.log("Invalid value");
}
// task 1
// if(browser == 'Edge') {
//   text = "You've got the Edge!";
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   text = 'Ми підтримуємо і ці браузери' ;
// } else {
//   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }

const browser = "Firefox";
let text;

switch (browser) {
  case "Safari":
    console.log("Safari");
    break;
  case "Opera":
    console.log("Opera");
    break;
  case "Firefox":
    console.log("Firefox");
    break;
    default:
      console.log("Invalid Value");
}
// task 2
let a1 = 1;
let output;

switch (a1) {
  case (1):
    output = 1;
    console.log(output);
    break;
  case (2):
    output = 2;
    console.log(output);
    break;
  case (0):
    output = 0;
    console.log(output);
    break;
    default:
      console.log("Invalid Value");
}

// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  'Токої кількості зірок немає'

const starsOfHotel = 5;
let cost1;

switch (starsOfHotel) {
  case (1):
    cost = "20$"
    console.log(cost);
    break;
  case (2):
    cost = "30$"
    console.log(cost);
    break;
  case (3):
    cost = "50$"
    console.log(cost);
    break;
  case (4):
    cost = "70$"
    console.log(cost);
    break;
  case (5):
    cost = "120$"
    console.log(cost);
    break;
    default:
      console.log("Invalid Value");
}

// 4
// Напиши скрипт вибору опції доставки товару.
// Опція зберігається в змінній option:
//  1 - самовивіз, 2 - кур"єр, 3 - пошта.
// В змінну message записати повідомлення в залежності від опції.

const option = 1;
let valueOption;

switch (option) {
  case (1):
    valueOption = 1;
    console.log("Ви зможете забрати товар завтра з 12:00 в нашому офісі");
    break;
  case (2):
    valueOption = 2;
    console.log("Кур єр доставить замовлення завтра з 9:00 до 18:00");
    break;
  case (3):
    valueOption = 3;
    console.log("Посилка буде відправлена сьогодні");
    break; 
    default:
      console.log("Вам передзвонит менеджер");
      
}

//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам передзвонит менеджер'.

// 6

//  Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'.
//   За допомогою конструкції switch виведи на екран
//   назву місяця в залежності від обраної мови.

const lang = "en"
let message1;

switch (lang) {
  case "ua":
    message1 = "Привіт";
    console.log(message1);
    break;
  case "fr":
    message1 = "Janvier";
    console.log(message1);
    break;
  case "en":
    message1 = "Hello";
    console.log(message1);
    break;
  case "ru":
    message1 = "Привет";
    console.log(message1);
    break;
    default:
      console.log("Invalid Value"); 
}

//   Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

// 7

const randomNumber = Math.floor(Math.random() * 5) + 1;

switch (randomNumber){
  case (1):
    console.log(1);
    break;
  case (2):
    console.log(2);
    break;
  case (3):
    console.log(3);
    break;
  case (4):
    console.log(4);
    break;
  case (5):
    console.log(5);
    break;    
    default:
      console.log("Something went wrong");
      
}
//  Виберіть будь-яке число від 1 до 5 включно через функцію random.
//   За допомогою if else визначіть, що це за число.

// 7

//  Якщо ваше ім’я містить більше 4 букв і прізвище більше 5,
//  то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “УПС”.

// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер.
// Виводимо 12. Використовувати вбудований метод length.

const userName = 'Олександр';
const userSurname = 'Коноваленко';
let fullNameLength = 0;

if (userName.length >= 4 && userSurname.length >= 5) {
  fullNameLength = userName.length + userSurname.length;
  console.log(fullNameLength);
} else {
  console.log("Upsss");
}