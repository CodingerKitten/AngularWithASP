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
  selectedBook: Book | null = null;
  showEditForm: boolean = false;
  showDeleteForm: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
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
