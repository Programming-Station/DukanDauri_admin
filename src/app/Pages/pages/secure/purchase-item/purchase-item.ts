import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-item',
  imports: [CommonModule],
  templateUrl: './purchase-item.html',
  styleUrl: './purchase-item.css'
})
export class PurchaseItem implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
