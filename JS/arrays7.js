// console.log(arr)
// console.log(arr[2]);
// arr[0] = "Kiwi"
// console.log(arr);
// arr[3] = "Bom"
// console.log(arr);

// const lastIndex = arr.length[length - 1];
// console.log(lastIndex);


// 1
// Cтворити масив Arr1 за значеннями: 1, 5, "4", "hello" ;
//  і Arr2 зі значеннями: true,2, {}, ["a"], 222 . 
//  Вивести в консоль 2-гий елемент (по індексу) кожного з масивів 
//  довжину масиву.

// const arr1 = [ true,2, {}, ["a"], 222 ] 
// const arr2 = [1, 5, "4", "hello" ]
// console.log(arr2[1], arr1[1], arr2.length, arr1.length);

//  2
// Створіть масив рядків. 
const fruits = ["apple", "plum", "pear", "orange"];
// Виведіть в консоль значення першого, 
// другого та останнього елементу. 
// Змініть значення останнього елементу на "peach"
// а другого на "banana".

// let lastIndex2 = fruits.length - 1;
// console.log(fruits[0], fruits[1], lastIndex2);
// fruits[lastIndex2] = "peach";
// fruits[1] = "banana";
// console.log(fruits);  

// for

// const arr = ["Mango", "Poly", "Ajax"]

// for (let i = arr.length - 1; i >= 0; i -=1) {
//   console.log(`i: ${i}`);
//   console.log(`The name: ${arr[i]}`);
//   if (i === "Mango") {
//     break;
//   }
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i+=1) {
//   console.log("The name: ", arr[1]);
// }

// loops array`s iteration (for of)

// const fruits2 = ["apple", "plum", "pear", "orange"];

// for (const fruits of fruits2) {
//   console.log(fruits);
// }


// const array4 = [];

// for (let i = 0; i < 10; i+=1) {
//   array4[i] = i;
// }

// console.log(array4);
const array3 = [10, 25, 13, 44, 15];
// Вивести в консоль всі елементи масиву за допомогою 
// циклів for та for…of.

for (let i = 0; i < array3.length; i+=1){
  console.log(`Element: ${array3[i]}`);
}


for (const elemet of array3){
  console.log(elemet);
}
// 2
// Порахувати загальну суму покупок в корзині за допомогою 
// циклів for та for…of.

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i+=1) {
//   console.log(cart[i]); 
//   cart[i] -= cart[i] * 0.1
//   total += cart[i];
// }
// console.log(total);


// for (const amount of cart) {
//   total += amount;
// }
// console.log(total);

// 3
// Написати скрипт який порахує сумму всіх парних чисел в масиві
const numberArr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let totalNum = 0;


// for (let i = 0; i < numberArr.length; i+=1) {
//   if (numberArr[i] % 2 !== 0) {
//     continue
//   }
//   console.log(numberArr[i]);
//   totalNum += numberArr[i]
// }
// console.log(totalNum);


for (const amount of numberArr) {
  if (amount % 2 === 1) {
    continue
  }
  console.log(amount);
  totalNum += amount;
}
console.log(totalNum);
