import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { BoatService } from 'src/app/services/Boat/boat.service';
import { Boat } from 'src/app/models/boat';


@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {
  constructor(private BoatService: BoatService, private formBuilder: FormBuilder) { }
  BoatForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  ngAfterViewInit() {
  }
  
  async ngOnInit() {
    this.BoatForm = this.formBuilder.group({
      name: ['',Validators.required],
      harbor: ['',Validators.required],
      brand: ['',Validators.required],
      lenghtft: ['',Validators.required],
    });

  }
  get f() { return this.BoatForm.controls}

  onSubmit() {
    this.submitted = true;

    if (this.BoatForm.invalid) {
      return;
    }

    this.loading = true;

    var boat = new Boat()

    boat.name = this.f.name.value;
    boat.harbor = this.f.harbor.value;
    boat.brand = this.f.brand.value;
    boat.lenghtft = this.f.lenghtft.value;
   
    this.BoatService.add(boat)
  }

}