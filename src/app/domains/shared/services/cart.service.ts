import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(()=> {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  addToCart(product: Product){
    this.cart.update(statePrev => [... statePrev, product]);
  }

}