import { Component, OnInit } from '@angular/core';
import { UtenteService } from "../../services/utente.service";
import { Utente } from "../../models/utente";
import { LinguaService } from "../../services/lingua.service";
import { Router } from "@angular/router";
import { Sort } from "../../models/sort";
import {LocalStorage, SessionStorage} from 'ngx-webstorage';

@Component( {
    selector: 'app-ricercautente',
    templateUrl: './ricercautente.component.html',
    styleUrls: ['./ricercautente.component.css']
} )
export class RicercautenteComponent implements OnInit {

    @SessionStorage() utenti: Utente[];
    @SessionStorage() totalItems: number;
    @SessionStorage() page: number;
    @SessionStorage(null, 5) itemsPerPage: number;

    @SessionStorage(null, "") nome: string;
    @SessionStorage(null, "") cognome: string;
    @SessionStorage(null, "") email: string;
    @SessionStorage(null, "") stato: string;

    @SessionStorage(null, "") search: string;

    @SessionStorage(null, "") sortColumn: string;
    @SessionStorage(null, "") sortType: string;

    constructor(
        private _utenteService: UtenteService,
        private _linguaService: LinguaService,
        private router: Router) { }

    ngOnInit() {
//        this.onAzzera();
    }

    onCerca() {
        
        this.search = "";
        if(this.nome != ""){
            this.search +="nome:"+this.nome+",";
        }
        if(this.cognome != ""){
            this.search +="cognome:"+this.cognome+",";
        }
        if(this.email != ""){
            this.search +="email:"+this.email+",";
        }
        if(this.stato =="attivi"){
            this.search +="stato:true,";
        }else if(this.stato =="disattivi"){
            this.search +="stato:false,";
        }
        
        this.page = 1;
        this.fetchUtentiPage();
    }

    onAzzera() {
        this.nome = "";
        this.cognome = "";
        this.email = "";
        this.stato = "tutti";

        this.utenti = [];
    }

    onChangePage( page: number ) {
        this.page = page;
        this.fetchUtentiPage();
    }
    
    private fetchUtentiPage(){
        let sort = "";
        if(this.sortColumn != ""){
            sort = this.sortColumn+":"+this.sortType; 
        }
        
        this._utenteService.fetchUtentiPage( this.page, this.itemsPerPage, this.search, sort ).subscribe(data  => {
            data.content.forEach(( utente: Utente ) => {
                this._linguaService.fetchLingua( utente.lingua.linguaId ).subscribe(( lingua ) => {
                    utente.lingua = lingua;
                } );
            } );
            
            this.utenti = data.content;
            this.totalItems = data.totalElements;
        } );
    }
    
    onSelect( utente ) {
        console.log("select "+ utente );
        this.router.navigate( ['/amministrazione/dettaglioutente', utente.utenteId] );
    }
    
    onNuovo( ) {
        console.log("Nuovo " );
        this.router.navigate( ['/amministrazione/dettaglioutente'] );
    }
    
//    onSort(column:string){
//        console.log("sort "+ column );
//        
//        if(this.sortColumn != column){
//            this.sortColumn = column;
//            this.sortType = "ASC";
//        } else {
//            if(this.sortType == "ASC"){
//                this.sortType = "DESC";
//            } else {
//                this.sortType = "ASC";
//            }
//        }
//        
//        this.page = 1;
//        this.fetchUtentiPage();
//    }
    
    onSort(s:Sort){
        console.log("sort "+ s );
        
        this.sortColumn = s.sortedColumn;
        this.sortType = s.sortedType;
        
        this.page = 1;
        this.fetchUtentiPage();
    }
    
    onSort2(column:string){
        
        if(this.sortColumn != column){
            this.sortColumn = column;
            this.sortType = "ASC";
        } else {
            if(this.sortType == "ASC"){
                this.sortType = "DESC";
            } else {
                this.sortType = "ASC";
            }
        }
        
        this.page = 1;
        this.fetchUtentiPage();
    }
}
