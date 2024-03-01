import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-remove',
  templateUrl: './book-remove.component.html',
  styleUrls: ['./book-remove.component.css']
})
export class BookRemoveComponent implements OnInit {
  @Input() bookIdToRemove: number | null | undefined;

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
  }

  removeBook(): void {
    if (this.bookIdToRemove != null) {
      this.bookService.removeBook(this.bookIdToRemove).subscribe({
        next: (response) => {
          console.log('Book removed successfully', response);
          this.bookIdToRemove = null; 
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    } else {
      console.error('Book ID is required');
    }
  }


}
