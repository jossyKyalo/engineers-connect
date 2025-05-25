import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-cta',
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.css'
})
export class ContactCtaComponent {

}
