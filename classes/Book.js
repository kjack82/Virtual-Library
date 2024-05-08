const Media = require('./Media')

class Book extends Media { 
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating 

        if (rating > Book.highestRating){
            Book.highestRating = rating
        }
    }
    summary (){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating (books) {
        let highestRatedBook = books [0]
        for (let i = 1; i < books.length; i++){
            if (books[i].rating > highestRatedBook.rating){
                highestRatedBook = books[i]
            }
        }
        return highestRatedBook
    }
}


module.exports = Book;