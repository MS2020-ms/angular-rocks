import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RockBandsService } from '../../services/rock-bands.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.css']
})
export class AddBandComponent implements OnInit {

  // formulario: FormGroup;

  constructor(private rockBandsService: RockBandsService) {

    // this.formulario = new FormGroup({
    //   id: uuidv4(),
    //   name: new FormControl('', [Validators.required]),
    //   members: new FormControl('', [Validators.required]),
    //   img: new FormControl('', [Validators.required]),
    //   icon: new FormControl(),
    //   country: new FormControl,
    //   web: new FormControl,
    //   active: new FormControl,
    //   origin: new FormControl,
    //   genres: new FormControl,
    //   years: new FormControl,
    //   description: new FormControl,
    //   video: new FormControl,
    // });

  }

  ngOnInit(): void {
  }

  // async
  // onSubmit() {
  //   console.log(this.formulario.value);
  // const response = await this.rockBandsService.addBand(this.formulario.value);
  // this.formulario.reset();
  // }
}
