import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private URL_PRODUCTS_CATEGORIES = "https://api.escuelajs.co/api/v1/categories";
  private http = inject(HttpClient)

  constructor() { }

  getAllCategories(){
    return this.http.get<Category[]>(this.URL_PRODUCTS_CATEGORIES);
  }
}
