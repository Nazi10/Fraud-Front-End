import { Component, OnInit } from '@angular/core';
import {ValidationService} from "../validation.service";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {
  }

  public onCalculateTrans() {
    this.validationService.calcTrans()
    window.location.reload();
  }}
