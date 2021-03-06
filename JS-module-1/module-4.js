// ! Об'єкти

// Об'єкти дозволяють описати і згрупувати характеристики певної сутності - користувача, книги, продукту в магазині, чого завгодно.
// Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

// Створення об'єкта

// Для оголошення використовуються фігурні дужки {} - літерал об'єкта.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// Під час створення об'єкта можна додати властивості, кожна з яких описується парами ключ:значення. Ключ ще називають ім'ям властивості і це завжди рядок.
// Значенням властивості можуть бути будь - які типи: примітиви, масиви, об'єкти, булі, функції тощо. Властивості розділяються комою.

// Правила іменування ключів - прості:

// Якщо ключ взятий в лапки, то це може бути довільний рядок.
// Якщо лапок немає, то є обмеження - ім'я без пробілів, починається літерою або символами _ і $.

// ____________________________

// ! Вкладені властивості

// Значенням властивості може бути інший об'єкт, для того, щоб зберігати вкладені і згруповані дані.
// Наприклад, статистика користувача соціальної мережі складається з кількості відстежувачів, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта.
// Те саме з місцем розташування - окремо країна і місто.

// const user = {
//     name: "Tolik Vasilyuk",
//     tag: "Pokito",
//     location: {
//         country: "Ukraine",
//         city: "Kalush",
//     },
//     stats: {
//         likes: 2001,
//         followers: 4080,
//         views: 14807,
//     },
// }

// У майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною кількістю відстежувачів тощо.

// ____________________________

// ! Звернення до властивостей через крапку

// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ім'я_властивості.
// Синтаксис «через крапку» використовується у більшості випадків і доречний тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// На місці звернення буде повернуто значення властивості з таким ім'ям.
// Якщо об'єкт не містить властивості з таким ім'ям, на місці звернення повернеться undefined.

// const book = {
//     title: "The last kingdom",
//     author: "Bernard Cornwell",
//     genres: ['Historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.3,
// }

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres;
// console.log(bookGenres);

// ____________________________

// ! Звернення до вкладених властивостей

// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
// Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country,
// де user.location - це звернення(шлях) до об'єкта у властивості location, а user.locaton.country звернення до властивості country у цьому об'єкті.
// Тобто «крапка» вказує наступну вкладеність.

// const user = {
//     name: 'Sub-Zero',
//     tag: 'Subz',
//     location: {
//         planet: "Earth",
//         country: "Ukraine",
//     },
//     enemies: ["Scorpion", "Raiden"],
// };


// const planet = user.location.planet;
// console.log(planet);

// Якщо значення властивості - це масив, тоді у нашому прикладі user.hobbies - звернення до цього масиву.
// Далі можна отримати доступ до його елементів через квадратні дужки та індекс, або використовувати властивості і методи.

// const enemie = user.enemies[1];
// console.log(enemie);

// ____________________________

// ! Звернення до властивостей через квадратні дужки

// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ім'я властивості"].
// Схоже на звернення до елемента масиву з різницею у тому, що в дужках вказується не індекс елемента, а ім'я властивості у вигляді рядка.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookGenres = book['genres'];
// console.log(bookGenres);

// ____________________________

// ! Зміна значення властивості

// Після створення об'єкта, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;

// console.log(book.rating);

// book.isPublic = false;

// console.log(book.isPublic);

// book.genres.push("fantastic");

// console.log(book.genres);

// ____________________________

// ! Додавання властивостей

// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
// Якщо під час запису значення за ім'ям, така властивість в об'єкті відсутня, вона буде створена.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 938;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount);
// console.log(book.originalLanguage);
// console.log(book.translations);

// ____________________________

// ! Короткі властивості

// Іноді, під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, що і у властивості.

// Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається потрібне значення.

// const name = 'Sub Zero';

// const age = '45';

// const person = {
//     name: name,
//     age: age,
// }

// console.log(person.name);
// console.log(person.age);

// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної у якості імені властивості, а її значення - у якості значення властивості.

