import { Injectable } from '@angular/core';
import { RockBand } from './rock-bands.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {


  private newBands: RockBand;
  private newBands$: Subject<RockBand>;

  //Array from list-component shared by share.service:
  // public arrayFromService: RockBand[];

  constructor() {
    this.newBands;
    this.newBands$ = new Subject();
  }

  //Array from list-component shared by share.service:

  // setArray(array: RockBand[]) {
  //   this.arrayFromService = array;
  // }

  // getArray() {
  //   return this.arrayFromService;
  // }

  addBand(pBand: RockBand) {
    this.newBands$.next(pBand);
  }

  getBands$(): Observable<RockBand> {
    return this.newBands$.asObservable();
  }

}
