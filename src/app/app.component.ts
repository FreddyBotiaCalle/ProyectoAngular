import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/listarClientes/clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,   // no se debe registrar en archvos auxiliares
  imports: [HeaderComponent, FooterComponent, ClientesComponent, RouterOutlet], //routeroutlet -> enrutamiento entre componentes
  templateUrl: './app.component.html', //ruta a plantilla html que contiene la vista
  styleUrls: ['./app.component.css'] //lo mismo pero con css
})
export class AppComponent {
  title = 'miPrimerProyecto'; //para utilizar en otras partes de la aplicación
}
