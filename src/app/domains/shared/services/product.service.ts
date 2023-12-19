import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_PRODUCTS = "https://api.escuelajs.co/api/v1/products";
  private http = inject(HttpClient)

  constructor() { }

  getProducts(){
    return this.http.get<Product[]>(this.URL_PRODUCTS);
  }
}
