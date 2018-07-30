import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Utente } from "../../models/utente";
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from "@angular/forms";
import { Lingua } from "../../models/lingua";
import { LinguaService } from "../../services/lingua.service";
import { Gruppo } from "../../models/gruppo";
import { GruppoService } from "../../services/gruppo.service";

declare var Materialize: any;

@Component( {
    selector: 'app-utenteform',
    templateUrl: './utenteform.component.html',
    styleUrls: ['./utenteform.component.css']
} )
export class UtenteformComponent implements OnInit, AfterViewChecked {

    @Input() utente: Utente;
    @Output() onSubmit = new EventEmitter<Utente>();

    utenteForm: FormGroup;
    gruppiFormGroup: FormGroup = new FormGroup( {} );
    lingue: Lingua[] = [];
    allGruppi: Gruppo[];

    constructor( private fb: FormBuilder,
        private linguaService: LinguaService,
        private gruppoService: GruppoService ) { }

    ngOnInit() {
        this.gruppoService.fetchGruppi().subscribe( gruppi => {
            this.allGruppi = gruppi;

            for ( let gruppo of this.allGruppi ) {
                let control: FormControl = new FormControl( this.isGruppoSelected( gruppo, this.utente.gruppi ), );
                this.gruppiFormGroup.addControl( "" + gruppo.gruppoId, control );
            }

        } );

        this.utenteForm = this.fb.group( {
            cognome: [this.utente.cognome,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 10 )] )
            ],
            nome: [this.utente.nome,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 10 )] )
            ],
            email: [this.utente.email,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 30 ),
                Validators.email] )
            ],
            login: [this.utente.login,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 10 )] )
            ],
            telefono: [this.utente.telefono,
            Validators.compose( [
                Validators.minLength( 5 ),
                Validators.maxLength( 15 )] )
            ],
            telefonoCell: [this.utente.telefonoCell,
            Validators.compose( [
                Validators.minLength( 5 ),
                Validators.maxLength( 15 )] )
            ],
            linguaId: [this.utente.lingua.linguaId,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 50 )] )
            ],
            stato: [this.utente.stato],
            gruppi: this.gruppiFormGroup
        } );

        this.linguaService.fetchLingue().subscribe(( lingue ) => {
            this.lingue = lingue;
            this.lingue.unshift( new Lingua() );
        } );
    }

    submit() {

        this.utente.nome = this.utenteForm.value.nome;
        this.utente.cognome = this.utenteForm.value.cognome;
        this.utente.email = this.utenteForm.value.email;
        this.utente.login = this.utenteForm.value.login;
        this.utente.telefono = this.utenteForm.value.telefono;
        this.utente.telefonoCell = this.utenteForm.value.telefonoCell;
        this.utente.lingua = new Lingua( this.utenteForm.value.linguaId );
        this.utente.stato = this.utenteForm.value.stato;

        this.onSubmit.emit( this.utente );
    }

    onReset() {
        this.ngOnInit();
    }


    inputTemplateValidate( control: AbstractControl ) {
        return control.invalid ? 'invalid' : ''
    }

    isGruppoSelected( gruppo: Gruppo, gruppi: Gruppo[] ): boolean {
        console.log( " isRuoloSelected = " );
        for ( let g of gruppi ) {
            if ( g.gruppoId == gruppo.gruppoId ) {
                console.log( " isRuoloSelected " + g.gruppoId + " = " + gruppo.gruppoId );
                return true;
            }
        }

        return false;
    }

    ngAfterViewChecked() {
        Materialize.updateTextFields();
    }

}
