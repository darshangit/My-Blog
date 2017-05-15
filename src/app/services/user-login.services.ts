import { Injectable, EventEmitter } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { UserDetails } from '../data-models/user-details.model'
import { UserResponse } from '../data-models/signup-response.model'
import 'rxjs/Rx';

@Injectable()
export class UserLoginService {

    constructor(private http: Http) { }

    saveLogin(user): Observable<UserResponse> {

        const headers = new Headers({'Content-Type': 'application/json'})
        const requestOp = new RequestOptions({headers})

        return this.http.post('/api/save', JSON.stringify(user), requestOp).map((response: Response) => {
            return response.json() as UserResponse;
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }
}


