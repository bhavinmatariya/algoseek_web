import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infra-x-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infra-x-introduction.component.html',
  styleUrl: './infra-x-introduction.component.scss',
})
export class InfraXIntroductionComponent {
  infraXcontent = [
    { id: 1, category: 'Data Source Connectors' },
    {
      id: 2,
      category: 'Profiling, Cleaning, Normalization, Cross-referencing',
    },
    {
      id: 3,
      category: 'Computation, Transformation and Blending',
    },
    { id: 4, category: 'Documentation' },
    { id: 5, category: 'Productization' },
    { id: 6, category: 'Data Storage & ArdaDB' },
    { id: 7, category: 'Billing' },
    {
      id: 8,
      category: 'Online Purchase & Contract Signing',
    },
    { id: 9, category: 'Publishing' },
    { id: 10, category: 'On-Demand Delivery' },
    { id: 11, category: 'Logging & Monitoring' },
    { id: 12, category: 'Consumer Console' },
    { id: 13, category: 'Authentication & Authorization' },
  ];
}
