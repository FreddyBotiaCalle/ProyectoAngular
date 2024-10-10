import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../servicios/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent 
{
  clientes: Cliente[] = [];

  constructor(private objClienteService: ClienteService) {}

  ngOnInit(): void
  {
    this.objClienteService.getClientes().subscribe
    (
      clientes=>
      {
        console.log("Listando clientes");
        this.clientes = clientes;
      }
    )
  }
}