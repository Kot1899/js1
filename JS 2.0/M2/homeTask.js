function enter (){
    document.write('<br/>');
}
/*
//task#1
document.write('task #1');
enter();

function checkAge(age) {
    let message;
  
    if (age >= 18) {
      message = "You are an adult";
        return message;
    }
    message = "You are a minor";
    return message;
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

//task#2
document.write('task #2');
enter();

function checkPassword(password){
    const ADMIN_PASSWORD = "jqueryismyjam";
    if(password===ADMIN_PASSWORD){
       return "Welcome!" ;
    }
    if (password === null){
        return "Canceled by user!";
    } 
        return  "Access denied, wrong password!" ; 
}

    enter();         
    
    checkPassword("mangohackzor") ;
    checkPassword("polyhax");
    checkPassword("jqueryismyjam");


//task#3
document.write('task #3');
enter();
function checkStorage(available, ordered){
    if (ordered === 0){
    return "There are no products in the order!";
    }
    if (available<ordered){
    return "Your order is too large, there are not enough items in stock!";
    } 
    if (available>ordered){
    return "The order is accepted, our manager will contact you";
    }
    document.write(message);
    enter();
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

//task#4
document.write('task #4');
enter();

const fruits= ['apple', 'plum', 'pear', 'orange'] ;
document.write(fruits);

//task#5
document.write('task #5');
enter();

const fruits= ['apple', 'plum', 'pear', 'orange'] ;
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length-1]

document.write(lastElement);

//task#6
document.write('task #6');
enter();

const fruits= ['apple', 'plum', 'pear', 'orange'] ;
fruits[1]='peach';
fruits[3]='banana';


//task#7
document.write('task #7');
enter();
const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length;
console.log(fruitsArrayLength);


//task#8
document.write('task #8');
enter();
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length-1;
const lastElement = fruits[lastElementIndex];


//task#9
document.write('task #9');
enter();

function getExtremeElements(array){
    const firstElementIndex = array[0];
    const lastElementIndex = array[array.length-1];
  
      resultArray=[firstElementIndex,lastElementIndex];
        return resultArray;
  
  }
  getExtremeElements([1, 2, 3, 4, 5])
  getExtremeElements(["Earth", "Mars", "Venus"]);
  getExtremeElements(["apple", "peach", "pear", "banana"])
  

  //task#10
document.write('task #10');
enter();

function splitMessage(message, delimiter) {
    let words;
    words=message.split(delimiter);
    return words;
  }
  
  splitMessage("Mango hurries to the train", " ");
  splitMessage("Mango", "");
  splitMessage("best_for_week", "_");


//task#11
document.write('task #11');
enter();

function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 let messArray=[];
 messArray = message.split(" ");
 total = pricePerWord * messArray.length;

 console.log(total);
 enter();
 
 
    // Change code above this line
 }
 calculateEngravingPrice("JavaScript is in my blood", 10) ;
 calculateEngravingPrice("JavaScript is in my blood", 20);
 calculateEngravingPrice("Web-development is creative work", 40) ;
 calculateEngravingPrice("Web-development is creative work", 20);

 
//task#12
document.write('task #12');
enter();

function makeStringFromArray(array, delimiter) {
    let string;
    string= array.join(delimiter);
//     return string;
//   }
  console.log(string);
}

  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
  makeStringFromArray(["M", "a", "n", "g", "o"], "");
  makeStringFromArray(["top", "picks", "for", "you"], "_");
  */
//task#13
document.write('task #13');
enter();

function slugify(title) {
    let slug;
    let slugArray=[];
    let slugUpper;

    slugArray= title.split(" ");
    slugUpper= slugArray.join("-");
    slug=slugUpper.toLowerCase();
    return slug ;
}

  slugify("Arrays for begginers");
  slugify("English for developer");
  slugify("Ten secrets of JavaScript");
  slugify("How to become a JUNIOR developer in TWO WEEKS");