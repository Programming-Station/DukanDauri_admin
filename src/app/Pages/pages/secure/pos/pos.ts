import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarToggleService } from '../../../../services/sidebar-toggle.service';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-pos',
  imports: [CommonModule],
  templateUrl: './pos.html',
  styleUrl: './pos.css'
})
export class Pos implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150x120/3b82f6/ffffff?text=Laptop' },
    { id: 2, name: 'Mouse', price: 29.99, image: 'https://via.placeholder.com/150x120/10b981/ffffff?text=Mouse' },
    { id: 3, name: 'Keyboard', price: 79.99, image: 'https://via.placeholder.com/150x120/f59e0b/ffffff?text=Keyboard' },
    { id: 4, name: 'Monitor', price: 299.99, image: 'https://via.placeholder.com/150x120/ef4444/ffffff?text=Monitor' },
    { id: 5, name: 'Headphones', price: 149.99, image: 'https://via.placeholder.com/150x120/8b5cf6/ffffff?text=Headphones' },
    { id: 6, name: 'Webcam', price: 89.99, image: 'https://via.placeholder.com/150x120/06b6d4/ffffff?text=Webcam' }
  ];

  cartItems: CartItem[] = [];

  constructor(private sidebarToggleService: SidebarToggleService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(item);
    }
  }

  removeFromCart(item: CartItem) {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  get tax(): number {
    return this.subtotal * 0.10; // 10% tax
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  processPayment() {
    if (this.cartItems.length === 0) {
      alert('Cart is empty!');
      return;
    }
    
    alert(`Payment processed successfully!\nTotal: $${this.total.toFixed(2)}`);
    this.clearCart();
  }

  toggleSidebar() {
    this.sidebarToggleService.toggleSidebar();
  }
}
