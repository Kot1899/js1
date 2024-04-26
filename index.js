
console.log("hello world");

// commit #2
//  commit №3

// <!DOCTYPE html>
// {/* <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>JavaScript is fun!</title>
//   </head>

//   <body>
//     {/* <!-- контент --> */}
//     <script src="js/index.js"></script>
//   </body>
// </html> */}


let age=10;

console.log(age);

const foo = { id: 1, verified: true, color: 'green' };
const bar = { id: 2, verified: false, color: 'red' };

// table
console.table({ foo, bar})

//group
console.group()

console.group('User Details');
console.log('name: John Doe');
console.log('job: Software Developer');
// Nested Group
console.group('Address');
console.log('Street: 123 Townsend Street');
console.log('City: San Francisco');
console.log('State: CA');
console.groupEnd();
console.groupEnd();

// if you want collapse by default
console.groupCollapsed()

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5"