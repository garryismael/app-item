import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItemList } from '../models/itemlist.model';

@Injectable({
  providedIn: 'root'
})
export class ItemlistsService {
  private endPoint = 'http://intern-test.hazenfield.com/itemlists';
  constructor(private http: HttpClient) { }

  getAllListItems(): Observable<IItemList[]> {
    return this.http.get<IItemList[]>(this.endPoint);
  }

  postListItems(list: IItemList): Observable<IItemList> {
    return this.http.post<IItemList>(this.endPoint, list);
  }

  patchAllListItems(itemlists: IItemList): Observable<any> {
    return this.http.patch<any>(`${this.endPoint}/${itemlists.id}`, itemlists);
  }

  putAllListItems(itemsLists: IItemList): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${itemsLists.id}`, itemsLists);
  }

  deleteListItems(itemsList: IItemList): Observable<any> {
    return this.http.delete<any>(`${this.endPoint}/${itemsList.id}`);
  }
}
