import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  fetchData : boolean = !!localStorage.getItem('AllTheCountries');

  constructor(private http:HttpClient) { }

  getAll(){
    if(this.fetchData){

      this.http.get('https://restcountries.com/v2/all').subscribe((data:any)=>{

        localStorage.setItem("allItems",JSON.stringify(data))

      });

    }
      
    return JSON.parse(localStorage.getItem("allItems")!)
  }

}
