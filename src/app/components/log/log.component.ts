import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/Log/log.service';
import { Log } from 'src/app/models/Log/log';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  constructor(private LogService: LogService, private formBuilder: FormBuilder) { }
  LogForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  ngAfterViewInit() {
  }
  
  async ngOnInit() {
    this.LogForm = this.formBuilder.group({
      title: ['',Validators.required],
      date: ['',Validators.required],
      distance: ['',Validators.required],
      from: ['',Validators.required],
      to: ['',Validators.required],
    });

  }
  get f() { return this.LogForm.controls}

  async onSubmit() {
    this.submitted = true;

    if (this.LogForm.invalid) {
      return;
    }

    this.loading = true;

    var log = new Log()

    log.title = this.f.title.value;
    log.date = this.f.date.value;
    log.distance = this.f.distance.value;
    log.fromharbor = this.f.from.value;
    log.toharbor = this.f.to.value;
   
    await this.LogService.add(log).toPromise()
  }

}