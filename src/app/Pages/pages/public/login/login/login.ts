import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../../../services/shared/toast.service';
import { UserService } from '../../../../../services/shared/user.service';
import { LoginRequest } from '../../../../../models/shared/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private toastService: ToastService,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.email.trim() || !this.password.trim()) {
      this.errorMessage = 'Please fill in all fields';
      this.toastService.error('Please fill in all fields', 'Validation Error');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const loginRequest: LoginRequest = {
      email: this.email.trim(),
      password: this.password,
      rememberMe: this.rememberMe
    };

    this.userService.login(loginRequest).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          // Navigate to dashboard after successful login
          this.router.navigate(['/secure/dashboard']);
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'An error occurred during login';
        this.toastService.error('Login failed. Please try again.', 'Error');
        console.error('Login error:', error);
      }
    });
  }

  // Test different toast types
  testToasts() {
    this.toastService.success('This is a success message!');
    this.toastService.error('This is an error message!');
    this.toastService.warning('This is a warning message!');
    this.toastService.info('This is an info message!');
  }

  // Test user service methods
  testUserService() {
    console.log('Current User:', this.userService.getCurrentUser());
    console.log('Is Authenticated:', this.userService.isAuthenticated());
    console.log('User Name:', this.userService.getUserName());
    console.log('User Role:', this.userService.getUserRole());
    console.log('Is Admin:', this.userService.isAdmin());
    console.log('Permissions:', this.userService.getUserPermissions());
  }
}
