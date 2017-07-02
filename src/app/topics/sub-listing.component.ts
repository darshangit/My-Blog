import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TopicService } from 'app/services/topics.service'
import { SubListingRequest } from 'app/data-models/sub-listing-request.model'
import { SubListingResponse } from 'app/data-models/sub-listing-response.model'

@Component({
    templateUrl: './sub-listing.component.html',
    styleUrls: ['../css/topics.less']
})
export class SubListingComponent implements OnInit {

    @Input()
    image: string

    link: string
    listingName: string
    mainTopicName
    maintopicId
    subListingResponse: SubListingResponse[]

    constructor(private topicService: TopicService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {

        this.link = this.activatedRoute.snapshot.params['link']
        this.listingName = this.activatedRoute.snapshot.params['name']
        this.mainTopicName = this.activatedRoute.snapshot.params['mainTopicName']
        this.maintopicId = this.activatedRoute.snapshot.params['maintopicId']

        const subListingRequest: SubListingRequest = {
            jsonPath: this.link
        }

        this.topicService.getSubListings(subListingRequest).subscribe((resp) => {
            this.subListingResponse = resp
        })
    }
}
