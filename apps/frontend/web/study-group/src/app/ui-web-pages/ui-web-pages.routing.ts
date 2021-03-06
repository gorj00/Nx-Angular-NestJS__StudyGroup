import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';

export const UiWebPagesRoutes: Routes = [
  // UI web pages links
  {
    path: 'ui',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'maps', component: MapsComponent }
    ]
  }
];
