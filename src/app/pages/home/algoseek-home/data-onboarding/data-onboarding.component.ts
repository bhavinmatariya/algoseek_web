import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataOnboarding } from '../../../../core/interfaces/homePageInterface';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-data-onboarding',
  standalone: true,
  imports: [CommonModule],
  providers: [HomepageApiService],
  templateUrl: './data-onboarding.component.html',
  styleUrl: './data-onboarding.component.scss'
})
export class DataOnboardingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  baseURL = environment.apiUrl;
  onboardingData: any[] = [];
  onboardingCardsData: any[] = [];
  _dataOnboardingBGArrows = [
    '25933bc9-9022-494a-9431-8fdda9d02868',
    '568055ec-4e06-4345-bc0e-6e6c8e3cc130',
    '1b2f7504-eaa5-4fff-a328-c5dc9efc2954',
    'fff9a466-be1a-4e71-8a0c-b6d4413d8e62',
  ];
  _dataOnboardingBGIcons = [
    '820fb5dc-e965-411b-b7cb-73600d79f6ec',
    '7e413218-3a37-41b9-af30-d8154295c27c',
    '94aff49e-9333-47a7-b6fe-1edca6285cf5',
    '4675953c-df54-41fa-9f3f-086bd959eaf4',
    '43dfe08e-a4bd-41bb-ae97-a7da93764d17',
    '',
  ];

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadData();
    this.loadCardsData();
  }

  private loadData(): void {
    this.homePageService.getDataAndServicesContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.onboardingData = data.data || [];          
        },
        error: (error) => {
          this.onboardingData = [];
        }
      });
  }

  private loadCardsData(): void {
    this.homePageService.getDataAndServicesCardsContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.onboardingCardsData = data.data || [];          
        },
        error: (error) => {
          this.onboardingCardsData = [];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
