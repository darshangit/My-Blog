import { Injectable, EventEmitter } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { UserDetails } from '../data-models/user-details.model'
@Injectable()
export class UserLoginService {

    constructor(private http: Http) { }

    saveLogin(): Observable<string> {
        console.log('making http connection')
        // this.http.get('/api/save').subscribe()
        const headers = new Headers({'Content-Type': 'application/json'})
        const requestOp = new RequestOptions({headers})
        const user: UserDetails = {
            email: 'darshan@asd.com',
            name: 'das',
            password: 'asdasdasd'
        }
        this.http.post('/api/save', JSON.stringify(user), requestOp).subscribe()

        return null
    }
}


