import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { mvLeft } from '../animation'; 
import { Carousel } from  '../carousel.js'; 
@Component({
  selector: 'block-prefooter',
  templateUrl: './prefooter.component.html',
  styleUrls: ['./prefooter.component.styl'],
  animations: [
    // mvLeft
  ]
})
export class PrefooterComponent implements OnInit, AfterViewInit {
   //divView: ElementRef;

  constructor( public divView: ElementRef) { }

  public slids;
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
     //this.slids.nativeElement.querySelector("#firstSlider")// = document.querySelector('#firstSlider') ;
    // this.slids = this.elRef.nativeElement.querySelector('#firstSlider') as HTMLElement
    // this.startSlider()
    Carousel(this.divView.nativeElement.querySelector("#firstSlider"))
  }

  

  
 
  
  
     

    

  

  




}