// const name = 'Sub Zero';

// const age = '45';

// const person = {
//     name,
//     age,
// }

// console.log(person.name);
// console.log(person.age);

// Тобто, оголошуючи об'єкт, достатньо вказати тільки ім'я властивості, а значення буде взяте зі змінної з аналогічним ім'ям.

// ____________________________

// ! Обчислювальні властивості

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо,
// тому що воно зберігається у якості значення змінної або у якості результату виконання функції.

// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); //.. 'Генрі Сибола'

// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його.
// Значенням обчислювальної властивості може бути будь - який валідний вираз.

// const propName = "name";
// const user = {
//     age: 45,
//     [propName]: "Sub Zero",
// }

// console.log(user.name);

// ____________________________

// ! Методи об'єкта

// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо.
// Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.

// Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи.
// Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності

// const bookShelf = {
//     book: ["The last Kingdom", "1984"],
//     getBooks() {
//         console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//     addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//     },
// }

// bookShelf.getBooks();
// bookShelf.addBook("Stepan Bandera");
// console.log(bookShelf.book);

// Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними.
// Наприклад, можна було оголосити змінну books і дві функції getBooks() і addBook(bookName),
// але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// ❌ Слабкопозв'язані, незалежні сутності
// const books = [];
// function getBooks() {}
// function addBook() {}

// ____________________________

// ! Доступ до властивостей об'єкта в методах

// Методи використовуються для роботи з властивостями об'єкта, їх зміни.
// Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст.
// Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         console.log(this);
//     },
// };

// bookShelf.getBooks();

// Для того, щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей.

// const bookShelf = {
//     books: ['1984'],
//     getBooks() {
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     },
// }

// console.log(bookShelf.getBooks());

// bookShelf.addBook('Harry Potter');
// bookShelf.addBook('Animal Farm');

// console.log(bookShelf.getBooks());

// bookShelf.removeBook("1984");

// console.log(bookShelf.getBooks());

// Логічно замислитися - чому б не використовувати ім'я об'єкта у зверненні до властивостей, адже ми явно не збираємося його змінювати.
// Справа в тому, що ім'я об'єкта - річ ненадійна, методи одного об'єкта можна копіювати в інший (з іншим ім'ям),
// а в майбутньому дізнаємось, що часто під час створення об'єкта, ми наперед зовсім не знаємо імені.
// Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

// ____________________________________________________________

// ! Перебирання об'єкта

// На відміну від масиву або рядка, об'єкт - це неітерабельна сутність, тобто його не можна перебрати циклами for або for...of.

// Цикл for...in

// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
// інструкції
// }

// Змінна key доступна тільки в тілі циклу.На кожній ітерації в неї буде записано значення ключа(ім'я) властивості.
// Для того, щоб отримати значення властивості з таким ключем(ім'ям), використовується синтаксис квадратних дужок.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["Historical Prose", "adventure"],
//   rating: 8.38,
// }

// for (const key in book) {
//   console.log(key);

//   console.log(book[key]);
// }

// ____________________________

// ! Метод hasOwnProperty()

// Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

// const animal = {
//   legs: 4 ,
// }

// const dog = Object.create(animal);

// dog.name = "Miron";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
// Тому можна отримати значення властивості legs, звернувшись до нього як dog.legs,
// хоча він відсутній в об'єкті dog - це невласна властивість з об'єкта animal.

// Оператор in, який використовується в циклі for...in, не робить різниці між власними та невласними властивостями об'єкта.
// Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості.
// Для того, щоб дізнатись, чи містить об'єкт власну властивість, використовується метод hasOwnProperty(key), який повертає true або false.

// ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true


// ✅ Повертає true тільки для власних властивостей
//*  console.log(dog.hasOwnProperty("name"));
//*  console.log(dog.hasOwnProperty("legs"));

// Тому, перебираючи циклом for...in, необхідно на кожній ітерації додати перевірку власної властивості.
// Навіть, якщо зараз ми впевнені у тому, що в об'єкті відсутні невласні властивості, це захистить від можливих помилок у майбутньому.

