import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UnauthService {

  readonly url: string = 'http://localhost:3000/api/user'

  constructor(
    private http: HttpClient
  ) { }

  signup(payload: any): Observable<any> {
    return this.http.post(`${this.url}/signup`, payload);
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.url}/login`, payload);
  }
}
