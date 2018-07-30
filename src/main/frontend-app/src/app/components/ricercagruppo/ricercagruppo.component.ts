import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Gruppo } from "../../models/gruppo";
import { Sort } from "../../models/sort";
import { Router } from "@angular/router";
import { GruppoService } from "../../services/gruppo.service";
import {LocalStorage, SessionStorage} from 'ngx-webstorage';

declare var Materialize: any;

@Component( {
    selector: 'app-ricercagruppo',
    templateUrl: './ricercagruppo.component.html',
    styleUrls: ['./ricercagruppo.component.css']
} )
export class RicercagruppoComponent implements OnInit, AfterViewChecked {

    @SessionStorage() gruppi: Gruppo[];    
    @SessionStorage() totalItems: number;

    @SessionStorage(null, 1) page: number;
    @SessionStorage(null, 5) itemsPerPage: number;

    @SessionStorage(null, "") search: string;

    @SessionStorage(null, "") sortColumn: string;
    @SessionStorage(null, "") sortType: string;

    @SessionStorage(null, "") nome: string;

    constructor( private _gruppoService: GruppoService, private router: Router ) { console.log( " constructor" );}

    ngOnInit() {
//       if (this.itemsPerPage === null || this.itemsPerPage === undefined) {
//           this.itemsPerPage=5;
//       }
//       if (this.page === null || this.page === undefined) {
//           this.page=1;
//       }
    }

    onCerca() {
        this.search = "";
        if ( this.nome != "" ) {
            this.search += "nome:" + this.nome + ",";
        }

        this.page = 1;
        this.fetchGruppiPage();
    }

    onAzzera() {
        this.nome = "";

        this.gruppi = [];
    }

    onChangePage( page: number ) {
        this.page = page;
        this.fetchGruppiPage();
    }

    private fetchGruppiPage() {
        let sort = "";
        if ( this.sortColumn != "" ) {
            sort = this.sortColumn + ":" + this.sortType;
        }

        this._gruppoService.fetchGruppiPage( this.page, this.itemsPerPage, this.search, sort ).subscribe(( data ) => {

            this.gruppi = data.content;
            this.totalItems = data.totalElements;
        } );
    }

    onSelect( gruppo ) {
        console.log( "select " + gruppo );
        this.router.navigate( ['/amministrazione/dettagliogruppo', gruppo.gruppoId] );
    }

    onNuovo() {
        console.log( "Nuovo " );
        this.router.navigate( ['/amministrazione/dettagliogruppo'] );
    }


    onSort( s: Sort ) {
        console.log( "sort " + s );

        this.sortColumn = s.sortedColumn;
        this.sortType = s.sortedType;

        this.page = 1;
        this.fetchGruppiPage();
    }

    ngAfterViewChecked() {
        Materialize.updateTextFields();
    }


}
