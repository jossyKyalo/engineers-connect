import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects-showcase',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './projects-showcase.component.html',
  styleUrl: './projects-showcase.component.css'
})
export class ProjectsShowcaseComponent {
  projects: Project[] = [
    {
      image: '/assets/images/project-mechanical.jpg',
      title: 'Industrial Automation System',
      category: 'Mechanical Engineering',
      description: 'Custom automation system designed for manufacturing facility to improve efficiency and reduce operational costs.',
      link: 'industrial-automation'
    },
    {
      image: '/assets/images/project-electrical.jpg',
      title: 'Smart Building Integration',
      category: 'Electrical Engineering',
      description: 'Comprehensive smart building solution with integrated control systems for lighting, HVAC, and security.',
      link: 'smart-building'
    },
    {
      image: '/assets/images/project-civil.jpg',
      title: 'Commercial Complex',
      category: 'Civil Engineering',
      description: 'Structural design and analysis for a multi-story commercial building with sustainable design elements.',
      link: 'commercial-complex'
    }
  ];
}
