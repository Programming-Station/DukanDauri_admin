import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fotter',
  imports: [CommonModule],
  templateUrl: './fotter.html',
  styleUrl: './fotter.css'
})
export class Fotter implements OnInit {
  @Input() sidebarCollapsed = false;
  currentYear: number = new Date().getFullYear();
  appVersion: string = '1.0.0';
  systemInfo: any = {
    uptime: '2 days, 14 hours',
    lastBackup: '2 hours ago',
    serverStatus: 'Online'
  };

  quickLinks = [
    { title: 'Documentation', url: '/docs', icon: 'fas fa-book' },
    { title: 'Support', url: '/support', icon: 'fas fa-life-ring' },
    { title: 'API', url: '/api', icon: 'fas fa-code' },
    { title: 'Status', url: '/status', icon: 'fas fa-server' }
  ];

  socialLinks = [
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' },
    { name: 'GitHub', url: '#', icon: 'fab fa-github' }
  ];

  ngOnInit() {
    // Initialize footer data
    this.loadSystemInfo();
  }

  loadSystemInfo() {
    // In a real application, this would fetch from a service
    // For now, we'll use mock data
    this.systemInfo = {
      uptime: this.calculateUptime(),
      lastBackup: this.getLastBackupTime(),
      serverStatus: 'Online'
    };
  }

  calculateUptime(): string {
    // Mock uptime calculation
    const hours = Math.floor(Math.random() * 72) + 1;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days} day${days !== 1 ? 's' : ''}, ${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`;
  }

  getLastBackupTime(): string {
    // Mock last backup time
    const hours = Math.floor(Math.random() * 24) + 1;
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }

  onQuickLinkClick(link: any) {
    // Handle quick link navigation
    console.log('Navigating to:', link.url);
  }

  onSocialLinkClick(link: any) {
    // Handle social link navigation
    console.log('Opening social link:', link.name);
  }
}
