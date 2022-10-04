import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';
import { LicitacoesRoutingModule } from './licitacoes.route';
import { LicitacoesAppComponent } from './licitacoes.app.component';

@NgModule({
  declarations: [
    LicitacoesAppComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    LicitacoesRoutingModule,
    RouterModule
  ]
})
export class LicitacoesModule { }
