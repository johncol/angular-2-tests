import { 
    Component,
    OnInit,
    Input
} from '@angular/core';

import { BookComponent } from './../book/index'; 
import {
    Book,
    BookService
} from './../shared/index';

@Component({
    moduleId: module.id,
    directives: [BookComponent],
    selector: 'ang2-book-list',
    templateUrl: 'book-list.component.html',
    styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {

    @Input() books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.books = this.bookService.getBooks()
    }

}