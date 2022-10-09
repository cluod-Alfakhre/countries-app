import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PassItemService } from 'src/app/services/pass-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() theItem:any;

  constructor(private passService:PassItemService, private router:Router) { }

  ngOnInit(): void {
    
  }

  passItem(item:any){
    this.passService.setItemToLocalStorage(item) ;
    console.log(localStorage.getItem('currentCountry'))
    this.router.navigate(['country'])
  }
}
