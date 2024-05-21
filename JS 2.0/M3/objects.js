/*
// create objects
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

//edit object properties
book.title="new title";

//add new object properties
//as edit 
book.price=45;

//computed properties
const propName = "name";
const user = {
  age: 25,
  // Ім'я цієї властивості буде взяте зі значення змінної propName
  [propName]: "Генрі Сибола",
};

console.log(user.name); // 'Генрі Сибола'

//method of object

const club = {
    name: "milan",
    getPlayer(){
     console.log("get some players")
    },
    setPlayer(){
        console.log('set new player')
    }
};

club.setPlayer();

*/

//method add and remove in properties

const bookRoma = {
    book: ['Wind shadow'],
    getBook(){
        return this.book;
    },
    addBook(newBook){
        this.book.push(newBook);
       
    },
    removeBook(nameBook){
        const indexRemoveBook = this.book.indexOf(nameBook);
        this.book.splice(indexRemoveBook,1);
    },
}

console.log(bookRoma.getBook());
bookRoma.addBook('book #1');
bookRoma.addBook('book #02');
console.log(bookRoma.getBook());

bookRoma.removeBook('book #1');
console.log(bookRoma.getBook());

