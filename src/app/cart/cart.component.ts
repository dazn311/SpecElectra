import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../app.component';

@Component({
  selector: 'block-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.styl']
})
export class CartComponent implements OnInit {
  @Input() carts: Cart[] = []
  @Input() cartt2: Cart 
  constructor() { }

  ngOnInit() {
  }

}
