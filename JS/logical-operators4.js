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

const myFavoriteGameName = prompt("what is your favorite game");
const myFavoriteGameTextToLowwerCase = myFavoriteGameName.toLowerCase();
const isLetterOfRow = myFavoriteGameName[myFavoriteGameName.length - 1];
const lastChar = `${isLetterOfRow.toUpperCase()}!`

console.log(lastChar);

