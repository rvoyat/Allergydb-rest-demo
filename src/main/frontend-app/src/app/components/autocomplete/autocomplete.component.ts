import { Component, OnInit } from '@angular/core';
import { RuoloService } from "../../services/ruolo.service";

@Component( {
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css']
} )
export class AutocompleteComponent implements OnInit {

    options;
    
    constructor( private ruoloService: RuoloService ) {
        this.options = {
            data: {
                "__": null,
                "  ": null,
            },
            onAutocomplete: ( val ) => this.onAutocomplete( val ),
        }
    }

    ngOnInit() {
    }

    public search( input ) {
        if ( input.length >= 3 ) {
            this.ruoloService.fetchRuoliPage( 1, 100, "nome:" + input, "nome:asc" ).subscribe( data => data.content.forEach(( item, index ) => {
                this.options.data[item.nome] = null;
            } ) )
        }
    }

    onAutocomplete( val ) {
        console.log( "onAutocomplete " + val );
    }
    
  

}
