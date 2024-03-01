import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book?: Book | null = null;

  constructor(private bookService: BookService) { }
  ngOnInit() {
  }
}
