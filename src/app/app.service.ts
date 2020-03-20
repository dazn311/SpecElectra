import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public cartItems  =  [
    {id: 1, articul: "00A820", picUrl: "assets/images/ad14.png", title: "Дифф. автоматический выключатель IEK АД14", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "10"},
    {id: 2, articul: "00A821", picUrl: "assets/images/ad14.png", title: "Дифф. автоматический выключатель IEK АД14", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "20"},
    {id: 3, articul: "00A822", picUrl: "assets/images/ad14.png", title: "Дифф. автоматический выключатель IEK АД14", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "3", nomTok: "30"},
    {id: 4, articul: "00A823", picUrl: "assets/images/ad14.png", title: "Автоматический выключатель IEK АД14", compare: false, brand: "EIK", type: "Автомат", series: "S", countPolus: "2", nomTok: "10"},
    {id: 5, articul: "00A824", picUrl: "assets/images/ad14.png", title: "Автоматический  выключатель IEK АД14", compare: false, brand: "EIK", type: "Автомат", series: "S", countPolus: "2", nomTok: "20"},
    {id: 6, articul: "00A825", picUrl: "assets/images/ad14.png", title: "Автоматический выключатель IEK АД14", compare: false, brand: "EIK", type: "Автомат", series: "N", countPolus: "3", nomTok: "30"},
    {id: 7, articul: "00A826", picUrl: "assets/images/ad14.png", title: "Дифф. автоматический выключатель IEK АД14", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "10"},
    {id: 8, articul: "00A827", picUrl: "assets/images/ad14.png", title: "УЗО IEK АД14", compare: false, brand: "EIK", type: "УЗО", series: "S", countPolus: "3", nomTok: "20"},
    {id: 9, articul: "00A828", picUrl: "assets/images/ad14.png", title: "УЗО IEK АД14", compare: false, brand: "EIK", type: "УЗО", series: "N", countPolus: "2", nomTok: "30"},
    {id: 10, articul: "00A829", picUrl: "assets/images/ad12-IEK.png", title: "Дифф. автоматический выключатель IEK АД12", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "10"},
    {id: 11, articul: "00A830", picUrl: "assets/images/ad12-IEK.png", title: "Дифф. автоматический выключатель IEK АД12", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "3", nomTok: "20"},
    {id: 12, articul: "00A831", picUrl: "assets/images/ad12-IEK.png", title: "Дифф. автоматический выключатель IEK АД12", compare: false, brand: "EIK", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "30"},
    {id: 13, articul: "00A832", picUrl: "assets/images/abb.jpg", title: "ABB DS202 Дифф. автоматический выключатель 4мод. 10А  6kA(АС)", compare: false, brand: "ABB", type: "Диф. автомат", series: "S", countPolus: "3", nomTok: "10"},
    {id: 14, articul: "00A833", picUrl: "assets/images/abb.jpg", title: "ABB DS202 Дифф. автоматический выключатель 4мод. 20А  6kA(АС)", compare: false, brand: "ABB", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "20"},
    {id: 15, articul: "00A834", picUrl: "assets/images/Schneider.png", title: "Schneider автоматический выключатель 1П+Н 16А 30мА", compare: false, brand: "Schneider", type: "Диф. автомат", series: "S", countPolus: "3", nomTok: "30"},
    {id: 16, articul: "00A835", picUrl: "assets/images/Schneider.png", title: "Schneider автоматический выключатель 1П+Н 16А 20мА", compare: false, brand: "Schneider", type: "Диф. автомат", series: "N", countPolus: "2", nomTok: "20"},
    {id: 17, articul: "00A836", picUrl: "assets/images/keaz.jpg", title: "Автоматический выключатель КЭАЗ ВА57-32", compare: false, brand: "KEAZ", type: "Диф. автомат", series: "N", countPolus: "2", nomTok: "30"},
    {id: 18, articul: "00A837", picUrl: "assets/images/keaz.jpg", title: "Автоматический выключатель КЭАЗ ВА57-35", compare: false, brand: "KEAZ", type: "Диф. автомат", series: "S", countPolus: "2", nomTok: "10"},
  
  ]

  // filerBrands = [
  //   "EIK", "ABB", "Schneider", "КЭАЗ", 
  // ]
  filerBrands = []

  filerType = [
    "brand", "type", "series", "countPolus", "nomTop",
  ]

  public result = this.cartItems.filter(item => {
     let fb = this.filerBrands.join(' ');
    
    return fb.includes(item.brand)
   })

   public getFilter() {
     
      let brands = this.filerBrands.join(' ')
      console.log(brands);
      if (this.filerBrands.length == 0){
        return this.cartItems
      } 
      let fb = this.filerBrands.join(' ');
     return this.cartItems.filter(item => {
      
     
     return fb.includes(item.brand)
    })
     
   }


}
