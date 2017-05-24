import { Injectable } from '@angular/core'
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router'
import { TopicService } from 'app/services/topics.service'

@Injectable()
export class TopicsResolver implements Resolve<any>{

    constructor(private topicsServices: TopicService){}
    resolve(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot) {
        return this.topicsServices.getMainTopics()
    }


}