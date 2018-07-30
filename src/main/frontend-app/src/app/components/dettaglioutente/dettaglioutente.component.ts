import { Component, OnInit } from '@angular/core';
import { Utente } from "../../models/utente";
import { UtenteService } from "../../services/utente.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Lingua } from "../../models/lingua";
import { LinguaService } from "../../services/lingua.service";

@Component( {
    selector: 'app-dettaglioutente',
    templateUrl: './dettaglioutente.component.html',
    styleUrls: ['./dettaglioutente.component.css']
} )
export class DettaglioutenteComponent implements OnInit {

    utente: Utente;
    lingue: Lingua[];

    private sub: any;

    constructor( private utenteService: UtenteService,
        private router: Router,
        private route: ActivatedRoute ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            let id = params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
            if ( id ) {
                this.utenteService.fetchUtente( id ).subscribe( utente => {
                    this.utente = utente;
                } );
            } else {
                this.utente = new Utente();
                this.utente.lingua = new Lingua();
            }
        } );
        
    }

    onSubmit( utente : Utente ) {
        console.log( utente );
        if ( utente.utenteId ) {
            this.utenteService.updateUtente( utente.utenteId, utente ).subscribe( utente => {
                console.log( utente );
                this.utente = utente;
                console.log( this.utente );
//                this.router.navigate( ['/amministrazione/gestioneutente'] );
            } );
        } else {
            this.utenteService.createUtente( utente ).subscribe( response => this.router.navigate( ['/amministrazione/ricercautente'] ) );
        }

    }
}
