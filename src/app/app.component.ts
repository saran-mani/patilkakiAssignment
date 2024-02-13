import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeroSectionComponent } from "./pages/hero-section/hero-section.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "patilkakiAssignment";
}
