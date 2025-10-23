import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city',
  imports: [CommonModule],
  templateUrl: './city.html',
  styleUrl: './city.css'
})
export class City implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
