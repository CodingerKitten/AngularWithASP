import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-remove',
  templateUrl: './book-remove.component.html',
  styleUrls: ['./book-remove.component.css']
})
export class BookRemoveComponent implements OnInit {

  bookIdToRemove: number | null = null;

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
  }

  onRemoveBook(): void {
    if (this.bookIdToRemove != null) {
      this.bookService.removeBook(this.bookIdToRemove).subscribe({
        next: (response) => {
          console.log('Book removed successfully', response);
          this.bookIdToRemove = null; // Optionally reset the property
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    } else {
      // Optionally handle the case where bookIdToRemove is null (e.g., input not provided)
      console.error('Book ID is required');
    }
  }


}
