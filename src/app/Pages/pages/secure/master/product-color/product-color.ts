import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-color',
  imports: [CommonModule],
  templateUrl: './product-color.html',
  styleUrl: './product-color.css'
})
export class ProductColor implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
