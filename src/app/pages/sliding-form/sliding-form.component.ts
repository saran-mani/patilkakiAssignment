import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sliding-form",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sliding-form.component.html",
  styleUrl: "./sliding-form.component.css",
})
export class SlidingFormComponent implements OnInit {
  showForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showForm = true;
    }, 3000); // 10 seconds
  }
}
