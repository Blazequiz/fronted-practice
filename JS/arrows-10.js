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