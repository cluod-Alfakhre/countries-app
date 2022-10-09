import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  fetchData : boolean = !localStorage.getItem('allItems');

  constructor(private http:HttpClient) { }

  getAll(){

    return this.http.get('https://restcountries.com/v2/all')
      
  }

}
