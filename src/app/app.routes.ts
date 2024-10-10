import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/listarClientes/clientes.component';
import { FormComponent } from './clientes/crearClientes/form.component';

export const routes: Routes = 
[
    {path: '', redirectTo: '/clientes/listarClientes', pathMatch: 'full'},
    {path: 'clientes/listarClientes', component: ClientesComponent},
    {path: 'cliente/crearClientes', component: FormComponent}
];
