import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  private toggleSubject = new BehaviorSubject<boolean>(false);
  public toggle$ = this.toggleSubject.asObservable();
  private currentState = false;

  toggleSidebar() {
    this.currentState = !this.currentState;
    this.toggleSubject.next(this.currentState);
  }

  resetState() {
    this.currentState = false;
    this.toggleSubject.next(false);
  }
}
