import { Injectable } from '@angular/core';
import { RockBand } from './rock-bands.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public arrayFromService: RockBand[];

  constructor() { }

  setArray(array: RockBand[]) {
    // this.arrayFromService.push(array);
    this.arrayFromService = array;
  }

  getArray() {
    return this.arrayFromService;
  }

}
