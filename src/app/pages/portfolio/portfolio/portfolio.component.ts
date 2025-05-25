import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  features: string[];
  challenges: string;
  solutions: string;
  outcome: string;
  image: string;
  technologies: string[];
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
    projects: Project[] = [{
      id: 'industrial-automation',
      title: 'Industrial Automation System',
      category: 'Mechanical Engineering',
      client: 'Kenya Manufacturing Ltd',
      description: 'Designed and implemented a comprehensive automation system for a manufacturing facility to improve production efficiency and reduce operational costs. The system included custom-designed machinery, control systems, and monitoring equipment.',
      features: [
        'Automated production line with real-time monitoring',
        'Custom-designed conveyor systems',
        'Quality control checkpoints with vision systems',
        'Predictive maintenance algorithms',
        'Energy optimization systems'
      ],
      challenges: 'The client needed to maintain production during the upgrade, requiring a phased implementation approach. Additionally, integrating new systems with legacy equipment presented compatibility challenges.',
      solutions: 'We developed a modular automation system that could be implemented in phases without disrupting ongoing production. Custom interfaces were designed to bridge between new and legacy systems, ensuring seamless integration.',
      outcome: 'The automation system increased production efficiency by 35% while reducing energy consumption by 22%. Operational costs were reduced by approximately $120,000 annually, with a return on investment period of 18 months.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['PLC Programming', 'SCADA Systems', 'Industrial IoT', 'Motion Control', 'Vision Systems', 'Energy Management']
    },
    {
      id: 'smart-building',
      title: 'Smart Building Integration',
      category: 'Electrical Engineering',
      client: 'EcoTech Buildings',
      description: 'Developed and implemented a comprehensive smart building solution for a commercial office complex, integrating various building systems including lighting, HVAC, security, and energy management into a single, manageable platform.',
      features: [
        'Centralized building management system',
        'Automated lighting with occupancy detection',
        'Smart HVAC with zone-based control',
        'Integrated security and access control',
        'Energy usage monitoring and optimization',
        'Mobile app for remote management'
      ],
      challenges: 'The building had multiple isolated systems from different vendors with no existing integration capabilities. The client also required minimal disruption to ongoing operations during implementation.',
      solutions: 'We designed a middleware solution to connect disparate systems, implementing a phased approach that allowed for incremental integration. Custom APIs were developed where needed, and wireless solutions were utilized to minimize physical disruption.',
      outcome: 'The integrated smart building system resulted in 28% energy savings and improved occupant comfort. Maintenance costs were reduced by 15% through predictive maintenance capabilities, and security incidents decreased by 40%.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['BMS Integration', 'Wireless Sensors', 'Cloud Computing', 'Mobile Development', 'Energy Analytics', 'API Development']
    },
    {
      id: 'commercial-complex',
      title: 'Commercial Complex',
      category: 'Civil Engineering',
      client: 'Skyline Developers',
      description: 'Provided comprehensive structural design and analysis for a 12-story commercial building with sustainable design elements. The project included underground parking, mixed retail and office spaces, and a rooftop garden with solar installations.',
      features: [
        'Earthquake-resistant structural design',
        'Green roof system with rainwater harvesting',
        'Integrated solar panel support structures',
        'Optimized column spacing for flexible floor layouts',
        'Wind load analysis and mitigation',
        'Underground parking with efficient traffic flow'
      ],
      challenges: 'The site had challenging soil conditions and was located in a seismically active zone. Additionally, the client required a sustainable design that would qualify for LEED Gold certification.',
      solutions: 'We implemented a deep foundation system with piles to address soil conditions and designed a steel-concrete composite structure with moment frames for seismic resistance. Sustainable elements were integrated directly into the structural design rather than added afterward.',
      outcome: 'The building achieved LEED Gold certification and has become a landmark in the area. The structural system performed 15% better than required in simulated seismic testing, and the integrated sustainable elements reduced operational costs by 25%.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['BIM (Building Information Modeling)', 'Finite Element Analysis', 'Seismic Design', 'Green Building Design', 'Structural Health Monitoring', 'LEED Certification']
    },
    {
      id: 'water-treatment',
      title: 'Municipal Water Treatment Plant',
      category: 'Civil Engineering',
      client: 'Nairobi County Water Services',
      description: 'Designed and supervised the construction of a modern water treatment facility with a capacity of 50 million liters per day. The project involved intake structures, treatment processes, pumping stations, and distribution networks.',
      features: [
        'Multi-stage filtration system',
        'Advanced disinfection processes',
        'Automated chemical dosing',
        'Sludge processing and management',
        'SCADA monitoring and control',
        'Energy recovery systems'
      ],
      challenges: 'The project needed to be implemented while maintaining service to existing customers. Additionally, space constraints and fluctuating water quality from the source added complexity to the design.',
      solutions: 'We developed a phased implementation plan that allowed for the construction of new facilities alongside existing ones. The treatment process was designed with flexibility to handle varying input water quality, and compact treatment technologies were selected to address space constraints.',
      outcome: 'The new treatment plant improved water quality metrics by 40%, reduced operational costs by 30% through energy efficiency and automation, and increased service reliability to 99.8% uptime.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Hydraulic Modeling', 'Process Control', 'SCADA Systems', 'Water Quality Analysis', 'Energy Recovery', 'Environmental Compliance']
    },
    {
      id: 'manufacturing-facility',
      title: 'Food Processing Facility Design',
      category: 'Mechanical Engineering',
      client: 'East African Foods Ltd',
      description: 'Designed the mechanical systems for a state-of-the-art food processing facility, including production lines, refrigeration, HVAC, and utility systems. The facility processes dairy and grain products with strict hygiene requirements.',
      features: [
        'High-hygiene stainless steel processing equipment',
        'Clean-in-place (CIP) systems',
        'Advanced refrigeration with heat recovery',
        'HEPA-filtered air handling units',
        'Energy-efficient steam generation',
        'Automated packaging lines'
      ],
      challenges: 'The facility required compliance with international food safety standards while operating in a challenging climate with frequent power fluctuations. Maintaining proper temperature zones and preventing cross-contamination were critical concerns.',
      solutions: 'We implemented a zoned approach to the facility design with pressure differentials to prevent cross-contamination. Backup power systems with UPS were incorporated for critical systems, and heat recovery from refrigeration was used to improve energy efficiency.',
      outcome: 'The facility achieved ISO 22000 and HACCP certification on its first audit. Energy consumption was 25% lower than industry benchmarks, and product quality consistency improved by 18% compared to the client\'s previous facility.',
      image: 'https://images.pexels.com/photos/2233927/pexels-photo-2233927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Food Process Engineering', 'Refrigeration Design', 'Clean Room Technology', 'Energy Modeling', 'HVAC Systems', 'Sanitary Design']
    },
    {
      id: 'renewable-energy',
      title: 'Hybrid Solar-Wind Power System',
      category: 'Electrical Engineering',
      client: 'Green Energy Kenya',
      description: 'Designed and implemented a hybrid solar-wind power generation system with battery storage for a remote community. The system provides reliable power to a community of 1,500 people previously without grid access.',
      features: [
        '250kW solar PV array',
        '100kW wind turbines (4 x 25kW)',
        '500kWh battery storage system',
        'Smart microgrid management',
        'Remote monitoring capabilities',
        'Community distribution network'
      ],
      challenges: 'The remote location presented logistical challenges for construction and maintenance. Variable weather patterns required careful system sizing, and the community had limited technical expertise for ongoing operations.',
      solutions: 'We designed a modular system that could be transported in parts and assembled on-site. The hybrid approach with battery storage was optimized based on local weather data to ensure reliable power supply. A comprehensive training program was developed for local technicians.',
      outcome: 'The system provides 24/7 power to the community with 99.5% reliability. Local businesses have grown by 35% since implementation, and the community now operates a maintenance cooperative that provides employment for local residents.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Solar PV Design', 'Wind Energy', 'Battery Storage', 'Microgrid Control', 'Power Electronics', 'Energy Management Systems']
    }
  ];
  
  filteredProjects: Project[] = this.projects;
  selectedProject: Project | null = null;
  activeFilter: string = 'all';
  
  get categories(): string[] {
    const categoriesSet = new Set(this.projects.map(project => project.category));
    return Array.from(categoriesSet);
  }
  
  filterProjects(category: string) {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
  
  selectProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }
  
  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}
