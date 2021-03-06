import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RockBandsService } from '../../services/rock-bands.service';
import { ShareService } from '../../services/share.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.css']
})
export class AddBandComponent implements OnInit {

  formulario: FormGroup;

  constructor(private rockBandsService: RockBandsService, private shareService: ShareService, private router: Router) {

    this.formulario = new FormGroup({
      id: new FormControl(uuidv4()),
      name: new FormControl('', [Validators.required]),
      members: new FormControl(''),
      img: new FormControl('../../../assets/images/default/no-image.png'),
      // icon: new FormControl(''),
      country: new FormControl(''),
      web: new FormControl(''),
      active: new FormControl(''),
      origin: new FormControl(''),
      genres: new FormControl(''),
      years: new FormControl(''),
      description: new FormControl(''),
      // video: new FormControl(''),
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.formulario.value);
    this.shareService.addBand(this.formulario.value);
    this.formulario.reset();
    alert('New Band added!');
    this.router.navigate(['']);

  }

}
