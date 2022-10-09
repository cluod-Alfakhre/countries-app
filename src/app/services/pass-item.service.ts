import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class PassItemService {


  constructor() { }
  ngOnInit(){
    
  }
  setItemToLocalStorage(theItem:any){
    localStorage.setItem('currentCountry',JSON.stringify(theItem))
  }
}
