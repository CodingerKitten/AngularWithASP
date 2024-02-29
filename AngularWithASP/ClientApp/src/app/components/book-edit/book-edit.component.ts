import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = { title: '', author: '' };

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
  }

  editBook(): void {
    if (this.book.id) {
      this.bookService.editBook(this.book.id, this.book).subscribe({
        next: (result) => console.log('Book updated', result),
        error: (error) => console.log('Error updating book', error)
      });
    } else {
      console.log('Id required');
    }
  }
}
