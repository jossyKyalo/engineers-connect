import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'mechanical',
      icon: 'fas fa-cogs',
      title: 'Mechanical Engineering',
      description: 'Our mechanical engineering services encompass design, analysis, and optimization for various industrial applications. We create efficient, durable, and innovative mechanical systems tailored to your specific requirements.',
      features: [
        'CAD design and 3D modeling',
        'Structural analysis and simulation',
        'Prototyping and testing',
        'Manufacturing support',
        'Material selection and optimization',
        'Product development and improvement'
      ],
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'electrical',
      icon: 'fas fa-bolt',
      title: 'Electrical Engineering',
      description: 'Our electrical engineering team provides comprehensive solutions for power systems, control systems, and automation. We design electrical infrastructures that are safe, efficient, and reliable for all project sizes.',
      features: [
        'Electrical system design',
        'Power distribution and management',
        'Control system development',
        'Automation solutions',
        'Energy efficiency analysis',
        'Troubleshooting and maintenance'
      ],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'civil',
      icon: 'fas fa-building',
      title: 'Civil Engineering',
      description: 'Our civil engineering services focus on structural design, analysis, and construction management for buildings, infrastructure, and other civil projects. We ensure safety, durability, and compliance with all relevant standards.',
      features: [
        'Structural design and analysis',
        'Building information modeling (BIM)',
        'Infrastructure development',
        'Construction management',
        'Site planning and development',
        'Environmental impact assessment'
      ],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'consulting',
      icon: 'fas fa-clipboard-check',
      title: 'Engineering Consulting',
      description: 'Our consulting services provide expert advice on engineering projects, feasibility studies, and technical assessments. We help clients make informed decisions and optimize their engineering processes and systems.',
      features: [
        'Project feasibility studies',
        'Technical due diligence',
        'Risk assessment and management',
        'Regulatory compliance',
        'Quality assurance and control',
        'Process optimization'
      ],
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
}
