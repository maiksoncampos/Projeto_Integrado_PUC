import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CotacoesAppComponent } from '../cotacoes/cotacoes.app.component';
import { CotacoesRoutingModule } from './cotacoes.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CotacoesAppComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CotacoesRoutingModule
  ]
})
export class CotacoesModule { }
