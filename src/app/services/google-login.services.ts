import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { UserAction } from 'app/data-models/user-action.model'
import { UserProfileResponse } from '../data-models/user-profile-response.model'

@Injectable()
export class GoogleLoginService {

    constructor(private http: Http) {}

    initialLogin(userIdToken) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('/api/initialLogin', userIdToken, requestOp).catch(this.handleError).subscribe();
    }

    addFavourite(userActionEntity: UserAction) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('/api/favourite', JSON.stringify(userActionEntity), requestOp).catch(this.handleError);
    }

    subListingViewed(userActionEntity: UserAction) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })
        this.http.post('/api/subListingViews', JSON.stringify(userActionEntity), requestOp).catch(this.handleError);
    }

    getUserProfile(userIdToken): Observable<UserProfileResponse> {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })

        return this.http.post('/api/save', JSON.stringify(userIdToken), requestOp).map((response: Response) => {
            return response.json() as UserProfileResponse;
        }).catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }

}