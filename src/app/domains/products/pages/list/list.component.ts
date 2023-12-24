import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { error } from 'console';
import { CategoriesService } from '@shared/services/categories.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  @Input() category_id?: string;
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService)
  private productsService = inject(ProductService)
  private categoriesService = inject(CategoriesService);

  constructor(){
    const initProducts: Product[] = [];
    this.products.set(initProducts);
  }

  ngOnChanges(changes: SimpleChanges){
    this.getProducts();
  }

  ngOnInit(){
   this.getCategories();
  }

  addToCart(prod: Product){
    this.cartService.addToCart(prod);
  }

  private getProducts(){
    this.productsService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      }
    });
  }

  private getCategories(){
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      }
    });
  }

}
