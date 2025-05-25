import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: "Benny Engineering Solutions delivered exceptional results for our manufacturing facility. Their innovative approach to automation has significantly improved our production efficiency.",
      author: "David Kamau",
      position: "Operations Director",
      company: "Kenya Manufacturing Ltd",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The team's expertise in electrical engineering was evident throughout our smart building project. They provided solutions that were not only effective but also energy-efficient.",
      author: "Sarah Njeri",
      position: "Project Manager",
      company: "EcoTech Buildings",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "We were impressed by the structural design provided for our commercial complex. The attention to detail and innovative approach exceeded our expectations.",
      author: "Michael Ochieng",
      position: "CEO",
      company: "Skyline Developers",
      image: "https://randomuser.me/api/portraits/men/68.jpg"
    }
  ];
}
