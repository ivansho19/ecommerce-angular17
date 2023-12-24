import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_PRODUCTS = "https://api.escuelajs.co/api/v1/products";
  private http = inject(HttpClient)

  constructor() { }

  getProducts(categorory_id?: string){
    const url = new URL(this.URL_PRODUCTS);
    if(categorory_id){
      url.searchParams.set('categoryId', categorory_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getProductOne(id: string){
    return this.http.get<Product>(this.URL_PRODUCTS+"/"+id);
  }
}
