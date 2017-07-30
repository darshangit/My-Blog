import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TopicService } from 'app/services/topics.service'
import { SubListingRequest } from 'app/data-models/sub-listing-request.model'
import { SubListingResponse } from 'app/data-models/sub-listing-response.model'
import { GoogleLoginService } from 'app/services/google-login.services'

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
    showComments = false
    userLoggeIdIn: string
    constructor(private topicService: TopicService, private activatedRoute: ActivatedRoute, private googleService: GoogleLoginService) { }

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

        this.userLoggeIdIn = this.googleService.getUserLoggedIn()
        this.loadDiscuss()
    }

    loadDiscuss(): void {
        this.showComments = true

        const disqus_config = function () {
            this.page.url = this.link;
            this.page.identifier = this.listingName;
        };

        const d = document, s = d.createElement('script');
        s.src = 'https://angularonwheels.disqus.com/embed.js';
        s.setAttribute('data-timestamp', new Date().toLocaleString());
        (d.head || d.body).appendChild(s);
    }
}
