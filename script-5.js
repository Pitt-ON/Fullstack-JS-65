// 1 Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this
// в місцях звернення до властивостей і методів об'єкта.
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


// 2 Виконай рефакторинг методів об'єкта customer, розставивши відсутні this
// під час звернення до властивостей об'єкта.
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// 3 Розставити this в методах об'єкта historyService
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };


// 4 Об'єкт parent має стти прототипом для об'єкта у змінній сhild.
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;


// 5 Щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою,
// був прототипом для child.
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// // Change code above this line


// 6 Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.
// class Car {

// }
// new Car()


// 7 Клас Car повинен створювати об'єкт з однойменними властивостями brand, model
// і price, значеннями яких повинні бути передані аргументи під час його виклику
// з оператором new.
// class Car {
//   // Change code below this line
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
// }
//   // Change code above this line
// }
// const audi = new Car("Audi", "Q3", 36000);
// console.log(audi);
// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);
// const nissan = new Car("Nissan","Murano", 31700);
// console.log(nissan);


// 8 Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
// class Car {
//   // Change code below this line
//     constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// const audi = new Car({brand: "Audi", model: "Q3", price: 36000});
// console.log(audi);
// const bmw = new Car({brand: "BMW", model: "X5", price: 58900});
// console.log(bmw);
// const nissan = new Car({brand: "Nissan", model: "Murano", price: 31700});
// console.log(nissan);


// 9 Додати класу Car два методи.
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
// 1. Метод повертає значення властивості price з об'єкта, який буде його викликати
//     getPrice() {
//         return this.price;
// },
// 2. Метод оновлює значення властивості price в об'єкта, який буде його викликати
// на newPrice
//     changePrice(newPrice) {
//         this.price = newPrice;
// }
//   // Change code above this line
// }


// 10 Напиши клас Storage, який буде створювати об'єкти для управління складом
// товарів.
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     // 1. Повертає масив поточних товарів у властивості items об'єкта, який викликає
//     // цей метод
//     getItems() {
//         return this.items;
//     }
//     // 2. Приймає новий товар newItem і додає його в масив товарів у властивості items
//     // об'єкта, який викликає цей метод.
//     addItem(newItem) {
//         return this.items.push(newItem);
//     }
//     // 3. приймає товар itemToRemove і видаляє його з масиву товарів у властивості
//     // items об'єкта, який викликає цей метод.
//     removeItem(itemToRemove) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             const item = this.items[i];
//             if (itemToRemove === item) {
//                 this.items.splice(i, 1);
//                 return this.items;
//             }
//         }
//     }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// 11 Напиши клас StringBuilder, який приймає один параметр initialValue - довільний
// рядок, який записується у властивість value об'єкта, що створюється.
// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }

//     getValue() {
//        return this.value;
//     }

//     padEnd(str) {
//        this.value = this.value + str;
//     }

//     padStart(str) {
//        this.value = str + this.value;
//     }

//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// 12 Виконай рефакторинг класу Car таким чином, щоб властивість brand була
// приватною, і додай два методи для публічного інтерфейсу, для читання і зміни
// цієї властивості.
// class Car {
//   // Change code below this line
//     #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//     }
    
//     getBrand() {
//        return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

//   // Change code above this line
// }
// const audi = new Car({brand: "Audi", model: "Q3", price: 36000});
// console.log(audi);
// const bmw = new Car({brand: "BMW", model: "X5", price: 58900});
// console.log(bmw);
// const nissan = new Car({brand: "Nissan", model: "Murano", price: 31700});
// console.log(nissan);


// 13 Виконай рефакторинг класу Storage, зробивши властивість items приватною.
// class Storage {
//   // Change code below this line
//     #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// 14 Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.
// class StringBuilder {
//   // Change code below this line
//     #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// 15 Виконай рефакторинг класу Car.Зроби властивості model і price приватними,
// а також #brand.Стандартизуй публічний інтерфейс класу, замінивши вже оголошені
// методи на гетери та сетери brand, model і price, для взаємодії з приватними
// властивостями.
// class Car {
//   // Change code below this line
//     #brand;
//     #model;
//     #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }


// 16 Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE
//  зі значенням 50000 - максимально допустима ціна автомобіля.
// Додай сетеру price перевірку значення параметра newPrice, що передається.
// Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або
// дорівнює, то перезаписує ціну автомобіля.
// class Car {
//   // Change code below this line
//   #price;
//     static MAX_PRICE = 50000;
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// 17 Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну
// автомобіля. Метод повинен порівняти значення параметра price і приватної
// статичного властивості MAX_PRICE.
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum"
//     }
//     return "Success! Price is within acceptable limits"
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// 18 У застосунку потрібен адміністратор з можливістю додавати пошти користувачів
//  у чорний список.
// 1. Оголоси клас Admin, який наслідує від класу User
// 2. Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу),
// значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }


// 19 Додай класу Admin метод constructor, який приймає один параметр - об'єкт
// налаштувань з двома властивостями email і accessLevel.Додай класу Admin публічну
// властивість accessLevel, значення якої буде передаватися під час виклику
// конструктора.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
// }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// 20 Додай класу Admin наступні властивості і методи.

// 1. Публічну властивість blacklistedEmails для зберігання чорного списку поштових
// адрес користувачів.Значення за замовчуванням — це порожній масив.
// 2. Публічний метод blacklist(email) для додавання пошти у чорний список. Метод
// повинен додавати значення параметра email в масив, що зберігається у властивості
// blacklistedEmails.
// 3. Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. 
// Метод повинен перевіряти наявність значення параметра email в масиві, що 
// зберігається у властивості blacklistedEmails, і повертати true або false.
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true