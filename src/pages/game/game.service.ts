import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {AppSettings} from '../../app/app.settings';
import 'rxjs/add/operator/toPromise';

@Injectable() export class GameService{
constructor(private http: Http){
}

findAll(){
        return this.http.get(AppSettings.API + 'Questions')
        .toPromise()
        .then(
         response =>response.json(),
         error => error.json()
        );
    }
}
