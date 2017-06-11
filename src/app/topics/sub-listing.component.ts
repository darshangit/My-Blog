import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TopicService } from 'app/services/topics.service'
import { SubListingRequest } from 'app/data-models/sub-listing-request.model'
import { SubListingResponse } from 'app/data-models/sub-listing-response.model'

@Component({
    templateUrl: './sub-listing.component.html'
})
export class SubListingComponent implements OnInit {

    link: string
    listingName: string
    subListingResponse: SubListingResponse[]
    constructor(private topicService: TopicService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {

        this.link = this.activatedRoute.snapshot.params['link']
        this.listingName = this.activatedRoute.snapshot.params['name']

        const subListingRequest: SubListingRequest = {
            jsonPath: this.link
        }

        this.topicService.getSubListings(subListingRequest).subscribe((resp) => {
            this.subListingResponse = resp
        })
    }
}

