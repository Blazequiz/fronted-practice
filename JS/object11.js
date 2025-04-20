// const hotel =  {
//   name: "FiveStarsHotel",
//   stars: 5,
//   capacity: 100
// };

// console.log(hotel);

// hotel.guests = ["Mango", "Poly", "Ajax"];
// hotel.adress = "Solothurn Nikolaskonradstrasse 4";
// hotel["manager"] = "Chuck Norris";

// console.log(hotel);


const name = "Oleksandr"
const age = 17
const occupation = "student"
const color = "color";

const MyObject = {
  name,
  age,
  occupation,
  city: "Solothurn",
  [color]: "white",
  friends: ["Vladini Malenkiy Pisini", "Glebidinin Blebidini"],
  increaseAge(age) {
    this.age = age
    console.log(`the incresead age: ${age}`);
  }
}

// console.log(MyObject);
MyObject.increaseAge(18);

// 1. 
//  Оголоси змінну apartment і задай ій об'єкт, 
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію,
//  значення ["premium", "promoted", "top"].

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  },
  location: {
    country:"Jamaica",
    city: "Kingston"
  },
  changePrice(newPrice) {
    this.price = newPrice
    console.log(`the updated price ${this.price}`);
  },
  isRatingGood(){
    if(this.rating > 8) {
      return true
    } else {
      return false
    }
  },
  addNewTag(tag) {
    this.tags.push(tag);
  }
}

apartment.changePrice(4999)
console.log(apartment.price);
console.log(apartment.isRatingGood());
apartment.addNewTag("recomended");
console.log(apartment.tags);
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// 2. 
// Доповни об'єкт квартири властивістю owner, 
// значенням якого буде об'єкт з інформацією про власника.
// Додай об'єкту owner наступні властивості:

// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"



// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.owner.email);
// console.log(apartment.descr);
// console.log(apartment.tags.length);
// console.log(apartment["tags"][0]);
// console.log(apartment["tags"][apartment["tags"].length - 1]);


// 3
// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
apartment.area = 60;
apartment.rooms = 3;

// console.log(apartment);

// 4
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// Зверніть увагу: якщо ви спробуєте додати властивості country
//  і city до ще не створеної властивості location,
//  ви отримаєте помилку. 
// Спочатку ініціалізуйте location як порожній об'єкт, 
// а потім додавайте до нього властивості.


const hotel1 = {
  name: "FiveStarsHotelsss",
  stars: 5,
  capacity: 50,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  }
}

hotel1.greet = function() {
  console.log("hello");
}

// hotel1.greet();
// hotel1.showName();
// hotel1.changeCapacity(200);

// console.log(hotel1.capacity);


// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
const cart = {
  items: [],
  getItems() {
    return this.items
  },
  add(product) {
    this.items.push(product)
    return "the product was added"
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.log(cart.getItems());
// console.table(cart.getItems());

console.log(cart.add({ name: '🍎', price: 50 }));
console.log(cart.add({ name: '🍇', price: 70 }));
console.log(cart.add({ name: '🍋', price: 60 }));
console.log(cart.add({ name: '🍓', price: 110 }));

console.log(cart.getItems());
// console.log(cart.add({ name: '🍓', price: 110 }));
console.table(cart.getItems());

// console.log(cart.remove('🍋'));
// console.table(cart.getItems());