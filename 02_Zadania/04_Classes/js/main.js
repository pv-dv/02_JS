class Book {
    constructor (title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
    
    describeBook (){  
        var answer = (this.isRead == false)? "No":"Yes";  
        
        var description = ("Book title is: " + this.title + " & was written by: " + this.author + ". Was it read? " + answer);
    
        return description;
    }
}

var witcher = new Book("Witcher", "Andrzej Sapkowski", true);
var borne = new Book("Borne Ultimatum", "Robert Ludlum", false);
var requirem = new Book("Requiem for American Dream", "Noam Chomsky", false);

var booksArray = [witcher, borne, requirem];

function noOfRead(booksArray) {
    var noOfReadBooks = 0;
    
    for (var i=0; i < booksArray.length; i++){
        if (booksArray[i].isRead == true) {
            noOfReadBooks += 1;
        }
        var bookDesc = booksArray[i].describeBook();
        console.log(bookDesc);
    }
    
    return noOfReadBooks;
}

var noOfReadBooks = noOfRead(booksArray);
var has = "has";
if (noOfReadBooks > 1){
    has = "have";
}
console.log(noOfReadBooks + " out of " + booksArray.length +" books "+ has + " been read.")