//* const person = {
//*   name: "Sub Zero",
//*   age: 45,
//*   location: "Ukraine",
//*   Enemies: ["Scorpion", "Raiden"],
//* }

//* const hero = Object.create(person);
//* hero.inventory = "book";
//* console.log(hero.inventory);

//* for (const key in person) {
//   // Якщо це власна властивість - виконуємо тіло if
//*   if (person.hasOwnProperty(key)) {
//*     console.log(key);
//*     console.log(person[key]);
//*   }

//   // Якщо це невласна властивість - нічого не робимо

// }

// ____________________________

//! Метод Object.keys()

// Вбудований клас Object має декілька корисних методів для роботи з об'єктами.
// Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей.
// Якщо об'єкт не має властивостей, метод поверне порожній масив.

//* const book = {
//*   title: "The Last Kingdom",
//*   author: "Bernard Cornwell",
//*   genres: ["historical prose", "adventure"],
//*   rating: 8.3,
//* };

//* const keys = Object.keys(book);

//* for (const key of keys) {
//*   console.log(key);
//*   console.log(book[key]);
//* }

// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

// ____________________________

//! Метод Object.values()

// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта,
// то метод Object.values(obj) повертає масив значень його власних властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

//* const book = {
//*   title: "The Last Kingdom",
//*   author: "Bernard Cornwell",
//*   genres: ["historical prose", "adventure"],
//*   rating: 8.3,
//* };
//* const keys = Object.keys(book);
//* console.log(keys);

//* const values = Object.values(book);
//* console.log(values);

// Масив значень властивостей також можна перебрати циклом for...of, наприклад, для отримання загальної суми числових значень.

// Припустимо, що нам потрібно порахувати загальну кількість продуктів в об'єкті формату ім'я - продукту: кількість.
// У такому випадку, буде доречним метод Object.values() для того, щоб отримати масив усіх значень, а потім зручно додати їх.

//* const fruits = {
//*   apple: 3,
//*   cherry: 5,
//*   kiwi: 8,
//*   grape: 4,
//* };

//* const values = Object.values(fruits);

//* let total = 0;

//* for (const value of values) {
//*   total += value
//* };

//* console.log(total);

// ____________________________

//! Метод Object.entries()

// Метод Object.entries(obj) повертає масив записів, кожен елемент якого,
// буде ще один масив з 2 - х елементів: імені властивості і значення цієї властивості з об'єкта obj.

//* const book = {
//*   title: "The Last Kingdom",
//*   author: "Bernard Cornwell",
//*   rating: 8.38,
//* };

//* const keys = Object.keys(book);
//* console.log(keys);

//* const values = Object.values(book);
//* console.log(values);

//* const entries = Object.entries(book);
//* console.log(entries);

// На практиці метод Object.entries(obj) використовується рідко, тільки для якихось дуже специфічних завдань.
// У 99 % випадків буде використаний метод Object.keys() або Object.values().

// ____________________________________________________________

//! Масив об'єктів

// Стандартний набір повсякденних завдань розробника містить маніпуляцію масивом однотипних об'єктів.
// Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

//* const persons = [
//*   {
//*   name: "Sub Zero",
//*   age: 45,
//*   location: "Ukraine",
//*   },
//*   {
//*   name: "Scorpion",
//*   age: 35,
//*   location: "Poland",
//*   },
//*   {
//*   name: "Noob Saibot",
//*   age: 53,
//*   location: "USA",
//*   },
//* ]

// Для перебирання такого масиву використовується стандартний цикл for...of.
// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку»,
// оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові,відрізняються тільки значення.

//* for (const person of persons) {
//*   console.log(person);

//*   console.log(person.name);

//*   console.log(person.location);

//* };

//* const favoritePerson = [];

//* for (const person of persons) {
//*   favoritePerson.push(person.name)
//* }

//* console.log(favoritePerson);

// Дізнаємося середній вік усії персонажів.Для цього, додамо усі роки, після чого поділимо це значення на кількість персон в колекції.

