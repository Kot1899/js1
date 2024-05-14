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

//#1..2 split + join

// split(delimiter) - перетворює рядок в масив;
const name= 'milan';
console.log(name.split(""));
enter();

//join(decimileter) - зворотня до split
const city=["kyiv", "lviv", 'kharkiv'];
console.log(city.join(""));
enter();
 