import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, forkJoin, Observable, throwError, map } from 'rxjs';
import { inject, Injectable } from '@angular/core';
// import { AlgoseekApiService } from '../homepage-api.service';
import { environment } from '../../../environments/environment.development';
import { ContactUsForm, DemoRequest, heroContent, statusNumber, VisitorData } from '../../core/interfaces/homePageInterface';
import { API_FIELDS } from '../../core/constant/api-homefields';
import { Environment } from '../../core/interfaces/homePageInterface';
// import {
//     heroContent,
//     statusNumber,
//   } from '../../core/interfaces/homePageInterface';


@Injectable({
  providedIn: 'root',
})
export class HomepageApiService {
  private readonly environment: any = environment;

  constructor(private http: HttpClient) { }

  private get<T>(endpoint: string, fields: readonly string[]): Observable<T> {
    const url = `${this.environment.apiUrl}${endpoint}`;
    const params = new HttpParams().set('fields[]', fields.join(','));
    return this.http.get<T>(url, {
      headers: this.getHeaders(),
      params
    }).pipe(
      catchError(this.handleError)
    );
  }

  private post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.environment.apiUrl}${endpoint}`;
    
    return this.http.post<T>(url, data, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.environment._TOKEN}`,
      'Content-Type': 'application/json',
    });
  }

  getHeroSliderContent(): Observable<heroContent[]> {
    return this.get<{ data: heroContent[] }>('/items/slider', API_FIELDS.SLIDER)
      .pipe(
        map((response) => response.data)
      );
  }

  getStatusNumbers(): Observable<statusNumber[]> {
    return this.get<{ data: statusNumber[] }>('/items/stats_numbers', API_FIELDS.STATS_NUMBERS)
      .pipe(
        map((response) => response.data)
      );
  }

  getHpAlgoseekConsoleContent(): Observable<any> {
    return this.get<any>('/items/hp_algoseek_console', API_FIELDS.HP_ALGOSEEK_CONSOLE);
  }

  getHpAlgoseekConsoleIconsContent(): Observable<any> {
    return this.get<any>('/items/hp_algoseek_console_icons', API_FIELDS.HP_ALGOSEEK_CONSOLE_ICONS);
  }

  getTrustedPartnersContent(): Observable<any[]> {
    return this.get<{ data: any[] }>('/items/trusted_partners', API_FIELDS.TRUSTED_PARTNERS)
      .pipe(
        map(response => response.data || [])
      );
  }

  getHpDataPackagesContent(): Observable<any> {
   return this.get<any>('/items/data_packages', API_FIELDS.DATA_PACKAGES);
  }

  getHpDataPackagesItemContent(): Observable<any> {
    return this.get<any>('/items/data_packages_item', API_FIELDS.DATA_PACKAGES_ITEM);
  }
  
  getDataAndServicesContent(): Observable<any> {
    return this.get<any>('/items/data_and_services', API_FIELDS.DATA_AND_SERVICES);
  }

  getDataAndServicesCardsContent(): Observable<any> {
    return this.get<any>('/items/cards', API_FIELDS.DATA_AND_SERVICES_CARDS);
  }

  getDataOfferingsContent(): Observable<any> {
    return this.get<any>('/items/data_offerings', API_FIELDS.DATA_OFFERINGS);
  }

  getAlgoseekConsoleContent(): Observable<any> {
    return this.get<any>('/items/algoseek_console', API_FIELDS.ALGOSEEK_CONSOLE);
  }

  getRealTimeDataContent(): Observable<any> {
    return this.get<any>('/items/real_time_data_section', API_FIELDS.REAL_TIME_DATA);
  }

  getUseCasesContent(): Observable<any> {
    return this.get<any>('/items/use_cases_section', API_FIELDS.USE_CASES);
  }

  getVisitorData(): Observable<any> {
    return this.get<any>('/items/visitor', API_FIELDS.VISITOR);
  }

  postVisitorData(data: VisitorData): Observable<VisitorData> {
    return this.post<VisitorData>('/items/visitor', data);
  }

  postContactUsForm(data: ContactUsForm, form: string): Observable<ContactUsForm> {
    return this.post<ContactUsForm>(`/items/${form}`, data);
  }

  postDemoRequest(data: DemoRequest): Observable<DemoRequest> {
    return this.post<DemoRequest>('/items/demo_request', data);
  }

  postContactUsData(
    visitorData: VisitorData,
    contactData: ContactUsForm,
    form: string,
  ): Observable<[VisitorData, ContactUsForm]> {
    return forkJoin([
      this.postVisitorData(visitorData),
      this.postContactUsForm(contactData, form),
    ]);
  }

  postDemoRequestData(
    visitorData: VisitorData,
    demoRequest: DemoRequest
  ): Observable<[VisitorData, DemoRequest]> {
    return forkJoin([
      this.postVisitorData(visitorData),
      this.postDemoRequest(demoRequest),
    ]);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error('An error occurred while processing your request.'));
  }
}