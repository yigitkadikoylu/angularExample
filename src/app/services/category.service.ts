import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Categories } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable()
export class CategoryService {

  path = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse ) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'bir hata oluştu ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage);

  }
}
