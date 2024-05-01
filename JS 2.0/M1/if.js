// construction IF
//when true
let price =0;
const name = "pro";
if(name==="pro"){
    price=100;
}

console.log(price);// 100

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