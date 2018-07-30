import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import { Page } from "../models/page";
import { Gruppo } from "../models/gruppo";

const ENDPOINT = "api/gruppi";


@Injectable()
export class GruppoService {

    constructor( private _http: Http ) { }

    fetchGruppiPage( page: number, size: number, search?: string, sort?: string ): Observable<Page<Gruppo>> {
        return this._http
            .get( ENDPOINT + "?page=" + page + "&size=" + size + "&search=" + search + "&sort=" + sort )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }
    
    fetchGruppi(): Observable<Gruppo[]> {
        return this._http
            .get( ENDPOINT )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }

    fetch( id: number ): Observable<Gruppo> {
        return this._http
            .get( ENDPOINT + "/" + id )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }
    
    update( id, gruppo ): Observable<Gruppo> {
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.put( ENDPOINT + "/" + id, gruppo, { headers: headers } )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );

    }
    
    create(gruppo): Observable<Response>{
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
   
        return this._http.post( ENDPOINT, gruppo, {headers: headers});
    }

}
