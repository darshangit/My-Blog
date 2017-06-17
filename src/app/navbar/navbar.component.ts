import { Component, Input, OnInit } from '@angular/core'
import { UserLoginService } from 'app/services/user-login.services'
import { SubListingAllResponse } from 'app/data-models/sub-listing-all-response.model'
import { TopicService } from 'app/services/topics.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    searchTerm: string
    sublistingArray: SubListingAllResponse[]

    constructor(private userService: UserLoginService, private topicService: TopicService) { }

    ngOnInit() {
        this.topicService.getAllSubListings().subscribe((resp) => {
            this.sublistingArray = resp
            console.log('initializingas', this.sublistingArray)
        })
    }

    searchSubListings(searchterm) {
        console.log('sublisting array', this.sublistingArray)
    }
}
