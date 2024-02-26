import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackVisibilityComponent } from './track-visibility.component';

describe('TrackVisibilityComponent', () => {
  let component: TrackVisibilityComponent;
  let fixture: ComponentFixture<TrackVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackVisibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
