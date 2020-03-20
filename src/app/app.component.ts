import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AppService } from './app.service';


export interface Cart {
  id: number
  articul: string
  picUrl: string
  title: string
  compare: boolean
}

@Component({
  selector: 'block-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{

  constructor( public appServices: AppService){}
  aps ;

  ngOnInit(){
    this.aps = this.appServices.result;
    console.log('aps',this.aps);
     
    console.log('appServices.getFilter',this.appServices.getFilter());
    
   
  }
  title = 'Спец Электрик';
  // public carts: Cart[] =  [ 
  public carts  = of ( [
    {id: 1, articul: "00A820", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 2, articul: "00A821", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 3, articul: "00A822", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 4, articul: "00A823", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 5, articul: "00A824", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 6, articul: "00A825", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 7, articul: "00A826", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 8, articul: "00A827", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 9, articul: "00A828", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 10, articul: "00A829", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 11, articul: "00A830", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
    {id: 12, articul: "00A831", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false},
  
  ])

  public cartt: Cart = {id: 12, articul: "00A820", picUrl: "/assest/images/cart_ico.png", title: "Diff automatus", compare: false}
   
}
