import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Audit } from "../../models/audit";
import { MaterializeAction } from 'angular2-materialize';
import { AuditService } from "../../services/audit.service";
import { Ruolo } from "../../models/ruolo";

@Component( {
    selector: 'app-ruoloaudit',
    templateUrl: './ruoloaudit.component.html',
    styleUrls: ['./ruoloaudit.component.css']
} )
export class RuoloauditComponent implements OnInit {
    
    @Input() ruolo: Ruolo;

    modalActions = new EventEmitter<string | MaterializeAction>();
    audits: Audit[] = [];

    constructor( private auditService: AuditService ) { }

    ngOnInit() {
    }

    openModal() {
        this.fetchAudit();
        this.modalActions.emit( { action: "modal", params: ['open'] } );
    }

    closeModal() {
        this.modalActions.emit( { action: "modal", params: ['close'] } );
    }

    fetchAudit() {
        this.auditService.fetchAudit( "ruoli", this.ruolo.ruoloId ).subscribe( audits => {
            this.audits = audits;
        } );
    }
}
