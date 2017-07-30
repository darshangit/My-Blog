import { Component, OnInit } from '@angular/core'
import { TopicService } from '../services/topics.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { SubTopicsResponseModel } from 'app/data-models/sub-topics-response.model'
import { SubTopicModel } from 'app/data-models/sub-topics.model'
import { GoogleLoginService } from 'app/services/google-login.services'
import { UserAction } from 'app/data-models/user-action.model'

@Component({
    templateUrl: './sub-topic.component.html',
    styleUrls: ['../css/topics.less']
})
export class SubTopicComponent implements OnInit {

    subtopicResponse: SubTopicsResponseModel[]
    mainTopicName: string
    mainTopicId: string
    userLoggedIn: string
    constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router,
        private googleLoginService: GoogleLoginService) {
    }

    ngOnInit(): void {
        this.mainTopicName = this.route.snapshot.params['topicName']
        this.mainTopicId = this.route.snapshot.params['id']

        this.topicService.getSubTopics(this.route.snapshot.params['id']).subscribe((resp) => {
            this.subtopicResponse = resp
        })
    }
    getListing(subListings: SubTopicModel) {
        this.router.navigate(['/subListings', subListings.subListingName, subListings.listingLinks, this.mainTopicName, this.mainTopicId]);
        this.userLoggedIn = this.googleLoginService.getUserLoggedIn();
        if (this.userLoggedIn !== null && this.userLoggedIn !== undefined) {
            const userAction: UserAction = {
                userId: this.userLoggedIn,
                listingName: subListings.subListingName,
                listingLink: subListings.listingLinks,
                favourite: null,
                createTimestamp: null
            }
            this.googleLoginService.subListingViewed(userAction);
        }
    }
}
