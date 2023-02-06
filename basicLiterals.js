
//? String
// const s1 = "hello"
// console.log(typeof (s1))

// *object
const s2 = new String("hello")
console.log(typeof (s2))

// ? DOM object
console.log(navigator.appVersion)


// *object literal
const book1 = {
      author: "John Doe",
      year: 2012,
      title: "a really good book",
      getSummary: function () {
            return `this book is titled ${this.title} it  was written by ${this.author} in the  year ${this.year}`
      }
}

const book2 = {
      author: "Jane Doe",
      year: 2012,
      title: "a really nice book",
      getSummary: function () {
            return `this book is titled ${this.title} it  was written by ${this.author} in the  year ${this.year}`
      }
}

console.log(book1.getSummary())
console.log(Object.keys(book2))
console.log(Object.values(book2))




function Book(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.getSummary = () => {
            return `this book is titled ${this.title} it  was written by ${this.author} in the  year ${this.year}`


      }

}

const book1 = new Book("book1", "jane doe", 2023)
console.log(book1.getSummary())


// *prototypes

function Book(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;


}
Book.prototype.getSummary = function () {
      return `this book is titled ${this.title} it  was written by ${this.author} in the  year ${this.year}`


}
Book.prototype.age = function () {
      const years = new Date().getFullYear() - this.year;


      return `this book is ${years} years old`
}

const book1 = new Book("book1", "jane doe", 2003)


// ? revise ,change year

Book.prototype.revise = function (year) {
      this.year = year;
      this.revised = true;
}
console.log(book1)
book1.revise(2005)
console.log(book1)


// ! inheritance

function Book(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;


}
Book.prototype.getSummary = function () {
      return `this book is titled ${this.title} it  was written by ${this.author} in the  year ${this.year}`


}

function Magazine(title, author, year, month) {

      Book.call(this, title, author, year, month)
}

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("mag1", "jackson doe", 2004, "feb")
console.log(mag1.getSummary())

// ! use magazine constructor
Magazine.prototype.constructor = Magazine




// ! constructor
class Book {
      constructor(title, author, year) {
            this.title = title;
            this.author = author;
            this.year = year;
      }
      getSummary() {
            return `this book is titled ${this.title} it  was written by ${this.author} in the  year ${this.year}`


      }
      getAge() {
            const years = new Date().getFullYear() - this.year;


            return `this book is ${years} years old`
      }
      revise(year) {
            this.year = year;
            this.revised = true;
      }
}




