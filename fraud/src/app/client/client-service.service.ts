import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "./client";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }
  public getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiServerUrl+"/client/allClients"}`);
  }
  public addClient(client : Client): Observable<Client>{
    return this.http.post<Client>(`${this.apiServerUrl}/client/addClient`, client);
  }
  public updateClient(client : Client): Observable<Client>{
    return this.http.patch<Client>(`${this.apiServerUrl}/client/updateClient`, client);
  }
  public deleteClient(clientId : bigint): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/client/deleteClient/${clientId}`);
  }
}
