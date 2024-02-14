import { Component } from '@angular/core';

@Component({
  selector: 'hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  btnClick() {
    alert('Get started clicked');
  }
}
