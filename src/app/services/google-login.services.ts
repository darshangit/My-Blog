import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { UserAction } from 'app/data-models/user-action.model'
import { UserProfileResponse } from '../data-models/user-profile-response.model'

@Injectable()
export class GoogleLoginService {
    userid: string;

    constructor(private http: Http) {}

    initialLogin(userIdToken) {
        this.userid = userIdToken;
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('https://loginmicroservices.herokuapp.com/api/initialLogin', userIdToken, requestOp).catch(this.handleError).subscribe();
    }

    getFavourite(userActionEntity: UserAction):Observable<boolean> {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        return this.http.post('https://loginmicroservices.herokuapp.com/api/getFavourite', JSON.stringify(userActionEntity), requestOp).map((response: Response) => {
            return response.json() as boolean;
        }).catch(this.handleError);
    }

    addFavourite(userActionEntity: UserAction) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('https://loginmicroservices.herokuapp.com/api/favourite', JSON.stringify(userActionEntity), requestOp).catch(this.handleError).subscribe();
    }

    removeFavourite(userActionEntity: UserAction) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('https://loginmicroservices.herokuapp.com/api/removeFavourite', JSON.stringify(userActionEntity), requestOp).catch(this.handleError).subscribe();
    }

    subListingViewed(userActionEntity: UserAction) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('https://loginmicroservices.herokuapp.com/api/subListingViews', JSON.stringify(userActionEntity), requestOp).catch(this.handleError).subscribe();
    }

    getUserProfile(userIdToken): Observable<UserProfileResponse> {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })

        return this.http.post('https://loginmicroservices.herokuapp.com/api/userProfile', userIdToken, requestOp).map((response: Response) => {
            return response.json() as UserProfileResponse;
        }).catch(this.handleError);
    }

    getUserLoggedIn(): string {
        return this.userid;
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }

}