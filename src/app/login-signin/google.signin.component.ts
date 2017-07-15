import { Component, AfterViewInit, ElementRef, OnInit, NgZone } from '@angular/core';
declare const gapi: any

@Component({
    selector: 'app-google-signin',
    templateUrl: './google.signin.component.html'
})
export class GoogleSignInComponent implements OnInit {
    username: string
    email: string
    image: string
    response: any
    showLogin = true
    constructor(private zone: NgZone) {}

    ngOnInit(): void {
        this.onLoad()
    }

    onLoad() {
        const p = document.createElement('script');
        p.type = 'text/javascript';
        p.async = true;
        p.src = 'https://apis.google.com/js/client.js?onload=onLoadFunction';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(p, s);
    }

    onGoogleLogin() {
        let that = this;
        const params = {
            'clientid': '713799670825-pgj3ls7vcvn30c6qgvfijff9vblnql43.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': this.zone.run(() => function (result) {
                if (result['status']['signed_in']) {
                    const request = gapi.client.plus.people.get({
                        'userId': 'me'
                    } );
                    console.log(request)
                    request.execute(function (resp) {
                        that.response = resp
                        that.showLogin = false
                        console.log(that.response);

                        console.log(that.response.name.givenName.toUpperCase());
                        console.log(that.response.emails[0].value);
                        console.log(that.response.image.url);
                    });
                }
            }),
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
        };
        gapi.auth.signIn(params);
    }

    signOut(){
        this.showLogin = true;
        gapi.auth.signOut();
    }
}
