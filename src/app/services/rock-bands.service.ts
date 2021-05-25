import { Injectable } from '@angular/core';
import { ROCKBANDS } from '../db/rock-bands.db';
import { ListComponent } from '../pages/list/list.component';



export interface RockBand {
  id: string;
  name: string;
  members: Array<string>;
  img: string;
  icon: string;
  country: string;
  web: string;
  active: boolean;
  origin: string;
  genres: string;
  years: string;
  description: string;
  video: string;
}

@Injectable({
  providedIn: 'root'
})
export class RockBandsService {

  //Array from list-component shared by rock-bands.service:
  // public arrayFromService: RockBand[];

  constructor() { }

  //Array from list-component shared by rock-bands.service:
  // setArray(array: RockBand[]) {
  //   this.arrayFromService = array;
  // }

  getAll(): Promise<RockBand[]> {
    return new Promise((resolve, reject) => {
      resolve(ROCKBANDS);
    });
  }

  getById(pId: string): Promise<RockBand> {
    return new Promise((resolve, reject) => {
      resolve(ROCKBANDS.find(band => band.id === pId));
    });
  }

  //Array from list-component shared by rock-bands.service:
  // getById(pId: number) {
  //   return this.arrayFromService.find(band => band.id === pId);
  // }

}
