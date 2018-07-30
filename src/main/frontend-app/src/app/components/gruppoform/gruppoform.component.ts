import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Gruppo } from "../../models/gruppo";
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from "@angular/forms";
import { GruppoService } from "../../services/gruppo.service";
import { Ruolo } from "../../models/ruolo";
import { RuoloService } from "../../services/ruolo.service";

declare var Materialize: any;

@Component( {
    selector: 'app-gruppoform',
    templateUrl: './gruppoform.component.html',
    styleUrls: ['./gruppoform.component.css']
} )
export class GruppoformComponent implements OnInit, AfterViewChecked {

    @Input() gruppo: Gruppo;
    @Output() onSubmit = new EventEmitter<Gruppo>();

    gruppoForm: FormGroup = new FormGroup({});
    ruoliFormGroup: FormGroup = new FormGroup( {} );
    allRuoli: Ruolo[];

    constructor( private fb: FormBuilder,
        private ruoloService: RuoloService ) { }

    ngOnInit() {
        this.ruoloService.fetchRuoli().subscribe( ruoli => {
            this.allRuoli = ruoli;
            
            for ( let ruolo of this.allRuoli ) {
                let control: FormControl = new FormControl( this.isRuoloSelected( ruolo, this.gruppo.ruoli), );
                this.ruoliFormGroup.addControl( "" + ruolo.ruoloId, control );
            }
            
        } );
        
        this.initForm();
    }

    initForm() {
        this.gruppoForm = this.fb.group( {
            nome: [this.gruppo.nome,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 20 )] )
            ],
            descrizione: [this.gruppo.descrizione,
            Validators.compose( [
                Validators.required,
                Validators.minLength( 5 ),
                Validators.maxLength( 100 )] )
            ],
            ruoli: this.ruoliFormGroup
        } )
    }

    isRuoloSelected( ruolo: Ruolo, ruoli: Ruolo[] ): boolean {
        console.log(" isRuoloSelected = ");
        for ( let r of ruoli ) {
            if ( r.ruoloId == ruolo.ruoloId ) {
                console.log(" isRuoloSelected "+r.ruoloId+" = "+ruolo.ruoloId);
                return true;
            }
        }

        return false;
    }

    submit() {

        this.gruppo.nome = this.gruppoForm.value.nome;
        this.gruppo.descrizione = this.gruppoForm.value.descrizione;
        
        this.gruppo.ruoli = [];
        for ( let ruolo of this.allRuoli ) {
            if(this.gruppoForm.value.ruoli[ruolo.ruoloId]){
                this.gruppo.ruoli.push(new Ruolo(ruolo.ruoloId));
            }
        }
        

        console.log( this.gruppoForm.value.ruoli );

        this.onSubmit.emit( this.gruppo );
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
