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
    <div class= "container">
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    </div>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <br>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})





export class AppComponent {
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('8 Bit Ale', 'GameBrew', 8, 12),
    new Keg('Robot Oil', 'GameBrew', 9, 10)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing()  {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }

}
