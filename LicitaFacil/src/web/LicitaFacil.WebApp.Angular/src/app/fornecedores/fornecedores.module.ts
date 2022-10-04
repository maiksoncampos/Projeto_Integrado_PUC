import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';
import { FornecedoresAppComponent } from './fornecedores.app.component';
import { FornecedoresRoutingModule } from './fornecedores.route';

@NgModule({
  declarations: [
    FornecedoresAppComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    RouterModule
  ]
})
export class FornecedoresModule { }
