import { Routes } from '@angular/router'
import {DashboardComponent } from './dashboard/dashboard.component'

export const appRoutes: Routes = [
    { path: 'app-dashboard', component:  DashboardComponent},
    { path: '', redirectTo: '/app-dashboard', pathMatch: 'full'}
]