import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Select2OptionData } from "ng2-select2/ng2-select2";

declare var Materialize: any;

@Component( {
    selector: 'app-select2',
    templateUrl: './select2.component.html',
    styleUrls: ['./select2.component.css']
} )
export class Select2Component implements OnInit, AfterViewChecked {

    public exampleData: Array<Select2OptionData>;

    constructor() { }

    ngOnInit() {
        this.exampleData = [
            {
                id: 'basic1',
                text: 'Basic 1'
            },
            {
                id: 'basic2',
                disabled: true,
                text: 'Basic 2'
            },
            {
                id: 'basic3',
                text: 'Basic 3'
            },
            {
                id: 'basic4',
                text: 'Basic 4'
            }
        ];

    }

    ngAfterViewChecked() {
//        Materialize.updateTextFields();
    }
}
