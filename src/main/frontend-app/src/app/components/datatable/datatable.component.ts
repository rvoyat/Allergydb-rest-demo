import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatacolumnComponent } from "../datacolumn/datacolumn.component";
import { Sort } from "../../models/sort";
import { FunctioncolumnComponent } from "../functioncolumn/functioncolumn.component";

@Component( {
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
} )
export class DatatableComponent implements OnInit {

    @Input() dataset;
    
    @Output() onSort = new EventEmitter<Sort>();

    columns: DatacolumnComponent[] = [];
    functioncolumns: FunctioncolumnComponent[] = [];
    
    sortedColumn: string = "";
    sortedType: string = "";
    
    constructor() { }

    ngOnInit() {
    }

    addColumn( column ) {
        this.columns.push( column );
    }
    
    addFunctionColumn( functioncolumn ) {
        this.functioncolumns.push( functioncolumn );
    }
    
    sort(column:string){
        console.log("sort "+ column );
        
        if(this.sortedColumn != column){
            this.sortedColumn = column;
            this.sortedType = "ASC";
        } else {
            if(this.sortedType == "ASC"){
                this.sortedType = "DESC";
            } else {
                this.sortedType = "ASC";
            }
        }
        let s :Sort = new Sort(this.sortedColumn, this.sortedType);
        this.onSort.emit(s);
    }
    
    onAction(functioncolumn: FunctioncolumnComponent, row ) {
        functioncolumn.action(row);
    }
    
    getValue(row, column){
        return row[column.value];
    }
    
    resolve(path, obj) {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }

}
