import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../interfaces/category.type';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>('http://localhost:3000/categories')
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
