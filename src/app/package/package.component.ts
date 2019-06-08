import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-package',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
    readonly currency = 'rsd/mes';
    readonly eonPackage = 'EON FULL';
    readonly packageChoose = 'Izabrani paket';
    readonly packagePrice = 1999;
    readonly tvPackage = 'TV';

    // Input binding property packageName
    @Input() packageName: string;

    constructor() {
    }

    ngOnInit() {
    }
}
