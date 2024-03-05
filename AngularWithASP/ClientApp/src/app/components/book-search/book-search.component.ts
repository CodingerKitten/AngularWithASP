import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchTitle: string = '';
  searchAuthor: string = '';
  books: any[] = [];

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    
  }
  searchByTitle(): void {
    if (this.searchTitle) {
      this.bookService.getBookByTitle(this.searchTitle).subscribe({
        next: (books) => this.books = books,
        error: (error) => console.error("Error", error)
      });
    }
  }
  searchByAuthor(): void {
    if (this.searchAuthor) {
      this.bookService.getBookByAuthor(this.searchAuthor).subscribe({
        next: (books) => this.books = books,
        error: (error) => console.error("Error", error)
      });
    }
  }
}
