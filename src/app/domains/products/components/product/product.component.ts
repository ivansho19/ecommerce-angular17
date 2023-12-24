import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from "@shared/pipes/reverse.pipe";
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref]
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit(this.product);
  }

}
