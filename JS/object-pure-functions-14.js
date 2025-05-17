const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців
const playersName = players.map((player) => console.log(player.name))
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const playersPoints = players.map((player) => {
  return console.log({...player, points: player.points + player.points * 0.1}
    
  );
});
// Збільшити кількість годин гравця по id. Переписати на тернарник

const updatePlayer = players.map((player) => {
  if(player.id === 'player-3') {
    return {...player, timePlayed: player.timePlayed + 100};
  }
  return player;
})

console.log(updatePlayer);
console.log(players);
//filter()
// Отримати масив всіх гравців онлайн
const allOnlinePlayers = players.filter((player) => player.online) 
// console.log(allOnlinePlayers);
// Отримати масив всіх гравців офлайн
const allOfflinePlayers = players.filter((player) => !player.online) 
// console.log(allOfflinePlayers);
// Отримати масив всіх хардкорних гравців з часом більше 250
const bestPlayers = players.filter((player) => player.timePlayed > 250) 
console.log(bestPlayers);
//Find()
// Знайти гравця по id
const findId = players.find((player) => player.id === "player-3")
console.log(findId);
// Знайти гравця по імені
//every()
// Перевірити чи всі гравці мають час більше 200
const moreHours = players.every((player) => player.timePlayed > 200)
// Перевірити чи всі гравці онлайн