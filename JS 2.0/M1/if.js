// construction IF
//when true
let price =0;
const name = "pro";
if(name==="pro"){
    price=10040;
}

console.log(price);// 100
document.write(price);


/*

//when false
let price2 =0;
const name2 = "pro";
if(name2==="XXX"){
    price=100;
}
console.log(price);// 0


//construction IF...ELSE
let price3 =0;
const name3 = "pro";
if(name3==="XXX"){
    price=100;
}else{
    price=200
}
console.log(price);// 200


// //construction ELSE...IF
let number;
const age = "pro";
if(age==="XXX"){
    number=100;
}else if(age==="ZZZ"){
    number = 200 ;
}else if(age==="pro"){
    number = 300;
}else {
console.log("invalid")
}

console.log(number);// 300

*/


// function checkAge(age) {
//     let message;
  
//     if (age >= 18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }
  
  
  function checkAge(age) {
  let message;
    if (age >=18 ){
        
        message = "You are an adult";
             }else {
        message = "You are a minor";
          }
    // return message;

    document.write(message);
    document.write('<br/>');
  };

  checkAge(20);
    checkAge(8);
    checkAge(14);
    checkAge(38);
  