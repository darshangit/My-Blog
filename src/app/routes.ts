import { Routes } from '@angular/router'
import {DashboardComponent } from './dashboard/dashboard.component'
import { TopicsResolver } from 'app/resolvers/topics.resolver'

export const appRoutes: Routes = [
    { path: 'app-dashboard', component:  DashboardComponent, resolve: { topics: TopicsResolver }},
    { path: '', redirectTo: '/app-dashboard', pathMatch: 'full'}
]