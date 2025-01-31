import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, finalize } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { DataServices, TrustedPartner } from '../../../../core/interfaces/homePageInterface';
import { CarouselModule, OwlOptions , CarouselComponent} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-data-services',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './data-services.component.html',
  styleUrl: './data-services.component.scss'
})
export class DataServicesComponent implements OnInit, OnDestroy {
  @ViewChild('carousel') carousel!: CarouselComponent;
  private readonly destroy$ = new Subject<void>();
  private readonly environment:any = environment;
  partnersData: TrustedPartner[] = [];    
  baseURL = environment.apiUrl;
  baseUrl = this.environment.apiUrl;
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
    this.loadPartnersData();
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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
      slideBy: 1,
    };


  prevSlide() {
    this.carousel?.prev(); // Go to the previous slide
  }

  nextSlide() {
    this.carousel?.next(); // Go to the next slide
  }
}


