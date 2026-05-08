import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { LandingComponent } from './components/landing/landing';
import { TeamCardsComponent } from './components/team-cards/team-cards';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    TeamCardsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos de los 3 estudiantes
  estudiantes = [
    { nombre: 'Andrés Fernández Expósito', rol: 'Desarrollador Fullstack', foto: 'andres.png', github: 'https://github.com/AndresFE0209' },
    { nombre: 'Joel Manuel García Villarino', rol: 'Desarrollador FullStack', foto: 'joel.png', github: 'https://github.com/Joeljole1987' },
    { nombre: 'Diego Vivas Paredes', rol: 'Desarrollador FullStack', foto: 'diego.png', github: 'https://github.com/DiegoVP963' }
  ];

  // Datos de la tutora
  tutora = [
    {
      nombre: 'María Mercedes Martínez Fragoso',
      rol: 'Tutora y Mentora',
      foto: 'mercedes.png',
      github: 'https://github.com/MercedesOrg01'
    },
    {
      nombre: 'María Francisca Roncero Holgado',
      rol: 'Amada Lider del Proyecto',
      foto: 'paqui.png',
      github: 'https://github.com/mfronceroh01-hash'
    },
  ];
}