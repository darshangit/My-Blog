import { Component, OnInit } from '@angular/core'
import { TopicService } from '../services/topics.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { SubTopicsResponseModel } from 'app/data-models/sub-topics-response.model'
import { SubTopicModel } from 'app/data-models/sub-topics.model'

@Component({
    templateUrl: './sub-topic.component.html',
    styles: [`
        h3{color:darkgray;}
    `],
})
export class SubTopicComponent implements OnInit {

    subtopicResponse: SubTopicsResponseModel[]
    mainTopicName: string
    constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.mainTopicName = this.route.snapshot.params['topicName']
        this.topicService.getSubTopics(this.route.snapshot.params['id']).subscribe((resp) => {
            this.subtopicResponse = resp
        })
    }
    getListing(subListings: SubTopicModel) {
        this.router.navigate(['/subListings', subListings.subListingName, subListings.listingLinks])
    }
}
