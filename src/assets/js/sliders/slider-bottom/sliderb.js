// sliderIndex = 0
//   sliders = ".owl-carousel>.item"
//   slids 

//   ngAfterViewInit() {
//     // this.slids = document.querySelector('#firstSlider') as HTMLElement 
//     this.slids = this.elRef.nativeElement.querySelector('#firstSlider') as HTMLElement
//     this.startSlider()
//   }

//  showSlideres (n: number) {
//     // if (n < 1){
//     //   sliderIndex = slids.length
//     // }else if (n > slids.length){
//     //   sliderIndex = 1
//     // }
//     console.log('slids',this.slids);
//     this.sliderIndex = this.sliderIndex - n
//     console.log('sliderIndex',this.sliderIndex);

//     if (this.sliderIndex <= -1650){
//       this.sliderIndex = 0
//     }
//     //margin-left: -1650px;
//     //let slids2 = document.querySelector('#firstSlider') as HTMLElement 
//     let ml = String(this.sliderIndex) + "px;"
//     this.slids.style.marginLeft = ml
//     // slids2.style.marginLeft = ml

//     console.log('ml',ml);

//   }

//   startSlider(){
    
//     console.log('startSlider');
    
//     setInterval(() => {
//       console.log('startSlider in timeout');
//       this.showSlideres(200)
//     }, 1500)

//   }