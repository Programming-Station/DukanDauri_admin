import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem, MenuSection } from '../../../../../models/shared/menuSideBar.model';

@Component({
  selector: 'app-menu-side-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-side-bar.html',
  styleUrl: './menu-side-bar.css'
})
export class MenuSideBar implements OnInit {
  @Input() isCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<boolean>();
  activeMenuItem: string = '';

  menuSections: MenuSection[] = [
    {
      title: 'Dashboard',
      items: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          icon: 'fas fa-tachometer-alt',
          route: '/secure/dashboard',
          hasPermission: true
        }
      ]
    },
    {
      title: 'Menu Management',
      items: [
        {
          id: 'menu-management',
          title: 'Menu Management',
          icon: 'fas fa-bars',
          route: '',
          hasPermission: true,
          children: [
            {
              id: 'menu',
              title: 'Menu',
              icon: 'fas fa-list',
              route: '/secure/menu',
              hasPermission: true
            },
            {
              id: 'menu-permission',
              title: 'Menu Permission',
              icon: 'fas fa-shield-alt',
              route: '/secure/menu-permission',
              hasPermission: true,
              children: [
                {
                  id: 'sub-menu',
                  title: 'Sub Menu',
                  icon: 'fas fa-bars',
                  route: '/secure/sub-menu',
                  hasPermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Master Data',
      items: [
        {
          id: 'master-data',
          title: 'Master Data',
          icon: 'fas fa-database',
          route: '',
          hasPermission: true,
          children: [
            {
              id: 'country',
              title: 'Country',
              icon: 'fas fa-globe',
              route: '/secure/master/country',
              hasPermission: true
            },
            {
              id: 'state',
              title: 'State',
              icon: 'fas fa-map-marker-alt',
              route: '/secure/master/state',
              hasPermission: true
            },
            {
              id: 'city',
              title: 'City',
              icon: 'fas fa-city',
              route: '/secure/master/city',
              hasPermission: true
            },
            {
              id: 'status',
              title: 'Status',
              icon: 'fas fa-info-circle',
              route: '/secure/master/status',
              hasPermission: true
            },
            {
              id: 'govt-document',
              title: 'Govt Document',
              icon: 'fas fa-file-alt',
              route: '/secure/master/govt-document',
              hasPermission: true
            },
            {
              id: 'product-color',
              title: 'Product Color',
              icon: 'fas fa-palette',
              route: '/secure/master/product-color',
              hasPermission: true
            }
          ]
        }
      ]
    },
    {
      title: 'E-commerce',
      items: [
        {
          id: 'pos',
          title: 'POS',
          icon: 'fas fa-cash-register',
          route: '/secure/pos',
          hasPermission: true
        },
        {
          id: 'category',
          title: 'Category',
          icon: 'fas fa-tags',
          route: '/secure/category',
          hasPermission: true
        },
        {
          id: 'product',
          title: 'Product',
          icon: 'fas fa-box',
          route: '/secure/product',
          hasPermission: true
        },
        {
          id: 'customer',
          title: 'Customer',
          icon: 'fas fa-users',
          route: '/secure/customer',
          hasPermission: true
        },
        {
          id: 'vendor',
          title: 'Vendor',
          icon: 'fas fa-truck',
          route: '/secure/vendor',
          hasPermission: true
        },
        {
          id: 'shop',
          title: 'Shop',
          icon: 'fas fa-store',
          route: '/secure/shop',
          hasPermission: true
        }
      ]
    },
    {
      title: 'Purchase Management',
      items: [
        {
          id: 'purchase-order',
          title: 'Purchase Order',
          icon: 'fas fa-shopping-cart',
          route: '/secure/purchase-order',
          hasPermission: true
        },
        {
          id: 'purchase-item',
          title: 'Purchase Item',
          icon: 'fas fa-clipboard-list',
          route: '/secure/purchase-item',
          hasPermission: true
        },
        {
          id: 'payment-mode',
          title: 'Payment Mode',
          icon: 'fas fa-credit-card',
          route: '/secure/payment-mode',
          hasPermission: true
        }
      ]
    },
    {
      title: 'User Management',
      items: [
        {
          id: 'role',
          title: 'Role',
          icon: 'fas fa-user-tag',
          route: '/secure/role',
          hasPermission: true
        },
        {
          id: 'role-permission',
          title: 'Role Permission',
          icon: 'fas fa-user-shield',
          route: '/secure/role-permission',
          hasPermission: true
        }
      ]
    },
    {
      title: 'System',
      items: [
        {
          id: 'module',
          title: 'Module',
          icon: 'fas fa-cube',
          route: '/secure/module',
          hasPermission: true
        },
        {
          id: 'unit-type',
          title: 'Unit Type',
          icon: 'fas fa-balance-scale',
          route: '/secure/unit-type',
          hasPermission: true
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          id: 'help-desk',
          title: 'Help Desk',
          icon: 'fas fa-question-circle',
          route: '/secure/help-desk',
          hasPermission: true
        },
        {
          id: 'feedback',
          title: 'Feedback',
          icon: 'fas fa-comment-dots',
          route: '/secure/feedback',
          hasPermission: true
        },
        {
          id: 'contact-us',
          title: 'Contact Us',
          icon: 'fas fa-envelope',
          route: '/secure/contact-us',
          hasPermission: true
        }
      ]
    },
    {
      title: 'Reports',
      items: [
        {
          id: 'analytics',
          title: 'Analytics',
          icon: 'fas fa-chart-bar',
          route: '/secure/analytics',
          hasPermission: true
        },
        {
          id: 'reports',
          title: 'Reports',
          icon: 'fas fa-file-alt',
          route: '/secure/reports',
          hasPermission: true
        }
      ]
    },
    {
      title: 'Settings',
      items: [
        {
          id: 'profile',
          title: 'Profile',
          icon: 'fas fa-user-cog',
          route: '/secure/profile',
          hasPermission: true
        },
        {
          id: 'settings',
          title: 'Settings',
          icon: 'fas fa-cog',
          route: '/secure/settings',
          hasPermission: true
        }
      ]
    }
  ];

  expandedItems: Set<string> = new Set();

  ngOnInit() {
    // Set initial active menu item based on current route
    this.setActiveMenuItem();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggle.emit(this.isCollapsed);
  }

  setActiveMenuItem() {
    // This would typically be set based on the current route
    // For now, we'll set dashboard as default
    this.activeMenuItem = 'dashboard';
  }

  onMenuItemClick(menuItem: MenuItem) {
    this.activeMenuItem = menuItem.id;
    // Navigation will be handled by routerLink in the template
  }

  hasActiveChild(item: MenuItem): boolean {
    if (item.children) {
      return item.children.some((child: MenuItem) => child.id === this.activeMenuItem);
    }
    return false;
  }

  toggleExpanded(itemId: string) {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }

  onMenuClick(item: MenuItem) {
    if (item.children && item.children.length > 0) {
      // If it has children, toggle expand/collapse
      this.toggleExpanded(item.id);
    } else {
      // If it's a regular menu item, set as active
      this.activeMenuItem = item.id;
    }
  }
}
