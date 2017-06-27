import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { TopicService } from 'app/services/topics.service'

@Injectable()
export class CarousalResolver implements Resolve<any> {

    constructor(private topicsService: TopicService) { }
    resolve(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot) {

        return this.topicsService.getAllCarousals();
    }

}