import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService)
  private productsService = inject(ProductService)

  constructor(){
    const initProducts: Product[] = [];
    this.products.set(initProducts);
  }

  ngOnInit(){
    this.productsService.getProducts().subscribe(products => {
      this.products.set(products);
    }, error=>{
      console.log("Ocurrio un error en el API: ", error);
    });
  }

  addToCart(prod: Product){
    this.cartService.addToCart(prod);
  }

}
