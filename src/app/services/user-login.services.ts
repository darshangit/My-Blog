import { Injectable, EventEmitter } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { UserDetails } from '../data-models/user-details.model'
import { UserResponse } from '../data-models/signup-response.model'
import { LoginResponse } from '../data-models/login-response.model'
import 'rxjs/Rx';

@Injectable()
export class UserLoginService {
    currentuser: UserDetails
    authentication = false
    userUpdated = false
    constructor(private http: Http) { }

    saveLogin(user): Observable<UserResponse> {

        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })

        return this.http.post('/api/save', JSON.stringify(user), requestOp).map((response: Response) => {
            return response.json() as UserResponse;
        }).catch(this.handleError);
    }

    loginUser(user): Observable<LoginResponse> {

        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestOp = new RequestOptions({ headers })

        return this.http.post('/api/login', JSON.stringify(user), requestOp).map((response: Response) => {
            return response.json() as LoginResponse;
        }).catch(this.handleError);
    }

    updateUser(user): Observable<UserResponse> {

        const headers = new Headers({'Content-Type': 'application/json'})
        const requestOp = new RequestOptions({ headers })

        return this.http.post('/api/updateuser', JSON.stringify(user), requestOp).map((response: Response) => {
            this.userUpdated = true
            return response.json() as UserResponse;
        }).catch(this.handleError);
    }

    setCurrentUser(user: UserDetails) {
        this.currentuser = user
    }

    getCurrentUserName(): string {
        if (this.currentuser !== undefined) {
            return this.currentuser.name.toUpperCase()
        }
    }

    getCurrentEmail(): string {
        return this.currentuser.email
    }

    isAuthenticated() {
        return this.authentication
    }

    setAutheticatedFlag() {
        this.authentication = true
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}


