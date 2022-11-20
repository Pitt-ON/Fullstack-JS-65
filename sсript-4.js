// 1 Виклик і вивід функції
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// console.log(result);
// const pointer = makePizza;


// 2 Додавання callback до функціі
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));


// 3 Передача інлайн колбек-функції
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });


// 4 Рефакторинг методу
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         for (let nameElem of pizzaPalace.pizzas) {
//             if (nameElem === pizzaName) {
//                 return onSuccess(pizzaName);
//           }
//         }
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


// 5 Метод перебирання масиву forEach
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }
    
//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });

//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// 6 Фільтрація масиву чисел
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] > value) {
// //       filteredNumbers.push(numbers[i]);
// //     }
// //     }
    
//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//     }
// })

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


// 7 Спільні елементи. Порівняння двох масивів
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //     }
    
//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//     }
// })

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// 8 Рефакторінг функції до стрілочної =>
// // Change code below this line

// // function calculateTotalPrice(quantity, pricePerItem)

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);


// 9 Неявне повернення (відсутні фігурні дужки)
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// Change code above this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);


// 10 Заміна callback функції на стрілочну
//  // Change code below this line
// // function calculateTotalPrice(orderedItems)
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// 11 ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);


// // 12 СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// 13 Чиста функція (pure function)
// function changeEven(numbers, value) {
//   // Change code below this line
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //   }
//     const newNumbers = [];
//     numbers.forEach((numbers) => {
//         if (numbers % 2 === 0) {
//             newNumbers.push(numbers + value);
//         };
//           if (numbers % 2 !== 0) {
//             newNumbers.push(numbers);
//         };
//     });
//     return newNumbers;
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);


// 14 Метод map(callback) Використовується щоб змінити кожен елемент масиву.
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);


// 15 Метод map() Використовується щоб перебрати масив об'єктів,
//  і в колбек - функції повернути значення властивості кожного з них.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);


// 16 Метод flatMap(callback) застосовується у випадках, коли результат -
// це багатовимірний масив, який необхідно «розгладити».
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);


// 17 Передача масива об'єктів в параметр users під час виклику функції
// Change code below this line
// const getUserNames = users => {
//   const names = user = users.map(user => user.name);
//   return names;
//   };
  // Change code above this line


  // 18 Повернення масиву поштових адрес користувачів (властивість email)
  // з масиву об'єктів в параметрі users.
// Change code below this line
// const getUserEmails = users => {
//   const names = user = users.map(user => user.email);
// return names;
//   };
  // Change code above this line


// 19 Утворення масиву парних і непарних чисел з масиву
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);


// 20 Залишаться тільки унікальні елементи filter()
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// // Знаходимо масив всіх жанрів книг (властивість genres) з масиву books
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// // Знаходимо масив унікальних жанрів, без повторень.
// Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного
// елемента course і отримуємо його індекс в оригінальному масиві усіх курсів.
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
// console.log(uniqueGenres);


// 21 Масив об'єктів. Знайти (Використовуючи метод filter()) масив книг, рейтинг
// яких(властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);


// 22 Масив об'єктів. Знайти (Використовуючи метод filter())
// Функція повертає масив користувачів, у яких колір очей(властивість eyeColor)
//  збігається зі значенням параметра color
// Change code below this line
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);
  // Change code above this line


  // 23 Функція повертає масив користувачів, вік яких (властивість age)
  // потрапляє у проміжок від minAge до maxAge.
  // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => (user.age >= minAge) && (user.age <= maxAge));
// };
  // Change code above this line

  
// 24 Функція повертає масив користувачів, у яких є один з ім'ям в параметрі friendName.
// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(a => a.friends.includes(friendName));
// };
// Change code above this line

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];


// 25 flatMap(). Функція поверталє масив друзів всіх користувачів (властивість friends).
// Change code below this line
// const getFriends = (users) => {
//   // Створюємо змінну і розгладжуємо масив
//   const allFriends = users.flatMap(user => user.friends);
//   // Створюємо змінну, виконуемо фільтрацію
//   const uniqFriends = allFriends.filter((friend, index, self) =>
//     // перевіряємо на повторення елементів
//     self.indexOf(friend) === index);
//   return uniqFriends;
// };
// Change code above this line


// 26 Функція повертає масив активних користувачів, значення властивості
//  isActive яких - true.
// Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive);
// };
// Change code above this line


// 27 Функція повертає масив неактивних користувачів, значення властивості
//  isActive яких - false.
// Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(user => !user.isActive)
// };
// Change code above this line


// 28 Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title)
//  збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author)
//  збігається зі значенням змінної AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);


// 29 Функція повертає об'єкт користувача, пошта якого
// (властивість email) збігається зі значенням параметра email.
// Change code below this line
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };
// Change code above this line


// 30 Використання методу every(callback). Перевірка масиву на парність чи непарність.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 ===0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);


// 31 Функція перевіряє, чи всі користувачі зараз активні (властивість isActive)
//  і повертає true або false.
// Change code below this line
// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive)
// };
// Change code above this line


// 32 Використання методу some().
//  Перевірка масиву на наявність парність і непарних чисел.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);