//* let totalAge = 0;

//* for (const person of persons) {
//*   totalAge += person.age;
//* };

//* const averageAge = (totalAge / persons.length).toFixed(0);
//* console.log(averageAge);

// ____________________________________________________________

//! Синтаксис spread і rest

// В сучасному стандарті з'явився новий синтаксис для роботи з ітерабельними сутностями, як-от рядок, масив або об'єкт.
// Його функціонал і назва залежить від місця застосування.

// spread: передача аргументів

// Операція ... (spread) дозволяє розподілити колекцію елементів(масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень.
// Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

// Можна навести аналогію з ящиком яблук.Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень.
// Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

// Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента.
// Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

// Наприклад, метод Math.max(аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.

//* const temps = [8, 9, 4, 3];

// В консолі буде масив

//* console.log(...temps);

//* console.log(Math.max(...temps));

// Тобто запис Math.max(...[14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max(14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив,
// тобто розподіляє його елементи у якості окремих аргументів.

// ____________________________

//! spread: створення нового масиву

// Операція ... (spread) дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
// Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

//* const temps = [14, -4, 25, 8, 11];

//  Це точна, але незалежна копія масиву temps
//* const copyOfTemps = [...temps];
//* console.log(copyOfTemps);

// В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію.
// Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його в іншу колекцію.
// За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.
// Оригінальні ящики(масиви) не зміняться, а в новому будуть копії усіх їх яблук(елементів).
// Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.

//* const oldTicketNumber = [3, 8, 5];
//* const newTicketNumber = [10, 7, 4];

//* const allTicketNumber = [...oldTicketNumber, ...newTicketNumber];

//* console.log(allTicketNumber);

// ____________________________

//! spread: створення нового об'єкта

// Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.

//* const first = { propA: 5, propB: 10 };
//* const second = { propC: 15 };
//* const third = { ...first, ...second };
//* console.log(third);

// Порядок розподілу має значення.
// Імена властивостей об'єкта - унікальні, тому властивості об'єкта, що розподіляється,
// можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

//* const first = { propA: 5, propB: 10, propC: 50 };
//* const second = { propC: 15, propD: 20 };

//* const third = { ...first, ...second };
//* console.log(third);

//* const fourth = { ...second, ...first };
//* console.log(fourth);

// Якби яблука в ящику мали наліпки з позначками, то в одному ящику не може бути двох яблук з однаковими позначками.
// Тому, пересипаючи другий ящик, усі яблука, позначки яких будуть збігатися з тими, що вже знаходяться у новому ящику, замінять існуючі.

// Під час розподілу можна додавати властивості у довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

//* const first = { propA: 5, propB: 10, propC: 50 };
//* const second = { propC: 15 };

//* const third = { propB: 20, ...first, ...second };
//* console.log(third);

//* const fourth = { ...first, ...second, propB: 20 };
//* console.log(fourth);

//* const fifth = { ...first, propB: 20, ...second };
//* console.log(fifth);

// ____________________________

//! rest: збирання всіх аргументів функції

// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію.Синтаксично - це близнюк операції розподілу,
// але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

// Повернемось до аналогії з яблуками.Якщо на підлозі лежать яблука і у нас є порожній ящик, то операція rest дозволить «зібрати» яблука в ящик.
// Водночас, оригінальні яблука залишаться на підлозі, а в ящику буде копія кожного яблука.

// Одна зі сфер застосування операції rest - це створення функцій, які можуть приймати будь-яку кількість аргументів.

// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?

//* function multiply() {
//*   ...
//* }

//* multiply(1, 2);
//* multiply(1, 2, 3);
//* multiply(1, 2, 3, 4);

// Якщо прибрати увесь «синтаксичний шум» і подивитися на аргументи і параметри функції,
// то аргументи знаходяться у правій частині операції присвоювання, а параметри - у лівій, тому що значення аргументів присвоюються оголошеним параметрам.
// Отже, можна «зібрати» всі аргументи функції в один параметр, використовуючи операцію rest.

