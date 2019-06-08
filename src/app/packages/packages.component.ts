import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
    readonly headerText: string = 'Birajte kako želite da gledate TV';
    readonly text: string = 'Uz EON Smart BOX svaki TV postaje Smart TV';
    readonly choose: string = 'Odaberi';
    readonly eonAppText: string = 'EON aplikaciju';
    readonly eonBox: string = 'EON Smart BOX';
    readonly tvText: string = 'Tv uz';

    readonly goBackText: string = 'Nazad na izbor paketa';

    // Events binding goBack and getPackage
    @Output() goBack = new EventEmitter();
    @Output() getPackage = new EventEmitter();

    /**
     * Emit event for selecting package
     * @param event
     */
    selectPackage(event) {
        this.getPackage.emit(event);
    }

    /**
     * Emit event for going to fist tab
     * @param event
     */
    onClick(event) {
        this.goBack.emit(event);
    }

    constructor() {
    }

    ngOnInit() {
    }
}
