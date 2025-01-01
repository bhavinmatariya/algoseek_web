import { Routes } from '@angular/router';
import { AlgoseekInfraXComponent } from './pages/infraX/algoseek-infra-x/algoseek-infra-x.component';
import { AlgoseekHomeComponent } from './pages/home/algoseek-home/algoseek-home.component';

export const routes: Routes = [
  {
    path: '',
    component: AlgoseekInfraXComponent
  },
  {
    path: 'home',
    component: AlgoseekHomeComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
