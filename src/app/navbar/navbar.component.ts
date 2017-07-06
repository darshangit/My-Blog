import { Component, Input, OnInit, Inject } from '@angular/core'
import { UserLoginService } from 'app/services/user-login.services'
import { SubListingAllResponse } from 'app/data-models/sub-listing-all-response.model'
import { TopicService } from 'app/services/topics.service'
import { BlogsResponse } from 'app/data-models/blogs-response.model'
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['../css/topics.less']
})
export class NavbarComponent implements OnInit {

    searchTerm: string
    sublistingArray: SubListingAllResponse[]
    blogs: BlogsResponse[]

    constructor(private userService: UserLoginService, private topicService: TopicService) { }

    ngOnInit() {
        this.topicService.getAllSubListings().subscribe((resp) => {
            this.sublistingArray = resp
        })

        this.topicService.getAllBlogs().subscribe((resp) => {
            this.blogs = resp
        })
    }

    searchSubListings(searchterm) {
        console.log('sublisting array', this.sublistingArray)
    }

    onSignIn(googleUser) {
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
}
