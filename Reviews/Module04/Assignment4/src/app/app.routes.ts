import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ManageItemComponent } from './features/manage-item/manage-item.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'items', component: ManageItemComponent},
    {path: '**', component: PageNotFoundComponent}
];
