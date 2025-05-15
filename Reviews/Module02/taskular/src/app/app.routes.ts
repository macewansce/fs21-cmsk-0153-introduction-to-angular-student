import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TodoListComponent } from './features/todo-list/todo-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'todos', component: TodoListComponent},
    {path: '**', component: PageNotFoundComponent}
];
