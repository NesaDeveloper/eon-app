import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
    readonly mobile: string = 'mobilni';
    readonly pc: string = 'pc/mac';
    readonly tablet: string = 'tablet';
    readonly tv: string = 'smart tv';
    readonly watchEon: string = 'Gledaj EON';
    readonly watchEverywhere: string = 'bilo kad, na bilo kom uređaju';

    constructor() {
    }

    ngOnInit() {
    }
}
