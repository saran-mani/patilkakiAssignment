import { Component } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
@Component({
  selector: 'signup-countdown',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './signup-countdown.component.html',
  styleUrl: './signup-countdown.component.css',
})
export class SignupCountdownComponent {
  btnClick() {
    alert('Get started clicked');
  }
}
