import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:7024/api/books'; 

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  getBookById(bookId: number): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.get(url);
  }

  removeBook(bookId: number): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.delete(url);
  }

  editBook(bookId: number, book: Book): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`
    return this.http.put(url, book, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }
}
