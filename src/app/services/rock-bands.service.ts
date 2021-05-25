import { Injectable } from '@angular/core';
import { ROCKBANDS } from '../db/rock-bands.db';

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

  constructor() { }

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

}
