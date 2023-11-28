import { Injectable, signal, computed } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  add(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
