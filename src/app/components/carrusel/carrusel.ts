import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
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
    this.pararAutoplay(); // Limpiamos cualquier intervalo previo por seguridad
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 2000); // 2 segundos suele ser mejor para que dé tiempo a ver la foto
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

  // EVENTOS DE RATÓN
  onMouseDown(event: MouseEvent) {
    this.pararAutoplay(); // Detenemos el movimiento automático al tocar
    this.startX = event.clientX;
  }

  onMouseUp(event: MouseEvent) {
    const endX = event.clientX;
    const diff = this.startX - endX;

    // Solo cambiamos de foto si el movimiento ha sido mayor a 50px
    // Esto evita que un simple "click" dispare el cambio
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.siguiente();
      } else {
        this.anterior();
      }
    }

    // Al soltar, sea click o arrastre, reiniciamos el contador de cero
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    this.pararAutoplay();
  }
}
