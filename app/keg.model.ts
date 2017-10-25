export class Keg {
  public pintsLeft: number = 124;
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number ) { }
}
