import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Client} from "../client";
import {ClientServiceService} from "../client-service.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  editClient: Client = new Client;
  deleteClient: Client = new Client;
  constructor(private clientService: ClientServiceService) { }


  ngOnInit(): void {
    this.getClients()
  }

  public getClients() : void {
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchClients(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const employee of this.clients) {
      if (employee.first.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.clients = results;
    if (results.length === 0 || !key) {
      this.getClients();
    }
  }
  public onOpenModal(client: Client, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editClient = client
    }
    button.setAttribute('data-target', '#updateEmployeeModal');
    if (mode === 'delete') {
      this.deleteClient = client;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  public onUpdateClient(client:Client) {
    this.clientService.updateClient(client).subscribe(
      (response: Client) => {
        //console.log(response);
        console.log(client)
        window.location.reload()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteClient(clientId: bigint): void {
    this.clientService.deleteClient(clientId).subscribe(
      (response: void) => {
        console.log(response);
        window.location.reload()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );
  }
}
