import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/Rx';
import { MainTopicsModel } from 'app/data-models/main-topics.model'

@Injectable()
export class TopicService {

    constructor(private http: Http) { }

    getMainTopics(): Observable<MainTopicsModel[]> {

        return this.http.get('/topics/mainTopics').map((response: Response) => {
            return response.json() as MainTopicsModel[];
        }).catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }

}