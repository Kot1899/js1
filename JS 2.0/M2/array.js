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

