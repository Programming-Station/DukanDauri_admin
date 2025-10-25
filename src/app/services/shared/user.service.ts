import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, LoginRequest, LoginResponse, AuthState } from '../../models/shared/user.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_KEY = 'dukan_dauri_user';
  private readonly TOKEN_KEY = 'dukan_dauri_token';
  private readonly AUTH_STATE_KEY = 'dukan_dauri_auth_state';

  // BehaviorSubject to track authentication state
  private authStateSubject = new BehaviorSubject<AuthState>(this.getInitialAuthState());
  public authState$ = this.authStateSubject.asObservable();

  constructor(private toastService: ToastService) {
    // Initialize auth state from localStorage
    this.initializeAuthState();
  }

  // Initialize authentication state from localStorage
  private initializeAuthState(): void {
    const authState = this.getAuthStateFromStorage();
    this.authStateSubject.next(authState);
  }

  // Get initial auth state
  private getInitialAuthState(): AuthState {
    return {
      isAuthenticated: false,
      user: null,
      token: null
    };
  }

  // Get auth state from localStorage
  private getAuthStateFromStorage(): AuthState {
    try {
      const user = this.getUserFromStorage();
      const token = this.getTokenFromStorage();
      
      return {
        isAuthenticated: !!(user && token),
        user: user,
        token: token
      };
    } catch (error) {
      console.error('Error getting auth state from storage:', error);
      return this.getInitialAuthState();
    }
  }

  // Save auth state to localStorage
  private saveAuthStateToStorage(authState: AuthState): void {
    try {
      if (authState.user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(authState.user));
      }
      if (authState.token) {
        localStorage.setItem(this.TOKEN_KEY, authState.token);
      }
      localStorage.setItem(this.AUTH_STATE_KEY, JSON.stringify(authState));
    } catch (error) {
      console.error('Error saving auth state to storage:', error);
    }
  }

  // Get user from localStorage
  private getUserFromStorage(): User | null {
    try {
      const userStr = localStorage.getItem(this.USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting user from storage:', error);
      return null;
    }
  }

  // Get token from localStorage
  private getTokenFromStorage(): string | null {
    try {
      return localStorage.getItem(this.TOKEN_KEY);
    } catch (error) {
      console.error('Error getting token from storage:', error);
      return null;
    }
  }

  // Clear all auth data from localStorage
  private clearAuthDataFromStorage(): void {
    try {
      localStorage.removeItem(this.USER_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.AUTH_STATE_KEY);
    } catch (error) {
      console.error('Error clearing auth data from storage:', error);
    }
  }

  // Update auth state and notify subscribers
  private updateAuthState(authState: AuthState): void {
    this.authStateSubject.next(authState);
    this.saveAuthStateToStorage(authState);
  }

  // Authentication Methods
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return new Observable(observer => {
      // Simulate API call - replace with actual API call
      setTimeout(() => {
        // Mock validation - replace with actual validation
        if (loginRequest.email === 'admin@dukandauri.com' && loginRequest.password === 'admin123') {
          const mockUser: User = {
            id: '1',
            email: loginRequest.email,
            name: 'Admin User',
            role: 'admin',
            permissions: ['read', 'write', 'delete', 'admin'],
            avatar: 'https://via.placeholder.com/150',
            isActive: true,
            lastLogin: new Date(),
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date()
          };

          const mockToken = 'mock-jwt-token-' + Date.now();

          const authState: AuthState = {
            isAuthenticated: true,
            user: mockUser,
            token: mockToken
          };

          this.updateAuthState(authState);
          
          observer.next({
            success: true,
            message: 'Login successful',
            user: mockUser,
            token: mockToken
          });
          
          this.toastService.success('Login successful!', 'Welcome');
        } else {
          observer.next({
            success: false,
            message: 'Invalid email or password'
          });
          
          this.toastService.error('Invalid email or password', 'Login Failed');
        }
        
        observer.complete();
      }, 1000); // Simulate network delay
    });
  }

  logout(): void {
    const authState: AuthState = this.getInitialAuthState();
    this.updateAuthState(authState);
    this.clearAuthDataFromStorage();
    this.toastService.info('You have been logged out', 'Logout');
  }

  // User Data Methods
  getCurrentUser(): User | null {
    return this.authStateSubject.value.user;
  }

  getCurrentToken(): string | null {
    return this.authStateSubject.value.token;
  }

  isAuthenticated(): boolean {
    return this.authStateSubject.value.isAuthenticated;
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.permissions.includes(permission) : false;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  updateUserProfile(updatedUser: Partial<User>): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const newUser: User = {
        ...currentUser,
        ...updatedUser,
        updatedAt: new Date()
      };

      const authState: AuthState = {
        isAuthenticated: true,
        user: newUser,
        token: this.getCurrentToken()
      };

      this.updateAuthState(authState);
      this.toastService.success('Profile updated successfully');
    }
  }

  // Utility Methods
  getUserId(): string | null {
    const user = this.getCurrentUser();
    return user ? user.id : null;
  }

  getUserName(): string | null {
    const user = this.getCurrentUser();
    return user ? user.name : null;
  }

  getUserEmail(): string | null {
    const user = this.getCurrentUser();
    return user ? user.email : null;
  }

  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  getUserAvatar(): string | null {
    const user = this.getCurrentUser();
    return user ? user.avatar || null : null;
  }

  // Check if user is admin
  isAdmin(): boolean {
    return this.hasRole('admin');
  }

  // Get user permissions
  getUserPermissions(): string[] {
    const user = this.getCurrentUser();
    return user ? user.permissions : [];
  }

  // Refresh user data (useful after profile updates)
  refreshUserData(): void {
    const currentAuthState = this.authStateSubject.value;
    if (currentAuthState.isAuthenticated) {
      // In a real app, you would make an API call to refresh user data
      this.toastService.info('User data refreshed');
    }
  }

  // Clear all data (useful for logout or data reset)
  clearAllData(): void {
    this.clearAuthDataFromStorage();
    this.updateAuthState(this.getInitialAuthState());
    this.toastService.info('All data cleared');
  }
}
