import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartButtonComponent } from './get-start-button.component';

describe('GetStartButtonComponent', () => {
  let component: GetStartButtonComponent;
  let fixture: ComponentFixture<GetStartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStartButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetStartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
