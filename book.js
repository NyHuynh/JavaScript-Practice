
class BookList{
    constructor(readNum, unreadNum, lastBook={}, currentBook = {}, nextBook = {}, bookList = []){
        this.readNum = bookList.filter(book => book.isRead===true).length;
        this.unreadNum = bookList.length - this.readNum;
        this.lastBook = lastBook;
        this.currentBook = currentBook;
        this.nextBook = nextBook;
        this.bookList = bookList;
    }
    updateBookList(){
        this.readNum = this.bookList.filter(book => book.isRead === true).length;
        this.unreadNum = this.bookList.length - this.readNum;
    }
    setLastBook(book){
        this.lastBook = book;
    }
    setCurrentBook(book){
        this.currentBook = book;
    }
    setNextBook(){
        this.nextBook = this.bookList.find(unreadBook => !(unreadBook.isRead));
    }
    addBook(book){
        this.bookList.push(book);
        if(Object.keys(this.nextBook).length === 0){
            this.setNextBook();
        }
        this.updateBookList();
    }
    finishCurrentBook(){
        this.currentBook.isRead = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.setCurrentBook(this.nextBook);
        this.setNextBook();
        this.updateBookList();
    }
}

class Book{
    constructor(title, genre, author, isRead){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this.readDate = new Date();
        
    }
}

const bookList = new BookList();
const book1 = new Book('Book 1', 'novel', 'ny', false);
const book2 = new Book('Book 2', 'novel', 'ny', false);
const book3 = new Book('Book 3', 'novel', 'ny', false);
bookList.addBook(book1);
bookList.addBook(book2);
bookList.addBook(book3);
bookList.setCurrentBook(book1);
console.log(bookList);

bookList.finishCurrentBook();
console.log(bookList);