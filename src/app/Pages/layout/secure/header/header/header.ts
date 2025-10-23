import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  @Input() sidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<boolean>();
  currentTime: string = '';
  userName: string = 'Admin User';
  userRole: string = 'Administrator';
  notifications: any[] = [];
  showNotifications: boolean = false;
  showUserMenu: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.loadNotifications();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  loadNotifications() {
    // Mock notifications - in real app, this would come from a service
    this.notifications = [
      {
        id: 1,
        title: 'New Order Received',
        message: 'Order #12345 has been placed',
        time: '2 minutes ago',
        type: 'order',
        read: false
      },
      {
        id: 2,
        title: 'Low Stock Alert',
        message: 'Product "Widget A" is running low',
        time: '1 hour ago',
        type: 'warning',
        read: false
      },
      {
        id: 3,
        title: 'System Update',
        message: 'System will be updated tonight at 2 AM',
        time: '3 hours ago',
        type: 'info',
        read: true
      }
    ];
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showUserMenu = false;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifications = false;
  }

  markNotificationAsRead(notificationId: number) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
    }
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  onLogout() {
    // Implement logout logic
    this.router.navigate(['/login']);
  }

  onProfile() {
    // Navigate to profile page
    this.router.navigate(['/secure/profile']);
  }

  onSettings() {
    // Navigate to settings page
    this.router.navigate(['/secure/settings']);
  }

  toggleSidebar() {
    this.sidebarToggle.emit(!this.sidebarCollapsed);
  }
}
