import { Injectable } from '@angular/core'
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router'
import { TopicService } from 'app/services/topics.service'
import { MainTopicsModel } from 'app/data-models/main-topics.model'

@Injectable()
export class TopicsResolver implements Resolve<any>{

    topics: MainTopicsModel[]

    constructor(private topicsServices: TopicService){}
    resolve(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot) {
        return this.topicsServices.getMainTopics();
    }
}
