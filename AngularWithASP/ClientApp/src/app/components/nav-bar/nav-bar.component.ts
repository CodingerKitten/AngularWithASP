import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeLink = 'home';
  scrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  onUpdateActiveLink(value: string): void {
    this.activeLink = value;
  }

  connect(): void {
    console.log('connect');
  }
}
