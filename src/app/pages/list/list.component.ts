import { Component, OnInit } from '@angular/core';
import { RockBand, RockBandsService } from '../../services/rock-bands.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrRockBands: RockBand[];

  constructor(private rockBandsService: RockBandsService, private searchsService: SearchService) { }

  ngOnInit(): void {
    this.rockBandsService.getAll()
      .then(rockBands => {
        this.arrRockBands = rockBands;
      })
      .catch(error => console.log(error));
  }

  buscar(termino: string) {
    //console.log(termino);

    if (termino.length === 0) {
      return this.rockBandsService.getAll()
        .then(rockBands => {
          this.arrRockBands = rockBands;
        })
        .catch(error => console.log(error));
    }

    this.searchsService.search(termino)
      .then(rockBand => {
        this.arrRockBands = rockBand;
      })
      .catch(error => console.log(error));

  }

  onClick(pId) {

    alert("Are you sure?\nYou won't be able to revert this!");

    for (let i = 0; i < this.arrRockBands.length; i++) {
      if (this.arrRockBands[i].id === pId) {
        this.arrRockBands.splice(i, 1);
      }
    }
  }


}
