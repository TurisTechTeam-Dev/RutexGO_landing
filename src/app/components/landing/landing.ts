import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {}
