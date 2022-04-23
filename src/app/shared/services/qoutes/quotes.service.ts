import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  readonly url: string = 'http://localhost:3000/api/quote'

  constructor(
    private http: HttpClient
  ) { }

  getQuotesList(): Observable<any> {
    return this.http.get(this.url);
  }

  addPost(payload: any): Observable<any> {
    return this.http.post(this.url, payload);
  }

  updatePost(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, payload);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
