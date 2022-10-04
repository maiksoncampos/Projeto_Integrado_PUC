import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './conta/login/login.component';
import { CotacoesModule } from './cotacoes/cotacoes.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { LicitacoesModule } from './licitacoes/licitacoes.module';
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    FornecedoresModule,
    LicitacoesModule,
    CotacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
