import { Component, OnInit } from '@angular/core';
import { Ruolo } from "../../models/ruolo";
import { RuoloService } from "../../services/ruolo.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component( {
    selector: 'app-dettaglioruolo',
    templateUrl: './dettaglioruolo.component.html',
    styleUrls: ['./dettaglioruolo.component.css']
} )
export class DettaglioruoloComponent implements OnInit {

    ruolo: Ruolo;

    private sub: any;

    constructor( private ruoloService: RuoloService,
        private router: Router,
        private route: ActivatedRoute ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            let id = params['id']; 

            if ( id ) {
                this.ruoloService.fetch( id ).subscribe( ruolo => {
                    this.ruolo = ruolo;
                } );
            } else {
                this.ruolo = new Ruolo();
            }
        } );
    }

    onSubmit( ruolo: Ruolo ) {
        console.log( ruolo );
        if ( ruolo.ruoloId ) {
            this.ruoloService.update( ruolo.ruoloId, ruolo ).subscribe( ruolo => {
                console.log( ruolo );
                this.ruolo = ruolo;
                console.log( this.ruolo );
                //                this.router.navigate( ['/amministrazione/gestioneutente'] );
            } );
        } else {
            this.ruoloService.create( ruolo )
                .subscribe( response => this.router.navigate( ['/amministrazione/ricercaruolo'] ) );
        }
    }

}
