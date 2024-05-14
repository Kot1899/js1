function enter(){
    document.write('<br/>'); 
}

//function with default parameters
document.write('default');
enter();

function summm(min=10, max= 100, mon= 12){
    console.log(`min param equal = ${min}, max param equal = ${max}, month equal = ${mon}`);

    for(i=min; i<max; i+=mon){
        let total=(max-min)*mon;
        console.log(total);
    }
}

summm(1,5,3);
summm(1,10,3);
summm(1,10);
summm(5);


// патерн "раннє повернення"
//use return except if...else, such as:

function getMoney(amount=0, balance=8){
    if(amount===0){
        console.log('u have no money');
        return;
    }
    if(amount>balance){
        console.log(`balance less then amount`);
        return;
    }
    if(amount<balance){
        console.log(`get your ${amount}`);
        return;
    }
}

getMoney(0, 34);
getMoney(199, 23);
getMoney(122, 2222);
getMoney(84);



