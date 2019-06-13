import { Component, OnInit } from '@angular/core';
import { HarborService } from 'src/app/services/Harbor/harbor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Harbor } from 'src/app/models/Harbor/harbor';

@Component({
  selector: 'app-harbor',
  templateUrl: './harbor.component.html',
  styleUrls: ['./harbor.component.css']
})
export class HarborComponent implements OnInit {
  constructor(private HarborService: HarborService, private formBuilder: FormBuilder) { }
  HarborForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  ngAfterViewInit() {
  }
  
  async ngOnInit() {
    this.HarborForm = this.formBuilder.group({
      name: ['',Validators.required],
      harbor: ['',Validators.required],
      spaces: ['',Validators.required],
      occupied: ['',Validators.required],
    });

  }
  get f() { return this.HarborForm.controls}

  async onSubmit() {
    this.submitted = true;

    if (this.HarborForm.invalid) {
      return;
    }

    this.loading = true;

    var harbor = new Harbor()

    harbor.name = this.f.name.value;
    harbor.harbor = this.f.harbor.value;
    harbor.spaces = this.f.spaces.value;
    harbor.occupied = this.f.occupied.value;
   
    await this.HarborService.add(harbor).toPromise()
  }

}
