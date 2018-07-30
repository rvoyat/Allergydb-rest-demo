import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Audit } from "../models/audit";

const ENDPOINT = "api/audit";

@Injectable()
export class AuditService {

  constructor(private _http: Http) { }

  fetchAudit(resource:string, id:number): Observable<Audit[]> {
      return this._http
          .get( ENDPOINT+"/"+resource+"/"+id )
          .map(( res: Response ) => {
              let body = res.json();
              return body || {};
          } )
          .catch(( err: Response | any ) => {
              return Observable.throw( err );
          } );
  }
}
