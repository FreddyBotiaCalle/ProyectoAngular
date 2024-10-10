import { Component } from '@angular/core';
import { Cliente } from '../listarClientes/cliente';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, SweetAlert2Module, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
  public cliente: Cliente = new Cliente;
  public titulo: String = 'Crear cliente';

  constructor (private clienteService: ClienteService, private router:Router) {console.log("FormComponent cargado");}

  crearCliente() {
    console.log("Creando cliente");
    this.clienteService.create(this.cliente).subscribe(
      response => {
        console.log('Cliente creado exitosamente');
        console.log(response); // Asegúrate de que `response` tenga la propiedad `nombre`
        this.router.navigate(['clientes/listarClientes']);
        Swal.fire("Nuevo cliente", `Cliente ${response.nombre} creado con éxito`, 'success');
      },
      error => {
        console.error('Error al crear el cliente:', error);
        Swal.fire("Error", "Hubo un problema al crear el cliente", 'error');
      }
    );
  }
}
