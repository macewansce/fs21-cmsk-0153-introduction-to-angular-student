import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  readonly baseUrl: string = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) {}


}
