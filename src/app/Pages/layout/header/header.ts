import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  searchQuery: string = '';
  showAccountDropdown: boolean = false;
  showCategoriesDropdown: boolean = false;
  cartCount: number = 3; // This would come from a service
  wishlistCount: number = 5; // This would come from a service

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Implement search functionality
      // this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  toggleAccountDropdown(event: Event) {
    event.preventDefault();
    this.showAccountDropdown = !this.showAccountDropdown;
    this.showCategoriesDropdown = false; // Close other dropdowns
  }

  toggleCategoriesDropdown(event: Event) {
    event.preventDefault();
    this.showCategoriesDropdown = !this.showCategoriesDropdown;
    this.showAccountDropdown = false; // Close other dropdowns
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.showAccountDropdown = false;
      this.showCategoriesDropdown = false;
    }
  }
}
