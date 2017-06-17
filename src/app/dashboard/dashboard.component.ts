import { Component, OnInit } from '@angular/core'
import { MainTopicsModel } from 'app/data-models/main-topics.model'
import { ActivatedRoute } from '@angular/router'
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:['../css/topics.less']
})
export class DashboardComponent implements OnInit{
    topicsArray: MainTopicsModel[]
    item: string;
    items: [ 'asdasd', 'asdasdads', 'asssvva']
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.topicsArray = this.activatedRoute.snapshot.data['topics']
        console.log(this.topicsArray)
    }
}