import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { Subject, takeUntil } from 'rxjs';
import { HpConsoleData } from '../../../../core/interfaces/homePageInterface';
import { SafeHtmlPipe } from '../../../../core/pipes/safe-html.pipe';

@Component({
  selector: 'app-algoseek-console',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './algoseek-console.component.html',
  styleUrl: './algoseek-console.component.scss'
})
export class AlgoseekConsoleComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  consoleData: any = [];
  hpConsoleData: HpConsoleData [] = [];
  hpAlgoseekConsoleIconsContent: any[]=[]
  loading = true;

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadConsoleData();
    this.homePageService.getHpAlgoseekConsoleContent()
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe({
      next: (data) => {
        this.hpConsoleData = data.data;
        
      },
    });

    this.homePageService
      .getHpAlgoseekConsoleIconsContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.hpAlgoseekConsoleIconsContent=data.data
          
        },
        error: (error) => {},
      });
  }

  private loadConsoleData(): void {
    this.homePageService.getAlgoseekConsoleContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.consoleData = data.data;          
        },
        error: (error) => {}
      });
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
