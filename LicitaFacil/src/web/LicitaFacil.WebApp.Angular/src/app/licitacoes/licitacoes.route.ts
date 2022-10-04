import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicitacoesAppComponent } from './licitacoes.app.component';
import { ListaComponent } from './lista/lista.component';

const licitacoesRouterConfig: Routes = [
    {
        path: '', component: LicitacoesAppComponent,
        children: [
            { path: 'listar', component: ListaComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(licitacoesRouterConfig)
    ],
    exports: [RouterModule]
})
export class LicitacoesRoutingModule { }