// while
// do while
// let password = "";
// do {

// password = prompt("Enter the password long then 4 symbols: ")

// } while (password.length < 5)

// console.log("Password: " , password);
// for

// chat gpt tasks
// Запроси у пользователя число N и выведи числа от 1 до N с помощью while.
// let number = Number(prompt("Enter a number: "))
// let i = 0;

// while (i < number) {
//   i++;
//   console.log(i);
// }
// Программа спрашивает у пользователя слово и выводит его 5 раз.

// let word = prompt("Введите слово:");
// let i = 0;

// do {
//   console.log(word);
//   i++;
// } while (i < 5)

// Выводит четные числа от 1 до 10.
// let i = 2;

// for (i = 2; i <= 10; i+=2) {
//   console.log(i);
// }
// Выводит таблицу умножения на 2.
// let number = Number(prompt("Enter a number from 1 to 10: "));
// let i = 1;

// for (i; i <= 10; i++) {
//   console.log(`${number} * ${i} = ${i * number}`);
// }
// const value = 10;

// for (let i = 0; i <= 10; i+=1) {
//   if (i % 2 === 0 ){
//     continue;
//   }
//   console.log("nUMBER: ", i);
// }
// 2
// Переписати на while
// let number = 0;

// while (number < 5) {
//   number +=1;
//   console.log(`Number: ${number}`);
// }

// for (let number = 0; number < 5; number += 1) {
//     console.log(`Число ${number}`);
// }

// 3
//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end, 
// яке ділиться на 5 без остачі

// const start = 6;
// const end = 17;
// let w;

// for (let index = start; index <= end; index += 1) {
//   if (index % 5 === 0) {
//     w = index
//     break
//   } 
// }

// console.log("Here is ur number: ", w); 

// 4
// Виведіть в консоль всі непарні числа від 10 до 20 
// за допомогою циклу for

// const value = 10;
// let nums;

// for (let i = 10; i <= 20; i +=1 ) {
//   if (i % 2 !==0 ) {
//     nums = i;
//     console.log("Wow: ", nums);
//   }
// }

// Напиши цикл, який пропонує в prompt ввести число, більше 100.
// Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.
// let userNumber;
// do {

//  userNumber = prompt("Enter a number more then 100");

// } while (userNumber < 100)

// console.log(userNumber);

// Напиши скрипт який підраховує загальну суму зп працівників. 
// Кількість робітників зберігається в змінній employees.
// ЗП кожного працівника це випадкове число від 500 до 5000. 
// Записати суму в змінну totalSalary і вивести в на сторінку.

// // 1 змінні
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;



// for (let i = 1; i <= 12; i++) {
//   const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;
//   totalSalary += randomSalary;
//   console.log(`employee ${i}: ${totalSalary}`);
// }

// console.log(`The sum of salarys: ${totalSalary}`);
const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;
for (let i = 0; i < employees; i += 1) {
  const salary = Math.random() * (maxSalary - minSalary) + minSalary;
  console.log(`Зарплата працівника номер ${i + 1}`, Math.floor(salary));
  totalSalary += Math.floor(salary);
}
console.log(totalSalary);

