// Об’єкт user
const user = {
  // name: 'John',
  // age: 30,
  // email: 'john@example.com'
}

const {name = "David" ,age = 25 , email: userEmail = "john@example.com"} = user;
// console.log(name, age, userEmail);

// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

const {title, director: {name: directorName, nationality: directorNationality}, release_year, actors:[actor1, actor2],ratings: {imdb: ratingsImdb, rotten_tomatoes: ratingsRt}} = movie
// console.log(title, directorName,directorNationality, release_year, ratingsImdb, ratingsRt);
console.log(actor1, actor2);

// Об’єкт books

const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}

const{count, list: [greatBook, killBook, theBook1984]} = books;
console.log(count, greatBook, killBook, theBook1984);

// console.log(books);

// Дано масив об’єктів
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

const findFriendByName = (friends, friendToFind) => {
 for (const { name } of friends) {
  if(name === friendToFind) {
    return `Friend is found`
  } 
 }
 return `Friend is not found`
}

const getAllNames = (friends) => {
  const friendArr = [];
  for (const { name } of friends) {
    friendArr.push(name)
  }
  return friendArr
}

const getOnlineFriends = (friends) => {
  const friendsOnline = [];
  for (const friend of friends) {
    if(friend.online) {
      friendsOnline.push(friend.name)
    } 
  }
  return friendsOnline
}

const getOfflineFriends = (friends) => {
  const friendsOnline = [];
  for (const {online , name} of friends) {
    if(!online) {
      friendsOnline.push(name)
    } 
  }
  return friendsOnline
}
// Написати функція яка буде отримувати масив
// та ім’я друга якого потрібно знайти
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

// Написати функцію яка буде повертати масив всіх імен друзів
console.log(getAllNames(friends));

// Написати функ,яка буде повертати масив імен друзів які онлайн
console.log(getOnlineFriends(friends));

// Написати функцію яка буде повертати масив імен друзів які офлайн
console.log(getOfflineFriends(friends));

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
  remove(productName) {
    for(let i = 0; i < this.items.length; i+=1) {
      if(this.items[i].name === productName) {
        this.items.splice(i , 1)
      }
    }
    return `this product was deleted`
  },
  clear() {
    this.items = [];
    return `card was clered`
  },
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

console.log(cart.remove('🍋'));
console.table(cart.getItems());


