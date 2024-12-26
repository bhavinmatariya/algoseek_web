import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { heroContent } from '../../../../core/interfaces/homePageInterface';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-algoseek-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algoseek-hero-section.component.html',
  styleUrls: ['./algoseek-hero-section.component.scss'],
})
export class AlgoseekHeroSectionComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  heroContentData: heroContent[] = [];
  currentIndex = 0;
  displayedSubtitle: string = '';
  subtitleSuffix: string = '';
  private timeoutId?: number;
  heroContent: any = {};
  displayedTitle: string = '';

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadHeroContent();
  }

  private loadHeroContent(): void {
    this.homePageService
      .getHeroSliderContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.heroContentData = data;
          if (this.heroContentData.length > 0) {
            this.displayedSubtitle = this.heroContentData[0].subtitle;            
            this.subtitleSuffix = this.heroContentData[0].subtitle?.split(" ")?.[1]?.split(",")?.[0] || ''            
            this.displayedTitle = this.heroContentData[0].title;            
            this.animateText();
          }
        },
        error: (error) => {
          this.heroContent = {};
        }
      });
  }

  private animateText(): void {
    if (this.heroContentData && this.heroContentData.length > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.heroContentData.length;
        this.displayedSubtitle = this.heroContentData[this.currentIndex]?.subtitle || '';
            this.subtitleSuffix = this.heroContentData[this.currentIndex].subtitle?.split(" ")?.[1]?.split(",")?.[0] || ''

        this.displayedTitle = this.heroContentData[this.currentIndex]?.title || '';
        this.animateText();
      }, 3000);
    }
  }

  // animateTitle(){
  //   if (this.heroContentData && this.heroContentData.length > 0) {
  //     this.timeoutId = window.setTimeout(() => {
  //       this.currentIndex = (this.currentIndex + 1) % this.heroContentData.length;
  //       this.displayedSubtitle = this.heroContentData[this.currentIndex]?.subtitle || '';
  //       this.animateTitle();
  //     }, 3000);
  //   }
  // }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
