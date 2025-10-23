import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from '../header/header/header';
import { MenuSideBar } from '../menu-side-bar/menu-side-bar/menu-side-bar';
import { Fotter } from '../fotter/fotter/fotter';
import { filter } from 'rxjs/operators';
import { SidebarToggleService } from '../../../../services/sidebar-toggle.service';

@Component({
  selector: 'app-secure-layout',
  imports: [CommonModule, RouterOutlet, Header, MenuSideBar, Fotter],
  templateUrl: './secure-layout.html',
  styleUrl: './secure-layout.css'
})
export class SecureLayout implements OnInit {
  sidebarCollapsed = false;
  isPosPage = false;
  showHeaderFooter = true;
  showSidebar = true;

  constructor(private router: Router, private sidebarToggleService: SidebarToggleService) {}

  ngOnInit() {
    // Check current route on initialization
    this.checkCurrentRoute();
    
    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkCurrentRoute();
      });

    // Listen for sidebar toggle from POS page
    this.sidebarToggleService.toggle$.subscribe((showSidebar) => {
      if (this.isPosPage) {
        this.showSidebar = showSidebar;
        this.sidebarCollapsed = !showSidebar;
      }
    });
  }

  checkCurrentRoute() {
    const currentUrl = this.router.url;
    this.isPosPage = currentUrl.includes('/pos');
    
    if (this.isPosPage) {
      // On POS page: hide everything by default for full-screen experience
      this.sidebarCollapsed = true;
      this.showHeaderFooter = false;
      this.showSidebar = false;
      // Reset service state for POS page
      this.sidebarToggleService.resetState();
    } else {
      // On other pages: normal behavior
      this.sidebarCollapsed = false;
      this.showHeaderFooter = true;
      this.showSidebar = true;
    }
  }

  onSidebarToggle(collapsed: boolean) {
    if (this.isPosPage) {
      // Special POS behavior: toggle sidebar visibility, keep header/footer hidden
      this.sidebarCollapsed = !collapsed;
      this.showSidebar = !collapsed;
      this.showHeaderFooter = false; // Always hide header/footer on POS page
    } else {
      // Normal behavior for other pages
      this.sidebarCollapsed = collapsed;
      this.showSidebar = true;
      this.showHeaderFooter = true;
    }
  }
}
