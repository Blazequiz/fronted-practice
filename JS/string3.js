// const guestName  = "Mango";
// const guestNumber = 307;

// const greeting = "Welcome" + guestName + ", your room number is " +  guestNumber;

// const greetingAnother = `Welcome ${guestName}, your room number is ${guestNumber}`;

// console.log(greetingAnother);


// Оголоси змінну message і запиши в неї повідомлення про покупку.
//  "You picked <назва товару>, price per item is <ціна товару> credits"
// скрипт для їх замовлення

// const priceOfTheItem = 10;
// const nameOfTheItem = "Apples";
// const message = `You picked ${nameOfTheItem}, price per item is ${priceOfTheItem} credits`;

// console.log(message);


// товар, ціна за одну штуку, ціна доставки, виводити суму замовлення
// message - у форматі "You ordered <назва товару> worth <total price> credits"

// const priceOfTheItem = 10;
// const priceOfDilivery = 15;
// const worthPrice = priceOfDilivery + priceOfTheItem; 
// const nameOfTheItem = "Apples";
// const message = `You ordered ${nameOfTheItem} worth ${worthPrice} credits`;

// console.log(message);

//Праткитка разом 1

// const actorName = "Brad"
// const length = actorName.length;
// const message4 = `Username ${actorName} is ${length} characters long`


// console.log(actorName.indexOf(B))
// console.log(message4);
// console.log(length - 1);

// ланцюжки

// const phrase = "Live! Laugh! Love!"
// const searchPhrase = "LiVe"

// console.log(phrase.toLowerCase().includes(searchPhrase.toLocaleLowerCase()));

// trim

// const phraseWithSpaces = " JavaScpript is awesome!" 
// const trimInput = phraseWithSpaces.trim()

// console.log(trimInput);

// padEnd and padStart  

// 6 Отримати  останній символ :

const fruit = 'апельсин';
const symbolOfFruit = fruit[fruit.length - 1];
console.log(symbolOfFruit);

// 7 чи містить фраза "Jason Neis" це слово "jAsOn" має бути так
// Здійсни перевірку незалежно від регістру

const nameOfPerson = "Jason Neis";
const world = "jAsOn";

console.log(nameOfPerson.toLowerCase().includes(world.toLowerCase()))

// 8 "styles.css", перевірити чи закінчується на ".css", ".js"

const nameOfTheFile = "styles.css"
console.log(nameOfTheFile.endsWith(".css"));
console.log(nameOfTheFile.endsWith(".js"));

// Створити скрипт, який буде отримувати від користувача число
// (кількість хвилин) і буде виводити рядок в форматі часу як результат. 
// Наприклад 80 виведе 01:20 
//          450 =>     07:30

const nubmer = 123;
const hours = Math.floor(nubmer / 60)
const minutes = nubmer % 60;
const modHours = String(hours).padStart(2, 0)
const modMinutes = String(minutes).padStart(2, 0)
const phraseForTime = `${modHours}:${modMinutes}`
console.log(phraseForTime);

// const 


// скільки хв в годині? 60
// як вирахувати кількість годин з хвилин? n / 60
// який метод округлить число до меншого? flor
// який метод додасть на перед символи&  7  =>  07 padStart