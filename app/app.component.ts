import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class= "jumbotron">
  <h1>Angular 2 Electro Boozeloo</h1>
  </div>

  <div class= "container">
    <h2>Welcome to Angular2 Elecro Boozeloo. Your friendly digital taphouse.</h2>
    <h3>{{currentKeg}}</h3>
      <ul>
        <li *ngFor="let currentKeg of kegs">{{currentKeg.name}} <button (click)="editKeg()">Edit!</button></li>
      </ul>

  </div>


  `
})





export class AppComponent {
  kegs: Keg[] = [
  new Keg('8 Bit Ale', 'GameBrew', 8, 12)
  ];
  selectedKeg: Keg = this.kegs[0];

  editKeg() {
    alert("Please create/edit a keg.");
  }
}

export class Keg {
  public pintsLeft: number = 124;
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number ) { }
}
