import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class CarruselComponent implements OnInit, OnDestroy {
  fotos = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg',
    '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'
  ];

  indiceActual = 0;
  intervalo: any;
  startX: number = 0;

  ngOnInit() {
    this.iniciarAutoplay();
  }

  iniciarAutoplay() {
    this.pararAutoplay();
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 2000);
  }

  pararAutoplay() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.fotos.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.fotos.length) % this.fotos.length;
  }

  // --- LÓGICA DE RATÓN (PC) ---
  onMouseDown(event: MouseEvent) {
    this.pararAutoplay();
    this.startX = event.clientX;
  }

  onMouseUp(event: MouseEvent) {
    const endX = event.clientX;
    this.procesarDeslizamiento(this.startX, endX);
    this.iniciarAutoplay();
  }

  // --- LÓGICA TÁCTIL (MÓVIL) ---
  onTouchStart(event: TouchEvent) {
    this.pararAutoplay();
    // Capturamos la posición del primer dedo que toca la pantalla
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    // Capturamos dónde terminó el deslizamiento
    const endX = event.changedTouches[0].clientX;
    this.procesarDeslizamiento(this.startX, endX);
    this.iniciarAutoplay();
  }

  // Función común para calcular la dirección del movimiento
  private procesarDeslizamiento(inicio: number, fin: number) {
    const diff = inicio - fin;
    const umbral = 50;

    if (Math.abs(diff) > umbral) {
      if (diff > 0) {
        this.siguiente();
      } else {
        this.anterior();
      }
    }
  }

  ngOnDestroy() {
    this.pararAutoplay();
  }
}