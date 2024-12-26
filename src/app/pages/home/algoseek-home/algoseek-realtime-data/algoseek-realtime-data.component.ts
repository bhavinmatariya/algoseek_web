import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomepageApiService } from '../../../../services/homePageService/homePageService.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { RealtimeDataContent } from '../../../../core/interfaces/homePageInterface';

interface RealtimeData {
  id: string;
  title: string;
  subTitle: string;
  items: string[];
  description?: string;
}

@Component({
  selector: 'app-algoseek-realtime-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algoseek-realtime-data.component.html',
  styleUrls: ['./algoseek-realtime-data.component.scss']
})
export class AlgoseekRealtimeDataComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  realTimeDataContent!: RealtimeDataContent;

  realTimeData: RealtimeData[] = [
    {
      id: '1',
      title: 'Flexible',
      subTitle: 'Technology',
      items: [
        'MultiCast',
        'TCP Socket',
        'Kafka Streaming',
        'Restful API',
        'WebSocket',
        'Real-time Database',
      ],
    },
    {
      id: '2',
      title: 'Flexible',
      subTitle: 'Latency Profile',
      items: [
        '< 10us Ultra-low-Latency',
        '< 30us Low latency',
        '< 100us Medium latency',
        '5 to 10 seconds Near-realtime',
        '10/15 minutes Delayed data',
      ],
    },
    {
      id: '3',
      title: 'Flexible',
      subTitle: 'Access',
      items: [
        'Co-location',
        'Cross-Connect',
        'Virtual Network',
        'Open Internet',
        'Kafka Streaming',
        'ArdaDB',
        'AWS Kinesis',
        'Custom Delivery',
        'Ticker Plant as a Service',
      ],
    },
  ];

  constructor(private homePageService: HomepageApiService) {}

  ngOnInit(): void {
    this.loadRealtimeData();
  }

  private loadRealtimeData(): void {
    this.homePageService
      .getRealTimeDataContent()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (data) => {
          this.realTimeDataContent = data.data;
        },
        error: (error) => {}
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
