import { Component, OnInit } from '@angular/core';
interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  projects: Project[] = [
    {
      name: 'Freshflo',
      role: 'Frontend Developer',
      description:
        'Developed multiple UI modules for an agriculture supply chain platform including dashboards, forms, reports, and data tables using Angular and Angular Material.',
      tech: ['Angular', 'TypeScript', 'Angular Material', 'SCSS']
    },
    {
      name: 'Marketplace Web App',
      role: 'Frontend Developer',
      description:
        'Built responsive product listing, filtering screens, and order management UI for an online marketplace platform.',
      tech: ['Angular', 'HTML', 'SCSS', 'Bootstrap']
    },
    {
      name: 'Seedflo',
      role: 'Frontend Developer',
      description:
        'Implemented modules related to seed operations, reports, and interactive UI components with dynamic data binding.',
      tech: ['Angular', 'TypeScript', 'Angular Material']
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
