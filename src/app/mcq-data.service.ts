import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Mcq } from './mcq';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class McqDataService {
    private mcqUrl = 'http://localhost:8080/mcq';

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
}