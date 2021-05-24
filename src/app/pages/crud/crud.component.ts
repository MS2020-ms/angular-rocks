import { Component, OnInit } from '@angular/core';
import { RockBand, RockBandsService } from '../../services/rock-bands.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  //Array from list-component shared by share.service:
  //public arrFromService: RockBand[];

  crudList: RockBand[];

  selectedBand: RockBand;

  constructor(private shareService: ShareService, private rockBandsService: RockBandsService) {
  }

  ngOnInit(): void {

    //Array from list-component shared by share.service:
    // this.arrFromService = this.shareService.getArray();
    // console.log(this.arrFromService);

    this.rockBandsService.getAll()
      .then(rockBands => {
        this.crudList = rockBands;
      })
      .catch(error => console.log(error));
  }

  onClick(pId) {

    alert("Are you sure?\nYou won't be able to revert this!");

    for (let i = 0; i < this.crudList.length; i++) {
      if (this.crudList[i].id === pId) {
        this.crudList.splice(i, 1);
      }
    }
  }

  openForEdit(band: RockBand) {

    document.getElementById('name')["value"] = band.name;
    document.getElementById('country')["value"] = band.country;
    document.getElementById('members')["value"] = band.members;
    document.getElementById('years')["value"] = band.years;
    document.getElementById('web')["value"] = band.web;
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

}
