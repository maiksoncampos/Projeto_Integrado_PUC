import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedoresAppComponent } from './fornecedores.app.component';
import { ListaComponent } from './lista/lista.component';

const fornecedoresRouterConfig: Routes = [
    {
        path: '', component: FornecedoresAppComponent,
        children: [
            { path: 'listar', component: ListaComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fornecedoresRouterConfig)
    ],
    exports: [RouterModule]
})
export class FornecedoresRoutingModule { }