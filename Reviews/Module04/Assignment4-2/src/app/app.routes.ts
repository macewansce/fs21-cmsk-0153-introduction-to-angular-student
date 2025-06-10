import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ManageDevicesComponent } from './features/manage-devices/manage-devices.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'devices', component: ManageDevicesComponent},
    {path: '**', component: PageNotFoundComponent}
];
