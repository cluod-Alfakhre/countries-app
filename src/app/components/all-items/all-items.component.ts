import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  allItems:any=[];
  
  toggleRegion = false;

  filterForm = new FormGroup({
    search:new FormControl('')
  })

  constructor(private service:FetchApiService) { }

  ngOnInit(): void {

    this.allItems = this.service.getAll();

    this.filterForm.controls['search'].valueChanges.subscribe(

      ()=> this.filterItems('name', this.filterForm.controls['search'].value)

      )

  }

  filterItems(filterBy:string, keyWord:string){
    
    this.allItems = this.service.getAll();
    
    if(keyWord != '' && !!keyWord.trim().length){

      this.allItems = this.allItems.filter( (item:any)=> {

        if(filterBy == 'name'){
          return item.name.toLowerCase().indexOf(keyWord) != -1
        }
        else{
          return item.region.toLowerCase().indexOf(keyWord) != -1
        }

      })

    }
    else{//if keyword is empty
      this.allItems = this.service.getAll()
    }

    return this.allItems;
    
  }
}
