//three logic operators
// and &&
//or ||
//not !

const age1 = 20;
console.log(age1 > 10 && age1 < 30); // true && true -> true

//Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0

//or ||
const age2 = 5;
console.log(age2 < 10 || age2 > 30); // true || false -> true
const age = 40;
console.log(age < 10 || age > 30); // false || true -> true



// not !
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false
