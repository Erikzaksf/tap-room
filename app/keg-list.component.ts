import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <ul>
   <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}}  <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
   </ul>
   `

})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }

  isEmpty(clickedKeg: Keg){
    if(clickedKeg.empty === true){
      alert("Oh no, this Keg is empty.")
    } else {
      alert("Not empty yet.")
    }
  }

}
