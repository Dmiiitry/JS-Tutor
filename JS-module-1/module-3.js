// Функції

// Функція - це підпрограма, незалежна частина коду,
// призначена для багаторазового виконання конкретної задачі з різними початковими значеннями.
// Функції дозволяють структурувати великі програми, зменшують повторення та ізолюють код.

// Оголошення функції

// function multiply() {
//     console.log('Лог коли викликається функція')
    
// }

// multiply();

// Оголошення функції (function declaration) починається з ключового слова function,
// після якого стоїть ім'я - дієслово, що відповідає на запитання «Що зробити?» і пара круглих дужок.

// Тіло функції береться у фігурні дужки {} і містить інструкції, які необхідно виконати на момент її виклику.
// Потім, коли необхідно, функція викликається за допомогою імені і пари круглих дужок.

// ____________________________

// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`)
// }

// Параметри - це локальні змінні, доступні тільки у тілі функції.Вони розділяються комами.
// Параметрів може бути декілька, або взагалі не бути, у такому випадку записуються просто порожні круглі дужки.

// На момент виклику функції, в круглих дужках можна передати аргументи - значення для оголошених параметрів функції.

// multiply(8, 8, 9);
// multiply(2, 4, 2)

// Порядок передачі аргументів повинен відповідати порядку оголошених параметрів:
// значення першого аргументу буде присвоєно першому параметру,
// другого аргументу - другому параметру тощо.
// Якщо параметрів буде більше, ніж аргументів, то параметрам без значень буде присвоєно undefined.

// ____________________________

// Повернення значення

// Оператор return використовується для передачі значення з тіла функції у зовнішній код.
// Коли інтерпретатор зустрічає return, він відразу ж виходить з функції(припиняє її виконання),
// і повертає вказане значення у те місце коду, де була викликана функція.

// function multiply(x, y, z) {
//     console.log('Код до return виконується звичайним чином')

//     return x * y * z;

//     console.log('Цей лог не виконається, оскільки стоїть після return');

// }

// let result = multiply(8, 8, 4);
// console.log(result);

// result = multiply(2, 3, 4);
// console.log(result);

// result = multiply(3, 3, 3);
// console.log(result);

// Оператор return без явно вказаного значення повертає спеціальне значення undefined.
// За відсутності return в тілі функції, вона все одно поверне undefined.

// ____________________________

// Порядок виконання коду

// Коли інтерпретатор зустрічає виклик функції (або методу), він призупиняє виконання поточного коду і починає виконувати код з тіла функції.
// Після того як увесь код функції буде виконаний, інтерпретатор виходить з тіла функції, повертаючись у те місце, звідки прийшов,
// і продовжує виконувати код, наступний після виклику функції.

// function multiply(x, y, z) {
//     console.log(`Результат виконання ${x * y * z}`)

// }

// console.log("Лог до виконання функції");

// multiply(4, 4, 4);

// console.log("Лог після виконання функції");

// ____________________________

// Параметри за замовчуванням

// Іноді необхідно оголосити функцію, у параметрів якої будуть значення, відмінні від undefined, навіть якщо для них не передали аргументи.
// Це робиться дуже простим та очевидним чином - достатньо вказати значення за замовчуванням безпосередньо на момент оголошення параметрів у підписі функції.
// У випадку такого запису, якщо для параметра не було передано значення аргументу, використовується значення за замовчуванням.

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//     for (let i = countFrom; i <= countTo; i += step){
//         console.log(i);
//     }
// }

// count(6,12,2);

// ____________________________

// Псевдомасив arguments

// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments,
// яка доступна тільки всередині функції і зберігає всі аргументи у якості псевдомасиву.

// Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом,
// але відсутністю більшості методів для роботи з масивом.

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//         total *= argument;
//     }
//     return total;
// }

// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2));
// console.log(multiply(1, 5, 10));

// ____________________________

// Перетворення псевдомасиву

// Зазвичай псевдомасив необхідно перетворити у повноцінний масив,
// оскільки у псевдомасиву відсутні методи масиву, наприклад slice() або includes().
// На практиці застосовують декілька основних способів.

// Використовуючи метод Array.from(), який створить масив із псевдомасиву.

// function fn() {
//     // Змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
// }

// Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку кількість елементів, у нашому випадку аргументів, в масив, і зберегти його в змінну

// function fn(...args) {
// Змінна args буде містити повноцінний масив
// }

