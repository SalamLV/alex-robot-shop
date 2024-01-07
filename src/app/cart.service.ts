import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  add(product: IProduct) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe( () => {
      console.log(`Product ${product.name} added to cart`);
    })
    
  }

  constructor(private http: HttpClient) { }
}
