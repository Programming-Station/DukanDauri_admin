import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  // Success toast
  success(message: string, title?: string) {
    this.toastr.success(message, title || 'Success');
  }

  // Error toast
  error(message: string, title?: string) {
    this.toastr.error(message, title || 'Error');
  }

  // Warning toast
  warning(message: string, title?: string) {
    this.toastr.warning(message, title || 'Warning');
  }

  // Info toast
  info(message: string, title?: string) {
    this.toastr.info(message, title || 'Info');
  }

  // Custom toast with options
  show(message: string, title?: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    switch (type) {
      case 'success':
        this.success(message, title);
        break;
      case 'error':
        this.error(message, title);
        break;
      case 'warning':
        this.warning(message, title);
        break;
      case 'info':
        this.info(message, title);
        break;
    }
  }

  // Clear all toasts
  clear() {
    this.toastr.clear();
  }

  // Remove specific toast
  remove(toastId: number) {
    this.toastr.remove(toastId);
  }
}
