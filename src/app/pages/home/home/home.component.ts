import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
import { HeroComponent } from '../components/hero/hero/hero.component';
import { FeaturedServicesComponent } from '../components/featured-services/featured-services/featured-services.component';
import { WhyChooseUsComponent } from '../components/why-choose-us/why-choose-us/why-choose-us.component';
import { ProjectsShowcaseComponent } from '../components/projects-showcase/projects-showcase/projects-showcase.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials/testimonials.component';
import { ContactCtaComponent } from '../components/contact-cta/contact-cta/contact-cta.component';
@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    HeroComponent,
    FeaturedServicesComponent,
    WhyChooseUsComponent,
    ProjectsShowcaseComponent,
    TestimonialsComponent,
    ContactCtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
