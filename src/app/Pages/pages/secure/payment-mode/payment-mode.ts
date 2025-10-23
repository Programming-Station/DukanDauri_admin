import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-mode',
  imports: [CommonModule],
  templateUrl: './payment-mode.html',
  styleUrl: './payment-mode.css'
})
export class PaymentMode implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
