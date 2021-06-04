import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  readonly baseUrl = 'https://bootcamp-dio-santander-trn.herokuapp.com';

  constructor(private http:HttpClient) { }


  async getStocks(): Promise<Stock[]> {
     return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}

