const hello = () => console.log("Hello, Javascript !");
  

hello();

// 2

const calculateAverage = (arr) => {
  let total = 0;
  for (const item of arr) {
    total += item;
    console.log(total);
  }
  return total / arr.length;
}

const array = [1, 3, 2, 5, 4];


console.log(calculateAverage(array));

// Напиши функцію logItems(items) для перебора і логування масива
const logItems1 = (arr) => {
  for(const items of arr) {
    console.log(items);
  }
}

logItems1(["Mango", "Kiwi", "Poly", "Ajax"]);

//     Задачка
/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

const calculateTax = (amount , taxRate = 0.2) => amount * taxRate


console.log(calculateTax(100, 0.2));

// logins 
const allLogins = ["fgh", "ghk", "ffffff", "eessesese"]

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;
  
const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
const addLogin = (allLogins, login) => {
  const isValid = isLoginValid(login);
  if (!isValid) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  const isUniqe = isLoginUnique(allLogins, login);
   if (!isUniqe) {
     return "Такий логін уже використовується!";
  }
  
  allLogins.push(login);
  return "Логін успішно доданий!";
};

console.log(addLogin(allLogins, "ffffff"));
console.log(allLogins);

// 

// const filter = function (array , callback) {
//   let filteredNumbers = [];
//   for ( const number of array) {
//     const passTest = callback(number);
//     if(passTest) {
//       filteredNumbers.push(number)
//     }
//   }
//   return filteredNumbers;
// }
// const f1 = function (num) {
//   return num < 4;
// }

// const array12 = [1, 2, 4 , 3 , 5 , 6];

// console.log(filter(array12, f1));

// for hw

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const callback1 = (value) => value >= 3;

const r1 = filter(arr, (value) => value >= 3);
// console.log(r1);

// const callback2 = (value) => value <= 4;

const r2 = filter(arr, (value) => value <= 4);
// console.log(r2);

/*   1.
Напишіть функцію, яка приймає на вхід масив чисел 
і повертає новий масив, в якому кожний елемент є 
квадратом відповідного елементу вхідного масиву.
Знайдіть суму елементів масиву 
з використанням колбек-функції */




const array4 = [2 , 4 , 5 , 6 , 9 , 12 , 7 , 89 ]

const arrToSquare = function(arr, callback) {
  let newArray = [];
  for (const item of arr) {
    newArray.push(item**2)
  }
  callback(newArray)
}

const f2 = (arr) => {
  let sumArray = 0;
  for(const item of arr) {
    sumArray += item;
  }
  return console.log(sumArray);
} 
const f3 = (arr) => {
  let multiplyArray = 1;
  for(const item of arr) {
    multiplyArray *= item;
  }
  return console.log(multiplyArray);
} 


(arrToSquare(array4, f3));