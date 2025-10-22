import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  errorMessage: string = '';

  onSubmit() {
    if (this.email.trim() && this.password.trim()) {
      console.log('Login attempt:', { email: this.email });
      // Add your login logic here
      this.errorMessage = '';
      alert('Login functionality will be implemented here!');
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
