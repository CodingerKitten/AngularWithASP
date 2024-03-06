import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  searchTitle: string = '';
  searchAuthor: string = '';
  selectedBook: Book | null = null;
  showEditForm: boolean = false;
  showDeleteForm: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadInit();
  }

  loadInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  searchBooks(): void {
    if (this.searchTitle) {
      this.bookService.getBookByTitle(this.searchTitle).subscribe((books: Book[]) => {
        this.books = books;
      });
    } else if (this.searchAuthor) {
      this.bookService.getBookByAuthor(this.searchAuthor).subscribe((books: Book[]) => {
        this.books = books;
      });
    } else {
      this.loadInit(); //calling auto refresh
    }
  }

  viewDetails(bookId: number) {
    this.router.navigate(['/book-details', bookId]);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.showEditForm = false;
    this.showDeleteForm = false;
  }
}
