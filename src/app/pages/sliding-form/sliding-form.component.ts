import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sliding-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sliding-form.component.html',
  styleUrl: './sliding-form.component.css',
})
export class SlidingFormComponent implements OnInit {
  showPopup: boolean = false;
  mobileNumber: string = '';
  email: string = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showPopup = true;
    }, 15000);
  }

  closeForm() {
    this.showPopup = false;
  }

  submitForm() {
    // Handle form submission here
    console.log('Mobile Number:', this.mobileNumber);
    console.log('Email:', this.email);
    this.mobileNumber = '';
    this.email = '';
    this.showPopup = false;
  }
}
