import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs";
import { Entryfile } from "../models/entryfile";

const ENDPOINT = "api/file";

@Injectable()
export class FileService {

    constructor( private _http: Http ) { }

    create( file: File ): Observable<Response> {
        console.log( file.name );
        let formData: FormData = new FormData();
        formData.append( "file", file, file.name );
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        //        headers.append( 'Content-Type', 'multipart/form-data' );
        headers.append( 'Accept', 'application/json' );
        let options = new RequestOptions( { headers: headers } );
        return this._http.post( ENDPOINT, formData, options );
    }

    fetch(): Observable<Entryfile[]> {
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

    download( index ): any {
        return this._http.get( ENDPOINT + "/" + index, { responseType: ResponseContentType.Blob } ).map(
            ( res ) => {
                return new Blob( [res.blob()], { type: 'text/csv' } )
            } );
    }

    postFormData( file: File ) {
        return Observable.fromPromise( new Promise(( resolve, reject ) => {
            let formData: any = new FormData()
            let xhr = new XMLHttpRequest()

            formData.append( "file", file, file.name )

            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ) {
                    if ( xhr.status === 200 ) {
                        resolve( xhr.response )
                    } else {
                        reject( xhr.response )
                    }
                }
            }
            xhr.open( "POST", ENDPOINT, true );
            xhr.send( formData )
        } ) );
    }
}
