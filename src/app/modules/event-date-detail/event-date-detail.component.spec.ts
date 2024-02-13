import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDateDetailComponent } from './event-date-detail.component';

describe('EventDateDetailComponent', () => {
  let component: EventDateDetailComponent;
  let fixture: ComponentFixture<EventDateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDateDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventDateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
