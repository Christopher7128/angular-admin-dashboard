import { Component, OnInit } from '@angular/core';

interface ProjectExp {
  name: string;
  responsibilities: string[];
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  projects: ProjectExp[];
  technologies: string[];
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  experiences: Experience[] = [
    {
      company: 'Transity',
      role: 'Frontend Developer',
      duration: '2022 - 2025',
      projects: [
        {
          name: 'Freshflo',
          responsibilities: [
            'Designed and delivered interactive dashboards featuring hierarchical harvest forecast charts with multi-level data navigation',
            'Built drill-down functionality in Angular using dynamic event handling, enabling smooth and intuitive multi-level data exploration.',
            'Integrated REST APIs and handled dynamic data'
          ]
        },
        {
          name: 'Seedflo',
          responsibilities: [
            'Implemented seed management modules',
            'Created dynamic tables and filtering UI',
            'Improved responsive layout using CSS'
          ]
        },
        {
          name: 'Marketplace WebApp',
          responsibilities: [
            'Developed product listing and filtering UI',
            'Implemented order management screens',
            'Architected a fully responsive Angular marketplace webapp for vendor onboarding, product catalog management,and real-time inventory control'
          ]
        }
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Angular Material',
        'HTML',
        'SCSS'
      ]
    }
  ];

  ngOnInit(): void {}

 ngAfterViewInit(): void {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }

    });

  }, {
    threshold: 0.2
  });

  const elements = document.querySelectorAll('.scroll-animate');

  elements.forEach(el => observer.observe(el));

}

}