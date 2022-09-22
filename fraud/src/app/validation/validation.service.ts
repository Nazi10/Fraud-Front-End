import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../client/client";
import {Validation} from "./validation";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }
  public getValidations(): Observable<Validation[]>{
    return this.http.get<Validation[]>(`${this.apiServerUrl+"/validation/allValidations"}`);
  }
  public addValidation(validation : Validation): Observable<Validation>{
    return this.http.post<Validation>(`${this.apiServerUrl}/validation/addValidation`, validation);
  }
  // @ts-ignore
  public calcTrans(): Observable<void>{
    // @ts-ignore
    this.http.patch<void>(`${this.apiServerUrl}/validation/calculateTrans`);
  }
}
