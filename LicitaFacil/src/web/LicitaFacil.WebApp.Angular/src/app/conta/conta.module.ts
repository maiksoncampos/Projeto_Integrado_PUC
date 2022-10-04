import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';
import { RouterModule } from '@angular/router';
import { ContaRoutingModule } from './conta.route';



@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule
  ]
})
export class ContaModule { }
