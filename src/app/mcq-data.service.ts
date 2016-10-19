import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { Mcq } from './mcq';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class McqDataService {
    private mcqUrl = 'http://cloudassignment2-env.us-west-2.elasticbeanstalk.com/mcq';

    constructor (private http: Http) {}

    getNextMcqs (): Observable<Mcq> {
        return this.http.get(this.mcqUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response): Mcq {
        let body = res.json();
        return body;

    }
    private handleError (error: any) {
        console.error(error);
        return Observable.throw(error);
    }

    saveNewMcq(mcq: Mcq) : Observable<Mcq>{
        console.log("mcq data service is trying to save");
        let body = JSON.stringify(mcq);
        console.log(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options =  new RequestOptions({headers: headers});
        return this.http.post(this.mcqUrl, body, options).map(this.extractData).catch(this.handleError);
    }
}