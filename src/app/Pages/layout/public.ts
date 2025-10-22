import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-public',
  imports: [FormsModule, CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './public.html',
  styleUrl: './public.css'
})
export class Public {
  newsletterEmail: string = '';

  // Featured Categories Data
  featuredCategories = [
    {
      name: 'Electronics',
      slug: 'electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      icon: 'fas fa-laptop',
      count: 1250
    },
    {
      name: 'Clothing & Fashion',
      slug: 'clothing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      icon: 'fas fa-tshirt',
      count: 890
    },
    {
      name: 'Home & Garden',
      slug: 'home',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      icon: 'fas fa-home',
      count: 650
    },
    {
      name: 'Books & Media',
      slug: 'books',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      icon: 'fas fa-book',
      count: 420
    },
    {
      name: 'Sports & Fitness',
      slug: 'sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      icon: 'fas fa-dumbbell',
      count: 380
    },
    {
      name: 'Beauty & Health',
      slug: 'beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      icon: 'fas fa-spa',
      count: 290
    }
  ];

  // Featured Products Data
  featuredProducts = [
    {
      name: 'Wireless Bluetooth Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviewCount: 128,
      isOnSale: true,
      isNew: false
    },
    {
      name: 'Smart Fitness Watch',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      price: 199.99,
      originalPrice: null,
      rating: 4.8,
      reviewCount: 89,
      isOnSale: false,
      isNew: true
    },
    {
      name: 'Organic Cotton T-Shirt',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.2,
      reviewCount: 56,
      isOnSale: true,
      isNew: false
    },
    {
      name: 'Premium Coffee Maker',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      price: 89.99,
      originalPrice: null,
      rating: 4.6,
      reviewCount: 73,
      isOnSale: false,
      isNew: false
    },
    {
      name: 'Yoga Mat Pro',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
      price: 45.99,
      originalPrice: 65.99,
      rating: 4.4,
      reviewCount: 42,
      isOnSale: true,
      isNew: false
    },
    {
      name: 'LED Desk Lamp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      price: 35.99,
      originalPrice: null,
      rating: 4.3,
      reviewCount: 67,
      isOnSale: false,
      isNew: true
    }
  ];

  // Special Offers Data
  specialOffers = [
    {
      title: 'Flash Sale',
      description: 'Up to 70% off on selected items',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=300&fit=crop',
      discount: 70,
      link: '/flash-sale'
    },
    {
      title: 'New Arrivals',
      description: 'Fresh products just arrived',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      discount: 30,
      link: '/new-arrivals'
    },
    {
      title: 'Clearance Sale',
      description: 'Limited time clearance deals',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      discount: 50,
      link: '/clearance'
    }
  ];

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  onNewsletterSubmit() {
    if (this.newsletterEmail.trim()) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      // Implement newsletter subscription
      this.newsletterEmail = '';
      alert('Thank you for subscribing to our newsletter!');
    }
  }

}
