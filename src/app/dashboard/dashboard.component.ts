import { Component, OnInit } from '@angular/core'
import { MainTopicsModel } from 'app/data-models/main-topics.model'
import { ActivatedRoute } from '@angular/router'
import { CarousalResponse } from 'app/data-models/carousal-response.model'
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:['../css/topics.less']
})
export class DashboardComponent implements OnInit{
    topicsArray: MainTopicsModel[]
    carousalList: CarousalResponse[]

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.topicsArray = this.activatedRoute.snapshot.data['topics']
        this.carousalList = this.activatedRoute.snapshot.data['carousal']
    }
}