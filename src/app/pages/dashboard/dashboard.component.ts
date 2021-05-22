import { Component, OnInit } from '@angular/core';
import { RockBand, RockBandsService } from '../../services/rock-bands.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
