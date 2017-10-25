import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li *ngFor="let currentKeg of childKegList">
      Name:  {{currentKeg.name}}<br>
      Brewery: {{currentKeg.brand}}<br>
      Alc%:  {{currentKeg.alcoholContent}}<br>
      Price: $ {{currentKeg.price}} <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li></li>
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
