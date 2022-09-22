import { Component, OnInit } from '@angular/core';
import {Client} from "../client/client";
import {ClientServiceService} from "../client/client-service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ValidationService} from "./validation.service";
import {Validation} from "./validation";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  validations: Validation[];
  editClient: Client = new Client;
  deleteClient: Client = new Client;
  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {
    this.getValidations()
  }
  public getValidations() : void {
    this.validationService.getValidations().subscribe(
      (response: Validation[]) => {
        this.validations = response;
        console.log(this.validations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
