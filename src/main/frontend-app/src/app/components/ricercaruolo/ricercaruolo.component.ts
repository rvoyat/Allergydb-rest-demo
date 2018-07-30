import { Component, OnInit } from '@angular/core';
import { Ruolo } from "../../models/ruolo";
import { RuoloService } from "../../services/ruolo.service";
import { Router } from "@angular/router";
import { Sort } from "../../models/sort";

@Component( {
    selector: 'app-ricercaruolo',
    templateUrl: './ricercaruolo.component.html',
    styleUrls: ['./ricercaruolo.component.css']
} )
export class RicercaruoloComponent implements OnInit {

    ruoli: Ruolo[] = [];
    totalItems: number;
    page: number;
    itemsPerPage: number = 5;

    search: string = "";

    sortColumn: string = "";
    sortType: string = "";

    ruoloJee: string = "";
    nome: string = "";

    constructor(
        private _ruoloService: RuoloService,
        private router: Router ) { }

    ngOnInit() {
    }
    
    onCerca() {
        this.search = "";
        if ( this.ruoloJee != "" ) {
            this.search += "ruoloJee:" + this.ruoloJee + ",";
        }
        if ( this.nome != "" ) {
            this.search += "nome:" + this.nome + ",";
        }

        this.page = 1;
        this.fetchRuoliPage();
    }

    onAzzera() {
        this.ruoloJee = "";
        this.nome = "";

        this.ruoli = [];
    }

    onChangePage( page: number ) {
        this.page = page;
        this.fetchRuoliPage();
    }

    private fetchRuoliPage() {
        let sort = "";
        if ( this.sortColumn != "" ) {
            sort = this.sortColumn + ":" + this.sortType;
        }

        this._ruoloService.fetchRuoliPage( this.page, this.itemsPerPage, this.search, sort ).subscribe(( data ) => {

            this.ruoli = data.content;
            this.totalItems = data.totalElements;
        } );
    }

    onSelect( ruolo: Ruolo ) {
        console.log( "select " + ruolo );
        this.router.navigate( ['/amministrazione/dettaglioruolo', ruolo.ruoloId] );
    }

    onNuovo() {
        console.log( "Nuovo " );
        this.router.navigate( ['/amministrazione/dettaglioruolo'] );
    }


    onSort( s: Sort ) {
        console.log( "sort " + s );

        this.sortColumn = s.sortedColumn;
        this.sortType = s.sortedType;

        this.page = 1;
        this.fetchRuoliPage();
    }

}
