// const clients = ["Mango", "Poly", "Ajax"];

// for (const client of clients) {
//     console.log (client)
// }


// Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax


// ____________________________________________________________


// const clients = ['Dima', 'Ihor', 'Olehm', 'Yulia']
// const nameToFind = 'Yulia';
// let message;

// for (const client of clients) {
// // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
// // іменем клієнта. Якщо збігається - записуємо в message повідомлення
// // про успіх і робимо break, щоб далі не шукати
//     if (client === nameToFind) {
//         message = `Клієнт ${nameToFind} готовий з вами зв'язатися`;
//         break;
//     }
// // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//     message = `Клієнт ${nameToFind} зараз недоступний`
// }

// console.log(message);


// ____________________________________________________________


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > threshold) {
//         continue;
//     }
//     console.log(`Число менше за ${threshold}: ${numbers[i]}`);
// }


// ____________________________________________________________

// SPLIT

// const name = 'Vlados';
// console.log(name.split(""));

// const myApps = "youtube, tiktok, instagram"
// console.log(myApps.split(" "));
// ____________________________________________________________
// JOIN

// const phrase = ["Під", "лежачий", "камінь", "..."];
// console.log(phrase.join(" "));
// console.log(words.join(" "));
// console.log(words.join("-"));
// ____________________________________________________________
// indexOF()

// const clients = ["Dima", "Yulia", "Oleh", "Sonia"]
// console.log(clients.indexOf('Sonia'));
// ____________________________________________________________
// includes()

// const clients = ['Foxtrot', 'Epicentr', 'Rozetka']
// console.log(clients.includes('Rozetka'));
// console.log(clients.includes('MoYo'));

// const ukraineShops = ['Foxtrot', 'Epicentr', 'Rozetka', 'MoYo']
// const shop = 'Foxtrot';
// const hasShop = ukraineShops.includes(shop);

// if (hasShop) {
//     console.log(`${shop} Український магазин!`)
// } console.log(`${shop} магазин ворога!`)
// ____________________________________________________________
// Методи push() і pop()

// const shops = [];

// shops.push('Foxtrot');
// console.log(shops);

// shops.push('Rozetka');
// console.log(shops);

// shops.push('MoYo');
// console.log(shops);


// const shops = ['Rozetka', 'Shop', 'Foxtrot'];
// console.log(shops.pop());
// console.log(shops);

// console.log(shops.pop());
// console.log(shops);

// ____________________________________________________________
//  Метод slice()

// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

// const phones = ['Iphone', 'Samsung', 'Xiaomi', 'Huawei', 'Nokia']
// console.log(phones.slice(1, 4));


// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.

// const phones = ['Iphone', 'Samsung', 'Xiaomi', 'Huawei', 'Nokia']
// console.log(phones.slice());

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.

// const phones = ['Iphone', 'Samsung', 'Xiaomi', 'Huawei', 'Nokia']
// console.log(phones.slice(3));

// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи

// const phones = ['Iphone', 'Samsung', 'Xiaomi', 'Huawei', 'Nokia']
// console.log(phones.slice(-3));

// ____________________________________________________________
//  Метод splice()

// Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити.
//     Видаляє, додає і замінює елементи у довільному місці масиву.

// ____________________________

// Видалення
// Щоб видалити елементи в масиві, передаються два аргументи
// splice(position, num)
// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються

// const phones = ['Iphone', 'Samsung', 'Xiaomi', 'Huawei', 'Nokia'];
// const deletedPhones = phones.splice(1, 3);
// console.log(deletedPhones);
// console.log(phones);

// ____________________________

// Додавання

// Для того, щоб додати один або декілька елементів в масив,
// необхідно передати три або більше аргументи,
// за такої умови, другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

// const phones = ['Iphone', 'Samsung', 'Xiaomi', 'Huawei', 'Nokia'];
// const deletedPhones = phones.splice(2, 0, 'Oppo', 'Vivo');
// console.log(phones);

// ____________________________

// Заміна

// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
// Для цього необхідно передати мінімум три аргументи.
// Кількість елементів, що видаляються і додаються, може не збігатися.

// splice(position, num, new_element_1, new_element_2, ...)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

// const languages = ['C++', 'JavaScript', 'Ruby', 'C#']

// languages.splice(1, 1, 'Python');
// console.log(languages);

// languages.splice(3, 1, 'Swift');
// console.log(languages);

// ____________________________

// Метод concat()

// Об'єднує два або більше масивів в один.
// Він не змінює масив, на якому викликається, а повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.

// const learnedLanguages = ['JavaScript', 'Python', 'C#'];
// const toBeLearnedLanguages = ['C++', 'Swift', 'Java', 'PHP'];

// const allLanguages = learnedLanguages.concat(toBeLearnedLanguages);
// console.log(allLanguages);

// const allLanguagesStartToBe = toBeLearnedLanguages.concat(learnedLanguages);
// console.log(allLanguagesStartToBe);

// console.log(learnedLanguages);
// console.log(toBeLearnedLanguages);


