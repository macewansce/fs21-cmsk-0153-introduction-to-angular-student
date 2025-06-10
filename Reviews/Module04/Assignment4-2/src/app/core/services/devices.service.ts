import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {

  readonly baseUrl: string = 'http://localhost:3000/devices';

  constructor(private httpClient: HttpClient) {}


}
