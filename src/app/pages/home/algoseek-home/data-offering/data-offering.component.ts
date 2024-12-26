import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-data-offering',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './data-offering.component.html',
  styleUrl: './data-offering.component.scss'
})
export class DataOfferingComponent implements OnInit, OnDestroy {
  intervalId: any;

  constructor(private homePageService: HomepageApiService) {}

  private readonly destroy$ = new Subject<void>();
  dataOfferingData: any;

  ngOnInit(): void {
    this.loadDataOfferingData();
  }

  private loadDataOfferingData(): void {
    this.homePageService
      .getDataOfferingsContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.dataOfferingData = data.data;
        },
        error: (error) => {},
      });
  }
 
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
