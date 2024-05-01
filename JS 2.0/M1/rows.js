//конкатонація
const mes="mango"+" is"+" happy";
console.log(mes); //Mango is happy

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"
/*

// Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
const guestName = "Манго";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"


//шаблонні рядки та інтерполяція 
const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

//метод Lenght
const message = "Welcome to Bahamas!";
console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

//Методи toLowerCase() і toUpperCase()​
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

//Метод indexOf()​
//Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1

//Метод includes()​
//Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку
const productName = "Ремонтний дроїд";
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false

//Методи replace() і replaceAll()​
const jsFileName = "index.js";
const minJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minJsFileName); //"index.min.js"

//Метод slice()​
const productName2 = "Repair droid";
console.log(productName2.slice(0, 4)); //"Repa"
console.log(productName2.slice(0, productName2.length)); //"Repair droid"

*/
