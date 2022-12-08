import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consilium } from '../model/consilium.model';

@Injectable({
  providedIn: 'root'
})
export class ConsiliumService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { }

  CreateConsilium(consilium:Consilium):Observable<any>{
    return this.http.post<Consilium[]>(this.apiHost + "api/consilium", consilium, {headers: this.headers});
  }
}
