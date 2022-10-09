import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PassItemService } from 'src/app/services/pass-item.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  theItem:any;
  constructor(private passService:PassItemService, private location:Location) { }

  ngOnInit(): void { 

    this.theItem = JSON.parse(localStorage.getItem('currentCountry')!);
    console.log(this.theItem)

  }

  goBack(){
    this.location.back()
  }
}
