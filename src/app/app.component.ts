import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeroSectionComponent } from "./pages/hero-section/hero-section.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { AboutFounderComponent } from "./pages/about-founder/about-founder.component";
import { WhyChooseUsComponent } from "./pages/why-choose-us/why-choose-us.component";
import { SignupCountdownComponent } from "./pages/signup-countdown/signup-countdown.component";
import { CallToActionComponent } from "./pages/call-to-action/call-to-action.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeroSectionComponent,
    NavbarComponent,
    AboutFounderComponent,
    WhyChooseUsComponent,
    SignupCountdownComponent,
    CallToActionComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "patilkakiAssignment";
}
