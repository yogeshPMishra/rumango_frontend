import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarrerComponent } from './pages/carrer/carrer.component';
import { ServiceComponent } from './pages/service/service.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'career', component: CarrerComponent, pathMatch: 'full' },
      { path: 'service', component: ServiceComponent, pathMatch: 'full' },
    ],
  },
];
