import { Injectable } from '@angular/core';

import { Book } from './book.model';

@Injectable()
export class BookService {

    books: Book[] = [];

    constructor() { 
        let book1: Book = new Book('872364', 'In the heat of the summer', 'John Katsebach');
        let book2: Book = new Book('789567', 'Christine', 'Stephen King');
        let book3: Book = new Book('234987', 'Five little pigs', 'Agatha Christie');
        this.books.push(book1);
        this.books.push(book2);
        this.books.push(book3);
     }

    addBook(book: Book): void {
        this.books.push(book);
    }

    getBook(index: number): Book {
        return this.books[index];
    }

    getBooks(): Book[] {
        return this.books;
    }

}