//agenda:
//1. split();
//2. join();
//3. indexof();
//4. includes();
//5. pop();
//6. push();
//7. slice();
//8. splice();
//9. concat();

function enter(){
    document.write("<br/>")
}

const arrayCity=['lviv', 'kyiv', 'milan', 'london', 'rome', 'naples'];


//#1..2 split + join

// split(delimiter) - перетворює рядок в масив;
const name= 'milan';
console.log(name.split(""));
enter();

//join(decimileter) - зворотня до split
const city=["kyiv", "lviv", 'kharkiv'];
console.log(city.join(" "));
enter();
 

// #3 indexof();

// use if u need found number of index for array element
// return (if true) number of index, (if false) -1
console.log(arrayCity.indexOf('london'));
enter();
console.log(arrayCity.indexOf('lonrrrrr'));
enter();


// #4 includes(value);
//check " are have array this value" and return TRUE of FALSE 
console.log(arrayCity.includes('rivne')); //false
enter();
console.log(arrayCity.includes('rome')); //false
enter();


// #5..6 push & pop
//push - add in the end of array elevents (can add much elements)
//pop - delete in the end of array elements (can remove only last 1!! element)
arrayCity.push('quebec', 'cleveland', 'dfdfd', 'dfdfsasww');
console.log(arrayCity);
enter();
arrayCity.pop();
console.log(arrayCity);


// #7 slice(begin, end);
//create copy array from "begin" index to "end" index
const copyCity=arrayCity.slice(4,7);
console.log(copyCity); 
const copyCity2=arrayCity.slice(4);
console.log(copyCity2); 


// #8 splice - many desicions
//  splice(position, num) - for remove
// position - start index, num - number of remove elements

const arrayWeekRem=['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
arrayWeekRem.splice(1,5);
console.log(arrayWeekRem);

// position - start index, num - number of remove elements
const arrayWeek=['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const arrayWeekEnd=arrayWeek.splice(1,5);
console.log(arrayWeek);
console.log(arrayWeekEnd);

// splice for additing
// splice(position, 0, new_element_1, new_element_2, ...)
// position - start index, 0- its means tnat not remove elements
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple", 'grey', "yellow");
console.log(colors); // ["red", "green", "purple", "blue"]

// splite for заміни
// splice(position, num, new_element_1, new_element_2, ...)
//position - start index, num - number of remove
const arrayDays=['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
arrayDays.splice(1, 2, "MON", "TUE");
console.log(arrayDays);


// #9 concat();
// create 1 array from different arrays
const cities = [ 'milan', 'houston'];
const country = [ ' italy', "usa"];

const geo = cities.concat(country);
const geo2 = country.concat(cities);

console.log(geo);

console.log(geo2);
