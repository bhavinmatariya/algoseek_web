import { Routes } from '@angular/router';
import { AlgoseekInfraXComponent } from './pages/infraX/algoseek-infra-x/algoseek-infra-x.component';
import { AlgoseekHomeComponent } from './pages/home/algoseek-home/algoseek-home.component';

export const routes: Routes = [
  {
    path: '',
    component: AlgoseekHomeComponent
  },
  {
    path: 'infra-x',
    component: AlgoseekInfraXComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