// ____________________________

// Патерн «Раннє повернення»

// Оператор if...else - це основний спосіб створення розгалужень.
// Проте, складні вкладені розгалуження роблять код заплутаним для розуміння.

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//     }
//     else if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//     }
//     else {
//         console.log(`Операція зняття коштів проведена успішно, ви зняли ${amount}`);
//     }
// }

// withdraw(100, 400);
// withdraw(500, 100);
// withdraw(0);

// Патерн «Раннє повернення» - це спосіб використовувати можливість дострокового повернення з функції за допомогою оператора return.
// Використовуючи цей прийом, ми отримуємо чистіший, плоскіший і зрозуміліший код, який простіше рефакторити.

// function withdraw(amount, balance) {
// Якщо умова виконується, викликається console.log
// і вихід із функції. Код після тіла if не виконається.
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//         return;
//     }


// Якщо умова першого if не виконалась, його тіло пропускається
// та інтерпретатор доходе до другого if.
// Якщо умова виконується, викликається console.log і вихід із функції.
// Код, що знаходиться після тіла if, не виконається.

// if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return
//     }

// Якщо жоден із попередніх if не виконався,
// інтерпретатор доходить до цього коду і виконує його.
    
//     console.log("Операція зняття коштів проведена");
// }

// withdraw(200, 150);
// withdraw(0);
// withdraw(100, 200);

// Функціональний вираз

// Функціональний вираз (function expression) - звичайне оголошення змінної,
// значенням якої буде функція.Альтернативний спосіб оголошення функції.

// Оголошення функції (function declaration)
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// Функціональний вираз (function expression)
// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// Різниця в тому, що функціональний вираз не можна викликати до місця його створення,
// тільки після нього, тому що це буквально оголошення const змінної.

// Не важливо, який синтаксис використовувати, важливо, щоб код в проекті був однорідним.
// Тобто необхідно намагатися не змішувати оголошення функції з функціональними виразами

// ____________________________________________________________


// Область видимості

// Область видимості (scope) - механізм, який визначає доступність змінних у коді, що виконується.

// Ланцюжок областей видимості (scope chain) - області видимості утворюють ієрархію, за якою дочірні області мають доступ до змінних з батьківських областей, але не навпаки.

// Змінну видно для коду, що виконується, якщо вона є у поточній області видимості або в ланцюжку областей видимості.

// ____________________________

// Глобальна область видимості

// Змінні, оголошені на найвищому рівні, тобто за межами будь-яких конструкцій на зразок if, while, for і функцій,
// знаходяться в глобальній області видимості і доступні всюди після їх оголошення.

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// ____________________________

// Блокова область видимості

// Змінні, оголошені всередині інструкцій if, for, функцій та інших блоків коду, взятих у фігурні дужки { },
// знаходяться в блоковій області видимості і доступні тільки всередині цього блоку коду або у блоках, вкладених в нього.

// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i++) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// // ❌ Помилка! Змінна a - недоступна у глобальній області видимості
// console.log(a);

// for (let i = 0; i < 3; i++) {
//   // ❌ Помилка! Змінна a - недоступна в цій області видимості
//   console.log(a);
// }

// ____________________________________________________________

// Стек викликів

// На момент виклику функції, всередині її тіла можуть викликатися інші функції, а в них - інші тощо.
// JavaScript - однопотокова мова, тобто за одну одиницю часу може виконуватись лише одна інструкція.
// Це означає, що викликані функції, які не завершили своє виконання, повинні чекати виконання функцій,
// викликаних всередині них, для того, щоб продовжити свою роботу.

// function fnA() {
//   console.log("Лог всередині функції fnA до виклику fnB");
//   fnB();
//   console.log("Лог всередині функції fnA після виклику fnB");
// }

// function fnB() {
//   console.log("Лог всередині функції fnB");
// }

// console.log("Лог до виклику fnA");
// fnA();
// console.log("Лог після виклику fnA");

// ____________________________

// Cтек

// Стек - структура даних, яка працює за принципом LIFO(Last - In - First - Out), тобто останнім прийшов - першим пішов.
// Останнє, що додається у стек, буде видалено з нього першим, - тому можна додати або видалити елементи тільки з верхівки стека.

// Уявіть стек у вигляді масиву, у якого є тільки методи pop і push, тобто можна додати або видалити тільки елемент в кінці колекції.

// Стек викликів

// ____________________________

