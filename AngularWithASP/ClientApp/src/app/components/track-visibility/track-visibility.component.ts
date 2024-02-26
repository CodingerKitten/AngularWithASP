/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-visibility',
  templateUrl: './track-visibility.component.html',
  styleUrls: ['./track-visibility.component.css']
})
export class TrackVisibilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appTrackVisibility]'
})
export class TrackVisibilityDirective {

  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private element: ElementRef) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible.emit(entry.isIntersecting);
      });
    });

    observer.observe(this.element.nativeElement);
  }

}
