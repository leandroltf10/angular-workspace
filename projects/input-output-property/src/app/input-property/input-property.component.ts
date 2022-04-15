import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: [
    'feedbackCurso',
    'comentarioCurso:comentario'
  ]
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';
  @Input() descricaoCurso: string = '';
  feedbackCurso: string = '';
  comentarioCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
