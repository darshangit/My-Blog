import { Component, OnInit } from '@angular/core'
import { TopicService } from '../services/topics.service'
import { ActivatedRoute, Params } from '@angular/router'
import { SubTopicsResponseModel } from 'app/data-models/sub-topics-response.model'

@Component({
    templateUrl: './sub-topic.component.html'
})
export class SubTopicComponent implements OnInit{

    subtopicResponse: SubTopicsResponseModel[]
    constructor(private topicService: TopicService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.topicService.getSubTopics(this.route.snapshot.params['id'])
    }
}
