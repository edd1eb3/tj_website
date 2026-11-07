import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Book {
  id: number;
  title: string;
  image: string;
  synopsis?: string;
  publisher: string;
  publicationDate: string;
  isbn10: string;
  isbn13: string;
  purchaseLink?: string;
}

interface BooksResponse {
  books: Book[];
}

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.error = '';

    this.http.get<BooksResponse>('books.json').subscribe(
      (data: BooksResponse) => {
        console.log('Books loaded successfully:', data);
        this.books = data.books;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading books:', error);
        this.error = 'Failed to load books. Please try again later.';
        this.loading = false;
      }
    );
  }

  selectBook(book: Book): void {
    this.selectedBook = book;
  }

  closeDetails(): void {
    this.selectedBook = null;
  }
}
