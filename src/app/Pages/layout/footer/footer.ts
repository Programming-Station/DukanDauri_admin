import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  newsletterEmail: string = '';
  currentYear: number = new Date().getFullYear();

  onNewsletterSubmit() {
    if (this.newsletterEmail.trim()) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      // Implement newsletter subscription
      this.newsletterEmail = '';
      alert('Thank you for subscribing to our newsletter!');
    }
  }
}
