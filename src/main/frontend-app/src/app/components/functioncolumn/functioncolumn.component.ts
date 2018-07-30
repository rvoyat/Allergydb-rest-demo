import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatatableComponent } from "../datatable/datatable.component";

@Component( {
    selector: 'app-functioncolumn',
    template: ``,
} )
export class FunctioncolumnComponent implements OnInit {
    @Input() icon;
    
    @Output() onAction = new EventEmitter();

    constructor( table: DatatableComponent ) {
        table.addFunctionColumn( this )
    }

    ngOnInit() {
    }

    action( row ) {
        this.onAction.emit( row );
    }

}
