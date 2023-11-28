import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { URL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(category_id?: string) {
    let url = 'https://api.escuelajs.co/api/v1/products';
    if(category_id){
      url += '?categoryId=' + category_id;
    }
    return this.http.get<Product[]>(url);
  }
  

  getProduct(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

}
