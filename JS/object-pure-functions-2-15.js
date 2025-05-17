// method reduce
const students = [
  {name: "Mango", score: 83},
  {name: "Poly", score: 56},
  {name: "Ajax", score: 32},
  {name: "Kiwi", score: 45},
  {name: "Houston", score: 89}
]

const totalScore = students.reduce((acc, student) => {
  console.log(acc, student.score);
  return acc + student.score;
}, 0)

// method sort

const numbers = [2 , 3 , 1 , 4 , 5 ]
console.log('Before sort:', numbers)
console.log('After sort:', numbers.sort());
// console.log('Before sort:', numbers);


const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.sort((a, b) => a - b);
console.log(ascendingScores);
const scores1 = [61, 19, 74, 35, 92, 56];
const descendingScores = scores1.sort((a, b) => b - a);
console.log(descendingScores);

// method localCompare

const students1 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students1.sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); 

const inReversedOrder = students1.sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);


// exersises 
//map()
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
//filter()
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
//Find()
// Знайти гравця по id
// Знайти гравця по імені
//every()
// Перевірити чи всі гравці
//every()
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// method find
const playerBeiId = players.find((player) => {
  if(player.id === "player-3") {
    return player
  }
})
// console.log(playerBeiId);

// method redudce 

const totalTime = players.reduce((acc, player) => (player.timePlayed + acc) , 0) 
console.log(totalScore);


const sortByPoints = players.toSorted((previousPlayer, nextPlayer) => previousPlayer.points - nextPlayer.points).map((player) => player.name)
console.log(sortByPoints);


const sortByName = [...players].sort((previousPlayer, nextPlayer)  => previousPlayer.name.localeCompare(nextPlayer.name)).map((player) => player.name)
console.log(sortByName);