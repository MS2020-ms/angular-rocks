import { Injectable } from '@angular/core';
import { ROCKBANDS } from '../db/rock-bands.db';
import { RockBand } from '../services/rock-bands.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(termino: string): Promise<RockBand[]> {
    let term = termino.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    return new Promise((resolve, reject) => {
      const arrRockBand = ROCKBANDS.filter(band => {
        return band.name === term;
      });
      resolve(arrRockBand);
    });
  }
}
