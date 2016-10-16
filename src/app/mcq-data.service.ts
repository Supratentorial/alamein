import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Mcq } from './mcq';
import { Observable } from 'rxjs/observable';

@Injectable()
export class McqDataService {
    private mcqUrl = 'localhost:8080/mcq';

    constructor (private http: Http) {}

    getMcqs (): Observable<Mcq[]> {
        return this.http.get(this.mcqUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body.data);
        return body.data;
    }
    private handleError (error: any) {
        console.error(error);
        return Observable.throw(error);
    }
}