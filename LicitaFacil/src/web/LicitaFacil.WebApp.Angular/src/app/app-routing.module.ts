import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cotacoes',
    loadChildren: () => import('./cotacoes/cotacoes.module')
      .then(m => m.CotacoesModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./fornecedores/fornecedores.module')
      .then(m => m.FornecedoresModule)
  },
  {
    path: 'licitacoes',
    loadChildren: () => import('./licitacoes/licitacoes.module')
      .then(m => m.LicitacoesModule)
  },

  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }