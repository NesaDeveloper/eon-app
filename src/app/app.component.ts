import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Property binding for choose second tab by defalut
  @Input() selectedIndex = 1;

  /**
   * Select first tab with index 0
   */
  goToPackages() {
    this.selectedIndex = 0;
  }
}
