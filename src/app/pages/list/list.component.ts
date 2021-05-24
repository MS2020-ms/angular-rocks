import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RockBand, RockBandsService } from '../../services/rock-bands.service';
import { SearchService } from '../../services/search.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public arrRockBands: RockBand[];

  // subscription: Subscription;

  constructor(private rockBandsService: RockBandsService, private searchsService: SearchService, private shareService: ShareService) { }

  ngOnInit(): void {
    this.rockBandsService.getAll()
      .then(rockBands => {
        this.arrRockBands = rockBands;
      })
      .catch(error => console.log(error));

    this.shareService.getBands$().subscribe(band => {
      this.arrRockBands.push(band);
    })

    //Array from list-component shared by share.service:
    // this.sendArray(this.arrRockBands);
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

  //Array from list-component shared by share.service:
  // sendArray(arrRockBands: RockBand[]) {
  //   this.shareService.setArray(arrRockBands);
  // }

}
