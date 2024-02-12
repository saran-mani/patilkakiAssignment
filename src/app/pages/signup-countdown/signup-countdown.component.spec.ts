import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCountdownComponent } from './signup-countdown.component';

describe('SignupCountdownComponent', () => {
  let component: SignupCountdownComponent;
  let fixture: ComponentFixture<SignupCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupCountdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
