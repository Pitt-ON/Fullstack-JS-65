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


// 25 Функція поверталє масив друзів всіх користувачів (властивість friends).
// Change code below this line
const getFriends = (users) => {
   
};
// Change code above this line