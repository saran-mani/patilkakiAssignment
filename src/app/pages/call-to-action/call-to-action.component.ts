import { Component } from "@angular/core";

@Component({
  selector: "call-to-action",
  standalone: true,
  imports: [],
  templateUrl: "./call-to-action.component.html",
  styleUrl: "./call-to-action.component.css",
})
export class CallToActionComponent {
  btnClick() {
    alert("Get Started button clicked");
  }
}
