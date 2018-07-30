import { Component, OnInit } from '@angular/core';
import { GruppoService } from "../../services/gruppo.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Gruppo } from "../../models/gruppo";

@Component( {
    selector: 'app-dettagliogruppo',
    templateUrl: './dettagliogruppo.component.html',
    styleUrls: ['./dettagliogruppo.component.css']
} )
export class DettagliogruppoComponent implements OnInit {

    gruppo: Gruppo;

    private sub: any;

    constructor( private gruppoService: GruppoService,
        private router: Router,
        private route: ActivatedRoute ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            let id = params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
            if ( id ) {
                this.gruppoService.fetch( id ).subscribe( gruppo => {
                    this.gruppo = gruppo;
                } );
            } else {
                this.gruppo = new Gruppo();
            }
        } );
    }

    onSubmit( gruppo: Gruppo ) {
        console.log( gruppo );
        if ( gruppo.gruppoId ) {
            this.gruppoService.update( gruppo.gruppoId, gruppo ).subscribe( gruppo => {
                console.log( gruppo );
                this.gruppo = gruppo;
                console.log( this.gruppo );
                //                this.router.navigate( ['/amministrazione/gestioneutente'] );
            } );
        } else {
            this.gruppoService.create( gruppo ).subscribe( response => this.router.navigate( ['/amministrazione/ricercagruppo'] ) );
        }
    }
    
    onBack() {
        this.router.navigate( ['/amministrazione/ricercagruppo'] );
    }

}
