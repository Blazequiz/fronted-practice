const artist = {
  name: "Vlad",
  age: 20,
  learn() {
    console.log("I am learning");
  }
}

class Artist {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  learn() {
    console.log("I am learning");
  }  
}

const artist2 = new Artist("Гліб" , 14)
const artist3 = new Artist("Олександр" , 17)
const artist4 = new Artist("Кіра" , 13)
const artist5 = new Artist("Катеринв" , 25)
const artist6 = new Artist("Серігй" , 15)

// console.log(artist2,artist3);
// console.log(artist6.name);
// console.log(artist6.age);
// artist6.learn()

const arr = [1 , 2]
// console.log(arr);

const grandFather = {
  sername: "Шевченко",
  name: "Тарас"
}

const father = Object.create(grandFather)
father.name = "Григорій"

console.log(grandFather.sername);
console.log(father.name);

const son = Object.create(father)
son.age = 18

console.log(son);


// class 1

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  get firstName() {
    return this._firstName
  }
  set firstName(newName) {
    this._firstName = newName;
  }
}


const person1 = new Person("John", "Doe") // {firstName:"John", lastName:"Doe"}
console.log(person1);
console.log(person1.getFullName());
person1.firstName = "asdasda"
console.log(person1);


// 2
// Створіть клас Rectangle, що містить властивості
// width та height.
// Додайте метод getArea(), який повертає площу прямокутника.

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

class Rectangle {
  constructor(width, heigth){
    this.width = width
    this.heigth = heigth
  }
  getArea() {
    return this.width * this.heigth
  }
}


const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); // 50

// 3
// Створіть клас Calculator, який буде мати наступні методи:
// add(), subtract(), multiply(), divide().
// Кожен метод приймає два аргументи - числа, які необхідно обробити
// Результатом кожного методу має бути результат
// відповідної математичної операції.
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна

class Calculator {
  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  subtract(firstNum, secondNum){
    return firstNum - secondNum
  }
  multiply(firstNum, secondNum){
    return firstNum * secondNum
  }
  devide(firstNum, secondNum){
    if(secondNum === 0) {
      return `You can't go to zero`
    }
    return firstNum / secondNum
  }
}

const Numbers = new Calculator;
console.log(Numbers.add(25,2));
console.log(Numbers.subtract(25,2));
console.log(Numbers.multiply(25,2));
console.log(Numbers.devide(25,2));
console.log(Numbers.devide(25,0));

// 


class Animal {
  constructor(name){
    this.name = name
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
}

const dog1 = new Dog("Baddy", "White Terrer")
console.log(dog1);