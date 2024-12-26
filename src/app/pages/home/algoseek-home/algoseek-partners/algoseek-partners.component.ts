import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { statusNumber, TrustedPartner, Environment } from '../../../../core/interfaces/homePageInterface';
import { Subject, takeUntil } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-algoseek-partners',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './algoseek-partners.component.html',
  styleUrl: './algoseek-partners.component.scss'
})
export class AlgoseekPartnersComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly environment:any = environment;
  
  statusData: statusNumber[] = [];
  partnersData: TrustedPartner[] = [];
  baseUrl = this.environment.apiUrl;
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    slideBy: 1 
  };

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadStatusData();
    this.loadPartnersData();
  }

  private loadStatusData(): void {
    this.homePageService.getStatusNumbers()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.statusData = data;
          this.processStatusData();
        },
        error: (error) => {}
      });
  }

  private loadPartnersData(): void {
    this.homePageService.getTrustedPartnersContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.partnersData = Array.isArray(data) ? data : [];          
        },
        error: (error) => {}
      });
  }

  private processStatusData(): void {
    this.statusData.forEach(item => {
      const [number, title] = item.number.split(' ');
      item.number = number;
      item.title = title;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
