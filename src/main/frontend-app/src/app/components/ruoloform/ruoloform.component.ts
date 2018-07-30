import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { Ruolo } from "../../models/ruolo";
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from "@angular/forms";
import { AuditService } from "../../services/audit.service";
import { Audit } from "../../models/audit";

declare var Materialize: any;

@Component( {
    selector: 'app-ruoloform',
    templateUrl: './ruoloform.component.html',
    styleUrls: ['./ruoloform.component.css']
} )
export class RuoloformComponent implements OnInit, AfterViewChecked {

    @Input() ruolo: Ruolo;
    @Output() onSubmit = new EventEmitter<Ruolo>();

    ruoloForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.ruoloForm = this.fb.group( {
            ruoloJee: [this.ruolo.ruoloJee,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 20 )] )
            ],
            descrizione: [this.ruolo.descrizione,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 255 )] )
            ],
            nome: [this.ruolo.nome,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 20 )] )
            ],
        } )
    }

    submit() {
        this.ruolo.ruoloJee = this.ruoloForm.value.ruoloJee;
        this.ruolo.descrizione = this.ruoloForm.value.descrizione;
        this.ruolo.nome = this.ruoloForm.value.nome;

        this.onSubmit.emit( this.ruolo );
    }

    onReset() {
        this.ngOnInit();
    }


    inputTemplateValidate( control: AbstractControl ) {
        return control.invalid ? 'invalid' : ''
    }

    ngAfterViewChecked() {
        Materialize.updateTextFields();
    }


}
