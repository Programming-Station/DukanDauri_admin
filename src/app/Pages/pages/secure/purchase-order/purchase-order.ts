import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-order',
  imports: [CommonModule],
  templateUrl: './purchase-order.html',
  styleUrl: './purchase-order.css'
})
export class PurchaseOrder implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
