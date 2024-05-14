function enter(){
    document.write("</br>"); }

//array
const array=[10,11,12];
document.write("array index 2 is ", array[1]);
enter();

//length array

const age = [ 12 , 15 , 45 , 48 , 55, 77,20,17,22,63,327,3,0,9,32];
document.write("the length of array is ", age.length);
enter();

//iteration cicle for

for (i=0; i<=(age.length-1); i+=1){
    document.writeln(age[i]);
    enter();
}

//iteration for..of (foreach)
for( number of age){
    document.writeln(number);
}

//break 
enter();
enter();
document.writeln("break");
enter();
let mess;

for (number of age){
    document.writeln(number);
    if (number === 47){
        mess= `"we found number" ${number}`;
        break;
    }
    mess= 'we dont found number';
    
}
document.write(mess);

//continue
enter();
enter();
document.writeln("continue");
enter();
let messCont="dont found number";

for (number2 of age){
    if (number2 < 50){
        continue
    }
    document.writeln(`"this number " ${number2} " more then 50"`);
    enter();
}

//додавання елемента в кінець масива metod push
age.push(555,444);
for (num3 of age){
    document.writeln(num3);
}




//присвоєння за посиланням та за значенням
// прості типи данних - by value
// складні типи данних (масиви, обєкти) - by reference
enter();
enter();
let a = 5;
let b = a ;
document.write(`"a = " ${a}, " b = " ${b}`); //5 & 5 
enter();
a=10;
document.write(`"a = " ${a}, " b = " ${b}`); //10 & 5 

enter();
enter();
let array1=[1 ,2 ,3 ,4 ,5];
let array2= array1;
document.write("array1 = ", array1.length) // 5
enter();
document.write("array2 = ", array2.length)// 5

enter();
enter();

array1.push(6,7,8);
document.write("array1 = ", array1.length) //8
enter();
document.write("array2 = ", array2.length) //8

