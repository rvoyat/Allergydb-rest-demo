import { Component, OnInit, Input } from '@angular/core';
import { DatatableComponent } from "../datatable/datatable.component";
import { DomSanitizer } from "@angular/platform-browser";

@Component( {
    selector: 'app-datacolumn',
    template: ``,
} )
export class DatacolumnComponent implements OnInit {
    @Input() value;
    @Input() header;
    @Input() sortable?:boolean= true;
    @Input() style?:string= "";
 
    constructor(private sanitizer:DomSanitizer, table: DatatableComponent) {
           table.addColumn(this)
    }
    
    ngOnInit() {
    }
    
    getStyle(){
        return this.sanitizer.bypassSecurityTrustStyle(this.style);
    }

}
