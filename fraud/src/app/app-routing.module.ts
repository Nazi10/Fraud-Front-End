import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValidationComponent} from "./validation/validation.component";
import {ClientComponent} from "./client/client.component";

const routes: Routes = [
  {path: 'validations', component: ValidationComponent},
  {path: 'clients', component: ClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
