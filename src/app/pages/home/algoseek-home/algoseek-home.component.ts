import { Component } from '@angular/core';
import { AlgoseekHeroSectionComponent } from './algoseek-hero-section/algoseek-hero-section.component';
import { AlgoseekPartnersComponent } from './algoseek-partners/algoseek-partners.component';
import { AlgoseekRealtimeDataComponent } from './algoseek-realtime-data/algoseek-realtime-data.component';
import { DataServicesComponent } from './data-services/data-services.component';
import { DataOfferingComponent } from './data-offering/data-offering.component';
import { MarketDataComponent } from "./market-data/market-data.component";
import { CoreExtendedReferenceComponent } from "./core-extended-reference/core-extended-reference.component";
import { DataPackagesComponent } from "./data-packages/data-packages.component";
import { AlgoseekConsoleComponent } from "./algoseek-console/algoseek-console.component";
import { DataOnboardingComponent } from "./data-onboarding/data-onboarding.component";
import { InfraConnectComponent } from "./infra-connect/infra-connect.component";
import { WhyAlgoseekComponent } from "./why-algoseek/why-algoseek.component";
import { ContactAlgoseekComponent } from "./contact-algoseek/contact-algoseek.component";

@Component({
  selector: 'app-algoseek-home',
  standalone: true,
  imports: [
    AlgoseekHeroSectionComponent,
    AlgoseekPartnersComponent,
    AlgoseekRealtimeDataComponent,
    DataServicesComponent,
    DataOfferingComponent,
    MarketDataComponent,
    CoreExtendedReferenceComponent,
    DataPackagesComponent,
    AlgoseekConsoleComponent,
    DataOnboardingComponent,
    InfraConnectComponent,
    WhyAlgoseekComponent,
    ContactAlgoseekComponent
],
  templateUrl: './algoseek-home.component.html',
  styleUrl: './algoseek-home.component.scss',
})
export class AlgoseekHomeComponent {
  
}
