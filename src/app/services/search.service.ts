import { Injectable } from '@angular/core';
import { ROCKBANDS } from '../db/rock-bands.db';
import { RockBand } from '../services/rock-bands.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(termino: string): Promise<RockBand[]> {
    return new Promise((resolve, reject) => {
      const arrRockBand = ROCKBANDS.filter(band => {
        return band.name === termino;
      });
      resolve(arrRockBand);
    });
  }
}
