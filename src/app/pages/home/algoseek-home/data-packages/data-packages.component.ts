import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { Subject, takeUntil, finalize } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-data-packages',
  standalone: true,
  imports: [],
  templateUrl: './data-packages.component.html',
  styleUrl: './data-packages.component.scss'
})
export class DataPackagesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  packagesData: any[] = [];
  packagesItems: any = [];
  baseURL= environment.apiUrl
  loading = true;

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadPackagesData();
  }

  private loadPackagesData(): void {
    this.homePageService.getHpDataPackagesContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.packagesData = data.data || [];
          this.loadPackageItems();
        },
        error: (error) => {
          {};
          this.packagesData = [];
        }
      });
  }

  private loadPackageItems(): void {
    this.homePageService.getHpDataPackagesItemContent()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (data) => {
          this.packagesItems = data.data;
        },
        error: (error) => {}
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
