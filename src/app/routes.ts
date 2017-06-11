import { Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TopicsResolver } from 'app/resolvers/topics.resolver'
import { SubTopicComponent } from 'app/topics/sub-topic.component'
import { SubListingComponent } from 'app/topics/sub-listing.component'

export const appRoutes: Routes = [
    { path: 'app-dashboard', component:  DashboardComponent, resolve: { topics: TopicsResolver }},
    { path: '', redirectTo: '/app-dashboard', pathMatch: 'full'},
    { path: 'subtopics/:id/:topicName', component:  SubTopicComponent},
    { path: 'subListings/:name/:link', component: SubListingComponent}
]
