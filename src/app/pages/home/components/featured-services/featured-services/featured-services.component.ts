import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-featured-services',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './featured-services.component.html',
  styleUrl: './featured-services.component.css'
})
export class FeaturedServicesComponent {
  services: Service[] = [
    {
      icon: 'icon-mechanical',
      title: 'Mechanical Engineering',
      description: 'Comprehensive mechanical engineering solutions including design, analysis, and optimization for various industrial applications.',
      link: 'mechanical'
    },
    {
      icon: 'icon-electrical',
      title: 'Electrical Engineering',
      description: 'Expert electrical system design, automation, control systems, and power distribution solutions for all project sizes.',
      link: 'electrical'
    },
    {
      icon: 'icon-civil',
      title: 'Civil Engineering',
      description: 'Structural design, analysis, and construction management services for buildings, infrastructure, and other civil projects.',
      link: 'civil'
    },
    {
      icon: 'icon-consulting',
      title: 'Engineering Consulting',
      description: 'Professional consulting services providing expert advice on engineering projects, feasibility studies, and technical assessments.',
      link: 'consulting'
    }
  ];
}
