import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor (private http: HttpClient) {}

    public getItem(): Observable<Item> {
        return this.http.get<Item>(`${this.apiServerUrl}/api/item/get/2`);
    }

    public createItem(item: Item): Observable<Item> {
        return this.http.post<Item>(`${this.apiServerUrl}/api/item/create/item`, item);
    }
}
