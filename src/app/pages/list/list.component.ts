import { Component, OnInit } from '@angular/core';
import { RockBand, RockBandsService } from '../../services/rock-bands.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrRockBands: RockBand[];

  constructor(private rockBandsService: RockBandsService) { }

  ngOnInit(): void {
    this.rockBandsService.getAll()
      .then(rockBands => {
        this.arrRockBands = rockBands;
      })
      .catch(error => console.log(error));
  }

}
