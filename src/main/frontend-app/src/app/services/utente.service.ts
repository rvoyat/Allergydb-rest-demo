import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Utente } from "../models/utente";
import { Page } from "../models/page";

const ENDPOINT_UTENTI = "api/utenti";

@Injectable()
export class UtenteService {

    constructor( private _http: Http ) { }

    fetchUtenti(): Observable<Utente[]> {
        return this._http
            .get( ENDPOINT_UTENTI )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }

    fetchUtentiPage( page: number, size:number, search?:string, sort?:string ): Observable<Page<Utente>> {
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
        return this._http
            .get( ENDPOINT_UTENTI + "?page=" + page + "&size="+size+"&search="+search+"&sort="+sort, { headers: headers } )
            .map( ( res: Response )  => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }

    fetchUtente( id: number ): Observable<Utente> {
        return this._http
            .get( ENDPOINT_UTENTI + "/" + id )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }
    
    fetchUtenteLogged(): Observable<Utente> {
        return this._http
            .get( ENDPOINT_UTENTI + "/current" )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );
    }

    updateUtente( id, utente ): Observable<Utente> {
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.put( ENDPOINT_UTENTI + "/" + id, utente, { headers: headers } )
            .map(( res: Response ) => {
                let body = res.json();
                return body || {};
            } )
            .catch(( err: Response | any ) => {
                return Observable.throw( err );
            } );

    }
    
    createUtente(utente): Observable<Response>{
        var headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
   
        return this._http.post( ENDPOINT_UTENTI, utente, {headers: headers});
    }

}
