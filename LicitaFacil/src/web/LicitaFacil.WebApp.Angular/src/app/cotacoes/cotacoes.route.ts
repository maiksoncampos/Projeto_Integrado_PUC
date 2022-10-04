import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotacoesAppComponent } from './cotacoes.app.component';
import { ListaComponent } from './lista/lista.component';

const CotacoesRouterConfig: Routes = [
    {
        path: '', component: CotacoesAppComponent,
        children: [
            { path: 'listar', component: ListaComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CotacoesRouterConfig)
    ],
    exports: [RouterModule]
})
export class CotacoesRoutingModule { }