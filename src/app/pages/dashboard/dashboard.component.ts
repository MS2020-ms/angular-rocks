import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RockBand, RockBandsService } from '../../services/rock-bands.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bandSelected: RockBand;

  constructor(private activatedRoute: ActivatedRoute, private rockBandsService: RockBandsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async params => {
      console.log(params);
      const bandId = parseInt(params.bandId);
      this.bandSelected = await this.rockBandsService.getById(bandId);
    });
  }

}
