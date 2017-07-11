import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare const gapi: any

@Component({
    selector: 'app-google-signin',
    template: '<button id="googleBtn">Google SignIn</button>'
})
export class GoogleSignInComponent implements AfterViewInit {

    public auth2: any
    private clientId = '713799670825-pgj3ls7vcvn30c6qgvfijff9vblnql43.apps.googleusercontent.com';
    private scope = [
        'profile',
        'email',
    ].join(' ');

    constructor(private element: ElementRef) {}


    public googleInit() {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            that.attachSignin(that.element.nativeElement.firstChild);
        });
    }

    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {
                console.log('googleUser',googleUser)

                let profile = googleUser.getBasicProfile
                console.log('profile',profile)
                console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.\\
            });
    }
    
    ngAfterViewInit(): void {
       this.googleInit();
    }
}
