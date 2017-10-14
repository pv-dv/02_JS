class Book {
    constructor (title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
    
    describeBook (){
        
        var description = ("Book has title: " + this.title +
                "\nWritten by: " + this.author +
                "\nHas been read? " +this.isRead);
        return description;
    }
}

var witcher = new Book("Witcher", "Andrzej Sapkowski", true);
var borne = new Book("Borne Ultimatum", "Robert Ludlum", false);
var requirem = new Book("Requiem for American Dream", "Noam Chomsky", false);


var booksArray = [witcher, borne, requirem];

console.log(booksArray);

function noOfRead(booksArray) {
    var noOfReadBooks;
    
    booksArray.forEach(function(element, index){
        console.log(booksArray.element.title);
        
    });
    
}
