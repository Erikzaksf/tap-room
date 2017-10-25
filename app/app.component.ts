import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
  <div class= "jumbotron">
  <h1>Angular 2 Electro Boozeloo</h1>
  </div>

  <div class= "container">
    <h2>Welcome to Angular2 Elecro Boozeloo. Your friendly digital taphouse.</h2>
    <h3>{{currentKeg}}</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>

  </div>


  `
})





export class AppComponent {
  currentKeg: string = 'TestKeg';
  selectedKeg = null;

  masterKegList: Keg[] = [
  new Keg('8 Bit Ale', 'GameBrew', 8, 12),
  new Keg('Robot Oil', 'GameBrew', 9, 10)
  ];
  selectedKeg = this.masterKegList[0];


  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing()  {
    this.selectedKeg = null;
  }

}
