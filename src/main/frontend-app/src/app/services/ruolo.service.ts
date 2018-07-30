import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Ruolo } from "../models/ruolo";
import { Page } from "../models/page";

const ENDPOINT = "api/ruoli";

@Injectable()
export class RuoloService {

    constructor( private _http: Http ) { }

    fetchRuoli(): Observable<Ruolo[]> {
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

    fetchRuoliPage( page: number, size: number, search?: string, sort?: string ): Observable<Page<Ruolo>> {
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

    fetch( id: number ): Observable<Ruolo> {
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
    
    update( id, ruolo ): Observable<Ruolo> {
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.put( ENDPOINT + "/" + id, ruolo, { headers: headers } )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );

    }
    
    create(ruolo: Ruolo): Observable<Response>{
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
   
        return this._http.post( ENDPOINT, ruolo, {headers: headers});
    }

}
