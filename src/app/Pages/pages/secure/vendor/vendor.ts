import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendor',
  imports: [CommonModule],
  templateUrl: './vendor.html',
  styleUrl: './vendor.css'
})
export class Vendor implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
