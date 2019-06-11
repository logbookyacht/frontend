import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatComponent } from './boat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

describe('BoatComponent', () => {
  let component: BoatComponent;
  let fixture: ComponentFixture<BoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatComponent ],
      imports: [ReactiveFormsModule],
      providers: [{provide:HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
