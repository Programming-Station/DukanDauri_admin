import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module',
  imports: [CommonModule],
  templateUrl: './module.html',
  styleUrl: './module.css'
})
export class Module implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
