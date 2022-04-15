import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomeCurso: string = 'Angular';
  descricaoCurso: string = 'curso de angular';
  feedbackCurso: string = 'bom';
  comentario: string = 'comentando curso de angular';
}