//* function multiply(...args) {
//     // масив усіх аргументів
//*     console.log(args);
//* };

//* multiply(1, 2);
//* multiply(1, 2, 3);
//* multiply(1, 2, 3, 4);

// Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.

// ____________________________

//! rest: збирання частини аргументів функції

// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».

//* function multiply(firstNumber, secondNumber, ...otherArgs) {
//*     console.log(firstNumber);
//*     console.log(secondNumber);
//*     console.log(...otherArgs);

//* }

//* multiply(1, 8, 4, 2);

// Всі аргументи, для яких будуть оголошені параметри, передадуть їм свої значення, інші аргументи будуть поміщені в масив.
// Операція rest збирає решту усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.

// ____________________________________________________________

//! Деструктуризація об'єктів

// Під час розробки програм дані приходять, як правило, у вигляді масивів і об'єктів, значення яких необхідно записати у локальні змінні.
// Для того, щоб робити це максимально просто, в сучасному стандарті існує синтаксис деструктуризованого присвоювання.

//! Деструктуризація об'єктів

// Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

//* const book = {
//*   title: "The Last Kingdom",
//*   author: "Bernard Cornwell",
//*   genres: ["historical prose", "adventure"],
//*   isPublic: true,
//*   rating: 8.38,
//* };

//* const accessType = book.isPublic ? "публічному" : "закритому";
//* const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

//* const book = {
//*   title: "The Last Kingdom",
//*   author: "Bernard Cornwell",
//*   genres: ["historical prose", "adventure"],
//*   isPublic: true,
//*   rating: 8.38,
//* };

//* const { title, author, isPublic, rating, coverImage } = book;
//* console.log(coverImage);

//* const accessType = isPublic ? "Публічному" : "Закритому";
//* const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

//* console.log(message);

// ____________________________

//! Значення за замовчуванням

// Для того, щоб уникнути присвоєння undefined під час деструктуризації неіснуючих властивостей об'єкта, можна задати змінним значення за замовчуванням,
// які будуть присвоєні лише у тому випадку, якщо об'єкт не містить властивості з таким ім'ям.

//* const book = {
//*   title: "The Last Kingdom",
//*   author: "Bernard Cornwell",
//* };

// Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
//* const {
//*     title,
//*     author,
//*     coverImage = "https://via.placeholder.com/640/480",
//* } = book;

//* console.log(title);
//* console.log(author);
//* console.log(coverImage);

// ____________________________

//! Зміна імені змінної

// Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості.
// Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

//* const firstBook = {
//*   title: "The Last Kingdom",
//*   coverImage:
//*     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//* };

//* const {
//*     title: firstTitle,
//*     coverImage: firstCoverImage = "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//* } = firstBook;

//* console.log(firstCoverImage);

//* const secondBook = {
//*     title: "Сон смішної людини",
//* };

//* const {
//*     title: secondTitle,
//*     coverImage: secondCoverImage = "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//* } = secondBook;

//* console.log(secondTitle);
//* console.log(secondCoverImage);

// Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.

// ____________________________

//! Деструктуризація в циклах

// Перебираючи масив об'єктів циклом for...of, утворюються багаторазові звернення до властивостей об'єкта.

//* const books = [
//*   {
//*     title: "The Last Kingdom",
//*     author: "Bernard Cornwell",
//*     rating: 8.38,
//*   },
//*   {
//*     title: "На березі спокійних вод",
//*     author: "Роберт Шеклі",
//*     rating: 8.51,
//*   },
//* ];

//* for (const book of books) {
//*     console.log(book.title);
//*     console.log(book.author);
//*     console.log(book.rating);
//* }

// Для того, щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

//* for (const book of books) {
//*     const { title, author, rating } = book;

//*     console.log(title);
//*     console.log(author);
//*     console.log(rating);
//* }

// Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо у місці оголошення змінної book.

//* for (const { title, author, rating }, of books) {
//*     console.log(title);
//*     console.log(author);
//*     console.log(rating);
//* }

