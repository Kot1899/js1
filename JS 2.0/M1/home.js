

//my home commit

function enter(){
    // document.write("</br>");
    // document.write("</br>");
    document.write("</br>"); }
function doubleEnter(){
    document.write("</br>");
    document.write("</br>");
    document.write("</br>");}
/*
//test 18
document.write("test #18");
enter();

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits){
    let totalPrice;
    let message;
    totalPrice=pricePerDroid * orderedQuantity;
    if (totalPrice> customerCredits){
        message = "Insufficient funds!";
    }else{
        message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left".`;
    
    }
    document.write(message);
    enter();
}

makeTransaction(3000, 5, 23000) ;
makeTransaction(1000, 3, 15000) ;
makeTransaction(5000, 10, 8000) ; 
makeTransaction(2000, 8, 10000) ; 
makeTransaction(500, 10, 5000) ;
doubleEnter();


//test #19
document.write("test #19");
enter();
function checkPassword(password){
    let message ;
    const ADMIN_PASSWORD = "jqueryismyjam";
    if(password===ADMIN_PASSWORD){
        message = "Welcome!" ;
    } else if (password === null){
        message = "Canceled by user!";
    } else{
        message =    "Access denied, wrong password!" ; 
    }
    document.write(message);
    enter();         
    }
    checkPassword("mangohackzor") ;
    checkPassword(null);
    checkPassword("polyhax");
    checkPassword("jqueryismyjam");

//test #20
document.write("test #20");
enter();
function checkStorage(available, ordered){
    let message ;
    if (ordered === 0){
    message = "There are no products in the order!";
    }else if (available<ordered){
    message = "Your order is too large, there are not enough items in stock!";
    } else if (available>ordered){
    message = "The order is accepted, our manager will contact you";
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

Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
Виклик checkStorage(70, 0)повертає "There are no products in the order!"
Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
Виклик checkStorage(150, 0) повертає "There are no products in the order!"


//test #21
document.write("test #21");
enter();
function isNumberInRange(start, end, number){
    const isInRange = (start <= number && number<= end);
    document.write(isInRange);
    enter();
}

isNumberInRange(10, 30, 17) ;
isNumberInRange(10, 30, 5) ;
isNumberInRange(20, 50, 24) ;
isNumberInRange(20, 50, 76) ;


//test #22
document.write("test #22");
enter();
function checkIfCanAccessContent(subType){
    const canAccessContent = (subType==='pro'|| subType==='vip');
    document.write(canAccessContent);
    enter();
}

checkIfCanAccessContent("pro") ;
checkIfCanAccessContent("starter");
checkIfCanAccessContent("vip") ;
checkIfCanAccessContent("free");
*/

//test #23
document.write("test #23");
enter();
function isNumberNotInRange(start, end, number){
const isInRange = (start <= number && number<=end);
const isNotInRange =! isInRange;
document.write(isNotInRange);
enter();
}

isNumberNotInRange(10, 30, 17) ;
isNumberNotInRange(10, 30, 5) ;
isNumberNotInRange(20, 50, 24) ;
isNumberNotInRange(20, 50, 76) ;