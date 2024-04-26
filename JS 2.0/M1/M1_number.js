
const valueA = "5";
console.log(Number(valueA));// 5

// parseInt парсить і повертає ціле число
    console.log(Number.parseInt("5px")); // 5
    console.log(Number.parseInt("12qwe74")); // 12
    console.log(Number.parseInt("12.46qwe79")); // 12
    console.log(Number.parseInt("qweqwe")); // NaN

// parseFloat  парсить і повертає дробове число
    console.log(Number.parseFloat("5px")); // 5
    console.log(Number.parseFloat("12qwe74")); // 12
    console.log(Number.parseFloat("12.46qwe79")); // 12.46
    console.log(Number.parseFloat("qweqwe")); // NaN

// Number.isNaN(val) перевірка ци введенне значення - число
    const validNumber = Number("51"); // 51
    console.log(Number.isNaN(validNumber)); // false

    const invalidNumber = Number("qweqwe"); // NaN
    console.log(Number.isNaN(invalidNumber)); // true

// спосіб як складати дробові числа - метод toFixed(val)
    console.log(0.17 + 0.24); // 0.41000000000000003
    console.log((0.17 + 0.24).toFixed(2)); // 0.41

// Math клас який має вбудовані методи:
    // Math.floor(num) - повертає найменше ціле число,
    // менше, або яке дорівнює зазначеному числу
    console.log(Math.floor(1.7)); // 1

    // Math.ceil(num) - повертає найбільше ціле число,
    // більше, або яке дорівнює зазначеному числу.
    console.log(Math.ceil(1.2)); // 2

    // Math.round(num) - повертає значення числа,
    // округленого до найближчого цілого
    console.log(Math.round(1.2)); // 1
    console.log(Math.round(1.5)); // 2

    // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
    console.log(Math.max(20, 10, 50, 40)); // 50

    // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
    console.log(Math.min(20, 10, 50, 40)); // 10

    // Math.pow(base, exponent) - піднесення до степеня
    console.log(Math.pow(2, 4)); // 16

    // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
    console.log(Math.random()); // випадкове число між 0 і 1
    console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

