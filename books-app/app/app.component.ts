import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

import { 
  Book,
  BookService,
  BookListComponent
} from './books/index';

@Component({
    moduleId: module.id,
    selector: 'ang2-books-app',
    templateUrl: 'app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      BookListComponent
    ],
    providers: [
      HTTP_PROVIDERS,
      BookService
    ]
})
export class AppComponent implements OnInit {

    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.books = this.bookService.getBooks()
    }

}