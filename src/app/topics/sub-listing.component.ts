import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TopicService } from 'app/services/topics.service'
import { SubListingRequest } from 'app/data-models/sub-listing-request.model'
import { SubListingResponse } from 'app/data-models/sub-listing-response.model'
import { GoogleLoginService } from 'app/services/google-login.services'
import { UserAction } from 'app/data-models/user-action.model'
import { SublistingPrevNextModel } from 'app/data-models/sub-listing-prev-next.model'
import { SubListingEntityModel } from 'app/data-models/sub-listing-entity-response.model'
import { Router } from '@angular/router'
import {Location} from '@angular/common';

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
    prevName: string
    prevLink: string
    nextName: string
    nextLink: string
    subListingEntity: SubListingEntityModel
    constructor(private topicService: TopicService, private activatedRoute: ActivatedRoute,
         private googleService: GoogleLoginService, private router: Router, private location: Location) {
                     console.log("constructor")
    }

    ngOnInit(): void {
        console.log("routerLink")

        this.link = this.activatedRoute.snapshot.params['link']
        this.listingName = this.activatedRoute.snapshot.params['name']
        this.mainTopicName = this.activatedRoute.snapshot.params['mainTopicName']
        this.maintopicId = this.activatedRoute.snapshot.params['maintopicId']

        const subListingRequest: SubListingRequest = {
            jsonPath: this.link
        }

        this.topicService.getSubListings(subListingRequest).subscribe((resp) => {
            this.subListingResponse = resp
            console.log('this.subListingResponse', this.subListingResponse)
        })

        this.topicService.getSublistingByName(this.listingName).subscribe((resp) => {
            this.subListingEntity = resp
            if (this.subListingEntity.subListingPrevNextEntity !== null && this.subListingEntity.subListingPrevNextEntity !== undefined) {
                this.prevName = this.subListingEntity.subListingPrevNextEntity.prevName
                this.prevLink = this.subListingEntity.subListingPrevNextEntity.privLink
                this.nextName = this.subListingEntity.subListingPrevNextEntity.nextName
                this.nextLink = this.subListingEntity.subListingPrevNextEntity.nextLink
            }
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
            this.alreadyLikeUnlike = resp;
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

    routeIt(name, link) {
        this.router.navigate(['/subListings', name, link]).then(() => window.location.reload());
        console.log('routeIt')
    }
}
