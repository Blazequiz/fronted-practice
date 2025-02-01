let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a, b , c , d);


// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// 2

// Доповни код, присвоївши змінній totalPrice вираз для підрахунку 
// загальної суми замовлення.
//  Змінна pricePerItem зберігає ціну за одиницю товару,
//  а orderedQuantity - кількість одиниць товару в замовленні.

const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);


// 3

// 3
// Оголоси змінну isAdult та задай їй результат 
// перевірки значення змінної age.
//  Використай оператори порівняння та доповни код так, щоб 
//  значенням isAdult було true, якщо вік користувача більше або дорівнює 18 
//  та false, якщо менше 18.

const age = 18;
const isAdult = age >= 18;
console.log(isAdult)

// 4
// Оголоси змінну isValid і задай їй значенням результат перевірки
//  рівності паролей в змінних correctPassword і userPassword.

// Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";

const isValid = correctPassword === userPassword;
console.log(isValid);
