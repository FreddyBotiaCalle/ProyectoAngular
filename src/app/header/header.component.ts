import { Component } from '@angular/core';

@Component({ //componente para html <app-header>
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombres: String = "Freddy Daniel";
  apellidos: String = "Botia Calle";
  disciplina: String = "Soy candidato a desarrollador de BackEnd, node.js y estoy aprendiendo sobre Experiencia de usuario";
  descripcion: String = "Estudiante de Ingenieria de sistemas apasionado por el desarrollo BackEnd"
}
