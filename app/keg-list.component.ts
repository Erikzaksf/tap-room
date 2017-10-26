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
        Price: $ {{currentKeg.price}}<br>
        Pints Left: {{currentKeg.pintsLeft}}
        <br>
        <button (click)="pourPitcher(currentKeg)">Pour a round.</button>
        <br>
        <button (click)="pourPint(currentKeg)">Pour a pint.</button>
        <br>
        <button (click)="isEmpty(currentKeg)">Is it empty?</button>
        <br>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
        <hr align="left" width="20%">
      </li>
    </ul>
  `

})

export class KegListComponent {
  selectedKeg = null;
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }

  isEmpty(clickedKeg: Keg){
    if(clickedKeg.pintsLeft <= 0){
      alert("Oh no, this Keg is empty.")
    } else {
      alert("Not empty yet.")
    }
  }

  pourPitcher(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pintsLeft > 9){
      this.selectedKeg.pintsLeft -= 10;
  } else{ window.alert("This keg is empty, sorry for the inconvience")
    }
  }

  pourPint(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pintsLeft > 10){
      this.selectedKeg.pintsLeft -= 1;
  } else{ window.alert("This keg is empty, sorry for the inconvience")
    }
  }
}