// 33 Функція перевіряє, наявність активних користувачів (властивість isActive)
//  і повертала true або false.
// Change code below this line
// const isAnyUserActive = users => {
//    return users.some(user => user.isActive)
// };
// Change code above this line


// 34 Метод reduce(callback, initialValue).
// Підрахунку загального ігрового часу, проведеного в іграх.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// // 1. Отримаємо масив зі значеннями об'єкта
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
// // 2. Суммуємо значеня з масива
// const totalPlayTime = playtimes.reduce((previousValue, player) => {
//   return previousValue + player;
// }, 0);
// console.log(totalPlayTime);
// // Change code above this line
// // 3. Вираховуємо середнє значення
// const averagePlayTime = totalPlayTime / playtimes.length;


// 35 Розрахунок середнього часу, проведеного в одній грі для кожного гравця,
// і отримання загальної суми цих значень.
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => {
//   return totalTime + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);


// Практика з ментором 19.11.2022


// 1. Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];


// const calcTotalPrice = (stones, stonesName) => {
//   // return stones.reduce((sum, item) => {
//   //   console.log(sum)
//   //   console.log(item)
//   //   if (item.name.toLowerCase() === stonesName) {
//   //     return item.price * item.quantity

//   //   }
//   //   return sum;
//   // }, 0)
  
  
//   // const { price, quantity } = stones.filter(({ name }) => name === stonesName)[0]
//   // return price * quantity

//   const { price, quantity } = stones.find(({ name }) => name === stonesName)
//   return price * quantity;
// }
// console.log(calcTotalPrice(stones, 'Diamond'));


// 2. Перевірити, чи слово є паліндромом
  
// const palindromCheck = (word) => {
//   return word.split('').reverse().join('') === word
// }

// console.log(palindromCheck("madam"));
//   console.log(palindromCheck("banan"));
//   console.log(palindromCheck("banab"));
// console.log(palindromCheck("kantak"));


// 36 Функція рахує і повертає суму всіх коштів (властивість balance),
//  які зберігають користувачі з масиву users.
// Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };
// Change code above this line


// 37 Функція рахувала і повертала загальну кількість друзів
// (властивість friends) усіх користувачів з масиву users.
// Change code below this line
// const getTotalFriendCount = users => {
//  return users.reduce((acc, user) => [...acc, ...user.friends], []).length;
// };
// Change code above this line


// 38 Метод sort(). Зробити щоб копія масиву releaseDates, відсортована за
// зростанням, а у змінній alphabeticalAuthors - копія масиву імен
//  авторів authors, відсортована за алфавітом.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// // відсортовано за зростанням
// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// // відсортовано за алфовітом
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);


// 39 Метод sort(). Свій порядок сортування чисел.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// // Відсортовано за зростанням
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);
// // Відсортовано за спаданням
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);


// 40 Метод sort(). Свій порядок сортування рядків.
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line
// Відсортовано за алфавітом
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// Відсортовано за алфавітом у зворотньому порядку
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// 41 Метод sort(). Сортування об'єктів.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// // Відсортовано за ім'ям автора в алфавітному порядку.
// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author));
// console.log(sortedByAuthorName);

// // Відсортовано за ім'ям автора у зворотному алфавітному порядку.
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author));
// console.log(sortedByReversedAuthorName);

// // Відсортовано за зростанням рейтингу.
// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
//   firstBook.rating - secondBook.rating);
// console.log(sortedByAscendingRating);

// // Відсортовано відсортований за спаданням рейтингу.
// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
//   secondBook.rating - firstBook.rating);
// console.log(sortedByDescentingRating);


// 42 Метод sort(). Масив відсортований за зростанням балансу (властивість balance).
// Change code below this line
// const sortByAscendingBalance = users => {
//    return users.sort((a, b) => a.balance - b.balance)
// };
// Change code above this line


// 43 Метод sort(). Масив відсортований за спаданням кількості їхніх друзів
// (властивість friends).
// Change code below this line
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => b.friends.length - a.friends.length)
// };
// Change code above this line


// 44 Метод sort(). Масив користувачів, відсортований за їх ім'ям
// (властивість name) в алфавітному порядку.
// Change code below this line
// const sortByName = users => {
// return [...users].sort((a, b) => a.name.localeCompare(b.name))
// };
// Change code above this line


// 45 Ланцюжки методів. У змінній names масив імен авторів в алфавітному порядку,
//  рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort();


// 46 Ланцюжки методів. Масив імен користувачів, відсортований за зростанням
// кількості їхніх друзів (властивість friends).
// Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length)
//   .map(user => user.name)
// };
// Change code above this line


// 47 Ланцюжки методів. Функція повертає масив унікальних імен друзів
// (властивість friends), відсортований за алфавітом.
// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((a, b) => a.localeCompare(b))
// };
// Change code above this line


// 48 Ланцюжки методів. Функція повертає загальний баланс користувачів
// (властивість balance), стать яких(властивість gender) збігається зі
// значенням параметра gender.
// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((totalBal, user) => totalBal + user.balance, 0)
// };
// Change code above this line