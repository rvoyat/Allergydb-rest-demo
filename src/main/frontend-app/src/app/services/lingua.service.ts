import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { Lingua } from "../models/lingua";

const ENDPOINT_LINGUA = "api/lingue";

@Injectable()
export class LinguaService {

    constructor( private _http: Http ) { }

    fetchLingua( id ): Observable<Lingua> {
        return this._http
            .get( ENDPOINT_LINGUA + "/" + id )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }
    
    fetchLingue(): Observable<Lingua[]> {
        return this._http
            .get( ENDPOINT_LINGUA )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }

}
