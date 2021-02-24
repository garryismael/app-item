import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly endPoint =
    'http://intern-test.hazenfield.com/api-token-auth/';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post<any>(this.endPoint, user);
  }
}
