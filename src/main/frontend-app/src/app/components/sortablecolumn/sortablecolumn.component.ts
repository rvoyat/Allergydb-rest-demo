import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component( {
    selector: 'app-sortablecolumn',
    templateUrl: './sortablecolumn.component.html',
    styleUrls: ['./sortablecolumn.component.css']
} )
export class SortablecolumnComponent implements OnInit {

    @Input() column: string;
    @Input() label: string;
    @Input() sortedColumn: string;
    @Input() sortedType: string;
    @Input() style: string;
    
    @Output() onSort = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }
    
    sort() {

        this.onSort.emit( this.column );
    }

}
