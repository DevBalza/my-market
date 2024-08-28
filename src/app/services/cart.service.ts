import { Injectable } from '@angular/core';
import { Result } from '../interfaces/i-my-market';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Result[] = [];

  addToCart(product: Result) {
    this.cart.push(product);
  }

  getCart(): Result[] {
    return this.cart;
  }

  removeFromCart(product: Result) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
  }

  clearCart() {
    this.cart = [];
  }
}
