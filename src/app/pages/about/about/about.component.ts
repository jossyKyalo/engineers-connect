import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
    standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Benjamin Ochieng',
      position: 'Founder & CEO',
      bio: 'With over 20 years of experience in engineering, Benjamin founded the company with a vision to provide innovative solutions across East Africa.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'benjamin@bennyengineering.com'
      }
    },
    {
      name: 'Sarah Kamau',
      position: 'Chief Engineer',
      bio: 'Sarah leads our technical team with expertise in mechanical and electrical engineering, ensuring the highest quality in all our projects.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        email: 'sarah@bennyengineering.com'
      }
    },
    {
      name: 'David Ndung\'u',
      position: 'Civil Engineering Lead',
      bio: 'David brings his extensive experience in structural design and infrastructure development to lead our civil engineering department.',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'david@bennyengineering.com'
      }
    },
    {
      name: 'Grace Mwangi',
      position: 'Electrical Systems Specialist',
      bio: 'Grace specializes in electrical systems design and smart building technologies, with a focus on energy efficiency and sustainability.',
      image: 'https://randomuser.me/api/portraits/women/17.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        email: 'grace@bennyengineering.com'
      }
    }
  ];
  
  milestones: Milestone[] = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Benny Engineering Solutions was established as a small consulting firm in Nairobi.'
    },
    {
      year: '2012',
      title: 'First Major Project',
      description: 'Completed our first major project - a commercial building design that won a regional award for innovation.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded our services to include mechanical, electrical, and civil engineering solutions.'
    },
    {
      year: '2017',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for our quality management systems.'
    },
    {
      year: '2020',
      title: '10 Year Anniversary',
      description: 'Celebrated a decade of excellence with over 200 successful projects completed across East Africa.'
    },
    {
      year: '2023',
      title: 'Innovation Center',
      description: 'Opened our new innovation center focused on sustainable engineering solutions and technology development.'
    }
  ];

}
