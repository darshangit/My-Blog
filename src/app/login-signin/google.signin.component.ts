import { Component, AfterViewInit, ElementRef, OnInit, NgZone } from '@angular/core';
import { GoogleLoginService } from 'app/services/google-login.services';

declare const gapi: any
declare const firebase: any

@Component({
    selector: 'app-google-signin',
    templateUrl: './google.signin.component.html'
})
export class GoogleSignInComponent implements OnInit {
    username: string
    email: string
    image: string
    response: any
    photoURL: any
    displayName: any
    idToken: string
    showLogin = true
    constructor(private zone: NgZone, private googleLoginService: GoogleLoginService) { }

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
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        provider.clientid = '713799670825-pgj3ls7vcvn30c6qgvfijff9vblnql43.apps.googleusercontent.com'
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            that.response = result.user;
            console.log('response.displayName', that.response.displayName)
            console.log('resultt', that.response.ze)

            that.photoURL = that.response.photoURL
            that.displayName = that.response.displayName.split(' ')[0]
            that.idToken = that.response.ze
            this.googleLoginService.initialLogin(that.idToken)
            that.showLogin = false
        }).catch(function (error) {
        });
        // const params = {
        //     'clientid': '713799670825-pgj3ls7vcvn30c6qgvfijff9vblnql43.apps.googleusercontent.com',
        //     'cookiepolicy': 'single_host_origin',
        //     'callback': this.zone.run(() => function (result) {
        //         if (result['status']['signed_in']) {
        //             const request = gapi.client.plus.people.get({
        //                 'userId': 'me',
        //                 'scope': 'offline',
        //                 'AccessType': 'offline'
        //             });
        //             request.execute(function (resp) {
        //                 that.response = resp
        //                 that.showLogin = false
        //                 that.googleLoginService.initialLogin(that.response.id);
        //                 console.log(that.response);
        //             });

        //             firebase.auth().onAuthStateChanged(function (user) {
        //                 if (user) {
        //                     user.getToken().then(function (data) {
        //                         console.log(data)
        //                     });
        //                 }
        //             });

        //         }
        //     }),
        //     'approvalprompt': 'force',
        //     'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
        // };
        // gapi.auth.signIn(params);
    }

    signOut() {
        this.showLogin = true;
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }
}
