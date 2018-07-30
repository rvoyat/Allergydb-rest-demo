import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UtenteService } from "../services/utente.service";
import { Utente } from "../models/utente";

@Injectable()
export class GroupGuard implements CanActivate {

    private utente: Utente;
    
    constructor(
        private utenteService: UtenteService,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

        let groups = next.data["groups"] as Array<string>;
        console.log("groups="+groups);
        
        return this.utenteService.fetchUtenteLogged().map(utente  => {
            this.utente = utente;
            console.log("utente="+JSON.stringify(this.utente));
            
            for (let gruppo of this.utente.gruppi) {
                console.log(gruppo); // 1, "string", false
                if(groups.indexOf(gruppo.nome) > -1){
                    return true;
                }
            }
            
            return false;
        }).catch(() => {
            return Observable.of(false);
        });
    }
}
