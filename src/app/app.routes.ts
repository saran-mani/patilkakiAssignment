import { Routes } from "@angular/router";
import { HeroSectionComponent } from "./pages/hero-section/hero-section.component";
import { AboutFounderComponent } from "./pages/about-founder/about-founder.component";
import { WhyChooseUsComponent } from "./pages/why-choose-us/why-choose-us.component";
import { CallToActionComponent } from "./pages/call-to-action/call-to-action.component";
import { SignupCountdownComponent } from "./pages/signup-countdown/signup-countdown.component";

export const routes: Routes = [
  { path: "", component: HeroSectionComponent },
  { path: "about-founder", component: AboutFounderComponent },
  { path: "why-us", component: WhyChooseUsComponent },
  { path: "live-offer", component: SignupCountdownComponent },
  { path: "cta", component: CallToActionComponent },
];
