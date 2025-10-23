import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country',
  imports: [CommonModule],
  templateUrl: './country.html',
  styleUrl: './country.css'
})
export class Country implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