// ____________________________

//! Глибока деструктуризація

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.


//* const user = {
//*   name: "Noob Saibot",
//*   tag: "NB",
//*   stats: {
//*     followers: 5603,
//*     views: 4827,
//*     likes: 1308,
//*   },
//* };

//* const {
//*   name,
//*   tag,
//*   stats: { followers, views: userViews, likes: userLikes = 0 },
//* } = user;

//* console.log(name);
//* console.log(tag);
//* console.log(followers);
//* console.log(userViews);
//* console.log(userLikes);

// ____________________________

//! Деструктуризація масивів

// Деструктуризоване присвоювання можна використовувати і для масивів, але з деякими особливостями.

// Замість фігурних дужок {} використовуються квадратні [].

// Змінним, зазначеним у квадратних дужках [], будуть послідовно присвоюватися значення елементів масиву.

// Наприклад, є масив кольорів, з якого потрібно отримати значення кожної складової кольору в окремих змінних.

//* const rgb = [200, 255, 100];
//* const [red, green, blue] = rgb;

//* console.log(`R:${red}, G:${green}, B:${blue}`);

// Після ключового слова const або let ставимо квадратні дужки, як і у випадку з оголошенням масиву.
// Всередині дужок, через кому, вказуємо імена змінних, в які будуть поміщені значення масиву.

// Внаслідок такого запису будуть створені 3 змінні, і в них будуть поміщені елементи в нумерованому порядку - від 0 і до кінця масиву.

// Під час деструктуризації масивів, значення змінної може присвоюватися після її оголошення. На практиці це рідко використовується.

//* const rgb = [200, 255, 100];
//* let red, green, blue;

//* [red, green, blue] = rgb;

//* console.log(`R:${red},G:${green},B:${blue}`);

// Якщо змінних більше, ніж елементів масиву, їм буде присвоєно undefined, тому можна вказувати значення за замовчуванням.

//* const rgb = [200, 255, 100];

//* const [red, green, blue, alfa = 0.3] = rgb;

//* console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`);

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву.
// Деструктуруючи масив, можна розпакувати і присвоїти іншу частину елементів масиву змінної, використовуючи операцію ... (rest).

//* const rgb = [200, 255, 100];

//* const [red, ...colors] = rgb;

//* console.log(red);
//* console.log(colors);

// Елементи можна пропускати. Припустимо, з масиву rgb необхідно взяти тільки останнє значення. На практиці ця можливість рідко використовується.const rgb = [200, 100, 255];

//* const [, , blue] = rgb;

//* console.log(`Blue: ${blue}`);

// ____________________________________________________________

//! Патерн «Об'єкт параметрів»

// Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатись, в якій послідовності і що передавати.
// В результаті виходить дуже неочевидний код в місці її виклику.

//* function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
    // Робимо щось з параметрами
        //* console.log(title);
        //* console.log(numberOfPages);
    // І так далі

// ❌ Що таке 736? Що таке 10283? Що таке true?
//* doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему, замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.

//* function doStuffWithBook(book) {
//    Робимо щось з властивостями об'єкта
//*   console.log(book.title);
//*   console.log(book.numberOfPages);
//    І так далі
//* }

// У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
//* doStuffWithBook({
//*   title: "The Last Kingdom",
//*   numberOfPages: 736,
//*   downloads: 10283,
//*   rating: 8.38,
//*   isPublic: true,
//* });

// Ще один плюс у тому, що можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.

//* function doStuffWithBook(book) {
//*   const { title, numberOfPages, downloads, rating, isPublic } = book;
//*   console.log(title);
//*   console.log(numberOfPages);
//    І так далі
//* }

// Або відразу в сигнатурі (підписі) функції - немає різниці.

//* function doStuffWithBook({
//*   title,
//*   numberOfPages,
//*   downloads,
//*   rating,
//*   isPublic,
//* }) {
//*   console.log(title);
//*   console.log(numberOfPages);
//    І так далі
//* }

















