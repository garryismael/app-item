import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private endPoint = 'http://intern-test.hazenfield.com/items';
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.endPoint);
  }

  getItem(id: number): Observable<IItem> {
    return this.http.get<IItem>(`${this.endPoint}/${id}`);
  }

  postItem(item: IItem): Observable<any> {
    return this.http.post<any>(this.endPoint, item);
  }

  putItem(item: IItem): Observable<any> {
    return this.http.put(`${this.endPoint}/${item.id}`, item);
  }

  patchItem(item: IItem): Observable<any> {
    return this.http.patch(`${this.endPoint}/${item.id}`, item);
  }

  deleteItem(item: IItem): Observable<any> {
    return this.http.delete(`${this.endPoint}/${item.id}`);
  }
}
