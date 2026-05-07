import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-cards.html',
  styleUrl: './team-cards.css',
})
export class TeamCardsComponent {
  @Input() nombre: string = '';
  @Input() rol: string = '';
  @Input() fotoUrl: string = '';
  @Input() githubUrl: string = '';
  @Input() esTutora: boolean = false;
}
