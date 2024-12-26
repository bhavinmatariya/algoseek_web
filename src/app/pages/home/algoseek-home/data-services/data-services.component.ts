import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, finalize } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { DataServices } from '../../../../core/interfaces/homePageInterface';

@Component({
  selector: 'app-data-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-services.component.html',
  styleUrl: './data-services.component.scss'
})
export class DataServicesComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  baseURL = environment.apiUrl;
  dataServicesContent!: DataServices;
  imageMObile=[
    'min_algo-trading.png',
    'min_order-routing.png',
    'min_machine-learning.png',
    'min_market-making.png',
  ]

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadDataServices();
  }

  private loadDataServices(): void {
    this.homePageService.getUseCasesContent()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (data) => {
          this.dataServicesContent = data.data as DataServices;
          console.log('========>', this.dataServicesContent);
        },
        error: (error) => {}
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


