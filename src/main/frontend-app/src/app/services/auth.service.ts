import { Injectable } from '@angular/core';
import { Utente } from "../models/utente";
import { UtenteService } from "./utente.service";

@Injectable()
export class AuthService {

    utente: Utente = JSON.parse( sessionStorage.getItem( "authUser" ) );

    constructor( private utenteService: UtenteService ) {
        this.getUtenteLogged();
    }

    getUtenteLogged() {
        if ( this.utente == null ) {
            this.utenteService.fetchUtenteLogged().subscribe( utente => {
                this.utente = utente;
                sessionStorage.setItem( "authUser", JSON.stringify( utente ) );
            } );
        }
    }


}
