import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import 'font-awesome/css/font-awesome.min.css';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  // Property selectedIndex i event goToPackages, setsPackage binding
  @Input() selectedIndex: number;
  @Output() goToPackages = new EventEmitter();
  @Output() setsPackage = new EventEmitter();
  packageName: string;

  /**
   * Set package name depending on packageText
   * @param packageText
   */
  getPackage(packageText) {
    const packageString = packageText.innerHTML;
    this.packageName = (packageString === 'EON aplikaciju') ? 'EON aplikacija' : packageString;
  }

  /**
   * Emitter to parent element for going to the first tab
   */
  goBack() {
    this.goToPackages.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
