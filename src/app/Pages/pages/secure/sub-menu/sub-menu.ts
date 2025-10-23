import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-menu',
  imports: [CommonModule],
  templateUrl: './sub-menu.html',
  styleUrl: './sub-menu.css'
})
export class SubMenu implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
