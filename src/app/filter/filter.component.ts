import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'; 

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'block-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.styl']
})
export class FilterComponent implements OnInit {

  constructor(public appServe: AppService) { }
  fb = []
  
  ngOnInit() {
    
  }

  cheketFb(str: string){
    let ss = this.fb.join(' ')
     if(ss.includes(str)){
      this.fb = this.fb.filter(item => item != str)
     }else {
       this.fb.push(str)
     }
    
     
    
    this.appServe.filerBrands = this.fb
    this.appServe.getFilter()
  }

}
