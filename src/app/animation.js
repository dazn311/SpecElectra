import { trigger, transition, style, animate, state } from '@angular/animations';  

export let mvLeft = trigger('moveLeft', [
    state('open', style({
      marginLeft: '500px',
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      marginLeft: '-1650px',
      backgroundColor: 'green'
    })),
    // transition('void <=> *', [
    //     style({ transform: 'translateX(500%)' }),
    //     animate(2000) 
    //     // animate(15000)
    //   ]),
    transition('void <=> *', [
      animate(9000, style({marginLeft: '-1650px'})),
      animate(9000, style({marginLeft: '0px'})),
      animate(9000, style({marginLeft: '-1650px'})),
      animate(9000, style({marginLeft: '0px'})),
      animate(9000, style({marginLeft: '-1650px'})),
      animate(9000, style({marginLeft: '0px'})),
      // animate(15000)
    ])


  ]);