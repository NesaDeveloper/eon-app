import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  // Events binding goBack and getPackage
  @Output() goBack = new EventEmitter();
  @Output() getPackage = new EventEmitter();

  /**
   * Emit event for selecting package
   * @param event
   */
  selectPackage (event) {
    this.getPackage.emit(event);
  }

  /**
   * Emit event for going to fist tab
   * @param event
   */
  onClick(event) {
    this.goBack.emit(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
