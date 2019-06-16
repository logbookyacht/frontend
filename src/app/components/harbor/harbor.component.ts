import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { HarborService } from 'src/app/services/Harbor/harbor.service';
import { Harbor } from 'src/app/models/Harbor/harbor';


@Component({
  selector: 'app-harbor',
  templateUrl: './harbor.component.html',
  styleUrls: ['./harbor.component.css']
})
export class HarborComponent implements OnInit {
  constructor(private harborService: HarborService, private formBuilder: FormBuilder) { }
  HarborFrom: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  ngAfterViewInit() {
  }
  
  async ngOnInit() {
    this.HarborFrom = this.formBuilder.group({
      name: ['',Validators.required],
      harbor: ['',Validators.required],
      spaces: ['',Validators.required],
      occupied: ['',Validators.required],
    });

  }
  get f() { return this.HarborFrom.controls}

  async onSubmit() {
    this.submitted = true;

    if (this.HarborFrom.invalid) {
      return;
    }

    this.loading = true;

    var harbor = new Harbor()

    harbor.name = this.f.name.value;
    harbor.harbor = this.f.harbor.value;
    harbor.spaces = this.f.brand.value;
    harbor.occupied = this.f.ft.value;
   
    await this.harborService.add(harbor).toPromise()
  }

}