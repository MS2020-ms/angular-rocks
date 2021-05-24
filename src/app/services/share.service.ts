import { Injectable } from '@angular/core';
import { RockBand } from './rock-bands.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  // private addedBandSource = new Subject<RockBand>();
  // public addedBand$ = this.addedBandSource.asObservable();

  private newBands: RockBand;
  private newBands$: Subject<RockBand>;

  public arrayFromService: RockBand[];

  constructor() {
    this.newBands;
    this.newBands$ = new Subject();
  }

  setArray(array: RockBand[]) {
    // this.arrayFromService.push(array);
    this.arrayFromService = array;
  }

  getArray() {
    return this.arrayFromService;
  }

  addBand(pBand: RockBand) {
    // this.addedBandSource.next(pBand);
    // this.newBands.push(pBand);
    this.newBands$.next(pBand);
  }

  getBands$(): Observable<RockBand> {
    return this.newBands$.asObservable();
  }

}
