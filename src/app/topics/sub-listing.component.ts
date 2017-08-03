import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TopicService } from 'app/services/topics.service'
import { SubListingRequest } from 'app/data-models/sub-listing-request.model'
import { SubListingResponse } from 'app/data-models/sub-listing-response.model'
import { GoogleLoginService } from 'app/services/google-login.services'
import { UserAction } from 'app/data-models/user-action.model'

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
    alreadyLikeUnlike: boolean
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

        const userAction: UserAction = {
            userId: this.userLoggeIdIn,
            listingName: this.listingName,
            listingLink: this.link,
            favourite: null,
            createTimestamp: null
        }
       this.googleService.getFavourite(userAction).subscribe((resp) => {
            this.alreadyLikeUnlike =  resp;
        });
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

    checkUncheckFavourite(value: string) {

        const userAction: UserAction = {
            userId: this.userLoggeIdIn,
            listingName: this.listingName,
            listingLink: this.link,
            favourite: null,
            createTimestamp: null
        }

        if (value === 'yellowgreen') {
            this.googleService.addFavourite(userAction);
        } else if (value === 'gray') {
            this.googleService.removeFavourite(userAction);
        }
    }
}
