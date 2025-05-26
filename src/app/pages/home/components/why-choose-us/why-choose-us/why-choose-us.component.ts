import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  features: Feature[] = [
    {
      icon: 'fas fa-users-gear',
      title: 'Experienced Team',
      description: 'Our team of highly qualified engineers brings decades of combined experience across various engineering disciplines.'
    },
    {
      icon: 'fas fa-award',
      title: 'Quality Assurance',
      description: 'We maintain strict quality control standards to ensure that all our designs and solutions exceed industry requirements.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovative Solutions',
      description: 'We leverage the latest technologies and methodologies to deliver innovative, efficient, and sustainable engineering solutions.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Dedicated Support',
      description: 'Our team provides ongoing support and maintenance to ensure the long-term success of your engineering projects.'
    }
  ];
}
