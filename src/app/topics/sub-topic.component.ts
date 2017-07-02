import { Component, OnInit } from '@angular/core'
import { TopicService } from '../services/topics.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { SubTopicsResponseModel } from 'app/data-models/sub-topics-response.model'
import { SubTopicModel } from 'app/data-models/sub-topics.model'

@Component({
    templateUrl: './sub-topic.component.html',
    styleUrls: ['../css/topics.less']
})
export class SubTopicComponent implements OnInit {

    subtopicResponse: SubTopicsResponseModel[]
    mainTopicName: string
    mainTopicId: string
    constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.mainTopicName = this.route.snapshot.params['topicName']
        this.mainTopicId = this.route.snapshot.params['id']

        this.topicService.getSubTopics(this.route.snapshot.params['id']).subscribe((resp) => {
            this.subtopicResponse = resp
        })
    }
    getListing(subListings: SubTopicModel) {
        this.router.navigate(['/subListings', subListings.subListingName, subListings.listingLinks, this.mainTopicName, this.mainTopicId])
    }
}
